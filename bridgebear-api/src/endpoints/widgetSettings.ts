import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { type AppContext } from "../types";

type AirtableResponse = {
  records: Array<{
    fields: Record<string, unknown>;
  }>;
};

export class WidgetSettings extends OpenAPIRoute {
  schema = {
    tags: ["BridgeBear"],
    summary: "Get Widget Settings",

    request: {
      params: z.object({
        slug: z.string(),
      }),
    },

    responses: {
      "200": {
        description: "Returns widget settings",
      },
    },
  };

  async handle(c: AppContext) {
    const data = await this.getValidatedData<typeof this.schema>();
    const { slug } = data.params;

    const url =
      `https://api.airtable.com/v0/${c.env.AIRTABLE_BASE_ID}/WidgetSetting` +
      `?filterByFormula=${encodeURIComponent(`{Slug}="${slug}"`)}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${c.env.AIRTABLE_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch WidgetSetting.");
    }

    const result = (await response.json()) as AirtableResponse;

    const record = result.records[0];

    if (!record) {
      return {
        success: false,
        message: `Widget '${slug}' not found.`,
      };
    }

    return {
      success: true,
      data: record.fields,
    };
  }
}
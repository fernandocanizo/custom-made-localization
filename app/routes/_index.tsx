import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

import { getBrowserLanguage } from "~/lib/getBrowserLanguage";
import { getSupportedLocale } from "~/lib/translations";

export const meta: MetaFunction = () => {
  return [
    { title: "Home Made i18n" },
    { name: "description", content: "An attempt to simplify translations" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const locale = getSupportedLocale(getBrowserLanguage(request))
  const tCommon = await import(`../translations/${locale}/common.ts`)

  return {
    t1: tCommon.everyWhere,
    t2: tCommon.another,
  }
}

export default function Index() {
  const { t1, t2 } = useLoaderData<typeof loader>()

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Home Made i18n {t1.yes} | {t1.no}</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>{t1.sunday}</li>
        <li>{t1.monday}</li>
        <li>{t1.tuesday}</li>
        <li>{t1.wednesday}</li>
        <li>{t1.thursday}</li>
        <li>{t1.friday}</li>
        <li>{t1.saturday}</li>
      </ul>

      <p>{t1.deep?.translation?.test?.ok}</p>

      <p>And from another object: {t2.thing}</p>
    </div>
  );
}

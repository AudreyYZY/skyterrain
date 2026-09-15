// ⚠️ 由 scripts/gen-content-index.ts 生成，不要手改。改内容去 lib/content/<country>/，然后 npm run gen:content
import type { RouteNarrationEntry } from "@/lib/route-narration";
import { ROUTES as china } from "@/lib/content/china/routes";
import { ROUTES as australia } from "@/lib/content/australia/routes";
import { ROUTES as usa } from "@/lib/content/usa/routes";
import { ROUTES as canada } from "@/lib/content/canada/routes";
import { ROUTES as japan } from "@/lib/content/japan/routes";
import { ROUTES as new_zealand } from "@/lib/content/new-zealand/routes";
import { ROUTES as uk } from "@/lib/content/uk/routes";
import { ROUTES as iceland } from "@/lib/content/iceland/routes";
import { ROUTES as switzerland } from "@/lib/content/switzerland/routes";
import { ROUTES as norway } from "@/lib/content/norway/routes";
import { ROUTES as france } from "@/lib/content/france/routes";
import { ROUTES as italy } from "@/lib/content/italy/routes";
import { ROUTES as spain } from "@/lib/content/spain/routes";
import { ROUTES as germany } from "@/lib/content/germany/routes";
import { ROUTES as greece } from "@/lib/content/greece/routes";
import { ROUTES as portugal } from "@/lib/content/portugal/routes";
import { ROUTES as netherlands } from "@/lib/content/netherlands/routes";
import { ROUTES as austria } from "@/lib/content/austria/routes";
import { ROUTES as belgium } from "@/lib/content/belgium/routes";
import { ROUTES as ireland } from "@/lib/content/ireland/routes";
import { ROUTES as denmark } from "@/lib/content/denmark/routes";
import { ROUTES as sweden } from "@/lib/content/sweden/routes";
import { ROUTES as finland } from "@/lib/content/finland/routes";
import { ROUTES as thailand } from "@/lib/content/thailand/routes";
import { ROUTES as south_korea } from "@/lib/content/south-korea/routes";
import { ROUTES as poland } from "@/lib/content/poland/routes";
import { ROUTES as vietnam } from "@/lib/content/vietnam/routes";
import { ROUTES as mongolia } from "@/lib/content/mongolia/routes";
import { ROUTES as malaysia } from "@/lib/content/malaysia/routes";
import { ROUTES as singapore } from "@/lib/content/singapore/routes";
import { ROUTES as philippines } from "@/lib/content/philippines/routes";
import { ROUTES as indonesia } from "@/lib/content/indonesia/routes";
import { ROUTES as kazakhstan } from "@/lib/content/kazakhstan/routes";
import { ROUTES as turkey } from "@/lib/content/turkey/routes";
import { ROUTES as croatia } from "@/lib/content/croatia/routes";
import { ROUTES as czechia } from "@/lib/content/czechia/routes";
import { ROUTES as hungary } from "@/lib/content/hungary/routes";
import { ROUTES as slovakia } from "@/lib/content/slovakia/routes";
import { ROUTES as estonia } from "@/lib/content/estonia/routes";
import { ROUTES as chile } from "@/lib/content/chile/routes";
import { ROUTES as romania } from "@/lib/content/romania/routes";
import { ROUTES as uzbekistan } from "@/lib/content/uzbekistan/routes";
import { ROUTES as kyrgyzstan } from "@/lib/content/kyrgyzstan/routes";
import { ROUTES as sri_lanka } from "@/lib/content/sri-lanka/routes";

export const ALL_ROUTE_NARRATION: Record<string, RouteNarrationEntry> = {
  ...china,
  ...australia,
  ...usa,
  ...canada,
  ...japan,
  ...new_zealand,
  ...uk,
  ...iceland,
  ...switzerland,
  ...norway,
  ...france,
  ...italy,
  ...spain,
  ...germany,
  ...greece,
  ...portugal,
  ...netherlands,
  ...austria,
  ...belgium,
  ...ireland,
  ...denmark,
  ...sweden,
  ...finland,
  ...thailand,
  ...south_korea,
  ...poland,
  ...vietnam,
  ...mongolia,
  ...malaysia,
  ...singapore,
  ...philippines,
  ...indonesia,
  ...kazakhstan,
  ...turkey,
  ...croatia,
  ...czechia,
  ...hungary,
  ...slovakia,
  ...estonia,
  ...chile,
  ...romania,
  ...uzbekistan,
  ...kyrgyzstan,
  ...sri_lanka,
};

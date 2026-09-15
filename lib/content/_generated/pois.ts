// ⚠️ 由 scripts/gen-content-index.ts 生成，不要手改。改内容去 lib/content/<country>/，然后 npm run gen:content
import type { CityPoi } from "@/lib/places-registry";
import { POIS as china } from "@/lib/content/china/pois";
import { POIS as australia } from "@/lib/content/australia/pois";
import { POIS as usa } from "@/lib/content/usa/pois";
import { POIS as canada } from "@/lib/content/canada/pois";
import { POIS as japan } from "@/lib/content/japan/pois";
import { POIS as new_zealand } from "@/lib/content/new-zealand/pois";
import { POIS as uk } from "@/lib/content/uk/pois";
import { POIS as iceland } from "@/lib/content/iceland/pois";
import { POIS as switzerland } from "@/lib/content/switzerland/pois";
import { POIS as norway } from "@/lib/content/norway/pois";
import { POIS as france } from "@/lib/content/france/pois";
import { POIS as italy } from "@/lib/content/italy/pois";
import { POIS as spain } from "@/lib/content/spain/pois";
import { POIS as germany } from "@/lib/content/germany/pois";
import { POIS as greece } from "@/lib/content/greece/pois";
import { POIS as portugal } from "@/lib/content/portugal/pois";
import { POIS as netherlands } from "@/lib/content/netherlands/pois";
import { POIS as austria } from "@/lib/content/austria/pois";
import { POIS as belgium } from "@/lib/content/belgium/pois";
import { POIS as ireland } from "@/lib/content/ireland/pois";
import { POIS as denmark } from "@/lib/content/denmark/pois";
import { POIS as sweden } from "@/lib/content/sweden/pois";
import { POIS as finland } from "@/lib/content/finland/pois";
import { POIS as luxembourg } from "@/lib/content/luxembourg/pois";
import { POIS as thailand } from "@/lib/content/thailand/pois";
import { POIS as south_korea } from "@/lib/content/south-korea/pois";
import { POIS as poland } from "@/lib/content/poland/pois";
import { POIS as vietnam } from "@/lib/content/vietnam/pois";
import { POIS as mongolia } from "@/lib/content/mongolia/pois";
import { POIS as malaysia } from "@/lib/content/malaysia/pois";
import { POIS as singapore } from "@/lib/content/singapore/pois";
import { POIS as philippines } from "@/lib/content/philippines/pois";
import { POIS as indonesia } from "@/lib/content/indonesia/pois";
import { POIS as kazakhstan } from "@/lib/content/kazakhstan/pois";
import { POIS as turkey } from "@/lib/content/turkey/pois";
import { POIS as croatia } from "@/lib/content/croatia/pois";
import { POIS as czechia } from "@/lib/content/czechia/pois";
import { POIS as hungary } from "@/lib/content/hungary/pois";
import { POIS as slovakia } from "@/lib/content/slovakia/pois";
import { POIS as slovenia } from "@/lib/content/slovenia/pois";
import { POIS as malta } from "@/lib/content/malta/pois";
import { POIS as estonia } from "@/lib/content/estonia/pois";
import { POIS as chile } from "@/lib/content/chile/pois";
import { POIS as latvia } from "@/lib/content/latvia/pois";
import { POIS as romania } from "@/lib/content/romania/pois";
import { POIS as bulgaria } from "@/lib/content/bulgaria/pois";
import { POIS as uzbekistan } from "@/lib/content/uzbekistan/pois";
import { POIS as lithuania } from "@/lib/content/lithuania/pois";
import { POIS as kyrgyzstan } from "@/lib/content/kyrgyzstan/pois";
import { POIS as sri_lanka } from "@/lib/content/sri-lanka/pois";

export const ALL_POIS: Record<string, CityPoi[]> = {
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
  ...luxembourg,
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
  ...slovenia,
  ...malta,
  ...estonia,
  ...chile,
  ...latvia,
  ...romania,
  ...bulgaria,
  ...uzbekistan,
  ...lithuania,
  ...kyrgyzstan,
  ...sri_lanka,
};

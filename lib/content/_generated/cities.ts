// ⚠️ 由 scripts/gen-content-index.ts 生成，不要手改。改内容去 lib/content/<country>/，然后 npm run gen:content
import type { CityEntry } from "@/lib/places-registry";
import { CITIES as china } from "@/lib/content/china/cities";
import { CITIES as australia } from "@/lib/content/australia/cities";
import { CITIES as usa } from "@/lib/content/usa/cities";
import { CITIES as canada } from "@/lib/content/canada/cities";
import { CITIES as japan } from "@/lib/content/japan/cities";
import { CITIES as new_zealand } from "@/lib/content/new-zealand/cities";
import { CITIES as uk } from "@/lib/content/uk/cities";
import { CITIES as iceland } from "@/lib/content/iceland/cities";
import { CITIES as switzerland } from "@/lib/content/switzerland/cities";
import { CITIES as norway } from "@/lib/content/norway/cities";
import { CITIES as france } from "@/lib/content/france/cities";
import { CITIES as italy } from "@/lib/content/italy/cities";
import { CITIES as spain } from "@/lib/content/spain/cities";
import { CITIES as germany } from "@/lib/content/germany/cities";
import { CITIES as greece } from "@/lib/content/greece/cities";
import { CITIES as portugal } from "@/lib/content/portugal/cities";
import { CITIES as netherlands } from "@/lib/content/netherlands/cities";
import { CITIES as austria } from "@/lib/content/austria/cities";
import { CITIES as belgium } from "@/lib/content/belgium/cities";
import { CITIES as ireland } from "@/lib/content/ireland/cities";
import { CITIES as denmark } from "@/lib/content/denmark/cities";
import { CITIES as sweden } from "@/lib/content/sweden/cities";
import { CITIES as finland } from "@/lib/content/finland/cities";
import { CITIES as luxembourg } from "@/lib/content/luxembourg/cities";
import { CITIES as thailand } from "@/lib/content/thailand/cities";
import { CITIES as south_korea } from "@/lib/content/south-korea/cities";
import { CITIES as poland } from "@/lib/content/poland/cities";
import { CITIES as vietnam } from "@/lib/content/vietnam/cities";
import { CITIES as mongolia } from "@/lib/content/mongolia/cities";
import { CITIES as malaysia } from "@/lib/content/malaysia/cities";
import { CITIES as singapore } from "@/lib/content/singapore/cities";
import { CITIES as philippines } from "@/lib/content/philippines/cities";
import { CITIES as indonesia } from "@/lib/content/indonesia/cities";
import { CITIES as kazakhstan } from "@/lib/content/kazakhstan/cities";
import { CITIES as turkey } from "@/lib/content/turkey/cities";
import { CITIES as croatia } from "@/lib/content/croatia/cities";
import { CITIES as czechia } from "@/lib/content/czechia/cities";
import { CITIES as hungary } from "@/lib/content/hungary/cities";
import { CITIES as slovakia } from "@/lib/content/slovakia/cities";
import { CITIES as slovenia } from "@/lib/content/slovenia/cities";
import { CITIES as malta } from "@/lib/content/malta/cities";
import { CITIES as estonia } from "@/lib/content/estonia/cities";
import { CITIES as chile } from "@/lib/content/chile/cities";

export const ALL_CITIES: CityEntry[] = [
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
];

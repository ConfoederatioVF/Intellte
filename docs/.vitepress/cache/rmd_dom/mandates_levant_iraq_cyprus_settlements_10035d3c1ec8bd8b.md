---
title: "British and French Mandates in the Levant, Iraq and Cyprus"
subtitle: "Settlement Gazetteer across the Levant, Iraq and Cyprus, 1918AD to 1960AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: mandates_levant_iraq_cyprus_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_mandates_levant_iraq_cyprus_spatial.png"
hero_caption: "Six British and French Mandate and colonial jurisdictions across Iraq, Syria, Greater Lebanon, Transjordan, Palestine and Cyprus between 1918AD and 1960AD, showing 138 individually assessed Mandate-era towns and administrative centres."
hero_label: "fig:hero-mandates-levant-iraq-cyprus"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles longitudinal population series for 138 individually assessed Mandate-era towns, administrative centres and planned settlements across the British and French Mandates of Mesopotamia, Syria, Greater Lebanon, Transjordan and Palestine together with British Cyprus from 1918AD to 1960AD. Drawing directly on official Mandate and successor-state enumerations — Palestine's 1922AD and 1931AD censuses and 1945AD Village Statistics, Lebanon's 1932AD census and caza registries, Syria's French Mandate counts and 1960AD census, Iraq's 1920AD administrative estimate and 1947AD and 1957AD censuses, Transjordan's colonial reports and Jordan's 1952AD and 1961AD censuses, and Cyprus's 1921AD, 1931AD, 1946AD and 1960AD colonial censuses — the ledger traces aggregate urban growth from 1,83M inhabitants across 1918–1922AD to 2,64M at mid-Mandate (1930–1936AD) and 3,94M across 1945–1947AD, with Iraq, Syria, Lebanon, Jordan and Cyprus reaching 5M in 1957–1960AD and the full 138-site gazetteer totalling 5,88M in combined peak population. Thirty-six redundant, suburban or overlapping candidates are excluded from the ledger, ten twentieth-century settlements are truncated at their documented foundation dates and all entries conform to a steep rank-size hierarchy ($\alpha = 1{,}31$, $R^2 = 0{,}94$) led by Baghdad, Damascus, Beirut, Aleppo and Amman.

# Background



Urban life across the eastern Mediterranean and Mesopotamia entered the Mandate era deeply scarred by First World War requisitioning, blockade famine and epidemic disease [@Saber2023French; @Greenshields2025Settlment]. Between 1918AD and 1960AD, however, imperial rail and motor-road construction, deep-water port works at Beirut, Haifa, Basra and Limassol, oil pipelines from Kirkuk to the Mediterranean and growing bureaucratic apparatuses turned provincial administrative seats into rapidly expanding cities [@Bosworth2007Historic; @Kastrissianakis2016Exploring]. Coastal plain centres in Mandate Palestine and Greater Lebanon absorbed maritime trade, Zionist immigration and Cilician Armenian refugees, while inland railheads such as Amman, Zarqa, Qamishli and Kirkuk grew from modest garrison stops or oil camps into major provincial hubs [@Beenstock2025Origins; @Chukov2022Kurdish; @Galletti2007Some]. After 1948AD, the partition of Palestine and the Nakba refugee exodus further reshaped urban scales across Gaza, the West Bank, Jordan and Lebanon [@Koylu2025Israel; @Muhsen2017Urban; @Dionigi2017Statehood].

# Methodology

The 138 individually assessed Mandate-era entries were compiled directly from official Mandate and successor-state censuses — Iraq's 1920AD Civil Administration estimates and 1947AD and 1957AD censuses, Syria's French Mandate civil registries and 1960AD census, Lebanon's 1932AD census and caza registries, British Mandate Palestine's 1922AD and 1931AD censuses and 1945AD Village Statistics, Transjordan's colonial reports and Jordan's 1952AD and 1961AD censuses, and Cyprus's 1921AD, 1931AD, 1946AD and 1960AD colonial censuses — supplemented by historical settlement monographs [@Marom2021Jind; @Marom2024Lajjun; @Scott2001Mortality]. Thirty-six redundant, suburban or overlapping candidates were excluded from the regional ledger to avoid spatial double-counting on the urban mask, and zero entries derive from mechanical back-projections or crowd-sourced fallbacks.

Each jurisdiction's urban entries preserve their authentic documented census spans: 1920–1957AD in Iraq, 1922–1960AD in Syria, 1920–1960AD in Lebanon, 1918–1960AD in Transjordan and Jordan, 1921–1960AD in British Cyprus, and 1922–1945AD (through 1948AD for Holon) in Mandate Palestine prior to partition. Ten settlements founded in the twentieth century carry explicit foundation-year bounds: Zarqa (1902AD) in Transjordan, Tel Aviv (1909AD), Ramat Gan (1921AD), Bnei Brak (1924AD), Herzliya (1924AD), Afula (1925AD), Bat Yam (1926AD), Netanya (1929AD) and Holon (1935AD) in Mandate Palestine, and Qamishli (1926AD) in the Syrian Jazira [@Beenstock2025Origins; @Remer2025Degania]. Prior to those dates, tables display a hyphen (-) rather than synthetic back-projections. Toponyms follow scholarly Latin romanisation (ALA-LC and BGN/PCGN) across Arabic, Hebrew, Kurdish, Armenian, Turkish and Greek place-names.

# Testing and Validation

Each country's individually assessed settlement sum was reconciled against historical subadministrative census totals from 1918–1960AD and linked into the 169 geoBoundaries modern polygons [@Runfola2020GeoBoundaries] used for pycnophylactic mass-conserving disaggregation across the five-arcminute regional grid. Across the full sample of $n = 138$ towns at peak population, log-log rank-size regression produces a Zipf exponent $\alpha = 1{,}31$ with $R^2 = 0{,}94$ (Figure \ref{fig:settlements-ranksize}), reflecting pronounced primate dominance by Baghdad (793,2k in 1957AD), Damascus (530k in 1960AD), Beirut (450k in 1960AD), Aleppo (425,5k in 1960AD) and Amman (218k in 1960AD).

<figure class="crd-figure-block" id="fig:settlements-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mandates-levant-iraq-cyprus-settlements/fig4_mandates_levant_iraq_cyprus_settlements.png" alt="fig:settlements-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 138 individually assessed Mandate-era settlements and peak populations of the twelve largest urban centres from 1918AD to 1960AD.</figcaption>
</figure>

# Results

## Mesopotamia and Iraq

Iraq accounts for 28 individually assessed towns whose combined population rose from 635k in 1920AD to 924,7k in 1935AD, 1,3M at the 1947AD census and 1,98M at the 1957AD census (Table \ref{tab:sett-iraq}). Baghdad nearly quadrupled from 202k in 1920AD to 340k in 1935AD, 515,5k in 1947AD and 793,2k in 1957AD as central ministries, railway workshops and rural migrants from the southern marshes converged on the Tigris bend [@Bosworth2007Historic]. Northern provincial seats Mosul (72k to 178,2k), Kirkuk (28k to 120,4k following the 1927AD Baba Gurgur oil discovery), Sulaymaniyah (18,5k to 48,8k) and Erbil (15,5k to 39,9k) expanded alongside oil-field and rail infrastructure, while Basra (54k to 164,9k) and the Euphrates and Tigris shrine and market centres Najaf (36k to 88,8k), Karbala (31k to 60,8k), Hillah (21,5k to 54k), Amara (22k to 53,3k) and Nasiriyah (13,5k to 39,1k) anchored southern riverine settlement.

<figure class="crd-table-figure" id="tab:sett-iraq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1920AD</th><th class="crd-th">1935AD</th><th class="crd-th">1947AD</th><th class="crd-th">1957AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdad</strong></td><td class="crd-td">33,34, 44,4</td><td class="crd-td">202k</td><td class="crd-td">340k</td><td class="crd-td">515,5k</td><td class="crd-td">793,2k</td></tr>
<tr><td class="crd-td"><strong>Mosul</strong></td><td class="crd-td">36,34, 43,12</td><td class="crd-td">72k</td><td class="crd-td">98k</td><td class="crd-td">133,6k</td><td class="crd-td">178,2k</td></tr>
<tr><td class="crd-td"><strong>Basra</strong></td><td class="crd-td">30,51, 47,78</td><td class="crd-td">54k</td><td class="crd-td">76k</td><td class="crd-td">101,5k</td><td class="crd-td">164,9k</td></tr>
<tr><td class="crd-td"><strong>Kirkuk</strong></td><td class="crd-td">35,47, 44,39</td><td class="crd-td">28k</td><td class="crd-td">44k</td><td class="crd-td">68,3k</td><td class="crd-td">120,4k</td></tr>
<tr><td class="crd-td"><strong>Najaf</strong></td><td class="crd-td">32,03, 44,35</td><td class="crd-td">36k</td><td class="crd-td">45k</td><td class="crd-td">56,3k</td><td class="crd-td">88,8k</td></tr>
<tr><td class="crd-td"><strong>Karbala</strong></td><td class="crd-td">32,62, 44,02</td><td class="crd-td">31k</td><td class="crd-td">37,5k</td><td class="crd-td">44,1k</td><td class="crd-td">60,8k</td></tr>
<tr><td class="crd-td"><strong>Hillah</strong></td><td class="crd-td">32,46, 44,42</td><td class="crd-td">21,5k</td><td class="crd-td">28,5k</td><td class="crd-td">36,6k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Amara</strong></td><td class="crd-td">31,84, 47,14</td><td class="crd-td">22k</td><td class="crd-td">29k</td><td class="crd-td">36,9k</td><td class="crd-td">53,3k</td></tr>
<tr><td class="crd-td"><strong>Sulaymaniyah</strong></td><td class="crd-td">35,56, 45,43</td><td class="crd-td">18,5k</td><td class="crd-td">25k</td><td class="crd-td">33,5k</td><td class="crd-td">48,8k</td></tr>
<tr><td class="crd-td"><strong>Erbil</strong></td><td class="crd-td">36,19, 44,01</td><td class="crd-td">15,5k</td><td class="crd-td">20,5k</td><td class="crd-td">27k</td><td class="crd-td">39,9k</td></tr>
<tr><td class="crd-td"><strong>Nasiriyah</strong></td><td class="crd-td">31,06, 46,26</td><td class="crd-td">13,5k</td><td class="crd-td">18,2k</td><td class="crd-td">24k</td><td class="crd-td">39,1k</td></tr>
<tr><td class="crd-td"><strong>Diwaniyah</strong></td><td class="crd-td">31,99, 44,93</td><td class="crd-td">10,8k</td><td class="crd-td">14,6k</td><td class="crd-td">19,9k</td><td class="crd-td">33,2k</td></tr>
<tr><td class="crd-td"><strong>Khanaqin</strong></td><td class="crd-td">34,35, 45,39</td><td class="crd-td">9,5k</td><td class="crd-td">16,2k</td><td class="crd-td">25,7k</td><td class="crd-td">32,8k</td></tr>
<tr><td class="crd-td"><strong>Zubayr</strong></td><td class="crd-td">30,39, 47,7</td><td class="crd-td">11,2k</td><td class="crd-td">14,5k</td><td class="crd-td">17,9k</td><td class="crd-td">28,7k</td></tr>
<tr><td class="crd-td"><strong>Tal Afar</strong></td><td class="crd-td">36,37, 42,45</td><td class="crd-td">11,8k</td><td class="crd-td">15,4k</td><td class="crd-td">20k</td><td class="crd-td">28,1k</td></tr>
<tr><td class="crd-td"><strong>Samawah</strong></td><td class="crd-td">31,33, 45,29</td><td class="crd-td">9,8k</td><td class="crd-td">12,4k</td><td class="crd-td">15,3k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Kut</strong></td><td class="crd-td">32,51, 45,82</td><td class="crd-td">7,8k</td><td class="crd-td">11,2k</td><td class="crd-td">16,2k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Kufa</strong></td><td class="crd-td">32,03, 44,4</td><td class="crd-td">7,6k</td><td class="crd-td">10,2k</td><td class="crd-td">13,7k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Fallujah</strong></td><td class="crd-td">33,35, 43,79</td><td class="crd-td">5,4k</td><td class="crd-td">7,6k</td><td class="crd-td">11k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Baqubah</strong></td><td class="crd-td">33,75, 44,64</td><td class="crd-td">6,8k</td><td class="crd-td">9,4k</td><td class="crd-td">12,5k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Ramadi</strong></td><td class="crd-td">33,42, 43,31</td><td class="crd-td">5,2k</td><td class="crd-td">7,2k</td><td class="crd-td">9,8k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Samarra</strong></td><td class="crd-td">34,2, 43,89</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">7,5k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Shatrah</strong></td><td class="crd-td">31,41, 46,17</td><td class="crd-td">5,8k</td><td class="crd-td">7,6k</td><td class="crd-td">10,3k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Zakho</strong></td><td class="crd-td">37,14, 42,69</td><td class="crd-td">6,2k</td><td class="crd-td">8,1k</td><td class="crd-td">10,6k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Halabja</strong></td><td class="crd-td">35,18, 45,99</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k</td><td class="crd-td">8,4k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Hit</strong></td><td class="crd-td">33,64, 42,83</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">8,2k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Tikrit</strong></td><td class="crd-td">34,62, 43,68</td><td class="crd-td">4,1k</td><td class="crd-td">4,9k</td><td class="crd-td">5,8k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Dohuk</strong></td><td class="crd-td">36,87, 42,99</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">7,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Iraq (28 sites) across Mandate and Kingdom of Iraq census benchmarks, 1920AD to 1957AD.</figcaption>
</figure>

## Syria and the Euphrates-Jazira Corridor

Syria contributes 23 towns growing from 542,4k in 1922AD (22 pre-1926AD settlements) to 815,6k at mid-Mandate (1931–1936AD), 1,07M in 1946AD and 1,61M at the 1960AD Syrian census (Table \ref{tab:sett-syria}). Damascus (170k in 1922AD to 291,2k in 1946AD and 530k in 1960AD) and Aleppo (156,7k to 324,9k and 425,5k) retained commanding bi-polar primacy even after the 1939AD transfer of the Sanjak of Alexandretta to Turkey displaced Armenian and Arab townspeople into Aleppo and the coast [@USTUN2016Example; @Hovhannisyan2025Catholicos; @Abdulla2022]. Central, coastal and Euphrates nodes Homs (52k to 137,2k), Hama (36k to 97,4k), Latakia (21k to 67,6k) and Deir ez-Zor (18k to 59,5k) expanded steadily [@Goldsmith2012Politics], while newly founded Qamishli (1926AD; 3,5k in 1928AD to 14,5k in 1938AD, 23k in 1946AD and 34,4k in 1960AD) and Al-Hasakah (2,4k to 18,9k) anchored rapid agricultural settlement across the Jazira [@Chukov2022Kurdish; @Tillo2022Lights; @Galletti2007Some; @Pashayan2026Minority].

<figure class="crd-table-figure" id="tab:sett-syria">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1922AD</th><th class="crd-th">1936-1938AD</th><th class="crd-th">1946AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Damascus</strong></td><td class="crd-td">33,51, 36,29</td><td class="crd-td">170k</td><td class="crd-td">235k</td><td class="crd-td">291,2k</td><td class="crd-td">530k</td></tr>
<tr><td class="crd-td"><strong>Aleppo</strong></td><td class="crd-td">36,2, 37,16</td><td class="crd-td">156,7k</td><td class="crd-td">255k</td><td class="crd-td">324,9k</td><td class="crd-td">425,5k</td></tr>
<tr><td class="crd-td"><strong>Homs</strong></td><td class="crd-td">34,72, 36,73</td><td class="crd-td">52k</td><td class="crd-td">75k</td><td class="crd-td">100k</td><td class="crd-td">137,2k</td></tr>
<tr><td class="crd-td"><strong>Hama</strong></td><td class="crd-td">35,13, 36,76</td><td class="crd-td">36k</td><td class="crd-td">55k</td><td class="crd-td">71,4k</td><td class="crd-td">97,4k</td></tr>
<tr><td class="crd-td"><strong>Latakia</strong></td><td class="crd-td">35,53, 35,79</td><td class="crd-td">21k</td><td class="crd-td">30k</td><td class="crd-td">38k</td><td class="crd-td">67,6k</td></tr>
<tr><td class="crd-td"><strong>Deir ez-Zor</strong></td><td class="crd-td">35,34, 40,14</td><td class="crd-td">18k</td><td class="crd-td">30k</td><td class="crd-td">42k</td><td class="crd-td">59,5k</td></tr>
<tr><td class="crd-td"><strong>Qamishli</strong></td><td class="crd-td">37,05, 41,23</td><td class="crd-td">-</td><td class="crd-td">14,5k</td><td class="crd-td">23k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Idlib</strong></td><td class="crd-td">35,93, 36,63</td><td class="crd-td">13,5k</td><td class="crd-td">17,5k</td><td class="crd-td">22,4k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Douma</strong></td><td class="crd-td">33,57, 36,4</td><td class="crd-td">11,2k</td><td class="crd-td">15,4k</td><td class="crd-td">19,8k</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Bab</strong></td><td class="crd-td">36,37, 37,52</td><td class="crd-td">6,8k</td><td class="crd-td">9,6k</td><td class="crd-td">13,4k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Hasakah</strong></td><td class="crd-td">36,5, 40,75</td><td class="crd-td">2,4k</td><td class="crd-td">7k</td><td class="crd-td">12,2k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Daraa</strong></td><td class="crd-td">32,62, 36,1</td><td class="crd-td">6,2k</td><td class="crd-td">9,4k</td><td class="crd-td">12,8k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Suwayda</strong></td><td class="crd-td">32,71, 36,57</td><td class="crd-td">5,6k</td><td class="crd-td">8,2k</td><td class="crd-td">11,4k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Tartus</strong></td><td class="crd-td">34,89, 35,89</td><td class="crd-td">5,1k</td><td class="crd-td">7,8k</td><td class="crd-td">10,9k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Salamiyah</strong></td><td class="crd-td">35,01, 37,05</td><td class="crd-td">5,4k</td><td class="crd-td">8,1k</td><td class="crd-td">11,2k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Raqqa</strong></td><td class="crd-td">35,95, 39,01</td><td class="crd-td">3,8k</td><td class="crd-td">6,2k</td><td class="crd-td">9,8k</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Maarrat al-Numan</strong></td><td class="crd-td">35,65, 36,67</td><td class="crd-td">5,9k</td><td class="crd-td">7,6k</td><td class="crd-td">9,8k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Jableh</strong></td><td class="crd-td">35,36, 35,93</td><td class="crd-td">5,2k</td><td class="crd-td">7,1k</td><td class="crd-td">9,4k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Manbij</strong></td><td class="crd-td">36,53, 37,95</td><td class="crd-td">3,6k</td><td class="crd-td">5,4k</td><td class="crd-td">7,9k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Jisr al-Shughur</strong></td><td class="crd-td">35,81, 36,32</td><td class="crd-td">4,8k</td><td class="crd-td">6,4k</td><td class="crd-td">8,5k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Baniyas</strong></td><td class="crd-td">35,18, 35,95</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td><td class="crd-td">6,6k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Palmyra</strong></td><td class="crd-td">34,56, 38,28</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">6,4k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Mayadin</strong></td><td class="crd-td">35,02, 40,45</td><td class="crd-td">3,2k</td><td class="crd-td">4,9k</td><td class="crd-td">7,1k</td><td class="crd-td">10,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Syria (23 sites) across Mandate and Syrian census benchmarks, 1922AD to 1960AD.</figcaption>
</figure>

## Greater Lebanon

Lebanon comprises 15 individually assessed coastal ports, highland resorts and caza seats whose combined total increased from 228,8k in 1920AD to 310,8k at the 1932AD census, 464,4k in 1946AD and 769k in 1960AD (Table \ref{tab:sett-lebanon}). Beirut nearly quadrupled from 115k in 1920AD to 161k in 1932AD, 240k in 1946AD and 450k in 1960AD, absorbing maritime transit from Syria, Armenian refugees from Anatolia and Palestinian refugees after 1948AD, flanked by Tripoli (38k to 115k), Sidon (14k to 42k), Zahle (16k to 38k), Jounieh (4,8k to 18,4k), Tyre (6,2k to 16,5k) and Baalbek (5,4k to 15,2k) [@Kastrissianakis2016Exploring; @Greenshields2025Settlment; @Dionigi2017Statehood; @Orall2023Lebanese].

<figure class="crd-table-figure" id="tab:sett-lebanon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1920AD</th><th class="crd-th">1932AD</th><th class="crd-th">1946AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Beirut</strong></td><td class="crd-td">33,89, 35,5</td><td class="crd-td">115k</td><td class="crd-td">161k</td><td class="crd-td">240k</td><td class="crd-td">450k</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">34,44, 35,85</td><td class="crd-td">38k</td><td class="crd-td">51,2k</td><td class="crd-td">85k</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td"><strong>Sidon</strong></td><td class="crd-td">33,56, 35,37</td><td class="crd-td">14k</td><td class="crd-td">18k</td><td class="crd-td">28k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Zahle</strong></td><td class="crd-td">33,85, 35,9</td><td class="crd-td">16k</td><td class="crd-td">20,8k</td><td class="crd-td">28,5k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Jounieh</strong></td><td class="crd-td">33,98, 35,62</td><td class="crd-td">4,8k</td><td class="crd-td">6,4k</td><td class="crd-td">10,2k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Tyre</strong></td><td class="crd-td">33,27, 35,2</td><td class="crd-td">6,2k</td><td class="crd-td">8,1k</td><td class="crd-td">10,8k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Baalbek</strong></td><td class="crd-td">34,01, 36,22</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k</td><td class="crd-td">9,6k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Zgharta</strong></td><td class="crd-td">34,4, 35,9</td><td class="crd-td">5,8k</td><td class="crd-td">7,2k</td><td class="crd-td">9,5k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Aley</strong></td><td class="crd-td">33,81, 35,6</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k</td><td class="crd-td">8,2k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Nabatieh</strong></td><td class="crd-td">33,38, 35,48</td><td class="crd-td">4,2k</td><td class="crd-td">5,6k</td><td class="crd-td">7,8k</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Bint Jbeil</strong></td><td class="crd-td">33,12, 35,43</td><td class="crd-td">3,4k</td><td class="crd-td">4,6k</td><td class="crd-td">6,2k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Byblos</strong></td><td class="crd-td">34,12, 35,65</td><td class="crd-td">2,6k</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Batroun</strong></td><td class="crd-td">34,26, 35,66</td><td class="crd-td">3,1k</td><td class="crd-td">3,9k</td><td class="crd-td">5,2k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Jezzine</strong></td><td class="crd-td">33,54, 35,58</td><td class="crd-td">3,3k</td><td class="crd-td">4,2k</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Marjayoun</strong></td><td class="crd-td">33,36, 35,59</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed towns and caza seats in Greater Lebanon (15 sites), 1920AD to 1960AD.</figcaption>
</figure>

## Transjordan

Transjordan comprises 14 towns expanding nearly nine-fold from 50,1k across 1918–1922AD to 69,9k in 1930–1935AD, 107,8k in 1945AD, 231,2k at the 1952AD housing census and 438,6k in 1960AD (Table \ref{tab:sett-jordan}). Amman jumped from a Circassian Hejaz Railway village of 3,5k in 1918AD to 10,5k in 1930AD and 30k in 1945AD before post-1948AD Palestinian refugee inflows lifted it to 108,3k in 1952AD and 218k in 1960AD, alongside Zarqa (1,8k in 1918AD to 28,5k in 1952AD and 82k in 1960AD), Irbid (4k in 1922AD to 42k in 1960AD) and Russeifa (650 to 14,2k); by contrast, Salt — the largest early-Transjordan town at 18k in 1922AD — stagnated to 15,5k in 1952AD and 16,1k in 1960AD after Amman became Emirate capital in 1921AD [@Frantzman2011Bedouin].

<figure class="crd-table-figure" id="tab:sett-jordan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918-1922AD</th><th class="crd-th">1930-1935AD</th><th class="crd-th">1945AD</th><th class="crd-th">1952AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Amman</strong></td><td class="crd-td">31,96, 35,95</td><td class="crd-td">3,5k</td><td class="crd-td">10,5k</td><td class="crd-td">30k</td><td class="crd-td">108,3k</td><td class="crd-td">218k</td></tr>
<tr><td class="crd-td"><strong>Zarqa</strong></td><td class="crd-td">32,07, 36,09</td><td class="crd-td">1,8k</td><td class="crd-td">5,8k</td><td class="crd-td">10,5k</td><td class="crd-td">28,5k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>Irbid</strong></td><td class="crd-td">32,56, 35,85</td><td class="crd-td">4k</td><td class="crd-td">6,8k</td><td class="crd-td">11,2k</td><td class="crd-td">23,2k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Salt</strong></td><td class="crd-td">32,04, 35,73</td><td class="crd-td">18k</td><td class="crd-td">16,2k</td><td class="crd-td">14,8k</td><td class="crd-td">15,5k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Russeifa</strong></td><td class="crd-td">32,02, 36,05</td><td class="crd-td">650</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k</td><td class="crd-td">6,2k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Madaba</strong></td><td class="crd-td">31,72, 35,79</td><td class="crd-td">3,2k</td><td class="crd-td">4,4k</td><td class="crd-td">6,1k</td><td class="crd-td">8,5k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Ramtha</strong></td><td class="crd-td">32,56, 36,01</td><td class="crd-td">3,6k</td><td class="crd-td">4,9k</td><td class="crd-td">6,4k</td><td class="crd-td">8,1k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Mafraq</strong></td><td class="crd-td">32,34, 36,21</td><td class="crd-td">950</td><td class="crd-td">2,1k</td><td class="crd-td">4,2k</td><td class="crd-td">6,4k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Aqaba</strong></td><td class="crd-td">29,53, 35,01</td><td class="crd-td">850</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,8k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Karak</strong></td><td class="crd-td">31,19, 35,7</td><td class="crd-td">3,8k</td><td class="crd-td">4,5k</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Ma'an</strong></td><td class="crd-td">30,2, 35,73</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td><td class="crd-td">4,4k</td><td class="crd-td">5,2k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Ajloun</strong></td><td class="crd-td">32,33, 35,75</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td><td class="crd-td">4,6k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Tafilah</strong></td><td class="crd-td">30,84, 35,6</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Jerash</strong></td><td class="crd-td">32,27, 35,89</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Transjordan and Jordan (14 sites), 1918AD to 1960AD.</figcaption>
</figure>

## Israel and Northern-Coastal Mandatory Palestine

Twenty-seven cities and planned colonies within the northern, coastal, Jerusalem and Negev Mandate Palestine frame grew from 214,7k at the 1922AD census (20 pre-1924AD sites) to 330,6k in 1931AD (26 sites) and 735,9k in the April 1945 Village Statistics (742,2k combined peak including Holon's 1948AD count of 9,6k; Table \ref{tab:sett-israel}). Tel Aviv (15,2k in 1922AD to 46,1k in 1931AD, 120k in 1936AD and 166,7k in 1945AD), Jerusalem (62,6k to 90,5k and 157,1k), Haifa (24,6k to 50,4k and 128,8k) and Jaffa (47,7k to 51,9k and 94,3k) formed the metropolitan core, flanked by Petah Tikva (3k to 17,3k), Lod (8,1k to 16,8k), Ramla (7,3k to 15,2k), Nazareth (7,4k to 14,2k) and interwar founded settlements Ramat Gan (1921AD; 450 to 10,2k), Bnei Brak (1924AD; 956 to 5,8k), Herzliya (1924AD; 1,2k to 4,7k), Afula (1925AD; 874 to 2,3k), Bat Yam (1926AD; 335 to 2k), Netanya (1929AD; 253 to 5,1k) and Holon (1935AD; 950 in 1936AD to 3,3k in 1945AD and 9,6k in 1948AD) [@Beenstock2025Origins; @VRIES1997Productive; @Remer2025Degania; @Daam2022Chapter; @Rioli2020Breach].

<figure class="crd-table-figure" id="tab:sett-israel">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1922AD</th><th class="crd-th">1931AD</th><th class="crd-th">1936-1939AD</th><th class="crd-th">1945AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tel Aviv</strong></td><td class="crd-td">32,08, 34,78</td><td class="crd-td">15,2k</td><td class="crd-td">46,1k</td><td class="crd-td">120k</td><td class="crd-td">166,7k</td></tr>
<tr><td class="crd-td"><strong>Jerusalem</strong></td><td class="crd-td">31,78, 35,21</td><td class="crd-td">62,6k</td><td class="crd-td">90,5k</td><td class="crd-td">-</td><td class="crd-td">157,1k</td></tr>
<tr><td class="crd-td"><strong>Haifa</strong></td><td class="crd-td">32,82, 34,99</td><td class="crd-td">24,6k</td><td class="crd-td">50,4k</td><td class="crd-td">-</td><td class="crd-td">128,8k</td></tr>
<tr><td class="crd-td"><strong>Jaffa</strong></td><td class="crd-td">32,05, 34,76</td><td class="crd-td">47,7k</td><td class="crd-td">51,9k</td><td class="crd-td">-</td><td class="crd-td">94,3k</td></tr>
<tr><td class="crd-td"><strong>Petah Tikva</strong></td><td class="crd-td">32,09, 34,89</td><td class="crd-td">3k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Lod</strong></td><td class="crd-td">31,95, 34,9</td><td class="crd-td">8,1k</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Ramla</strong></td><td class="crd-td">31,93, 34,86</td><td class="crd-td">7,3k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Nazareth</strong></td><td class="crd-td">32,7, 35,3</td><td class="crd-td">7,4k</td><td class="crd-td">8,8k</td><td class="crd-td">-</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Acre</strong></td><td class="crd-td">32,93, 35,08</td><td class="crd-td">6,4k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Safed</strong></td><td class="crd-td">32,96, 35,5</td><td class="crd-td">8,8k</td><td class="crd-td">9,4k</td><td class="crd-td">-</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Tiberias</strong></td><td class="crd-td">32,79, 35,53</td><td class="crd-td">7k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Ramat Gan</strong></td><td class="crd-td">32,06, 34,82</td><td class="crd-td">450</td><td class="crd-td">975</td><td class="crd-td">2,8k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Rehovot</strong></td><td class="crd-td">31,89, 34,81</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td><td class="crd-td">6,8k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Al-Majdal</strong></td><td class="crd-td">31,67, 34,57</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Holon</strong></td><td class="crd-td">32,01, 34,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Rishon LeZion</strong></td><td class="crd-td">31,96, 34,8</td><td class="crd-td">1,4k</td><td class="crd-td">2,5k</td><td class="crd-td">5,4k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Hadera</strong></td><td class="crd-td">32,43, 34,92</td><td class="crd-td">540</td><td class="crd-td">1,4k</td><td class="crd-td">3,8k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Bnei Brak</strong></td><td class="crd-td">32,09, 34,84</td><td class="crd-td">-</td><td class="crd-td">956</td><td class="crd-td">2,6k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Beersheba</strong></td><td class="crd-td">31,25, 34,79</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Beisan</strong></td><td class="crd-td">32,5, 35,5</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Netanya</strong></td><td class="crd-td">32,32, 34,86</td><td class="crd-td">-</td><td class="crd-td">253</td><td class="crd-td">1,9k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Herzliya</strong></td><td class="crd-td">32,16, 34,84</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,5k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Kfar Saba</strong></td><td class="crd-td">32,17, 34,91</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,6k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Shefa-Amr</strong></td><td class="crd-td">32,81, 35,17</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Afula</strong></td><td class="crd-td">32,61, 35,29</td><td class="crd-td">-</td><td class="crd-td">874</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Zikhron Ya'akov</strong></td><td class="crd-td">32,57, 34,95</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Bat Yam</strong></td><td class="crd-td">32,02, 34,75</td><td class="crd-td">-</td><td class="crd-td">335</td><td class="crd-td">920</td><td class="crd-td">2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed cities and founded colonies in coastal, northern, Jerusalem and Negev Mandate Palestine (27 sites), 1922AD to 1945AD.</figcaption>
</figure>

## West Bank and Gaza Strip

Twelve towns across the West Bank and Gaza Strip rose from 75,7k at the 1922AD census to 88k in 1931AD and 133,6k in the 1945AD Village Statistics prior to the 1948AD refugee influx (Table \ref{tab:sett-palestine}). Gaza expanded from 17,5k in 1922AD to 17k in 1931AD and 34,2k in 1945AD, Hebron from 16,6k to 24,6k, Nablus from 15,9k to 23,3k, Khan Yunis from 3,9k to 11,2k, Bethlehem from 6,7k to 8,8k, Tulkarm from 3,4k to 8,1k, Qalqilya from 2,8k to 5,9k and Ramallah from 3,1k to 5,1k [@Scott2001Mortality; @Muhsen2017Urban; @Anderson2017British; @Koylu2025Israel].

<figure class="crd-table-figure" id="tab:sett-palestine">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1922AD</th><th class="crd-th">1931AD</th><th class="crd-th">1945AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gaza</strong></td><td class="crd-td">31,5, 34,47</td><td class="crd-td">17,5k</td><td class="crd-td">17k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Hebron</strong></td><td class="crd-td">31,53, 35,1</td><td class="crd-td">16,6k</td><td class="crd-td">17,5k</td><td class="crd-td">24,6k</td></tr>
<tr><td class="crd-td"><strong>Nablus</strong></td><td class="crd-td">32,22, 35,25</td><td class="crd-td">15,9k</td><td class="crd-td">17,2k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Khan Yunis</strong></td><td class="crd-td">31,35, 34,31</td><td class="crd-td">3,9k</td><td class="crd-td">7,3k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Bethlehem</strong></td><td class="crd-td">31,71, 35,2</td><td class="crd-td">6,7k</td><td class="crd-td">6,8k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Tulkarm</strong></td><td class="crd-td">32,31, 35,03</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Qalqilya</strong></td><td class="crd-td">32,19, 34,97</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ramallah</strong></td><td class="crd-td">31,9, 35,2</td><td class="crd-td">3,1k</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Jenin</strong></td><td class="crd-td">32,46, 35,3</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Halhul</strong></td><td class="crd-td">31,58, 35,1</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Jericho</strong></td><td class="crd-td">31,87, 35,45</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Rafah</strong></td><td class="crd-td">31,3, 34,24</td><td class="crd-td">599</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed towns in the West Bank and Gaza Strip (12 sites) across British Mandate censuses and Village Statistics, 1922AD to 1945AD.</figcaption>
</figure>

## British Crown Colony of Cyprus

Cyprus contributes 19 municipalities and agrarian towns growing steadily from 82,1k at the 1921AD colonial census to 97,9k in 1931AD, 134,9k in 1946AD and 197,8k in 1960AD (199,7k combined peak, as Lapithos, Rizokarpaso and Lefkara peaked in 1946AD before post-war rural out-migration; Table \ref{tab:sett-cyprus}). Nicosia municipal limits (18,6k to 45,6k), Limassol (13,3k to 43,6k), Famagusta (7k to 34,8k), Larnaca (9,8k to 19,8k), Paphos (4,1k to 9,1k) and Morphou (3,1k to 6,6k) trace balanced port, mining and administrative growth across all six British colonial districts.

<figure class="crd-table-figure" id="tab:sett-cyprus">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1921AD</th><th class="crd-th">1931AD</th><th class="crd-th">1946AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nicosia</strong></td><td class="crd-td">35,17, 33,36</td><td class="crd-td">18,6k</td><td class="crd-td">23,7k</td><td class="crd-td">34,5k</td><td class="crd-td">45,6k</td></tr>
<tr><td class="crd-td"><strong>Limassol</strong></td><td class="crd-td">34,68, 33,04</td><td class="crd-td">13,3k</td><td class="crd-td">15,3k</td><td class="crd-td">22,8k</td><td class="crd-td">43,6k</td></tr>
<tr><td class="crd-td"><strong>Famagusta</strong></td><td class="crd-td">35,12, 33,94</td><td class="crd-td">7k</td><td class="crd-td">9k</td><td class="crd-td">16,2k</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>Larnaca</strong></td><td class="crd-td">34,92, 33,63</td><td class="crd-td">9,8k</td><td class="crd-td">11,9k</td><td class="crd-td">14,8k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Paphos</strong></td><td class="crd-td">34,78, 32,42</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">5,8k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Morphou</strong></td><td class="crd-td">35,2, 32,99</td><td class="crd-td">3,1k</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Rizokarpaso</strong></td><td class="crd-td">35,6, 34,38</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td><td class="crd-td">4,1k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Lysi</strong></td><td class="crd-td">35,11, 33,68</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Lefka</strong></td><td class="crd-td">35,11, 32,85</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Lapithos</strong></td><td class="crd-td">35,34, 33,17</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k</td><td class="crd-td">3,6k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Kyrenia</strong></td><td class="crd-td">35,34, 33,32</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Paralimni</strong></td><td class="crd-td">35,04, 33,98</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Athienou</strong></td><td class="crd-td">35,06, 33,54</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Yialousa</strong></td><td class="crd-td">35,54, 34,19</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Kythrea</strong></td><td class="crd-td">35,25, 33,48</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Lefkara</strong></td><td class="crd-td">34,87, 33,31</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Trikomo</strong></td><td class="crd-td">35,29, 33,89</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Dhali</strong></td><td class="crd-td">35,02, 33,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Polis</strong></td><td class="crd-td">35,04, 32,43</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed towns and municipalities in British Cyprus (19 sites) across colonial censuses, 1921AD to 1960AD.</figcaption>
</figure>

# Limitations

Three reporting asymmetries affect the urban gazetteer. First, Lebanon's lack of post-1932AD national censuses means its fifteen individually assessed towns rely on the 1932AD official enumeration paired with Mandate civil registries, 1943AD Admiralty handbooks and 1946–1960AD municipal projections rather than decennial post-war censuses [@Saber2023French; @Dionigi2017Statehood]. Second, staggered Mandate termination and national census schedules prevent uniform synchronous cross-sections: Mandate Palestine's 39 entries close at the April 1945 Village Statistics (1948AD for Holon) prior to partition and the 1948AD Nakba [@Marom2021Jind; @Marom2024Lajjun; @Oron2021Century], Iraq's 28 entries close at the 1957AD Kingdom census, whereas Syria, Lebanon, Jordan and Cyprus continue to 1960AD. Third, municipal boundary definitions differ across statistical traditions — Nicosia's 45,6k figure in 1960AD reflects municipal limits excluding roughly 50k suburban residents, whereas Baghdad's 793,2k in 1957AD encompasses Greater Baghdad — while 36 subordinate suburbs or redundant candidates were excluded from the ledger to prevent spatial double-counting.

# Conclusion

Across 138 individually assessed Mandate-era settlements, documented urban population in the Levant, Iraq and Cyprus more than doubled from 1,83M across 1918–1922AD to 3,94M across 1945–1947AD, with Iraq, Syria, Lebanon, Jordan and Cyprus continuing to 5M in 1957–1960AD and the full 138-site gazetteer reaching 5,88M in combined peak population. Administrative centralisation, oil extraction, port expansion and refugee displacements concentrated growth inside a steep primate hierarchy ($\alpha = 1{,}31$, $R^2 = 0{,}94$) led by Baghdad, Damascus, Beirut, Aleppo and Amman alongside Mosul, Basra, Tel Aviv, Jerusalem, Haifa, Nicosia and Limassol. Paired with subadministrative rural disaggregation, these urban series anchor the spatial population reconstruction of the post-Ottoman Near East.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums individually assessed settlements and combined urban populations across all seven successor jurisdictions over four documented census windows from 1918AD to 1960AD alongside combined peak totals.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">1918-1922AD</th><th class="crd-th">1930-1936AD</th><th class="crd-th">1945-1947AD</th><th class="crd-th">1957-1960AD</th><th class="crd-th">Peak Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">28</td><td class="crd-td">635k</td><td class="crd-td">924,7k</td><td class="crd-td">1,3M</td><td class="crd-td">1,98M</td><td class="crd-td">1,98M</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">23</td><td class="crd-td">542,4k</td><td class="crd-td">815,6k</td><td class="crd-td">1,07M</td><td class="crd-td">1,61M</td><td class="crd-td">1,61M</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">27</td><td class="crd-td">214,7k</td><td class="crd-td">331,5k</td><td class="crd-td">735,9k</td><td class="crd-td">-</td><td class="crd-td">742,2k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">15</td><td class="crd-td">228,8k</td><td class="crd-td">310,8k</td><td class="crd-td">464,4k</td><td class="crd-td">769k</td><td class="crd-td">769k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">14</td><td class="crd-td">50,1k</td><td class="crd-td">69,9k</td><td class="crd-td">107,8k</td><td class="crd-td">438,6k</td><td class="crd-td">440,5k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">19</td><td class="crd-td">82,1k</td><td class="crd-td">97,8k</td><td class="crd-td">134,9k</td><td class="crd-td">197,8k</td><td class="crd-td">199,7k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">12</td><td class="crd-td">75,7k</td><td class="crd-td">88k</td><td class="crd-td">133,6k</td><td class="crd-td">-</td><td class="crd-td">133,7k</td></tr>
<tr><td class="crd-td"><strong>All Jurisdictions</strong></td><td class="crd-td">138</td><td class="crd-td">1,83M</td><td class="crd-td">2,64M</td><td class="crd-td">3,94M</td><td class="crd-td">5M</td><td class="crd-td">5,88M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Combined urban population across all 138 individually assessed Mandate-era settlements by jurisdiction across census windows, 1918AD to 1960AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

<div class="crd-footnotes-slot" data-crd-footnotes="true"></div>

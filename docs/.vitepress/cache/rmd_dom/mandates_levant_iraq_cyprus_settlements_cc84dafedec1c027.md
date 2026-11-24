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
hero_caption: "Six British and French Mandate and colonial jurisdictions across Iraq, Syria, Greater Lebanon, Transjordan, Palestine and Cyprus between 1918AD and 1960AD, showing 474 individually assessed Mandate-era towns, administrative centres and villages."
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

This gazetteer compiles longitudinal population series for 474 individually assessed Mandate-era towns, administrative centres, planned settlements and villages across the British and French Mandates of Mesopotamia, Syria, Greater Lebanon, Transjordan and Palestine together with British Cyprus from 1918AD to 1960AD. Drawing directly on official Mandate and successor-state enumerations — Palestine's 1922AD and 1931AD censuses and 1945AD Village Statistics (supplemented by CBS Israel 1948–1960AD locality returns), Lebanon's 1932AD census and caza registries, Syria's French Mandate counts and 1960AD census, Iraq's 1920AD administrative estimate and 1947AD and 1957AD censuses, Transjordan's colonial reports and Jordan's 1952AD and 1961AD censuses, and British Cyprus's 1881–1931AD, 1946AD and 1960AD colonial censuses — the ledger traces aggregate catalogued population from 1,87M inhabitants across 1918–1922AD to 2,69M at mid-Mandate (1930–1936AD) and 4,18M across 1945–1947AD, with documented 1957–1960AD enumerations reaching 6,02M and the full 474-site gazetteer totalling 6,84M in combined peak population. A further 129 redundant, suburban or co-located variant candidates out of 603 evaluated entries are excluded from the ledger, newly established twentieth-century settlements are truncated at their documented foundation dates and all entries conform to a steep rank-size hierarchy ($\alpha = 1{,}747$, $R^2 = 0{,}945$) led by Baghdad, Damascus, Beirut, Aleppo and Amman.

# Background



Urban life across the eastern Mediterranean and Mesopotamia entered the Mandate era deeply scarred by First World War requisitioning, blockade famine and epidemic disease [@Saber2023French; @Greenshields2025Settlment]. Between 1918AD and 1960AD, however, imperial rail and motor-road construction, deep-water port works at Beirut, Haifa, Basra and Limassol, oil pipelines from Kirkuk to the Mediterranean and growing bureaucratic apparatuses turned provincial administrative seats into rapidly expanding cities [@Bosworth2007Historic; @Kastrissianakis2016Exploring]. Coastal plain centres in Mandate Palestine and Greater Lebanon absorbed maritime trade, Zionist immigration and Cilician Armenian refugees, while inland railheads such as Amman, Zarqa, Qamishli and Kirkuk grew from modest garrison stops or oil camps into major provincial hubs [@Beenstock2025Origins; @Chukov2022Kurdish; @Galletti2007Some]. After 1948AD, the partition of Palestine and the Nakba refugee exodus further reshaped urban scales across Gaza, the West Bank, Jordan and Lebanon [@Koylu2025Israel; @Muhsen2017Urban; @Dionigi2017Statehood].

# Methodology

The 474 individually assessed Mandate-era entries were compiled directly from official Mandate and successor-state censuses — Iraq's 1920AD Civil Administration estimates and 1947AD and 1957AD censuses, Syria's French Mandate civil registries and 1960AD census, Lebanon's 1932AD census and caza registries, British Mandate Palestine's 1922AD and 1931AD censuses and 1945AD Village Statistics (supplemented by CBS Israel 1948–1960AD locality returns), Transjordan's colonial reports and Jordan's 1952AD and 1961AD censuses, and British Cyprus's 1881–1931AD, 1946AD and 1960AD colonial censuses — supplemented by historical settlement monographs [@Marom2021Jind; @Marom2024Lajjun; @Scott2001Mortality]. Out of 603 evaluated entries, 129 redundant, suburban or co-located variant candidates were excluded from the regional ledger to avoid spatial double-counting on the urban mask, and zero entries derive from mechanical back-projections or crowd-sourced fallbacks.

Each jurisdiction's entries preserve their authentic documented census spans: 1920–1957AD in Iraq, 1922–1960AD in Syria, 1920–1960AD in Lebanon, 1918–1960AD in Transjordan and Jordan, 1921–1960AD in British Cyprus, 1922–1945AD (through 1948AD for Jerusalem and selected Mandate centres) across Mandatory Palestine Village Statistics and 1948–1960AD in CBS Israel locality returns. Settlements founded in the twentieth century carry explicit foundation-year bounds—including Zarqa (1902AD) in Transjordan, Tel Aviv (1909AD), Ramat Gan (1921AD), Bnei Brak (1924AD), Herzliya (1924AD), Afula (1925AD), Bat Yam (1926AD), Netanya (1929AD), Holon (1935AD), Yehud (1948AD), Yavne (1949AD) and Beit Shemesh (1950AD) in the Palestine-Israel frame, and Qamishli (1926AD) in the Syrian Jazira [@Beenstock2025Origins; @Remer2025Degania]. Prior to those dates, tables display a hyphen (-) rather than synthetic back-projections. Toponyms follow scholarly Latin romanisation (ALA-LC and BGN/PCGN) across Arabic, Hebrew, Kurdish, Armenian, Turkish and Greek place-names.

# Testing and Validation

Each country's individually assessed settlement sum was reconciled against historical subadministrative census totals from 1918–1960AD and linked into the 169 geoBoundaries modern polygons [@Runfola2020GeoBoundaries] used for pycnophylactic mass-conserving disaggregation across the five-arcminute regional grid. Across the full sample of $n = 474$ settlements at peak population, log-log rank-size regression produces a Zipf exponent $\alpha = 1{,}747$ with $R^2 = 0{,}945$ (Figure \ref{fig:settlements-ranksize}), reflecting pronounced primate dominance by Baghdad (793,2k in 1957AD), Damascus (530k in 1960AD), Beirut (450k in 1960AD), Aleppo (425,5k in 1960AD) and Amman (218k in 1960AD) alongside a dense lower tail of Palestinian and Cypriot villages.

<figure class="crd-figure-block" id="fig:settlements-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mandates-levant-iraq-cyprus-settlements/fig4_mandates_levant_iraq_cyprus_settlements.png" alt="fig:settlements-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 474 individually assessed Mandate-era settlements and peak populations of the twelve largest urban centres from 1918AD to 1960AD.</figcaption>
</figure>

# Results

## Mesopotamia and Iraq

Iraq accounts for 29 individually assessed towns whose combined population rose from 635k in 1920AD to 924,7k in 1935AD, 1,3M at the 1947AD census and 1,98M at the 1957AD census (Table \ref{tab:sett-iraq}). Baghdad nearly quadrupled from 202k in 1920AD to 340k in 1935AD, 515,5k in 1947AD and 793,2k in 1957AD as central ministries, railway workshops and rural migrants from the southern marshes converged on the Tigris bend [@Bosworth2007Historic]. Northern provincial seats Mosul (72k to 178,2k), Kirkuk (28k to 120,4k following the 1927AD Baba Gurgur oil discovery), Sulaymaniyah (18,5k to 48,8k) and Erbil (15,5k to 39,9k) expanded alongside oil-field and rail infrastructure, while Basra (54k to 164,9k) and the Euphrates and Tigris shrine and market centres Najaf (36k to 88,8k), Karbala (31k to 60,8k), Hillah (21,5k to 54k), Amara (22k to 53,3k) and Nasiriyah (13,5k to 39,1k) anchored southern riverine settlement.

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
<tr><td class="crd-td"><strong>Umm Jigayir</strong></td><td class="crd-td">32,58, 45,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Iraq (29 sites) across Mandate and Kingdom of Iraq census benchmarks, 1920AD to 1957AD.</figcaption>
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

Within the northern, coastal, Jerusalem and Negev Mandate Palestine and post-1948AD Israeli frame, 114 individually assessed cities, planned colonies and enumerated rural villages grew from 171,5k at the 1922AD census to 286,2k in 1931AD, 691,9k in the April 1945 Village Statistics and 1,46M in combined peak population (Table \ref{tab:sett-israel}). Jerusalem (62,6k in 1922AD to 90,5k in 1931AD, 157,1k in 1945AD and 205,1k in 1946AD), Haifa (24,6k to 50,4k, 128,8k in 1945AD and 180,4k in 1960AD) and Tel Aviv (consolidating adjacent Jaffa in the canonical ledger; 15,2k in 1922AD to 46,1k in 1931AD, 120k in 1936AD and 166,7k in 1945AD) formed the metropolitan core, flanked by Ramat Gan (1921AD; 450 to 10,2k in 1945AD and 88,4k in 1960AD), Petah Tikva (3k to 17,3k and 52,9k), Holon (1935AD; 950 in 1936AD to 3,3k in 1945AD and 47,4k in 1960AD), Bnei Brak (1924AD; 956 to 5,8k and 45,2k), Beersheba (42,1k in 1960AD), Lod, Ramla, Nazareth and over a hundred Galilee, coastal and Sharon villages documented in the 1922–1945AD Mandate returns [@Beenstock2025Origins; @VRIES1997Productive; @Remer2025Degania; @Daam2022Chapter; @Rioli2020Breach].

<figure class="crd-table-figure" id="tab:sett-israel">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1922AD</th><th class="crd-th">1931AD</th><th class="crd-th">1945-1946AD</th><th class="crd-th">1957-1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jerusalem</strong></td><td class="crd-td">31,78, 35,21</td><td class="crd-td">62,6k</td><td class="crd-td">90,5k</td><td class="crd-td">157,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Haifa</strong></td><td class="crd-td">32,82, 34,99</td><td class="crd-td">24,6k</td><td class="crd-td">50,4k</td><td class="crd-td">128,8k</td><td class="crd-td">180,4k</td></tr>
<tr><td class="crd-td"><strong>Tel Aviv</strong></td><td class="crd-td">32,08, 34,78</td><td class="crd-td">15,2k</td><td class="crd-td">46,1k</td><td class="crd-td">166,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ramat Gan</strong></td><td class="crd-td">32,06, 34,82</td><td class="crd-td">450</td><td class="crd-td">975</td><td class="crd-td">10,2k</td><td class="crd-td">88,4k</td></tr>
<tr><td class="crd-td"><strong>Petah Tikva</strong></td><td class="crd-td">32,09, 34,89</td><td class="crd-td">3k</td><td class="crd-td">6,9k</td><td class="crd-td">17,2k</td><td class="crd-td">52,9k</td></tr>
<tr><td class="crd-td"><strong>Holon</strong></td><td class="crd-td">32,01, 34,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">47,4k</td></tr>
<tr><td class="crd-td"><strong>Bnei Brak</strong></td><td class="crd-td">32,09, 34,84</td><td class="crd-td">-</td><td class="crd-td">956</td><td class="crd-td">5,8k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Beersheba</strong></td><td class="crd-td">31,25, 34,79</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">5,6k</td><td class="crd-td">42,1k</td></tr>
<tr><td class="crd-td"><strong>Netanya</strong></td><td class="crd-td">32,32, 34,86</td><td class="crd-td">-</td><td class="crd-td">253</td><td class="crd-td">5,1k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>Bat Yam</strong></td><td class="crd-td">32,02, 34,75</td><td class="crd-td">-</td><td class="crd-td">335</td><td class="crd-td">2k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Rehovot</strong></td><td class="crd-td">31,89, 34,81</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td><td class="crd-td">10k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Rishon LeZion</strong></td><td class="crd-td">31,96, 34,8</td><td class="crd-td">1,4k</td><td class="crd-td">2,5k</td><td class="crd-td">8,1k</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Herzliya</strong></td><td class="crd-td">32,16, 34,84</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">4,6k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Hadera</strong></td><td class="crd-td">32,43, 34,92</td><td class="crd-td">540</td><td class="crd-td">1,4k</td><td class="crd-td">7,8k</td><td class="crd-td">25,5k</td></tr>
<tr><td class="crd-td"><strong>Nazareth</strong></td><td class="crd-td">32,7, 35,3</td><td class="crd-td">7,4k</td><td class="crd-td">8,8k</td><td class="crd-td">14,2k</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Acre</strong></td><td class="crd-td">32,93, 35,08</td><td class="crd-td">6,4k</td><td class="crd-td">7,9k</td><td class="crd-td">12,4k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Ashkelon</strong></td><td class="crd-td">31,67, 34,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Ramla</strong></td><td class="crd-td">31,93, 34,86</td><td class="crd-td">7,3k</td><td class="crd-td">10,3k</td><td class="crd-td">15,2k</td><td class="crd-td">22,7k</td></tr>
<tr><td class="crd-td"><strong>Tiberias</strong></td><td class="crd-td">32,79, 35,53</td><td class="crd-td">7k</td><td class="crd-td">8,6k</td><td class="crd-td">11,3k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Lod</strong></td><td class="crd-td">31,95, 34,9</td><td class="crd-td">8,1k</td><td class="crd-td">11,2k</td><td class="crd-td">16,8k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Kfar Saba</strong></td><td class="crd-td">32,17, 34,91</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">4,3k</td><td class="crd-td">17,7k</td></tr>
<tr><td class="crd-td"><strong>Nahariya</strong></td><td class="crd-td">33, 35,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Afula</strong></td><td class="crd-td">32,61, 35,29</td><td class="crd-td">-</td><td class="crd-td">874</td><td class="crd-td">2,3k</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Tirat Carmel</strong></td><td class="crd-td">32,77, 34,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Or Yehuda</strong></td><td class="crd-td">32,03, 34,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Safed</strong></td><td class="crd-td">32,96, 35,5</td><td class="crd-td">8,8k</td><td class="crd-td">9,4k</td><td class="crd-td">11,9k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Kiryat Shmona</strong></td><td class="crd-td">33,21, 35,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Ness Ziona</strong></td><td class="crd-td">31,93, 34,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Beisan</strong></td><td class="crd-td">32,5, 35,5</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">5,2k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Ra'anana</strong></td><td class="crd-td">32,18, 34,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Kiryat Yam</strong></td><td class="crd-td">32,83, 35,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Majdal</strong></td><td class="crd-td">31,67, 34,57</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td><td class="crd-td">9,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kiryat Gat</strong></td><td class="crd-td">31,61, 34,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Rosh HaAyin</strong></td><td class="crd-td">32,08, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Kiryat Ono</strong></td><td class="crd-td">32,06, 34,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Nesher</strong></td><td class="crd-td">32,77, 35,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Fahm</strong></td><td class="crd-td">32,52, 35,15</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Taibe</strong></td><td class="crd-td">32,27, 35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Shefa-Amr</strong></td><td class="crd-td">32,81, 35,17</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">3,6k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Beit Shemesh</strong></td><td class="crd-td">31,75, 34,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Yehud</strong></td><td class="crd-td">32,03, 34,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Tira</strong></td><td class="crd-td">32,23, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Tamra</strong></td><td class="crd-td">32,85, 35,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Yavne</strong></td><td class="crd-td">31,88, 34,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Sakhnin</strong></td><td class="crd-td">32,87, 35,3</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Kiryat Malachi</strong></td><td class="crd-td">31,73, 34,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Baqa al-Gharbiyye</strong></td><td class="crd-td">32,42, 35,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Ofakim</strong></td><td class="crd-td">31,28, 34,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Migdal HaEmek</strong></td><td class="crd-td">32,68, 35,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Sderot</strong></td><td class="crd-td">31,52, 34,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Bassa</strong></td><td class="crd-td">33,08, 35,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ashdod</strong></td><td class="crd-td">31,8, 34,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Nof HaGalil</strong></td><td class="crd-td">32,71, 35,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Mansura</strong></td><td class="crd-td">33,06, 35,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Zikhron Ya'akov</strong></td><td class="crd-td">32,57, 34,95</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Malha</strong></td><td class="crd-td">31,75, 35,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Az-Zeeb</strong></td><td class="crd-td">33,05, 35,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khirbat al-Wa'ra al-Sawda'</strong></td><td class="crd-td">32,83, 35,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Or Akiva</strong></td><td class="crd-td">32,5, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hunin</strong></td><td class="crd-td">33,21, 35,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Kabri</strong></td><td class="crd-td">33,02, 35,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Salihiyya</strong></td><td class="crd-td">33,17, 35,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khirbat Jiddin</strong></td><td class="crd-td">32,99, 35,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kafr Qasim</strong></td><td class="crd-td">32,12, 34,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Birwa</strong></td><td class="crd-td">32,91, 35,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Abu Snan</strong></td><td class="crd-td">32,96, 35,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nabi Rubin</strong></td><td class="crd-td">31,93, 34,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Nabi Rubin, Acre</strong></td><td class="crd-td">33,08, 35,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ni'ilya</strong></td><td class="crd-td">31,65, 34,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Damun</strong></td><td class="crd-td">32,88, 35,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ghuwayr Abu Shusha</strong></td><td class="crd-td">32,85, 35,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Suhmata</strong></td><td class="crd-td">33,01, 35,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Yasur</strong></td><td class="crd-td">31,77, 34,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kuwaykat</strong></td><td class="crd-td">32,97, 35,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Zuq al-Tahtani</strong></td><td class="crd-td">33,22, 35,6</td><td class="crd-td">-</td><td class="crd-td">626</td><td class="crd-td">1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Na'ima</strong></td><td class="crd-td">33,19, 35,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qula</strong></td><td class="crd-td">32,04, 34,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kafr Bir'im</strong></td><td class="crd-td">33,04, 35,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">710</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Alma</strong></td><td class="crd-td">33,06, 35,49</td><td class="crd-td">309</td><td class="crd-td">712</td><td class="crd-td">950</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-'Abisiyya</strong></td><td class="crd-td">33,2, 35,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">830</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Umm al-Faraj</strong></td><td class="crd-td">33, 35,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">800</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Ja'una</strong></td><td class="crd-td">32,97, 35,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">799</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mi'ar</strong></td><td class="crd-td">32,87, 35,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">770</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Sumayriyya</strong></td><td class="crd-td">32,97, 35,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">760</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Farradiyya</strong></td><td class="crd-td">32,93, 35,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">760</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jaljulia</strong></td><td class="crd-td">32,15, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">740</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Dawwara</strong></td><td class="crd-td">33,18, 35,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">700</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Najd, Gaza</strong></td><td class="crd-td">31,55, 34,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Muharraqa</strong></td><td class="crd-td">31,47, 34,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">580</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kafr Sabt</strong></td><td class="crd-td">32,74, 35,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">480</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Muqeible</strong></td><td class="crd-td">32,51, 35,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">460</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qabba'a</strong></td><td class="crd-td">33, 35,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">460</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mansurat al-Khayt</strong></td><td class="crd-td">32,97, 35,62</td><td class="crd-td">437</td><td class="crd-td">367</td><td class="crd-td">200</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khirbat al Manshiyya</strong></td><td class="crd-td">32,39, 34,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bir Salim</strong></td><td class="crd-td">31,93, 34,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">410</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hawsha</strong></td><td class="crd-td">32,79, 35,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">400</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Qudayriyya</strong></td><td class="crd-td">32,9, 35,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">390</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Arab Suqrir</strong></td><td class="crd-td">31,83, 34,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">390</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qadas</strong></td><td class="crd-td">33,11, 35,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">390</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Majdal</strong></td><td class="crd-td">32,82, 35,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">360</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kirad al-Baqqara</strong></td><td class="crd-td">33,02, 35,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">360</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Muftakhira</strong></td><td class="crd-td">33,16, 35,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">350</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Na'ura</strong></td><td class="crd-td">32,61, 35,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">340</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Nuqayb</strong></td><td class="crd-td">32,8, 35,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fara, Safad</strong></td><td class="crd-td">33,07, 35,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Dirbashiyya</strong></td><td class="crd-td">33,09, 35,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">310</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Biyar 'Adas</strong></td><td class="crd-td">32,16, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">300</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Samra</strong></td><td class="crd-td">32,72, 35,62</td><td class="crd-td">-</td><td class="crd-td">237</td><td class="crd-td">290</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Hamma, Tiberias</strong></td><td class="crd-td">32,69, 35,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">290</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Husayniyya</strong></td><td class="crd-td">33,04, 35,58</td><td class="crd-td">-</td><td class="crd-td">274</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qaddita</strong></td><td class="crd-td">33,01, 35,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Hamidiyya</strong></td><td class="crd-td">32,54, 35,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ghuraba</strong></td><td class="crd-td">33,12, 35,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">220</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Arab al-Samniyya</strong></td><td class="crd-td">33,05, 35,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">200</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed cities, founded colonies and enumerated villages in coastal, northern, Jerusalem and Negev Mandate Palestine and Israel (114 sites), 1922AD to 1960AD.</figcaption>
</figure>

## West Bank and Gaza Strip

Across the West Bank, Gaza Strip and Mandatory Palestine village rolls, 106 individually assessed towns and villages expanded from 89,3k at the 1922AD census to 107,8k in 1931AD and 262,2k in the 1945AD Village Statistics prior to the 1948AD refugee influx (Table \ref{tab:sett-palestine}). Gaza expanded from 17,5k in 1922AD to 17k in 1931AD and 34,2k in 1945AD, Hebron from 16,6k to 24,6k, Nablus from 15,9k to 23,3k, Khan Yunis from 3,9k to 11,2k, Bethlehem from 6,7k to 8,8k, Tulkarm from 3,4k to 8,1k, Qalqilya from 2,8k to 5,9k and Ramallah from 3,1k to 5,1k, complemented by dozens of rural highland and coastal plain villages down to 200 inhabitants [@Scott2001Mortality; @Muhsen2017Urban; @Anderson2017British; @Koylu2025Israel].

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
<tr><td class="crd-td"><strong>Salama, Jaffa</strong></td><td class="crd-td">32,05, 34,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Qalqilya</strong></td><td class="crd-td">32,19, 34,97</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Yibna</strong></td><td class="crd-td">31,87, 34,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Ramallah</strong></td><td class="crd-td">31,9, 35,2</td><td class="crd-td">3,1k</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Hamama</strong></td><td class="crd-td">31,69, 34,59</td><td class="crd-td">2,7k</td><td class="crd-td">3,4k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Yazur</strong></td><td class="crd-td">32,03, 34,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Jenin</strong></td><td class="crd-td">32,46, 35,3</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Bayt Dajan, Jaffa</strong></td><td class="crd-td">32, 34,83</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>'Ajjur</strong></td><td class="crd-td">31,69, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Jabalia</strong></td><td class="crd-td">31,53, 34,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Halhul</strong></td><td class="crd-td">31,58, 35,1</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Jericho</strong></td><td class="crd-td">31,87, 35,45</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Ijzim</strong></td><td class="crd-td">32,64, 34,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Kafr 'Ana</strong></td><td class="crd-td">32,03, 34,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Nabi Musa</strong></td><td class="crd-td">31,78, 35,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Qubayba, Ramla</strong></td><td class="crd-td">31,89, 34,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Aqir</strong></td><td class="crd-td">31,86, 34,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Jura</strong></td><td class="crd-td">31,67, 34,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Bayt Mahsir</strong></td><td class="crd-td">31,79, 35,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Zarnuqa</strong></td><td class="crd-td">31,88, 34,79</td><td class="crd-td">967</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Bayt Nabala</strong></td><td class="crd-td">31,99, 34,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Hiribya</strong></td><td class="crd-td">31,61, 34,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Rafah</strong></td><td class="crd-td">31,3, 34,24</td><td class="crd-td">599</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Bayt Nattif</strong></td><td class="crd-td">31,7, 35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Dayr Aban</strong></td><td class="crd-td">31,74, 35,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Iraq al-Manshiyya</strong></td><td class="crd-td">31,6, 34,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Al-Qubab</strong></td><td class="crd-td">31,87, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Qaqun</strong></td><td class="crd-td">32,36, 35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Sarafand al-Amar</strong></td><td class="crd-td">31,96, 34,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Mujaydil</strong></td><td class="crd-td">32,68, 35,24</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Salfit</strong></td><td class="crd-td">32,08, 35,18</td><td class="crd-td">901</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Maghar</strong></td><td class="crd-td">31,84, 34,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Sabbarin</strong></td><td class="crd-td">32,57, 35,02</td><td class="crd-td">845</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>al-Walaja</strong></td><td class="crd-td">31,73, 35,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Wadi Hunayn</strong></td><td class="crd-td">31,93, 34,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Bashshit</strong></td><td class="crd-td">31,82, 34,75</td><td class="crd-td">936</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Jimzu</strong></td><td class="crd-td">31,93, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Umm az-Zinat</strong></td><td class="crd-td">32,65, 35,06</td><td class="crd-td">787</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Na'ani</strong></td><td class="crd-td">31,87, 34,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Zir'in</strong></td><td class="crd-td">32,56, 35,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Khayriyya</strong></td><td class="crd-td">32,04, 34,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Karatiyya</strong></td><td class="crd-td">31,64, 34,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Wadi al-Hawarith</strong></td><td class="crd-td">32,39, 34,9</td><td class="crd-td">812</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Qalunya</strong></td><td class="crd-td">31,79, 35,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Jiyya</strong></td><td class="crd-td">31,63, 34,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Fajja</strong></td><td class="crd-td">32,09, 34,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Deir Istiya</strong></td><td class="crd-td">32,13, 35,14</td><td class="crd-td">674</td><td class="crd-td">886</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Jusayr</strong></td><td class="crd-td">31,66, 34,77</td><td class="crd-td">579</td><td class="crd-td">839</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Muzayri'a</strong></td><td class="crd-td">32,05, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Naghnaghiya</strong></td><td class="crd-td">32,6, 35,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Barrat Qisarya</strong></td><td class="crd-td">32,51, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Mazari an-Nubani</strong></td><td class="crd-td">32,05, 35,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Deir Jarir</strong></td><td class="crd-td">31,96, 35,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Jammasin al-Gharbi</strong></td><td class="crd-td">32,09, 34,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Sawafir al-Gharbiyya</strong></td><td class="crd-td">31,7, 34,7</td><td class="crd-td">572</td><td class="crd-td">723</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Umm Khalid</strong></td><td class="crd-td">32,33, 34,87</td><td class="crd-td">307</td><td class="crd-td">586</td><td class="crd-td">970</td></tr>
<tr><td class="crd-td"><strong>Al-Kafrayn</strong></td><td class="crd-td">32,57, 35,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">920</td></tr>
<tr><td class="crd-td"><strong>Qastina</strong></td><td class="crd-td">31,74, 34,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890</td></tr>
<tr><td class="crd-td"><strong>Miska</strong></td><td class="crd-td">32,22, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">880</td></tr>
<tr><td class="crd-td"><strong>Abu Shusha</strong></td><td class="crd-td">31,86, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">870</td></tr>
<tr><td class="crd-td"><strong>Raml Zayta</strong></td><td class="crd-td">32,44, 34,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840</td></tr>
<tr><td class="crd-td"><strong>Jayyus</strong></td><td class="crd-td">32,2, 35,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">830</td></tr>
<tr><td class="crd-td"><strong>Huj</strong></td><td class="crd-td">31,51, 34,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">810</td></tr>
<tr><td class="crd-td"><strong>Al-Tina</strong></td><td class="crd-td">31,75, 34,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">755</td></tr>
<tr><td class="crd-td"><strong>Qannir</strong></td><td class="crd-td">32,53, 35,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">750</td></tr>
<tr><td class="crd-td"><strong>Dayr Sunayd</strong></td><td class="crd-td">31,57, 34,55</td><td class="crd-td">356</td><td class="crd-td">475</td><td class="crd-td">730</td></tr>
<tr><td class="crd-td"><strong>Deir al-Dubban</strong></td><td class="crd-td">31,67, 34,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">730</td></tr>
<tr><td class="crd-td"><strong>Suba</strong></td><td class="crd-td">31,78, 35,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Kharbatha al-Misbah</strong></td><td class="crd-td">31,89, 35,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">600</td></tr>
<tr><td class="crd-td"><strong>Dayr Nakhkhas</strong></td><td class="crd-td">31,62, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">600</td></tr>
<tr><td class="crd-td"><strong>Yasuf</strong></td><td class="crd-td">32,11, 35,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">585</td></tr>
<tr><td class="crd-td"><strong>Saris</strong></td><td class="crd-td">31,8, 35,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">560</td></tr>
<tr><td class="crd-td"><strong>Ma'dhar</strong></td><td class="crd-td">32,69, 35,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">560</td></tr>
<tr><td class="crd-td"><strong>Abu Zurayq</strong></td><td class="crd-td">32,63, 35,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">550</td></tr>
<tr><td class="crd-td"><strong>Bir Ma'in</strong></td><td class="crd-td">31,9, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">510</td></tr>
<tr><td class="crd-td"><strong>Kawfakha</strong></td><td class="crd-td">31,48, 34,66</td><td class="crd-td">203</td><td class="crd-td">317</td><td class="crd-td">500</td></tr>
<tr><td class="crd-td"><strong>Umm ash Shauf</strong></td><td class="crd-td">32,55, 35,05</td><td class="crd-td">252</td><td class="crd-td">353</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Khirbat Bayt Lid</strong></td><td class="crd-td">32,32, 34,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Kudna</strong></td><td class="crd-td">31,64, 34,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Qumya</strong></td><td class="crd-td">32,57, 35,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">440</td></tr>
<tr><td class="crd-td"><strong>Kafra, Baysan</strong></td><td class="crd-td">32,59, 35,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">430</td></tr>
<tr><td class="crd-td"><strong>Qira, Salfit</strong></td><td class="crd-td">32,12, 35,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">410</td></tr>
<tr><td class="crd-td"><strong>Qira</strong></td><td class="crd-td">32,65, 35,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">410</td></tr>
<tr><td class="crd-td"><strong>Sajad</strong></td><td class="crd-td">31,78, 34,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">370</td></tr>
<tr><td class="crd-td"><strong>Al-Jaladiyya</strong></td><td class="crd-td">31,7, 34,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">360</td></tr>
<tr><td class="crd-td"><strong>Kafr Lam</strong></td><td class="crd-td">32,64, 34,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">340</td></tr>
<tr><td class="crd-td"><strong>Sar'a</strong></td><td class="crd-td">31,78, 34,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">340</td></tr>
<tr><td class="crd-td"><strong>Farwana</strong></td><td class="crd-td">32,45, 35,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">330</td></tr>
<tr><td class="crd-td"><strong>Mirka</strong></td><td class="crd-td">32,4, 35,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">303</td></tr>
<tr><td class="crd-td"><strong>Abu Qash</strong></td><td class="crd-td">31,95, 35,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">300</td></tr>
<tr><td class="crd-td"><strong>Bayt Far, Khirbat</strong></td><td class="crd-td">31,8, 34,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">300</td></tr>
<tr><td class="crd-td"><strong>Wadi Fukin</strong></td><td class="crd-td">31,71, 35,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">280</td></tr>
<tr><td class="crd-td"><strong>Daliyat al-Rawha'</strong></td><td class="crd-td">32,59, 35,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">280</td></tr>
<tr><td class="crd-td"><strong>Khirbat Al-'Umur</strong></td><td class="crd-td">31,79, 35,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">270</td></tr>
<tr><td class="crd-td"><strong>Al-Qabu</strong></td><td class="crd-td">31,73, 35,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">260</td></tr>
<tr><td class="crd-td"><strong>Jisr al-Majma</strong></td><td class="crd-td">32,65, 35,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">250</td></tr>
<tr><td class="crd-td"><strong>al-Kum</strong></td><td class="crd-td">31,53, 34,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">247</td></tr>
<tr><td class="crd-td"><strong>Dayr Ayyub</strong></td><td class="crd-td">31,83, 35,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">230</td></tr>
<tr><td class="crd-td"><strong>Wadi Ara, Haifa</strong></td><td class="crd-td">32,48, 35,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">230</td></tr>
<tr><td class="crd-td"><strong>Al-Mukhayzin</strong></td><td class="crd-td">31,8, 34,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">200</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed towns and villages in the West Bank, Gaza Strip and Mandatory Palestine Village Statistics (106 sites), 1922AD to 1945AD.</figcaption>
</figure>

## British Crown Colony of Cyprus

Cyprus contributes 173 municipalities, agrarian towns and rural villages drawn from the official 1881–1960AD British colonial censuses, rising from 155k at the 1921AD colonial census to 178,6k in 1931AD, 241,4k in 1946AD and 311,1k in combined peak population across all six colonial districts (Table \ref{tab:sett-cyprus}). Nicosia municipal limits (18,6k to 45,6k in 1960AD), Limassol (13,3k to 43,6k), Famagusta (7k to 34,8k), Larnaca (9,8k to 19,8k), Paphos (4,1k to 9,1k) and Morphou (3,1k to 6,6k) trace balanced port, mining and administrative growth alongside more than a hundred enumerated Mesaoria, Karpas, Troodos and Kyrenia villages.

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
<tr><td class="crd-td"><strong>Omorfita</strong></td><td class="crd-td">35,18, 33,42</td><td class="crd-td">585</td><td class="crd-td">861</td><td class="crd-td">2,3k</td><td class="crd-td">6,3k</td></tr>
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
<tr><td class="crd-td"><strong>Lefkoniko</strong></td><td class="crd-td">35,26, 33,73</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vatili</strong></td><td class="crd-td">35,13, 33,66</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Trikomo</strong></td><td class="crd-td">35,29, 33,89</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Dhali</strong></td><td class="crd-td">35,02, 33,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Askeia</strong></td><td class="crd-td">35,16, 33,61</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Louroukina</strong></td><td class="crd-td">35,01, 33,46</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Akanthou</strong></td><td class="crd-td">35,39, 33,75</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Marathovounos</strong></td><td class="crd-td">35,22, 33,62</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Amvrosios Keryneias</strong></td><td class="crd-td">35,34, 33,58</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Karavostasi</strong></td><td class="crd-td">35,14, 32,81</td><td class="crd-td">-</td><td class="crd-td">305</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kato Zodeia</strong></td><td class="crd-td">35,17, 33,01</td><td class="crd-td">756</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Sergios</strong></td><td class="crd-td">35,2, 33,88</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lakatamia</strong></td><td class="crd-td">35,11, 33,31</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Koilani</strong></td><td class="crd-td">34,84, 32,86</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gerolakkos</strong></td><td class="crd-td">35,18, 33,25</td><td class="crd-td">822</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geroskipou</strong></td><td class="crd-td">34,76, 32,45</td><td class="crd-td">881</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kato Dikomo</strong></td><td class="crd-td">35,27, 33,32</td><td class="crd-td">848</td><td class="crd-td">961</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Komi Kepir</strong></td><td class="crd-td">35,41, 34</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Polis</strong></td><td class="crd-td">35,04, 32,43</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Kalavasos</strong></td><td class="crd-td">34,76, 33,31</td><td class="crd-td">953</td><td class="crd-td">957</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Episkopi</strong></td><td class="crd-td">34,67, 32,9</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kontea</strong></td><td class="crd-td">35,1, 33,72</td><td class="crd-td">729</td><td class="crd-td">857</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kyperounta</strong></td><td class="crd-td">34,94, 32,97</td><td class="crd-td">567</td><td class="crd-td">652</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Galateia</strong></td><td class="crd-td">35,42, 34,07</td><td class="crd-td">882</td><td class="crd-td">944</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gypsou</strong></td><td class="crd-td">35,26, 33,79</td><td class="crd-td">848</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Neo Chorio Lefkosias</strong></td><td class="crd-td">35,22, 33,46</td><td class="crd-td">812</td><td class="crd-td">821</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Milia Ammochostou</strong></td><td class="crd-td">35,21, 33,81</td><td class="crd-td">643</td><td class="crd-td">826</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Petra</strong></td><td class="crd-td">35,11, 32,91</td><td class="crd-td">739</td><td class="crd-td">983</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Epiktitos</strong></td><td class="crd-td">35,33, 33,39</td><td class="crd-td">827</td><td class="crd-td">777</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Koma tou Gialou</strong></td><td class="crd-td">35,43, 34,13</td><td class="crd-td">730</td><td class="crd-td">842</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Leonarisso</strong></td><td class="crd-td">35,47, 34,14</td><td class="crd-td">790</td><td class="crd-td">858</td><td class="crd-td">1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tymvou</strong></td><td class="crd-td">35,15, 33,5</td><td class="crd-td">691</td><td class="crd-td">822</td><td class="crd-td">1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Germasogeia</strong></td><td class="crd-td">34,72, 33,09</td><td class="crd-td">706</td><td class="crd-td">705</td><td class="crd-td">1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Prastio Ammochostou</strong></td><td class="crd-td">35,18, 33,76</td><td class="crd-td">817</td><td class="crd-td">880</td><td class="crd-td">985</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Argaki</strong></td><td class="crd-td">35,18, 33,04</td><td class="crd-td">647</td><td class="crd-td">656</td><td class="crd-td">974</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kazafani</strong></td><td class="crd-td">35,32, 33,35</td><td class="crd-td">754</td><td class="crd-td">748</td><td class="crd-td">962</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kiti</strong></td><td class="crd-td">34,85, 33,58</td><td class="crd-td">682</td><td class="crd-td">796</td><td class="crd-td">949</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Acheritou</strong></td><td class="crd-td">35,1, 33,86</td><td class="crd-td">538</td><td class="crd-td">696</td><td class="crd-td">947</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Palaikythro</strong></td><td class="crd-td">35,21, 33,49</td><td class="crd-td">626</td><td class="crd-td">674</td><td class="crd-td">909</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kormakitis</strong></td><td class="crd-td">35,34, 33,01</td><td class="crd-td">676</td><td class="crd-td">736</td><td class="crd-td">894</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Klirou</strong></td><td class="crd-td">35,02, 33,18</td><td class="crd-td">634</td><td class="crd-td">671</td><td class="crd-td">879</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vasileia</strong></td><td class="crd-td">35,35, 33,11</td><td class="crd-td">614</td><td class="crd-td">677</td><td class="crd-td">877</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalopsida</strong></td><td class="crd-td">35,1, 33,79</td><td class="crd-td">471</td><td class="crd-td">574</td><td class="crd-td">851</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Galini</strong></td><td class="crd-td">35,14, 32,77</td><td class="crd-td">583</td><td class="crd-td">812</td><td class="crd-td">849</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Patriki</strong></td><td class="crd-td">35,36, 34</td><td class="crd-td">586</td><td class="crd-td">609</td><td class="crd-td">832</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kathikas</strong></td><td class="crd-td">34,91, 32,43</td><td class="crd-td">537</td><td class="crd-td">578</td><td class="crd-td">822</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Angastina</strong></td><td class="crd-td">35,2, 33,59</td><td class="crd-td">661</td><td class="crd-td">672</td><td class="crd-td">805</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sinta</strong></td><td class="crd-td">35,16, 33,7</td><td class="crd-td">562</td><td class="crd-td">623</td><td class="crd-td">798</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Diorios</strong></td><td class="crd-td">35,31, 33,03</td><td class="crd-td">700</td><td class="crd-td">688</td><td class="crd-td">795</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kouklia</strong></td><td class="crd-td">34,71, 32,57</td><td class="crd-td">520</td><td class="crd-td">547</td><td class="crd-td">791</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mia Milia</strong></td><td class="crd-td">35,22, 33,42</td><td class="crd-td">452</td><td class="crd-td">557</td><td class="crd-td">771</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Emba</strong></td><td class="crd-td">34,81, 32,42</td><td class="crd-td">468</td><td class="crd-td">594</td><td class="crd-td">762</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kornos</strong></td><td class="crd-td">34,92, 33,4</td><td class="crd-td">501</td><td class="crd-td">497</td><td class="crd-td">755</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pentageia</strong></td><td class="crd-td">35,15, 32,88</td><td class="crd-td">319</td><td class="crd-td">420</td><td class="crd-td">736</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Süleyman Demirel</strong></td><td class="crd-td">35,26, 33,6</td><td class="crd-td">543</td><td class="crd-td">517</td><td class="crd-td">721</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Larnakas Lapithou</strong></td><td class="crd-td">35,31, 33,14</td><td class="crd-td">566</td><td class="crd-td">609</td><td class="crd-td">719</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kokkinotrimithia</strong></td><td class="crd-td">35,15, 33,2</td><td class="crd-td">460</td><td class="crd-td">539</td><td class="crd-td">716</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Myrtou</strong></td><td class="crd-td">35,31, 33,07</td><td class="crd-td">537</td><td class="crd-td">587</td><td class="crd-td">683</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Inia</strong></td><td class="crd-td">34,96, 32,39</td><td class="crd-td">637</td><td class="crd-td">603</td><td class="crd-td">682</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalograia</strong></td><td class="crd-td">35,35, 33,64</td><td class="crd-td">566</td><td class="crd-td">553</td><td class="crd-td">682</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kofinou</strong></td><td class="crd-td">34,82, 33,39</td><td class="crd-td">541</td><td class="crd-td">548</td><td class="crd-td">680</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kissonerga</strong></td><td class="crd-td">34,82, 32,4</td><td class="crd-td">424</td><td class="crd-td">485</td><td class="crd-td">677</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Davlos</strong></td><td class="crd-td">35,42, 33,91</td><td class="crd-td">661</td><td class="crd-td">662</td><td class="crd-td">599</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mora</strong></td><td class="crd-td">35,17, 33,55</td><td class="crd-td">661</td><td class="crd-td">547</td><td class="crd-td">627</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Afanteia-Ornithi</strong></td><td class="crd-td">35,16, 33,58</td><td class="crd-td">520</td><td class="crd-td">495</td><td class="crd-td">657</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kritou Terra</strong></td><td class="crd-td">34,96, 32,42</td><td class="crd-td">624</td><td class="crd-td">526</td><td class="crd-td">648</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ampelikou</strong></td><td class="crd-td">35,12, 32,8</td><td class="crd-td">439</td><td class="crd-td">534</td><td class="crd-td">641</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kontemenos</strong></td><td class="crd-td">35,27, 33,13</td><td class="crd-td">439</td><td class="crd-td">558</td><td class="crd-td">637</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pera</strong></td><td class="crd-td">35,03, 33,25</td><td class="crd-td">571</td><td class="crd-td">606</td><td class="crd-td">621</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Episkopi</strong></td><td class="crd-td">34,8, 32,53</td><td class="crd-td">457</td><td class="crd-td">399</td><td class="crd-td">615</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kapouti</strong></td><td class="crd-td">35,24, 33,04</td><td class="crd-td">418</td><td class="crd-td">474</td><td class="crd-td">613</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Genagra</strong></td><td class="crd-td">35,22, 33,7</td><td class="crd-td">556</td><td class="crd-td">532</td><td class="crd-td">613</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Stylloi</strong></td><td class="crd-td">35,17, 33,83</td><td class="crd-td">486</td><td class="crd-td">521</td><td class="crd-td">613</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Skylloura</strong></td><td class="crd-td">35,23, 33,17</td><td class="crd-td">511</td><td class="crd-td">506</td><td class="crd-td">598</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Elia Lefkosias</strong></td><td class="crd-td">35,14, 32,91</td><td class="crd-td">437</td><td class="crd-td">465</td><td class="crd-td">594</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Makrasyka</strong></td><td class="crd-td">35,07, 33,76</td><td class="crd-td">305</td><td class="crd-td">376</td><td class="crd-td">566</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Choirokoitia</strong></td><td class="crd-td">34,8, 33,34</td><td class="crd-td">514</td><td class="crd-td">473</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Charkeia</strong></td><td class="crd-td">35,32, 33,55</td><td class="crd-td">318</td><td class="crd-td">314</td><td class="crd-td">556</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalo Chorio Soleas</strong></td><td class="crd-td">35,12, 32,88</td><td class="crd-td">309</td><td class="crd-td">552</td><td class="crd-td">544</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kolossi</strong></td><td class="crd-td">34,67, 32,93</td><td class="crd-td">411</td><td class="crd-td">392</td><td class="crd-td">546</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Knodara</strong></td><td class="crd-td">35,26, 33,66</td><td class="crd-td">545</td><td class="crd-td">519</td><td class="crd-td">518</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Korakou</strong></td><td class="crd-td">35,04, 32,88</td><td class="crd-td">356</td><td class="crd-td">391</td><td class="crd-td">524</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Klavdia</strong></td><td class="crd-td">34,89, 33,51</td><td class="crd-td">329</td><td class="crd-td">411</td><td class="crd-td">518</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Arsos, Larnaca</strong></td><td class="crd-td">35,09, 33,63</td><td class="crd-td">349</td><td class="crd-td">449</td><td class="crd-td">516</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Trypimeni</strong></td><td class="crd-td">35,31, 33,63</td><td class="crd-td">476</td><td class="crd-td">433</td><td class="crd-td">515</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Giolou</strong></td><td class="crd-td">34,92, 32,47</td><td class="crd-td">375</td><td class="crd-td">421</td><td class="crd-td">508</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kallepia</strong></td><td class="crd-td">34,85, 32,5</td><td class="crd-td">411</td><td class="crd-td">414</td><td class="crd-td">506</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fyllia</strong></td><td class="crd-td">35,19, 33,09</td><td class="crd-td">355</td><td class="crd-td">365</td><td class="crd-td">505</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pano Kivides</strong></td><td class="crd-td">34,76, 32,86</td><td class="crd-td">495</td><td class="crd-td">437</td><td class="crd-td">504</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Ermolaos</strong></td><td class="crd-td">35,28, 33,17</td><td class="crd-td">335</td><td class="crd-td">377</td><td class="crd-td">495</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lapathos</strong></td><td class="crd-td">35,27, 33,83</td><td class="crd-td">386</td><td class="crd-td">416</td><td class="crd-td">481</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kedhares</strong></td><td class="crd-td">34,84, 32,74</td><td class="crd-td">329</td><td class="crd-td">365</td><td class="crd-td">476</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vathylakas</strong></td><td class="crd-td">35,48, 34,19</td><td class="crd-td">385</td><td class="crd-td">466</td><td class="crd-td">471</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Eptagoneia</strong></td><td class="crd-td">34,85, 33,16</td><td class="crd-td">385</td><td class="crd-td">343</td><td class="crd-td">470</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kili</strong></td><td class="crd-td">34,86, 32,46</td><td class="crd-td">374</td><td class="crd-td">408</td><td class="crd-td">465</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Epicho</strong></td><td class="crd-td">35,23, 33,51</td><td class="crd-td">462</td><td class="crd-td">411</td><td class="crd-td">462</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Psyllatos</strong></td><td class="crd-td">35,25, 33,69</td><td class="crd-td">409</td><td class="crd-td">460</td><td class="crd-td">455</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sysklipos</strong></td><td class="crd-td">35,3, 33,17</td><td class="crd-td">380</td><td class="crd-td">396</td><td class="crd-td">454</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Platanissos</strong></td><td class="crd-td">35,48, 34,11</td><td class="crd-td">359</td><td class="crd-td">419</td><td class="crd-td">445</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vokolida</strong></td><td class="crd-td">35,38, 34,07</td><td class="crd-td">294</td><td class="crd-td">354</td><td class="crd-td">428</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Vasileios</strong></td><td class="crd-td">35,22, 33,19</td><td class="crd-td">338</td><td class="crd-td">348</td><td class="crd-td">415</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agia</strong></td><td class="crd-td">35,11, 33,56</td><td class="crd-td">329</td><td class="crd-td">295</td><td class="crd-td">414</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Syrianochori</strong></td><td class="crd-td">35,22, 32,94</td><td class="crd-td">340</td><td class="crd-td">370</td><td class="crd-td">410</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Platani</strong></td><td class="crd-td">35,33, 33,75</td><td class="crd-td">269</td><td class="crd-td">312</td><td class="crd-td">410</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Avlona</strong></td><td class="crd-td">35,16, 33,11</td><td class="crd-td">219</td><td class="crd-td">249</td><td class="crd-td">406</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kellaki</strong></td><td class="crd-td">34,82, 33,16</td><td class="crd-td">311</td><td class="crd-td">221</td><td class="crd-td">393</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Spathariko</strong></td><td class="crd-td">35,24, 33,87</td><td class="crd-td">229</td><td class="crd-td">281</td><td class="crd-td">390</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Strongylos</strong></td><td class="crd-td">35,17, 33,64</td><td class="crd-td">349</td><td class="crd-td">339</td><td class="crd-td">390</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vouno</strong></td><td class="crd-td">35,27, 33,39</td><td class="crd-td">211</td><td class="crd-td">237</td><td class="crd-td">389</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Phiti</strong></td><td class="crd-td">34,93, 32,54</td><td class="crd-td">313</td><td class="crd-td">328</td><td class="crd-td">383</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Georgios Keryneias</strong></td><td class="crd-td">35,35, 33,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">380</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kellia</strong></td><td class="crd-td">34,98, 33,62</td><td class="crd-td">205</td><td class="crd-td">274</td><td class="crd-td">380</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agia Eirini Keryneias</strong></td><td class="crd-td">35,3, 32,96</td><td class="crd-td">-</td><td class="crd-td">284</td><td class="crd-td">368</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Flamoudi</strong></td><td class="crd-td">35,4, 33,86</td><td class="crd-td">335</td><td class="crd-td">326</td><td class="crd-td">366</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Nikolaos Ammochostou</strong></td><td class="crd-td">35,33, 33,68</td><td class="crd-td">205</td><td class="crd-td">252</td><td class="crd-td">366</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gerani</strong></td><td class="crd-td">35,36, 33,92</td><td class="crd-td">301</td><td class="crd-td">366</td><td class="crd-td">358</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fotta</strong></td><td class="crd-td">35,26, 33,22</td><td class="crd-td">299</td><td class="crd-td">297</td><td class="crd-td">365</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kyra</strong></td><td class="crd-td">35,2, 33,06</td><td class="crd-td">248</td><td class="crd-td">264</td><td class="crd-td">362</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mandres Lefkosias</strong></td><td class="crd-td">35,22, 33,38</td><td class="crd-td">254</td><td class="crd-td">276</td><td class="crd-td">361</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vitsada</strong></td><td class="crd-td">35,24, 33,65</td><td class="crd-td">271</td><td class="crd-td">293</td><td class="crd-td">345</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sygkrasi</strong></td><td class="crd-td">35,27, 33,85</td><td class="crd-td">307</td><td class="crd-td">343</td><td class="crd-td">345</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Melouseia</strong></td><td class="crd-td">35,08, 33,58</td><td class="crd-td">211</td><td class="crd-td">217</td><td class="crd-td">343</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Goufes</strong></td><td class="crd-td">35,28, 33,69</td><td class="crd-td">302</td><td class="crd-td">287</td><td class="crd-td">335</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gaidouras</strong></td><td class="crd-td">35,17, 33,79</td><td class="crd-td">268</td><td class="crd-td">282</td><td class="crd-td">331</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kantou</strong></td><td class="crd-td">34,69, 32,91</td><td class="crd-td">234</td><td class="crd-td">247</td><td class="crd-td">329</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Klepini</strong></td><td class="crd-td">35,31, 33,43</td><td class="crd-td">283</td><td class="crd-td">268</td><td class="crd-td">328</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Krideia</strong></td><td class="crd-td">35,39, 33,97</td><td class="crd-td">243</td><td class="crd-td">232</td><td class="crd-td">327</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agia Marina Skyllouras</strong></td><td class="crd-td">35,23, 33,13</td><td class="crd-td">202</td><td class="crd-td">249</td><td class="crd-td">323</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dhrymou</strong></td><td class="crd-td">34,93, 32,51</td><td class="crd-td">272</td><td class="crd-td">272</td><td class="crd-td">323</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dymes</strong></td><td class="crd-td">34,92, 32,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">321</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loutros</strong></td><td class="crd-td">35,16, 32,76</td><td class="crd-td">237</td><td class="crd-td">271</td><td class="crd-td">307</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pyrogi</strong></td><td class="crd-td">35,07, 33,49</td><td class="crd-td">-</td><td class="crd-td">219</td><td class="crd-td">296</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agios Andronikos Trikomou</strong></td><td class="crd-td">35,34, 33,87</td><td class="crd-td">-</td><td class="crd-td">202</td><td class="crd-td">286</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kornokipos</strong></td><td class="crd-td">35,28, 33,57</td><td class="crd-td">202</td><td class="crd-td">-</td><td class="crd-td">280</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Agirda</strong></td><td class="crd-td">35,29, 33,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">279</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Galataria</strong></td><td class="crd-td">34,88, 32,63</td><td class="crd-td">260</td><td class="crd-td">258</td><td class="crd-td">277</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Istinjon</strong></td><td class="crd-td">34,98, 32,53</td><td class="crd-td">268</td><td class="crd-td">216</td><td class="crd-td">220</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Krini</strong></td><td class="crd-td">35,29, 33,24</td><td class="crd-td">246</td><td class="crd-td">239</td><td class="crd-td">267</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Koroveia</strong></td><td class="crd-td">35,51, 34,27</td><td class="crd-td">213</td><td class="crd-td">211</td><td class="crd-td">263</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kotsiatis</strong></td><td class="crd-td">35,01, 33,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">262</td></tr>
<tr><td class="crd-td"><strong>Mousoulita</strong></td><td class="crd-td">35,19, 33,64</td><td class="crd-td">206</td><td class="crd-td">201</td><td class="crd-td">255</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Doros</strong></td><td class="crd-td">34,82, 32,91</td><td class="crd-td">-</td><td class="crd-td">245</td><td class="crd-td">254</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nikitas</strong></td><td class="crd-td">35,18, 32,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">251</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kouklia, Famagusta</strong></td><td class="crd-td">35,11, 33,75</td><td class="crd-td">-</td><td class="crd-td">236</td><td class="crd-td">242</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Petra tou Digeni</strong></td><td class="crd-td">35,24, 33,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">236</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kazivera</strong></td><td class="crd-td">35,17, 32,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">235</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gerasa</strong></td><td class="crd-td">34,8, 33</td><td class="crd-td">211</td><td class="crd-td">231</td><td class="crd-td">224</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Templos</strong></td><td class="crd-td">35,33, 33,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">227</td></tr>
<tr><td class="crd-td"><strong>Kampyli</strong></td><td class="crd-td">35,3, 33,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">226</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Neta</strong></td><td class="crd-td">35,47, 34,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">222</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalyvakia</strong></td><td class="crd-td">35,26, 33,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">217</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kinousa</strong></td><td class="crd-td">35,03, 32,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">215</td></tr>
<tr><td class="crd-td"><strong>Artemi</strong></td><td class="crd-td">35,32, 33,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">211</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Angolemi</strong></td><td class="crd-td">35,12, 32,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">210</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kivisili</strong></td><td class="crd-td">34,84, 33,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">205</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Phalia</strong></td><td class="crd-td">34,86, 32,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">201</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed towns, municipalities and enumerated villages in British Cyprus (173 sites) across colonial censuses, 1921AD to 1960AD.</figcaption>
</figure>

# Limitations

Three reporting asymmetries affect the settlement gazetteer. First, Lebanon's lack of post-1932AD national censuses means its fifteen individually assessed towns rely on the 1932AD official enumeration paired with Mandate civil registries, 1943AD Admiralty handbooks and 1946–1960AD municipal projections rather than decennial post-war censuses [@Saber2023French; @Dionigi2017Statehood]. Second, staggered Mandate termination and national census schedules prevent uniform synchronous cross-sections: Mandatory Palestine village entries from the 1922–1945AD Village Statistics close at 1945AD (1948AD for Jerusalem and selected localities) prior to partition and the 1948AD Nakba [@Marom2021Jind; @Marom2024Lajjun; @Oron2021Century], Iraq's entries close at the 1957AD Kingdom census, whereas Syria, Lebanon, Jordan, Cyprus and CBS Israel municipalities continue to 1960AD. Third, municipal boundary definitions differ across statistical traditions — Nicosia's 45,6k figure in 1960AD reflects municipal limits excluding roughly 50k suburban residents, whereas Baghdad's 793,2k in 1957AD encompasses Greater Baghdad — while 129 subordinate suburbs or co-located variant candidates out of 603 evaluated entries were excluded from the ledger to prevent spatial double-counting.

# Conclusion

Across 474 individually assessed Mandate-era settlements, documented town and village populations across the Levant, Iraq and Cyprus expanded from 1,87M across 1918–1922AD to 4,18M across 1945–1947AD, with documented 1957–1960AD enumerations reaching 6,02M and the full 474-site gazetteer totalling 6,84M in combined peak population. Administrative centralisation, oil extraction, port expansion and refugee displacements concentrated growth inside a steep primate hierarchy ($\alpha = 1{,}747$, $R^2 = 0{,}945$) led by Baghdad, Damascus, Beirut, Aleppo and Amman alongside Jerusalem, Haifa, Mosul, Tel Aviv, Basra, Nicosia and Limassol. Paired with subadministrative rural disaggregation, these urban and village series anchor the spatial population reconstruction of the post-Ottoman Near East.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums individually assessed settlements and combined catalogued populations across all seven successor jurisdictions over four documented census windows from 1918AD to 1960AD alongside combined peak totals.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">1918-1922AD</th><th class="crd-th">1930-1936AD</th><th class="crd-th">1945-1947AD</th><th class="crd-th">1957-1960AD</th><th class="crd-th">Peak Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">29</td><td class="crd-td">635k</td><td class="crd-td">924,7k</td><td class="crd-td">1,3M</td><td class="crd-td">1,98M</td><td class="crd-td">1,98M</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">23</td><td class="crd-td">542,4k</td><td class="crd-td">815,6k</td><td class="crd-td">1,07M</td><td class="crd-td">1,61M</td><td class="crd-td">1,61M</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">114</td><td class="crd-td">171,5k</td><td class="crd-td">286,2k</td><td class="crd-td">741,5k</td><td class="crd-td">1,02M</td><td class="crd-td">1,46M</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">15</td><td class="crd-td">228,8k</td><td class="crd-td">310,8k</td><td class="crd-td">464,4k</td><td class="crd-td">769k</td><td class="crd-td">769k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">14</td><td class="crd-td">50,1k</td><td class="crd-td">69,9k</td><td class="crd-td">107,8k</td><td class="crd-td">438,6k</td><td class="crd-td">440,5k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">173</td><td class="crd-td">155k</td><td class="crd-td">178,6k</td><td class="crd-td">241,4k</td><td class="crd-td">204,9k</td><td class="crd-td">311,1k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">106</td><td class="crd-td">89,3k</td><td class="crd-td">107,8k</td><td class="crd-td">262,2k</td><td class="crd-td">-</td><td class="crd-td">262,3k</td></tr>
<tr><td class="crd-td"><strong>All Jurisdictions</strong></td><td class="crd-td">474</td><td class="crd-td">1,87M</td><td class="crd-td">2,69M</td><td class="crd-td">4,18M</td><td class="crd-td">6,02M</td><td class="crd-td">6,84M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Combined catalogued population across all 474 individually assessed Mandate-era settlements by jurisdiction across census windows, 1918AD to 1960AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

<div class="crd-footnotes-slot" data-crd-footnotes="true"></div>

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
hero_caption: "Six British and French Mandate and colonial jurisdictions across Iraq, Syria, Greater Lebanon, Transjordan, Palestine and Cyprus between 1918AD and 1960AD, showing 434 catalogued towns and administrative centres."
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

This gazetteer compiles longitudinal population series for 434 towns, administrative centres and planned settlements across the British and French Mandates of Mesopotamia, Syria, Greater Lebanon, Transjordan and Palestine together with British Cyprus from 1918AD to 1960AD. Drawing on official Mandate enumerations — Palestine's 1922AD and 1931AD censuses and 1945AD Village Statistics, Lebanon's 1932AD census, Iraq's 1920AD administrative estimate and 1947AD national census, Transjordan's 1952AD housing census and Cyprus's decennial colonial censuses from 1881AD to 1960AD — alongside successor-state municipal series, the ledger traces aggregate urban growth from 6,03M inhabitants in 1918AD to 7,85M in 1930AD, 12,01M in 1950AD and 14,9M in 1960AD. Thirty-four subordinate suburbs are consolidated into their metropolitan cores, ten late-nineteenth and twentieth-century settlements are truncated at their documented foundation dates and all entries conform to a steep rank-size hierarchy ($\alpha = 1{,}206$, $R^2 = 0{,}917$) led by Baghdad, Damascus, Aleppo, Amman and Beirut.

# Background



Urban life across the eastern Mediterranean and Mesopotamia entered the Mandate era deeply scarred by First World War requisitioning, blockade famine and epidemic disease [@Saber2023French; @Greenshields2025Settlment]. Between 1918AD and 1960AD, however, imperial rail and motor-road construction, deep-water port works at Beirut, Haifa, Basra and Limassol, oil pipelines from Kirkuk to the Mediterranean and growing bureaucratic apparatuses turned provincial administrative seats into rapidly expanding cities [@Bosworth2007Historic; @Kastrissianakis2016Exploring]. Coastal plain centres in Mandate Palestine and Greater Lebanon absorbed maritime trade, Zionist immigration and Cilician Armenian refugees, while inland railheads such as Amman, Zarqa, Qamishli and Kirkuk grew from modest garrison stops or oil camps into major provincial hubs [@Beenstock2025Origins; @Chukov2022Kurdish; @Galletti2007Some]. After 1948AD, the partition of Palestine and the Nakba refugee exodus further reshaped urban scales across Gaza, the West Bank, Jordan and Lebanon [@Koylu2025Israel; @Muhsen2017Urban; @Dionigi2017Statehood].

# Methodology

The 434 catalogued entries were harvested through four sequential curation waves screening 470 municipal and district candidates from national statistical agencies — COSIT Iraq, CAS Lebanon, CBS Israel, CBS Syria, DOS Jordan, PCBS Palestine and the Cyprus Statistical Service — supplemented by historical settlement monographs [@Marom2021Jind; @Marom2024Lajjun; @Scott2001Mortality]. Two candidates outside the regional domain boundary were removed, and 34 satellite suburbs that coalesced into larger urban agglomerations were merged into their parent municipalities to avoid spatial double-counting on the urban mask. Zero entries derive from crowd-sourced fallback estimates.

All settlement series span 1918AD to 1960AD regardless of the year in which an individual Mandate terminated (1932AD in Iraq, 1946AD in Syria, Lebanon and Transjordan, 1948AD in Palestine and 1960AD in Cyprus), enabling continuous comparison across the 42-year transition. Ten settlements founded in the late nineteenth or twentieth century carry explicit foundation-year bounds: Rehovot (1890AD), Hadera (1891AD), Tel Aviv-Yafo (1909AD), Ramat Gan (1921AD), Bat Yam (1926AD), Netanya (1929AD), Holon (1935AD), Dimona (1955AD), Qiryat Gat (1955AD) and Ashdod (1956AD) [@Beenstock2025Origins; @Remer2025Degania]. Prior to those dates, tables display a hyphen (-) rather than synthetic back-projections. Toponyms follow scholarly Latin romanisation (ALA-LC and BGN/PCGN) across Arabic, Hebrew, Kurdish, Armenian, Turkish and Greek place-names.

# Testing and Validation

Each country's catalogued settlement sum was reconciled against historical subadministrative census totals from 1918–1960AD and linked into the 169 geoBoundaries modern polygons [@Runfola2020GeoBoundaries] used for pycnophylactic mass-conserving disaggregation across the five-arcminute regional grid. Across the full sample of $n = 434$ towns at peak population, log-log rank-size regression produces a Zipf exponent $\alpha = 1{,}206$ with $R^2 = 0{,}917$ (Figure \ref{fig:settlements-ranksize}), reflecting pronounced primate dominance by Baghdad (2,12M in 1960AD), Damascus (700,7k), Aleppo (620,8k), Amman (470,6k) and Beirut (421,2k).

<figure class="crd-figure-block" id="fig:settlements-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mandates-levant-iraq-cyprus-settlements/fig4_mandates_levant_iraq_cyprus_settlements.png" alt="fig:settlements-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 434 catalogued settlements and peak populations of the twelve largest urban centres from 1918AD to 1960AD.</figcaption>
</figure>

# Results

## Mesopotamia and Iraq

Iraq accounts for 155 catalogued towns whose combined population rose from 2,69M in 1918AD to 3,51M in 1930AD, 5,44M in 1950AD and 6,78M in 1960AD (Table \ref{tab:sett-iraq}). Baghdad expanded nearly two-and-a-half times (841,8k to 2,12M) as central ministries, railway workshops and rural migrants from the southern marshes converged on the Tigris bend [@Bosworth2007Historic]. Northern provincial seats Mosul (145,6k to 366,7k), Erbil (106,5k to 268,3k), Kirkuk (91,7k to 231,1k) and Sulaymaniyah (79,8k to 201k) expanded alongside oil-field infrastructure, while Basra (89k to 224,3k) and the Euphrates shrine and market centres Najaf (67,7k to 170,6k), Karbala (65k to 163,8k), Hillah (58,9k to 148,4k) and Nasiriyah (58,3k to 146,8k) anchored southern riverine settlement.

<figure class="crd-table-figure" id="tab:sett-iraq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdād</strong></td><td class="crd-td">33,34, 44,4</td><td class="crd-td">841,8k</td><td class="crd-td">1,1M</td><td class="crd-td">1,7M</td><td class="crd-td">2,12M</td></tr>
<tr><td class="crd-td"><strong>Al-Mawṣil</strong></td><td class="crd-td">36,34, 43,12</td><td class="crd-td">145,6k</td><td class="crd-td">189,5k</td><td class="crd-td">294,3k</td><td class="crd-td">366,7k</td></tr>
<tr><td class="crd-td"><strong>Arbīl</strong></td><td class="crd-td">36,19, 44,01</td><td class="crd-td">106,5k</td><td class="crd-td">138,7k</td><td class="crd-td">215,3k</td><td class="crd-td">268,3k</td></tr>
<tr><td class="crd-td"><strong>Kirkūk</strong></td><td class="crd-td">35,47, 44,39</td><td class="crd-td">91,7k</td><td class="crd-td">119,5k</td><td class="crd-td">185,5k</td><td class="crd-td">231,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Baṣrah</strong></td><td class="crd-td">30,51, 47,78</td><td class="crd-td">89k</td><td class="crd-td">115,9k</td><td class="crd-td">180k</td><td class="crd-td">224,3k</td></tr>
<tr><td class="crd-td"><strong>As-Sulaymāniyah</strong></td><td class="crd-td">35,56, 45,43</td><td class="crd-td">79,8k</td><td class="crd-td">103,9k</td><td class="crd-td">161,3k</td><td class="crd-td">201k</td></tr>
<tr><td class="crd-td"><strong>An-Najaf</strong></td><td class="crd-td">32,03, 44,35</td><td class="crd-td">67,7k</td><td class="crd-td">88,2k</td><td class="crd-td">136,9k</td><td class="crd-td">170,6k</td></tr>
<tr><td class="crd-td"><strong>Karbalā'</strong></td><td class="crd-td">32,62, 44,02</td><td class="crd-td">65k</td><td class="crd-td">84,7k</td><td class="crd-td">131,5k</td><td class="crd-td">163,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥillah</strong></td><td class="crd-td">32,46, 44,42</td><td class="crd-td">58,9k</td><td class="crd-td">76,7k</td><td class="crd-td">119,1k</td><td class="crd-td">148,4k</td></tr>
<tr><td class="crd-td"><strong>An-Nāṣiriyah</strong></td><td class="crd-td">31,06, 46,26</td><td class="crd-td">58,3k</td><td class="crd-td">75,9k</td><td class="crd-td">117,8k</td><td class="crd-td">146,8k</td></tr>
<tr><td class="crd-td"><strong>Al-'Amārah</strong></td><td class="crd-td">31,84, 47,14</td><td class="crd-td">45,8k</td><td class="crd-td">59,6k</td><td class="crd-td">92,5k</td><td class="crd-td">115,3k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dīwāniyah</strong></td><td class="crd-td">31,99, 44,93</td><td class="crd-td">43,1k</td><td class="crd-td">56,1k</td><td class="crd-td">87,1k</td><td class="crd-td">108,5k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ramādī</strong></td><td class="crd-td">33,42, 43,31</td><td class="crd-td">42,2k</td><td class="crd-td">54,9k</td><td class="crd-td">85,3k</td><td class="crd-td">106,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Kūt</strong></td><td class="crd-td">32,51, 45,82</td><td class="crd-td">40,1k</td><td class="crd-td">52,3k</td><td class="crd-td">81,2k</td><td class="crd-td">101,1k</td></tr>
<tr><td class="crd-td"><strong>Dahūk</strong></td><td class="crd-td">36,87, 42,99</td><td class="crd-td">37,8k</td><td class="crd-td">49,3k</td><td class="crd-td">76,5k</td><td class="crd-td">95,3k</td></tr>
<tr><td class="crd-td"><strong>Az-Zubayr</strong></td><td class="crd-td">30,39, 47,7</td><td class="crd-td">33,1k</td><td class="crd-td">43,1k</td><td class="crd-td">66,9k</td><td class="crd-td">83,3k</td></tr>
<tr><td class="crd-td"><strong>Ba'qūbah</strong></td><td class="crd-td">33,75, 44,61</td><td class="crd-td">30,8k</td><td class="crd-td">40,1k</td><td class="crd-td">62,2k</td><td class="crd-td">77,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Fallūjah</strong></td><td class="crd-td">33,35, 43,79</td><td class="crd-td">27,5k</td><td class="crd-td">35,8k</td><td class="crd-td">55,6k</td><td class="crd-td">69,2k</td></tr>
<tr><td class="crd-td"><strong>As-Samāwah</strong></td><td class="crd-td">31,33, 45,29</td><td class="crd-td">24,2k</td><td class="crd-td">31,5k</td><td class="crd-td">48,9k</td><td class="crd-td">61k</td></tr>
<tr><td class="crd-td"><strong>Zākhū</strong></td><td class="crd-td">37,15, 42,69</td><td class="crd-td">23,5k</td><td class="crd-td">30,6k</td><td class="crd-td">47,6k</td><td class="crd-td">59,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥur</strong></td><td class="crd-td">32,67, 44</td><td class="crd-td">23,3k</td><td class="crd-td">30,4k</td><td class="crd-td">47,2k</td><td class="crd-td">58,8k</td></tr>
<tr><td class="crd-td"><strong>Abū al-Kahṣīb</strong></td><td class="crd-td">30,44, 47,88</td><td class="crd-td">22,3k</td><td class="crd-td">29k</td><td class="crd-td">45,1k</td><td class="crd-td">56,2k</td></tr>
<tr><td class="crd-td"><strong>Tal'afar</strong></td><td class="crd-td">36,38, 42,45</td><td class="crd-td">19,4k</td><td class="crd-td">25,3k</td><td class="crd-td">39,3k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>Al-Kūfah</strong></td><td class="crd-td">32,05, 44,44</td><td class="crd-td">19,1k</td><td class="crd-td">24,9k</td><td class="crd-td">38,6k</td><td class="crd-td">48,1k</td></tr>
<tr><td class="crd-td"><strong>Kalār</strong></td><td class="crd-td">34,63, 45,32</td><td class="crd-td">16,2k</td><td class="crd-td">21,1k</td><td class="crd-td">32,8k</td><td class="crd-td">40,9k</td></tr>
<tr><td class="crd-td"><strong>Sāmarrā'</strong></td><td class="crd-td">34,2, 43,89</td><td class="crd-td">16,1k</td><td class="crd-td">20,9k</td><td class="crd-td">32,5k</td><td class="crd-td">40,5k</td></tr>
<tr><td class="crd-td"><strong>Sūq ash-Shuyūkh</strong></td><td class="crd-td">30,89, 46,45</td><td class="crd-td">14,5k</td><td class="crd-td">18,9k</td><td class="crd-td">29,3k</td><td class="crd-td">36,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Qurnah</strong></td><td class="crd-td">31,02, 47,43</td><td class="crd-td">13,9k</td><td class="crd-td">18,1k</td><td class="crd-td">28,1k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Al-Hārithah</strong></td><td class="crd-td">30,58, 47,76</td><td class="crd-td">12,9k</td><td class="crd-td">16,8k</td><td class="crd-td">26,1k</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Waḥdah</strong></td><td class="crd-td">33,31, 44,44</td><td class="crd-td">12,3k</td><td class="crd-td">16k</td><td class="crd-td">24,9k</td><td class="crd-td">31k</td></tr>
<tr><td class="crd-td"><strong>Tikrīt</strong></td><td class="crd-td">34,62, 43,68</td><td class="crd-td">12,1k</td><td class="crd-td">15,8k</td><td class="crd-td">24,5k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭūz Khūrmātū</strong></td><td class="crd-td">34,89, 44,63</td><td class="crd-td">11,4k</td><td class="crd-td">14,8k</td><td class="crd-td">23k</td><td class="crd-td">28,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥmūdiyah</strong></td><td class="crd-td">33,06, 44,37</td><td class="crd-td">11,3k</td><td class="crd-td">14,7k</td><td class="crd-td">22,8k</td><td class="crd-td">28,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Majar al-Kabīr</strong></td><td class="crd-td">31,68, 47,2</td><td class="crd-td">10,3k</td><td class="crd-td">13,4k</td><td class="crd-td">20,9k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Rānyah</strong></td><td class="crd-td">36,26, 44,88</td><td class="crd-td">10,3k</td><td class="crd-td">13,4k</td><td class="crd-td">20,8k</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥamzah</strong></td><td class="crd-td">37,09, 43,43</td><td class="crd-td">9,6k</td><td class="crd-td">12,5k</td><td class="crd-td">19,5k</td><td class="crd-td">24,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Hindiyah</strong></td><td class="crd-td">32,54, 44,22</td><td class="crd-td">9,4k</td><td class="crd-td">12,2k</td><td class="crd-td">19k</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥay</strong></td><td class="crd-td">32,17, 46,04</td><td class="crd-td">9,3k</td><td class="crd-td">12,1k</td><td class="crd-td">18,7k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Baījī</strong></td><td class="crd-td">34,93, 43,49</td><td class="crd-td">9,2k</td><td class="crd-td">12k</td><td class="crd-td">18,6k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Qāsim</strong></td><td class="crd-td">32,3, 44,68</td><td class="crd-td">9k</td><td class="crd-td">11,7k</td><td class="crd-td">18,2k</td><td class="crd-td">22,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Muqdādiyah</strong></td><td class="crd-td">33,98, 44,94</td><td class="crd-td">8,8k</td><td class="crd-td">11,4k</td><td class="crd-td">17,8k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣuwaīrah</strong></td><td class="crd-td">36,01, 44,78</td><td class="crd-td">8,4k</td><td class="crd-td">10,9k</td><td class="crd-td">16,9k</td><td class="crd-td">21,1k</td></tr>
<tr><td class="crd-td"><strong>Qaladiza</strong></td><td class="crd-td">36,18, 45,13</td><td class="crd-td">8,3k</td><td class="crd-td">10,8k</td><td class="crd-td">16,7k</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Qā'im</strong></td><td class="crd-td">34,39, 40,99</td><td class="crd-td">8,1k</td><td class="crd-td">10,6k</td><td class="crd-td">16,4k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Bakrah Jū</strong></td><td class="crd-td">35,56, 45,36</td><td class="crd-td">8k</td><td class="crd-td">10,4k</td><td class="crd-td">16,1k</td><td class="crd-td">20,1k</td></tr>
<tr><td class="crd-td"><strong>Sumaīl</strong></td><td class="crd-td">36,86, 42,85</td><td class="crd-td">7,9k</td><td class="crd-td">10,3k</td><td class="crd-td">16,1k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>Fāīdah</strong></td><td class="crd-td">36,76, 42,93</td><td class="crd-td">7,8k</td><td class="crd-td">10,1k</td><td class="crd-td">15,7k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>'Ākra</strong></td><td class="crd-td">36,73, 43,88</td><td class="crd-td">7,6k</td><td class="crd-td">9,8k</td><td class="crd-td">15,3k</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Ḥalabjah</strong></td><td class="crd-td">35,2, 45,91</td><td class="crd-td">7,5k</td><td class="crd-td">9,8k</td><td class="crd-td">15,2k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Khasnahzān</strong></td><td class="crd-td">36,2, 44,14</td><td class="crd-td">7,3k</td><td class="crd-td">9,6k</td><td class="crd-td">14,9k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Hīt</strong></td><td class="crd-td">33,64, 42,83</td><td class="crd-td">7,3k</td><td class="crd-td">9,5k</td><td class="crd-td">14,8k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Jamjamāl</strong></td><td class="crd-td">35,53, 44,83</td><td class="crd-td">7,3k</td><td class="crd-td">9,5k</td><td class="crd-td">14,7k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Sūrān</strong></td><td class="crd-td">35,31, 44,82</td><td class="crd-td">7,2k</td><td class="crd-td">9,3k</td><td class="crd-td">14,5k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Baladrūz</strong></td><td class="crd-td">33,7, 45,08</td><td class="crd-td">7k</td><td class="crd-td">9,2k</td><td class="crd-td">14,2k</td><td class="crd-td">17,7k</td></tr>
<tr><td class="crd-td"><strong>Kuysanjaq</strong></td><td class="crd-td">36,12, 45,17</td><td class="crd-td">6,9k</td><td class="crd-td">9k</td><td class="crd-td">14k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Khāliṣ</strong></td><td class="crd-td">33,81, 44,53</td><td class="crd-td">6,9k</td><td class="crd-td">9k</td><td class="crd-td">13,9k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Saīd Ṣādiq</strong></td><td class="crd-td">35,35, 45,87</td><td class="crd-td">6,9k</td><td class="crd-td">9k</td><td class="crd-td">13,9k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Jalawlā'</strong></td><td class="crd-td">34,27, 45,17</td><td class="crd-td">6,8k</td><td class="crd-td">8,9k</td><td class="crd-td">13,8k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Balad</strong></td><td class="crd-td">34,01, 44,15</td><td class="crd-td">6,7k</td><td class="crd-td">8,7k</td><td class="crd-td">13,5k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Madḥatiyah</strong></td><td class="crd-td">32,4, 44,67</td><td class="crd-td">6,6k</td><td class="crd-td">8,6k</td><td class="crd-td">13,3k</td><td class="crd-td">16,6k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shāmiyah</strong></td><td class="crd-td">32,82, 45,02</td><td class="crd-td">6,4k</td><td class="crd-td">8,4k</td><td class="crd-td">13k</td><td class="crd-td">16,2k</td></tr>
<tr><td class="crd-td"><strong>Diyānā</strong></td><td class="crd-td">36,66, 44,54</td><td class="crd-td">6,4k</td><td class="crd-td">8,4k</td><td class="crd-td">13k</td><td class="crd-td">16,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Musayab</strong></td><td class="crd-td">32,78, 44,29</td><td class="crd-td">6,3k</td><td class="crd-td">8,3k</td><td class="crd-td">12,8k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shirqāṭ</strong></td><td class="crd-td">35,53, 43,22</td><td class="crd-td">6,1k</td><td class="crd-td">7,9k</td><td class="crd-td">12,3k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Al-'Azīziyah</strong></td><td class="crd-td">32,91, 45,06</td><td class="crd-td">6,1k</td><td class="crd-td">7,9k</td><td class="crd-td">12,3k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Ḥājī 'Āwā</strong></td><td class="crd-td">36,24, 44,79</td><td class="crd-td">6k</td><td class="crd-td">7,8k</td><td class="crd-td">12,1k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Dārahtūū</strong></td><td class="crd-td">35,15, 46,15</td><td class="crd-td">6k</td><td class="crd-td">7,8k</td><td class="crd-td">12,1k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Qal'at Sikar</strong></td><td class="crd-td">31,86, 46,07</td><td class="crd-td">5,9k</td><td class="crd-td">7,7k</td><td class="crd-td">11,9k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Shūrash</strong></td><td class="crd-td">35,52, 44,84</td><td class="crd-td">5,8k</td><td class="crd-td">7,5k</td><td class="crd-td">11,7k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Khānaqīn</strong></td><td class="crd-td">34,35, 45,39</td><td class="crd-td">5,7k</td><td class="crd-td">7,4k</td><td class="crd-td">11,5k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>An-Naṣr</strong></td><td class="crd-td">32,33, 44,68</td><td class="crd-td">5,6k</td><td class="crd-td">7,3k</td><td class="crd-td">11,4k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Umm Qaṣr</strong></td><td class="crd-td">30,04, 47,92</td><td class="crd-td">5,5k</td><td class="crd-td">7,1k</td><td class="crd-td">11,1k</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Gharrāf</strong></td><td class="crd-td">31,3, 46,24</td><td class="crd-td">5,4k</td><td class="crd-td">7k</td><td class="crd-td">10,8k</td><td class="crd-td">13,5k</td></tr>
<tr><td class="crd-td"><strong>Baghdīdā</strong></td><td class="crd-td">36,27, 43,38</td><td class="crd-td">5,2k</td><td class="crd-td">6,8k</td><td class="crd-td">10,5k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Ḥadīṭha</strong></td><td class="crd-td">34,14, 42,38</td><td class="crd-td">5,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,3k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Darbandikhān</strong></td><td class="crd-td">35,11, 45,69</td><td class="crd-td">5,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,3k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Ṭalḥah</strong></td><td class="crd-td">30,98, 47,4</td><td class="crd-td">5k</td><td class="crd-td">6,5k</td><td class="crd-td">10,1k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawījah</strong></td><td class="crd-td">34,02, 44,38</td><td class="crd-td">5k</td><td class="crd-td">6,5k</td><td class="crd-td">10k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaīrawān</strong></td><td class="crd-td">36,4, 43,14</td><td class="crd-td">4,7k</td><td class="crd-td">6,2k</td><td class="crd-td">9,6k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Sinjār</strong></td><td class="crd-td">36,32, 41,88</td><td class="crd-td">4,6k</td><td class="crd-td">6k</td><td class="crd-td">9,3k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Kūthā</strong></td><td class="crd-td">34,08, 44,78</td><td class="crd-td">4,3k</td><td class="crd-td">5,6k</td><td class="crd-td">8,6k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'at Ṣāliḥ</strong></td><td class="crd-td">31,53, 47,29</td><td class="crd-td">4,2k</td><td class="crd-td">5,4k</td><td class="crd-td">8,5k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dujaīl</strong></td><td class="crd-td">33,85, 44,23</td><td class="crd-td">4k</td><td class="crd-td">5,3k</td><td class="crd-td">8,2k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>'Afak</strong></td><td class="crd-td">32,06, 45,25</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">8k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭārmiyah</strong></td><td class="crd-td">33,67, 44,4</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">8k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Talkayf</strong></td><td class="crd-td">36,49, 43,12</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">8k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Fāw</strong></td><td class="crd-td">29,97, 48,47</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">8k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Kifrī</strong></td><td class="crd-td">34,69, 44,96</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">7,8k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Ghammās</strong></td><td class="crd-td">31,74, 44,62</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">7,8k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Khabāt</strong></td><td class="crd-td">36,27, 43,64</td><td class="crd-td">3,8k</td><td class="crd-td">5k</td><td class="crd-td">7,8k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Muṣṭafā</strong></td><td class="crd-td">33,83, 45,44</td><td class="crd-td">3,8k</td><td class="crd-td">5k</td><td class="crd-td">7,8k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Ba'shīqah</strong></td><td class="crd-td">36,45, 43,35</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,7k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Baḥarkah</strong></td><td class="crd-td">36,32, 44,04</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,6k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Pīrmām</strong></td><td class="crd-td">36,39, 44,2</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,6k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shāfī</strong></td><td class="crd-td">34,31, 44,29</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Rizkārī</strong></td><td class="crd-td">37,11, 42,62</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Manādhirah</strong></td><td class="crd-td">31,91, 44,49</td><td class="crd-td">3,5k</td><td class="crd-td">4,6k</td><td class="crd-td">7,2k</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥabbāniyah</strong></td><td class="crd-td">33,38, 43,59</td><td class="crd-td">3,5k</td><td class="crd-td">4,6k</td><td class="crd-td">7,2k</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥāwīl</strong></td><td class="crd-td">32,66, 44,41</td><td class="crd-td">3,4k</td><td class="crd-td">4,5k</td><td class="crd-td">7k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Ad-Daīr</strong></td><td class="crd-td">30,8, 47,58</td><td class="crd-td">3,4k</td><td class="crd-td">4,5k</td><td class="crd-td">6,9k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Mishkhāb</strong></td><td class="crd-td">31,8, 44,49</td><td class="crd-td">3,4k</td><td class="crd-td">4,5k</td><td class="crd-td">6,9k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Harīr</strong></td><td class="crd-td">36,55, 44,35</td><td class="crd-td">3,4k</td><td class="crd-td">4,4k</td><td class="crd-td">6,8k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Ba'āj</strong></td><td class="crd-td">36,04, 41,72</td><td class="crd-td">3,3k</td><td class="crd-td">4,3k</td><td class="crd-td">6,6k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Fajr</strong></td><td class="crd-td">31,92, 45,96</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Al-Madā'in</strong></td><td class="crd-td">33,1, 44,58</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>'Az Aldīn Salīm</strong></td><td class="crd-td">34,06, 44,8</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Fuhūd</strong></td><td class="crd-td">30,97, 46,72</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Altūn Kūbrī</strong></td><td class="crd-td">35,75, 44,15</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruṭbah</strong></td><td class="crd-td">33,04, 40,29</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Bīrah Makrūn</strong></td><td class="crd-td">35,73, 45,14</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Ṭakiyah</strong></td><td class="crd-td">35,61, 44,93</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Qasrūk</strong></td><td class="crd-td">36,63, 44,18</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6,1k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Banī Sa'd</strong></td><td class="crd-td">33,99, 44,21</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6,1k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Bardarash</strong></td><td class="crd-td">35,42, 45,81</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Ainkāwah</strong></td><td class="crd-td">36,23, 43,99</td><td class="crd-td">3k</td><td class="crd-td">3,8k</td><td class="crd-td">6k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Baṭḥā'a</strong></td><td class="crd-td">31,13, 45,87</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">5,8k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Shaqlāwah</strong></td><td class="crd-td">36,4, 44,33</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">5,7k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Safwān</strong></td><td class="crd-td">30,12, 47,72</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">5,7k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Abī Gharaq</strong></td><td class="crd-td">32,53, 44,34</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">5,7k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Ḥamām al-'Alīl</strong></td><td class="crd-td">36,16, 43,26</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Banjwīn</strong></td><td class="crd-td">35,62, 45,95</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawr</strong></td><td class="crd-td">34,46, 43,79</td><td class="crd-td">2,5k</td><td class="crd-td">3,3k</td><td class="crd-td">5,1k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Kifl</strong></td><td class="crd-td">32,23, 44,38</td><td class="crd-td">2,5k</td><td class="crd-td">3,3k</td><td class="crd-td">5,1k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Kan'ān</strong></td><td class="crd-td">33,69, 44,81</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Kaḥlā'</strong></td><td class="crd-td">31,67, 47,29</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Barṭallah</strong></td><td class="crd-td">36,35, 43,38</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">4,9k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dibs</strong></td><td class="crd-td">35,67, 44,07</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,7k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>'Anah</strong></td><td class="crd-td">34,37, 41,98</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ad-Daghārah</strong></td><td class="crd-td">32,14, 44,93</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Budaīr</strong></td><td class="crd-td">31,86, 45,44</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Maīmūnah</strong></td><td class="crd-td">31,68, 46,97</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Az-Zubaīdiyah</strong></td><td class="crd-td">32,76, 45,18</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Laṭīfiyah</strong></td><td class="crd-td">33,02, 44,18</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">4,3k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Rabī'ah</strong></td><td class="crd-td">36,8, 42,1</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">4,3k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shīkhān</strong></td><td class="crd-td">36,72, 44,58</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">4,2k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥaydariyah</strong></td><td class="crd-td">31,31, 45,28</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">4,1k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Makhmūr</strong></td><td class="crd-td">35,78, 43,58</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tāzah Khūrmātū</strong></td><td class="crd-td">35,3, 44,33</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Zumār</strong></td><td class="crd-td">35,99, 43,45</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">4k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Wāsiṭ</strong></td><td class="crd-td">32,38, 45,23</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">4k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Khalīfān</strong></td><td class="crd-td">36,61, 44,4</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>'Alī al-Gharbī</strong></td><td class="crd-td">32,46, 46,69</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Qūshtabah</strong></td><td class="crd-td">36,01, 44,03</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Hibhib</strong></td><td class="crd-td">33,78, 44,51</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Karmat Banī Sa'īd</strong></td><td class="crd-td">30,91, 46,59</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Barwānah</strong></td><td class="crd-td">34,1, 42,39</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rashīd</strong></td><td class="crd-td">30,88, 46,48</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Darkār</strong></td><td class="crd-td">37,2, 42,82</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Iṣlāḥ</strong></td><td class="crd-td">31,17, 46,6</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Yūsufiyah</strong></td><td class="crd-td">33,08, 44,26</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,5k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Al-'Abāsiyah</strong></td><td class="crd-td">32,08, 44,44</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Qarah Tabah</strong></td><td class="crd-td">36,1, 45,03</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Al-'Alam</strong></td><td class="crd-td">34,71, 43,7</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Karmah</strong></td><td class="crd-td">30,57, 47,73</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣaqlāwiyah</strong></td><td class="crd-td">33,4, 43,68</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued settlements in Iraq (155 sites) across benchmark years from 1918AD to 1960AD.</figcaption>
</figure>

## Syria and the Euphrates-Jazira Corridor

Syria contributes 82 towns growing from 1,2M in 1918AD to 1,56M in 1930AD, 2,42M in 1950AD and 3,01M in 1960AD (Table \ref{tab:sett-syria}). Damascus (278,1k to 700,7k) and Aleppo (246,4k to 620,8k) retained commanding bi-polar primacy even after the 1939AD transfer of the Sanjak of Alexandretta to Turkey displaced Armenian and Arab townspeople into Aleppo and the coast [@USTUN2016Example; @Hovhannisyan2025Catholicos; @Abdulla2022]. Central and coastal nodes Homs (86,7k to 218,5k), Latakia (49,2k to 124k) and Hama (44,3k to 111,6k) expanded steadily [@Goldsmith2012Politics], while Qamishli (23,3k to 58,6k) and Hasakeh anchored rapid agricultural settlement across the Jazira [@Chukov2022Kurdish; @Tillo2022Lights; @Galletti2007Some; @Pashayan2026Minority].

<figure class="crd-table-figure" id="tab:sett-syria">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dimashq</strong></td><td class="crd-td">33,51, 36,29</td><td class="crd-td">278,1k</td><td class="crd-td">362,2k</td><td class="crd-td">562,3k</td><td class="crd-td">700,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥalab</strong></td><td class="crd-td">36,2, 37,16</td><td class="crd-td">246,4k</td><td class="crd-td">320,9k</td><td class="crd-td">498,2k</td><td class="crd-td">620,8k</td></tr>
<tr><td class="crd-td"><strong>Ḥimṣ</strong></td><td class="crd-td">34,72, 36,73</td><td class="crd-td">86,7k</td><td class="crd-td">113k</td><td class="crd-td">175,4k</td><td class="crd-td">218,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Lādhiqiyah</strong></td><td class="crd-td">35,53, 35,79</td><td class="crd-td">49,2k</td><td class="crd-td">64,1k</td><td class="crd-td">99,5k</td><td class="crd-td">124k</td></tr>
<tr><td class="crd-td"><strong>Ḥamāh</strong></td><td class="crd-td">35,13, 36,76</td><td class="crd-td">44,3k</td><td class="crd-td">57,7k</td><td class="crd-td">89,6k</td><td class="crd-td">111,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Qāmishlī</strong></td><td class="crd-td">37,05, 41,23</td><td class="crd-td">23,3k</td><td class="crd-td">30,3k</td><td class="crd-td">47k</td><td class="crd-td">58,6k</td></tr>
<tr><td class="crd-td"><strong>Dayr az-Zawr</strong></td><td class="crd-td">35,34, 40,14</td><td class="crd-td">23k</td><td class="crd-td">30k</td><td class="crd-td">46,6k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Ar-Raqqah</strong></td><td class="crd-td">35,95, 39,01</td><td class="crd-td">21,8k</td><td class="crd-td">28,4k</td><td class="crd-td">44,1k</td><td class="crd-td">54,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Yarmūk</strong></td><td class="crd-td">33,47, 36,3</td><td class="crd-td">20,7k</td><td class="crd-td">26,9k</td><td class="crd-td">41,8k</td><td class="crd-td">52,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥasakah</strong></td><td class="crd-td">36,5, 40,75</td><td class="crd-td">18,4k</td><td class="crd-td">23,9k</td><td class="crd-td">37,1k</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>Jaramānā</strong></td><td class="crd-td">33,49, 36,35</td><td class="crd-td">16,1k</td><td class="crd-td">20,9k</td><td class="crd-td">32,5k</td><td class="crd-td">40,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭarṭūs</strong></td><td class="crd-td">34,89, 35,89</td><td class="crd-td">13,2k</td><td class="crd-td">17,1k</td><td class="crd-td">26,6k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Idlib</strong></td><td class="crd-td">35,93, 36,63</td><td class="crd-td">12,9k</td><td class="crd-td">16,8k</td><td class="crd-td">26,1k</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Dūmā</strong></td><td class="crd-td">33,57, 36,4</td><td class="crd-td">12,8k</td><td class="crd-td">16,7k</td><td class="crd-td">26k</td><td class="crd-td">32,3k</td></tr>
<tr><td class="crd-td"><strong>Dar'ā</strong></td><td class="crd-td">32,62, 36,1</td><td class="crd-td">12,4k</td><td class="crd-td">16,1k</td><td class="crd-td">25k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Ath-Thawrah</strong></td><td class="crd-td">35,84, 38,55</td><td class="crd-td">11,2k</td><td class="crd-td">14,6k</td><td class="crd-td">22,6k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td"><strong>As-Suwaydā'</strong></td><td class="crd-td">32,71, 36,57</td><td class="crd-td">10,9k</td><td class="crd-td">14,1k</td><td class="crd-td">21,9k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>As-Salamiyah</strong></td><td class="crd-td">35,01, 37,05</td><td class="crd-td">9k</td><td class="crd-td">11,7k</td><td class="crd-td">18,2k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Dārayyā</strong></td><td class="crd-td">33,46, 36,23</td><td class="crd-td">8,5k</td><td class="crd-td">11,1k</td><td class="crd-td">17,2k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Manbij</strong></td><td class="crd-td">36,53, 37,95</td><td class="crd-td">7,7k</td><td class="crd-td">10k</td><td class="crd-td">15,6k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Babīlā</strong></td><td class="crd-td">33,47, 36,33</td><td class="crd-td">7,7k</td><td class="crd-td">10k</td><td class="crd-td">15,5k</td><td class="crd-td">19,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Bāb</strong></td><td class="crd-td">36,37, 37,52</td><td class="crd-td">7,5k</td><td class="crd-td">9,8k</td><td class="crd-td">15,2k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Judaydat 'Arṭūz</strong></td><td class="crd-td">33,44, 36,16</td><td class="crd-td">6,8k</td><td class="crd-td">8,8k</td><td class="crd-td">13,7k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td"><strong>'Arbīn</strong></td><td class="crd-td">33,54, 36,37</td><td class="crd-td">6,8k</td><td class="crd-td">8,8k</td><td class="crd-td">13,7k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Kiswah</strong></td><td class="crd-td">33,36, 36,24</td><td class="crd-td">6,6k</td><td class="crd-td">8,5k</td><td class="crd-td">13,2k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Ḥarastā al-Baṣal</strong></td><td class="crd-td">33,56, 36,37</td><td class="crd-td">6,4k</td><td class="crd-td">8,4k</td><td class="crd-td">13k</td><td class="crd-td">16,2k</td></tr>
<tr><td class="crd-td"><strong>Jablah</strong></td><td class="crd-td">35,36, 35,93</td><td class="crd-td">6,2k</td><td class="crd-td">8,1k</td><td class="crd-td">12,5k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Hajīn</strong></td><td class="crd-td">34,7, 40,83</td><td class="crd-td">5,7k</td><td class="crd-td">7,4k</td><td class="crd-td">11,6k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>'Aīn Tarmā</strong></td><td class="crd-td">33,51, 36,35</td><td class="crd-td">5,4k</td><td class="crd-td">7k</td><td class="crd-td">10,9k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Jisr ash-Shughūr</strong></td><td class="crd-td">35,81, 36,32</td><td class="crd-td">5,4k</td><td class="crd-td">7k</td><td class="crd-td">10,9k</td><td class="crd-td">13,5k</td></tr>
<tr><td class="crd-td"><strong>As-Safīrah</strong></td><td class="crd-td">36,08, 37,37</td><td class="crd-td">5,3k</td><td class="crd-td">6,9k</td><td class="crd-td">10,7k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Khan Shaykhūn</strong></td><td class="crd-td">35,44, 36,65</td><td class="crd-td">5,2k</td><td class="crd-td">6,7k</td><td class="crd-td">10,5k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Nawā</strong></td><td class="crd-td">32,89, 36,04</td><td class="crd-td">5,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,3k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Qudsayā</strong></td><td class="crd-td">33,55, 36,22</td><td class="crd-td">5,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,2k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Sarāqib</strong></td><td class="crd-td">35,86, 36,81</td><td class="crd-td">4,9k</td><td class="crd-td">6,4k</td><td class="crd-td">9,9k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Bāniyās</strong></td><td class="crd-td">35,18, 35,95</td><td class="crd-td">4,9k</td><td class="crd-td">6,4k</td><td class="crd-td">9,9k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Ṭafas</strong></td><td class="crd-td">32,74, 36,07</td><td class="crd-td">4,9k</td><td class="crd-td">6,3k</td><td class="crd-td">9,8k</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Jāsim</strong></td><td class="crd-td">32,99, 36,06</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k</td><td class="crd-td">9,7k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Inkhil</strong></td><td class="crd-td">33,02, 36,13</td><td class="crd-td">4,7k</td><td class="crd-td">6,1k</td><td class="crd-td">9,5k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Tallbīsah</strong></td><td class="crd-td">34,84, 36,73</td><td class="crd-td">4,6k</td><td class="crd-td">6k</td><td class="crd-td">9,4k</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Ashrafiyat Ṣaḥnāyā</strong></td><td class="crd-td">33,43, 36,24</td><td class="crd-td">4,6k</td><td class="crd-td">6k</td><td class="crd-td">9,3k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruḥaybah</strong></td><td class="crd-td">34,28, 36,93</td><td class="crd-td">4,6k</td><td class="crd-td">6k</td><td class="crd-td">9,3k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>At-Tall</strong></td><td class="crd-td">33,61, 36,31</td><td class="crd-td">4,6k</td><td class="crd-td">5,9k</td><td class="crd-td">9,2k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Tadmur</strong></td><td class="crd-td">34,56, 38,28</td><td class="crd-td">4,5k</td><td class="crd-td">5,9k</td><td class="crd-td">9,2k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Qaṭanā</strong></td><td class="crd-td">33,44, 36,08</td><td class="crd-td">4,5k</td><td class="crd-td">5,8k</td><td class="crd-td">9,1k</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Arīḥā</strong></td><td class="crd-td">35,81, 36,61</td><td class="crd-td">4,5k</td><td class="crd-td">5,8k</td><td class="crd-td">9k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Dā'il</strong></td><td class="crd-td">32,75, 36,13</td><td class="crd-td">4,4k</td><td class="crd-td">5,8k</td><td class="crd-td">9k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Ṣūrān</strong></td><td class="crd-td">35,29, 36,75</td><td class="crd-td">4,4k</td><td class="crd-td">5,7k</td><td class="crd-td">8,9k</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Abū Kamāl</strong></td><td class="crd-td">34,45, 40,92</td><td class="crd-td">4,4k</td><td class="crd-td">5,7k</td><td class="crd-td">8,9k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Yabrūd</strong></td><td class="crd-td">33,97, 36,66</td><td class="crd-td">4,3k</td><td class="crd-td">5,6k</td><td class="crd-td">8,6k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Qūriyah</strong></td><td class="crd-td">34,96, 40,54</td><td class="crd-td">4,2k</td><td class="crd-td">5,5k</td><td class="crd-td">8,6k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>A'zāz</strong></td><td class="crd-td">36,59, 37,05</td><td class="crd-td">4,1k</td><td class="crd-td">5,4k</td><td class="crd-td">8,4k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>Az-Zabadānī</strong></td><td class="crd-td">33,72, 36,1</td><td class="crd-td">4,1k</td><td class="crd-td">5,4k</td><td class="crd-td">8,3k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>'Amūdā</strong></td><td class="crd-td">37,1, 40,93</td><td class="crd-td">4k</td><td class="crd-td">5,3k</td><td class="crd-td">8,2k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣanamayn</strong></td><td class="crd-td">33,07, 36,18</td><td class="crd-td">4k</td><td class="crd-td">5,2k</td><td class="crd-td">8k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Saqbā</strong></td><td class="crd-td">33,52, 36,38</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">7,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rastan</strong></td><td class="crd-td">34,93, 36,73</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,6k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Mayādīn</strong></td><td class="crd-td">35,02, 40,45</td><td class="crd-td">3,7k</td><td class="crd-td">4,9k</td><td class="crd-td">7,6k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Quṣayr</strong></td><td class="crd-td">34,51, 36,58</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">7,5k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Aḍ-Ḍumayr</strong></td><td class="crd-td">33,64, 36,69</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">7,4k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Ṭaybat al-Imām</strong></td><td class="crd-td">35,27, 36,71</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shaykh Maskīn</strong></td><td class="crd-td">32,83, 36,16</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Ṣubaykhān</strong></td><td class="crd-td">34,85, 40,6</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Salqīn</strong></td><td class="crd-td">36,14, 36,45</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,2k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Ra's al-'Aīn</strong></td><td class="crd-td">36,58, 38,36</td><td class="crd-td">3,6k</td><td class="crd-td">4,6k</td><td class="crd-td">7,2k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Al-Malīḥah</strong></td><td class="crd-td">32,73, 36,2</td><td class="crd-td">3,5k</td><td class="crd-td">4,5k</td><td class="crd-td">7k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Gharānīj</strong></td><td class="crd-td">34,78, 40,71</td><td class="crd-td">3,5k</td><td class="crd-td">4,5k</td><td class="crd-td">7k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Abū Ḥammām</strong></td><td class="crd-td">34,82, 40,66</td><td class="crd-td">3,3k</td><td class="crd-td">4,3k</td><td class="crd-td">6,7k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Mālikiyah</strong></td><td class="crd-td">37,18, 42,14</td><td class="crd-td">3,3k</td><td class="crd-td">4,3k</td><td class="crd-td">6,7k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Binnish</strong></td><td class="crd-td">35,96, 36,71</td><td class="crd-td">3,3k</td><td class="crd-td">4,3k</td><td class="crd-td">6,7k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Maṣyāf</strong></td><td class="crd-td">35,07, 36,34</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">6,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Ḥalfāyā</strong></td><td class="crd-td">35,26, 36,61</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">6,5k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Nubl</strong></td><td class="crd-td">36,38, 36,99</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥarāk</strong></td><td class="crd-td">32,75, 36,31</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>'Aīn al-'Arab</strong></td><td class="crd-td">36,89, 38,35</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Tall Rif'at</strong></td><td class="crd-td">36,47, 37,09</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Quṭayfah</strong></td><td class="crd-td">33,74, 36,6</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,2k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Kafr Lāhā</strong></td><td class="crd-td">34,89, 36,5</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6,1k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>'Afrīn</strong></td><td class="crd-td">36,51, 36,87</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Buṣra āsh-Shām</strong></td><td class="crd-td">32,52, 36,48</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Izra'</strong></td><td class="crd-td">32,87, 36,25</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">5,8k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Ṣāfītā</strong></td><td class="crd-td">34,82, 36,12</td><td class="crd-td">2,5k</td><td class="crd-td">3,3k</td><td class="crd-td">5,1k</td><td class="crd-td">6,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements in Syria (82 sites) across benchmark years from 1918AD to 1960AD.</figcaption>
</figure>

## Greater Lebanon

Lebanon is represented by five governorate and provincial reporting aggregates — Beirut, the Bekaa, Nabatiyeh, Akkar and Baalbek-Hermel — whose combined total increased from 598,6k in 1918AD to 691,4k in 1930AD, 878,9k in 1950AD and 991k in 1960AD (Table \ref{tab:sett-lebanon}). Beirut rose from 254,4k in 1918AD to 421,2k in 1960AD, absorbing maritime transit from Syria, Armenian refugees from Anatolia and Palestinian refugees after 1948AD [@Kastrissianakis2016Exploring; @Greenshields2025Settlment; @Dionigi2017Statehood; @Orall2023Lebanese].

<figure class="crd-table-figure" id="tab:sett-lebanon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bayrūt</strong></td><td class="crd-td">33,89, 35,5</td><td class="crd-td">254,4k</td><td class="crd-td">293,8k</td><td class="crd-td">373,5k</td><td class="crd-td">421,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Biqā'</strong></td><td class="crd-td">33,67, 35,83</td><td class="crd-td">109k</td><td class="crd-td">125,9k</td><td class="crd-td">160,1k</td><td class="crd-td">180,5k</td></tr>
<tr><td class="crd-td"><strong>An-Nabaṭīyah</strong></td><td class="crd-td">33,38, 35,48</td><td class="crd-td">80,6k</td><td class="crd-td">93k</td><td class="crd-td">118,3k</td><td class="crd-td">133,4k</td></tr>
<tr><td class="crd-td"><strong>'Akkār</strong></td><td class="crd-td">34,54, 36,08</td><td class="crd-td">77,7k</td><td class="crd-td">89,8k</td><td class="crd-td">114,1k</td><td class="crd-td">128,7k</td></tr>
<tr><td class="crd-td"><strong>Ba'albak - Al-Harmal</strong></td><td class="crd-td">34,21, 36,3</td><td class="crd-td">76,9k</td><td class="crd-td">88,8k</td><td class="crd-td">112,9k</td><td class="crd-td">127,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued urban and provincial centres in Greater Lebanon (5 reporting units) from 1918AD to 1960AD.</figcaption>
</figure>

## Transjordan

Transjordan comprises 37 towns expanding from 474,3k in 1918AD to 617,6k in 1930AD, 958,9k in 1950AD and 1,19M in 1960AD (Table \ref{tab:sett-jordan}). Amman (186,8k to 470,6k), Zarqa (65,9k to 166,1k), Irbid (39,1k to 98,6k) and Rusayfa (33,6k to 84,7k) concentrated over two-thirds of the kingdom's urban population as Hashemite state-building and post-1948AD Palestinian refugee settlement transformed the Amman-Zarqa conurbation [@Frantzman2011Bedouin].

<figure class="crd-table-figure" id="tab:sett-jordan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>'Ammān</strong></td><td class="crd-td">31,96, 35,95</td><td class="crd-td">186,8k</td><td class="crd-td">243,2k</td><td class="crd-td">377,6k</td><td class="crd-td">470,6k</td></tr>
<tr><td class="crd-td"><strong>Az-Zarqā'</strong></td><td class="crd-td">32,07, 36,09</td><td class="crd-td">65,9k</td><td class="crd-td">85,8k</td><td class="crd-td">133,3k</td><td class="crd-td">166,1k</td></tr>
<tr><td class="crd-td"><strong>Irbid</strong></td><td class="crd-td">32,56, 35,85</td><td class="crd-td">39,1k</td><td class="crd-td">51k</td><td class="crd-td">79,1k</td><td class="crd-td">98,6k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruṣayfah</strong></td><td class="crd-td">32,02, 36,05</td><td class="crd-td">33,6k</td><td class="crd-td">43,8k</td><td class="crd-td">68k</td><td class="crd-td">84,7k</td></tr>
<tr><td class="crd-td"><strong>Wādī as-Sīr</strong></td><td class="crd-td">31,95, 35,82</td><td class="crd-td">16,7k</td><td class="crd-td">21,8k</td><td class="crd-td">33,8k</td><td class="crd-td">42,2k</td></tr>
<tr><td class="crd-td"><strong>Al-'Aqabah</strong></td><td class="crd-td">29,53, 35,01</td><td class="crd-td">11,8k</td><td class="crd-td">15,4k</td><td class="crd-td">23,8k</td><td class="crd-td">29,7k</td></tr>
<tr><td class="crd-td"><strong>As-Salṭ</strong></td><td class="crd-td">32,04, 35,73</td><td class="crd-td">10,6k</td><td class="crd-td">13,8k</td><td class="crd-td">21,4k</td><td class="crd-td">26,7k</td></tr>
<tr><td class="crd-td"><strong>Mādabā</strong></td><td class="crd-td">31,72, 35,79</td><td class="crd-td">10,5k</td><td class="crd-td">13,6k</td><td class="crd-td">21,2k</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td"><strong>Ṣuwayliḥ</strong></td><td class="crd-td">32,02, 35,84</td><td class="crd-td">10k</td><td class="crd-td">13k</td><td class="crd-td">20,2k</td><td class="crd-td">25,2k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ramthā</strong></td><td class="crd-td">32,56, 36,01</td><td class="crd-td">9,4k</td><td class="crd-td">12,2k</td><td class="crd-td">19k</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Mafraq</strong></td><td class="crd-td">32,34, 36,21</td><td class="crd-td">7,2k</td><td class="crd-td">9,4k</td><td class="crd-td">14,6k</td><td class="crd-td">18,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Jubayhah</strong></td><td class="crd-td">32,01, 35,9</td><td class="crd-td">7k</td><td class="crd-td">9,2k</td><td class="crd-td">14,2k</td><td class="crd-td">17,7k</td></tr>
<tr><td class="crd-td"><strong>Saḥāb</strong></td><td class="crd-td">31,87, 36</td><td class="crd-td">6k</td><td class="crd-td">7,9k</td><td class="crd-td">12,2k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Ma'ān</strong></td><td class="crd-td">30,2, 35,73</td><td class="crd-td">4,3k</td><td class="crd-td">5,6k</td><td class="crd-td">8,7k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>'Aīn al-Bāshā</strong></td><td class="crd-td">32,06, 35,83</td><td class="crd-td">4k</td><td class="crd-td">5,2k</td><td class="crd-td">8,1k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Jarash</strong></td><td class="crd-td">32,28, 35,9</td><td class="crd-td">4k</td><td class="crd-td">5,2k</td><td class="crd-td">8,1k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Umm Quṣayr - Al-Muqābalīn</strong></td><td class="crd-td">31,91, 35,92</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Karak</strong></td><td class="crd-td">31,18, 35,7</td><td class="crd-td">3,5k</td><td class="crd-td">4,6k</td><td class="crd-td">7,1k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Kufrinjah</strong></td><td class="crd-td">32,3, 35,7</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Marj al-Ḥamām</strong></td><td class="crd-td">31,9, 35,85</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥiṣn</strong></td><td class="crd-td">32,48, 35,88</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,2k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣarīḥ</strong></td><td class="crd-td">32,5, 35,89</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6,1k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Mashāri'</strong></td><td class="crd-td">32,43, 35,59</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">5,7k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>'Āīdūn</strong></td><td class="crd-td">32,51, 35,86</td><td class="crd-td">2,8k</td><td class="crd-td">3,6k</td><td class="crd-td">5,6k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Hāshimiyah</strong></td><td class="crd-td">32,13, 36,12</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Nā'ūr</strong></td><td class="crd-td">31,87, 35,82</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,7k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Bayt Rās</strong></td><td class="crd-td">32,59, 35,86</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Mazār ash-Shamālī</strong></td><td class="crd-td">32,47, 35,8</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">4k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Al-Fuḥayṣ</strong></td><td class="crd-td">32, 35,78</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭaybah</strong></td><td class="crd-td">30,25, 35,47</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shajarah</strong></td><td class="crd-td">32,64, 35,94</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Kafr Yūbā</strong></td><td class="crd-td">32,54, 35,8</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">3,3k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Bushrā</strong></td><td class="crd-td">32,56, 35,9</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Dayr Abī Sa'īd</strong></td><td class="crd-td">32,5, 35,69</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Mu'tah</strong></td><td class="crd-td">31,09, 35,69</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Umm as-Summāq</strong></td><td class="crd-td">31,89, 35,85</td><td class="crd-td">816</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">31,7, 35,96</td><td class="crd-td">660</td><td class="crd-td">859</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements in Transjordan and Jordan (37 sites) from 1918AD to 1960AD.</figcaption>
</figure>

## Israel and Northern-Coastal Mandatory Palestine

Seventy-seven towns and planned colonies within the post-1948AD Israeli frame grew from 608,8k in 1918AD to 902,3k in 1930AD, 1,47M in 1950AD and 1,9M in 1960AD (Table \ref{tab:sett-israel}). West Jerusalem (102,6k to 258,5k), Tel Aviv-Yafo (78,3k to 197,3k) and Haifa (54k to 136,1k) formed the metropolitan triad, flanked by newly founded coastal and inner satellites Holon (46,4k at foundation in 1935AD to 80,5k in 1960AD), Bat Yam (36,7k in 1926AD to 77,6k) and Ramat Gan (29,2k in 1921AD to 73,6k), plus post-1948AD development towns Ashdod, Dimona and Qiryat Gat [@Beenstock2025Origins; @VRIES1997Productive; @Remer2025Degania; @Daam2022Chapter; @Rioli2020Breach].

<figure class="crd-table-figure" id="tab:sett-israel">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yerushalayim</strong></td><td class="crd-td">31,75, 35,03</td><td class="crd-td">102,6k</td><td class="crd-td">133,6k</td><td class="crd-td">207,4k</td><td class="crd-td">258,5k</td></tr>
<tr><td class="crd-td"><strong>Tel Aviv-Yafo</strong></td><td class="crd-td">32,08, 34,78</td><td class="crd-td">78,3k</td><td class="crd-td">102k</td><td class="crd-td">158,3k</td><td class="crd-td">197,3k</td></tr>
<tr><td class="crd-td"><strong>Hefa</strong></td><td class="crd-td">32,77, 35,07</td><td class="crd-td">54k</td><td class="crd-td">70,4k</td><td class="crd-td">109,2k</td><td class="crd-td">136,1k</td></tr>
<tr><td class="crd-td"><strong>Holon</strong></td><td class="crd-td">32,01, 34,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">64,6k</td><td class="crd-td">80,5k</td></tr>
<tr><td class="crd-td"><strong>Bat Yam</strong></td><td class="crd-td">32,02, 34,75</td><td class="crd-td">-</td><td class="crd-td">40,1k</td><td class="crd-td">62,3k</td><td class="crd-td">77,6k</td></tr>
<tr><td class="crd-td"><strong>Petah Tiqwa</strong></td><td class="crd-td">32,09, 34,89</td><td class="crd-td">29,6k</td><td class="crd-td">38,6k</td><td class="crd-td">59,9k</td><td class="crd-td">74,7k</td></tr>
<tr><td class="crd-td"><strong>Ramat Gan</strong></td><td class="crd-td">32,08, 34,81</td><td class="crd-td">-</td><td class="crd-td">36,5k</td><td class="crd-td">56,6k</td><td class="crd-td">70,6k</td></tr>
<tr><td class="crd-td"><strong>Be'er Sheva</strong></td><td class="crd-td">31,25, 34,79</td><td class="crd-td">26,5k</td><td class="crd-td">34,5k</td><td class="crd-td">53,6k</td><td class="crd-td">66,8k</td></tr>
<tr><td class="crd-td"><strong>Rishon LeZiyyon</strong></td><td class="crd-td">31,97, 34,79</td><td class="crd-td">25k</td><td class="crd-td">32,5k</td><td class="crd-td">50,5k</td><td class="crd-td">62,9k</td></tr>
<tr><td class="crd-td"><strong>Netanya</strong></td><td class="crd-td">32,33, 34,86</td><td class="crd-td">-</td><td class="crd-td">31,9k</td><td class="crd-td">49,5k</td><td class="crd-td">61,7k</td></tr>
<tr><td class="crd-td"><strong>Bene Beraq</strong></td><td class="crd-td">32,08, 34,83</td><td class="crd-td">23k</td><td class="crd-td">30k</td><td class="crd-td">46,5k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Rehovot</strong></td><td class="crd-td">31,89, 34,81</td><td class="crd-td">16,3k</td><td class="crd-td">21,2k</td><td class="crd-td">32,9k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Ashdod</strong></td><td class="crd-td">31,79, 34,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">39,6k</td></tr>
<tr><td class="crd-td"><strong>Herzliyya</strong></td><td class="crd-td">32,17, 34,83</td><td class="crd-td">15,1k</td><td class="crd-td">19,7k</td><td class="crd-td">30,6k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Ashqelon</strong></td><td class="crd-td">31,67, 34,57</td><td class="crd-td">12,7k</td><td class="crd-td">16,5k</td><td class="crd-td">25,6k</td><td class="crd-td">31,9k</td></tr>
<tr><td class="crd-td"><strong>Nazerat</strong></td><td class="crd-td">32,7, 35,3</td><td class="crd-td">10,7k</td><td class="crd-td">14k</td><td class="crd-td">21,7k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Kefar Sava</strong></td><td class="crd-td">32,17, 34,91</td><td class="crd-td">10,4k</td><td class="crd-td">13,6k</td><td class="crd-td">21k</td><td class="crd-td">26,2k</td></tr>
<tr><td class="crd-td"><strong>Ramla</strong></td><td class="crd-td">31,93, 34,86</td><td class="crd-td">10,1k</td><td class="crd-td">13,2k</td><td class="crd-td">20,4k</td><td class="crd-td">25,5k</td></tr>
<tr><td class="crd-td"><strong>Lod</strong></td><td class="crd-td">31,95, 34,89</td><td class="crd-td">9,7k</td><td class="crd-td">12,6k</td><td class="crd-td">19,6k</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Modi'in-Makkabbim-Re'ut</strong></td><td class="crd-td">31,89, 35,02</td><td class="crd-td">9,6k</td><td class="crd-td">12,5k</td><td class="crd-td">19,3k</td><td class="crd-td">24,1k</td></tr>
<tr><td class="crd-td"><strong>Hadera</strong></td><td class="crd-td">32,44, 34,9</td><td class="crd-td">9,3k</td><td class="crd-td">12,1k</td><td class="crd-td">18,7k</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Akko</strong></td><td class="crd-td">32,93, 35,08</td><td class="crd-td">8,7k</td><td class="crd-td">11,3k</td><td class="crd-td">17,6k</td><td class="crd-td">21,9k</td></tr>
<tr><td class="crd-td"><strong>Qiryat Atta</strong></td><td class="crd-td">32,81, 35,11</td><td class="crd-td">7,9k</td><td class="crd-td">10,3k</td><td class="crd-td">15,9k</td><td class="crd-td">19,9k</td></tr>
<tr><td class="crd-td"><strong>Ramat HaSharon</strong></td><td class="crd-td">32,15, 34,84</td><td class="crd-td">7,8k</td><td class="crd-td">10,1k</td><td class="crd-td">15,7k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Qiryat Bialik</strong></td><td class="crd-td">32,83, 35,09</td><td class="crd-td">7,3k</td><td class="crd-td">9,6k</td><td class="crd-td">14,8k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Teverya</strong></td><td class="crd-td">32,79, 35,53</td><td class="crd-td">6,8k</td><td class="crd-td">8,8k</td><td class="crd-td">13,7k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Nahariyya</strong></td><td class="crd-td">33,01, 35,1</td><td class="crd-td">6,7k</td><td class="crd-td">8,7k</td><td class="crd-td">13,5k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Dimona</strong></td><td class="crd-td">31,07, 35,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Qiryat Gat</strong></td><td class="crd-td">31,61, 34,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Nof HaGalil</strong></td><td class="crd-td">32,71, 35,32</td><td class="crd-td">5,7k</td><td class="crd-td">7,4k</td><td class="crd-td">11,4k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Qiryat Ono</strong></td><td class="crd-td">32,06, 34,86</td><td class="crd-td">5,2k</td><td class="crd-td">6,8k</td><td class="crd-td">10,5k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Afula</strong></td><td class="crd-td">32,61, 35,29</td><td class="crd-td">5,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,3k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Hod HaSharon</strong></td><td class="crd-td">32,16, 34,89</td><td class="crd-td">4,9k</td><td class="crd-td">6,4k</td><td class="crd-td">10k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Fahm</strong></td><td class="crd-td">32,52, 35,15</td><td class="crd-td">4,8k</td><td class="crd-td">6,3k</td><td class="crd-td">9,7k</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td"><strong>El'ad</strong></td><td class="crd-td">32,05, 34,96</td><td class="crd-td">4,7k</td><td class="crd-td">6,1k</td><td class="crd-td">9,5k</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Or Yehuda</strong></td><td class="crd-td">32,03, 34,85</td><td class="crd-td">4,6k</td><td class="crd-td">6k</td><td class="crd-td">9,3k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Elat</strong></td><td class="crd-td">29,56, 34,95</td><td class="crd-td">4,5k</td><td class="crd-td">5,9k</td><td class="crd-td">9,2k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Pardes Hanna-Karkur</strong></td><td class="crd-td">32,47, 34,98</td><td class="crd-td">3,8k</td><td class="crd-td">5k</td><td class="crd-td">7,7k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Zefat</strong></td><td class="crd-td">32,96, 35,5</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,7k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Tirat Karmel</strong></td><td class="crd-td">32,76, 34,97</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">7,5k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Qiryat Shemona</strong></td><td class="crd-td">33,21, 35,57</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,4k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Nes Ziyyona</strong></td><td class="crd-td">31,93, 34,8</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Yavne</strong></td><td class="crd-td">31,88, 34,74</td><td class="crd-td">3,3k</td><td class="crd-td">4,3k</td><td class="crd-td">6,7k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Migdal HaEmeq</strong></td><td class="crd-td">32,68, 35,24</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">6,5k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Tamra</strong></td><td class="crd-td">32,85, 35,2</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Bet Shemesh</strong></td><td class="crd-td">31,73, 34,99</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Sakhnin</strong></td><td class="crd-td">32,87, 35,3</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">6,2k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Ofaqim</strong></td><td class="crd-td">31,31, 34,62</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6,1k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Qiryat Mal'akhi</strong></td><td class="crd-td">31,73, 34,75</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">5,9k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Baqa al-Gharbiyye</strong></td><td class="crd-td">32,42, 35,04</td><td class="crd-td">2,8k</td><td class="crd-td">3,6k</td><td class="crd-td">5,6k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Rosh HaAyin</strong></td><td class="crd-td">32,1, 34,95</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">5,5k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Mughar</strong></td><td class="crd-td">32,89, 35,41</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Arrabe</strong></td><td class="crd-td">32,85, 35,34</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,7k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Nesher</strong></td><td class="crd-td">32,77, 35,04</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,7k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Rahat</strong></td><td class="crd-td">31,4, 34,76</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Sederot</strong></td><td class="crd-td">31,52, 34,6</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Netivot</strong></td><td class="crd-td">31,42, 34,59</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Mevasseret Ziyyon</strong></td><td class="crd-td">31,8, 35,15</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Ar'ara</strong></td><td class="crd-td">32,5, 35,09</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Qalansawe</strong></td><td class="crd-td">32,28, 34,98</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Or Aqiva</strong></td><td class="crd-td">32,51, 34,92</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Kafar Qasem</strong></td><td class="crd-td">32,11, 34,98</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Ma'alot-Tarshiha</strong></td><td class="crd-td">33,02, 35,27</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Gedera</strong></td><td class="crd-td">31,81, 34,78</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Kafar Manda</strong></td><td class="crd-td">32,81, 35,26</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Yoqne'am Illit</strong></td><td class="crd-td">32,65, 35,09</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Zikhron Ya'aqov</strong></td><td class="crd-td">32,57, 34,95</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Be'er Ya'aqov</strong></td><td class="crd-td">31,94, 34,84</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Modi'in Illit</strong></td><td class="crd-td">31,93, 35,04</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Qadima-Zoran</strong></td><td class="crd-td">32,28, 34,92</td><td class="crd-td">846</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kefar Yona</strong></td><td class="crd-td">32,32, 34,94</td><td class="crd-td">761</td><td class="crd-td">992</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Shoham</strong></td><td class="crd-td">32, 34,95</td><td class="crd-td">579</td><td class="crd-td">753</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Kuseife</strong></td><td class="crd-td">31,25, 35,09</td><td class="crd-td">497</td><td class="crd-td">647</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Hura</strong></td><td class="crd-td">31,3, 34,94</td><td class="crd-td">465</td><td class="crd-td">606</td><td class="crd-td">941</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Ar'ara-Banegev</strong></td><td class="crd-td">31,16, 35,02</td><td class="crd-td">-</td><td class="crd-td">405</td><td class="crd-td">629</td><td class="crd-td">784</td></tr>
<tr><td class="crd-td"><strong>Ari'el</strong></td><td class="crd-td">31,77, 35,22</td><td class="crd-td">-</td><td class="crd-td">381</td><td class="crd-td">591</td><td class="crd-td">737</td></tr>
<tr><td class="crd-td"><strong>Harish</strong></td><td class="crd-td">32,46, 35,05</td><td class="crd-td">-</td><td class="crd-td">359</td><td class="crd-td">557</td><td class="crd-td">695</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued cities and founded colonies in coastal, northern and Negev Palestine and Israel (77 sites) from 1918AD to 1960AD.</figcaption>
</figure>

## West Bank and Gaza Strip

Thirty-four towns across the West Bank and Gaza Strip rose from 297,3k in 1918AD to 387,1k in 1930AD, 601k in 1950AD and 748,9k in 1960AD (Table \ref{tab:sett-palestine}). Gaza City expanded from 62,2k to 156,7k, East Jerusalem from 37k to 93,1k, Khan Yunis from 21,7k to 54,6k, Hebron from 21k to 52,9k, Jabaliya from 20k to 50,5k and Rafah from 19,2k to 48,4k, absorbing dense refugee concentrations after 1948AD [@Scott2001Mortality; @Muhsen2017Urban; @Anderson2017British; @Koylu2025Israel].

<figure class="crd-table-figure" id="tab:sett-palestine">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ghazzah</strong></td><td class="crd-td">31,5, 34,47</td><td class="crd-td">62,2k</td><td class="crd-td">81k</td><td class="crd-td">125,7k</td><td class="crd-td">156,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Quds</strong></td><td class="crd-td">31,8, 35,3</td><td class="crd-td">37k</td><td class="crd-td">48,1k</td><td class="crd-td">74,7k</td><td class="crd-td">93,1k</td></tr>
<tr><td class="crd-td"><strong>Khān Yūnis</strong></td><td class="crd-td">31,34, 34,31</td><td class="crd-td">21,7k</td><td class="crd-td">28,2k</td><td class="crd-td">43,8k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Khalīl</strong></td><td class="crd-td">31,53, 35,09</td><td class="crd-td">21k</td><td class="crd-td">27,3k</td><td class="crd-td">42,5k</td><td class="crd-td">52,9k</td></tr>
<tr><td class="crd-td"><strong>Jabālyah</strong></td><td class="crd-td">31,53, 34,48</td><td class="crd-td">20k</td><td class="crd-td">26,1k</td><td class="crd-td">40,5k</td><td class="crd-td">50,5k</td></tr>
<tr><td class="crd-td"><strong>Rafaḥ</strong></td><td class="crd-td">31,3, 34,24</td><td class="crd-td">19,2k</td><td class="crd-td">25k</td><td class="crd-td">38,8k</td><td class="crd-td">48,4k</td></tr>
<tr><td class="crd-td"><strong>Nābulus</strong></td><td class="crd-td">32,22, 35,25</td><td class="crd-td">17,6k</td><td class="crd-td">23k</td><td class="crd-td">35,6k</td><td class="crd-td">44,4k</td></tr>
<tr><td class="crd-td"><strong>An-Nuṣayrāt</strong></td><td class="crd-td">31,45, 34,39</td><td class="crd-td">7,9k</td><td class="crd-td">10,2k</td><td class="crd-td">15,9k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Ṭūlkarm</strong></td><td class="crd-td">32,31, 35,03</td><td class="crd-td">7,7k</td><td class="crd-td">10,1k</td><td class="crd-td">15,7k</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Dayr al-Balaḥ</strong></td><td class="crd-td">31,42, 34,35</td><td class="crd-td">7,5k</td><td class="crd-td">9,8k</td><td class="crd-td">15,2k</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Bayt Lāhīyā</strong></td><td class="crd-td">31,55, 34,5</td><td class="crd-td">6,8k</td><td class="crd-td">8,8k</td><td class="crd-td">13,7k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Janīn</strong></td><td class="crd-td">32,46, 35,3</td><td class="crd-td">6,3k</td><td class="crd-td">8,2k</td><td class="crd-td">12,7k</td><td class="crd-td">15,9k</td></tr>
<tr><td class="crd-td"><strong>Qalqīlyah</strong></td><td class="crd-td">32,19, 34,97</td><td class="crd-td">5,6k</td><td class="crd-td">7,3k</td><td class="crd-td">11,3k</td><td class="crd-td">14,1k</td></tr>
<tr><td class="crd-td"><strong>Yaṭṭā</strong></td><td class="crd-td">31,45, 35,09</td><td class="crd-td">5,5k</td><td class="crd-td">7,2k</td><td class="crd-td">11,2k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Al-Bīrah</strong></td><td class="crd-td">31,91, 35,22</td><td class="crd-td">4,9k</td><td class="crd-td">6,4k</td><td class="crd-td">9,9k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Bayt Laḥm</strong></td><td class="crd-td">31,7, 35,2</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">7,8k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Bayt Ḥānūn</strong></td><td class="crd-td">31,54, 34,54</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">7,4k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Aẓ-Ẓāhīriyah</strong></td><td class="crd-td">31,41, 34,98</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Dūrā</strong></td><td class="crd-td">31,51, 35,03</td><td class="crd-td">2,8k</td><td class="crd-td">3,6k</td><td class="crd-td">5,6k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Ḥalḥūl</strong></td><td class="crd-td">31,58, 35,1</td><td class="crd-td">2,8k</td><td class="crd-td">3,6k</td><td class="crd-td">5,6k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Arīḥā</strong></td><td class="crd-td">31,87, 35,45</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">5,2k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Qabāṭiyah</strong></td><td class="crd-td">32,41, 35,28</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">5,2k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Banī Na'īm</strong></td><td class="crd-td">31,52, 35,16</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">4,8k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Idhnā</strong></td><td class="crd-td">31,56, 34,97</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">4,8k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>'Abasān al-Kabīrah</strong></td><td class="crd-td">31,32, 34,34</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">4,8k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>As-Samū'</strong></td><td class="crd-td">31,4, 35,07</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Al-'Aīzariyah</strong></td><td class="crd-td">31,77, 35,27</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Yāmūn</strong></td><td class="crd-td">32,49, 35,23</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭūbās</strong></td><td class="crd-td">32,32, 35,37</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">4,3k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Qarārah</strong></td><td class="crd-td">31,37, 34,34</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">4,2k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Tarqūmiyā</strong></td><td class="crd-td">31,58, 35,01</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Si'īr</strong></td><td class="crd-td">31,58, 35,14</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Baytūniyā</strong></td><td class="crd-td">31,9, 35,17</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Salfīt</strong></td><td class="crd-td">32,08, 35,18</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">3,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued towns in the West Bank and Gaza Strip (34 sites) from 1918AD to 1960AD.</figcaption>
</figure>

## British Crown Colony of Cyprus

Cyprus contributes 44 municipalities and large villages growing steadily from 165,3k in 1918AD to 190,9k in 1930AD, 242,7k in 1950AD and 273,7k in 1960AD (Table \ref{tab:sett-cyprus}). Limassol (34,7k to 57,4k), Nicosia (22,4k to 37k), Strovolos (19,9k to 33k), Larnaca (16,6k to 27,5k) and Paphos (6,1k to 10,1k) trace balanced port and capital-suburb growth across all six British colonial districts.

<figure class="crd-table-figure" id="tab:sett-cyprus">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lemesós</strong></td><td class="crd-td">34,68, 33,04</td><td class="crd-td">34,7k</td><td class="crd-td">40,1k</td><td class="crd-td">50,9k</td><td class="crd-td">57,4k</td></tr>
<tr><td class="crd-td"><strong>Lefkosía</strong></td><td class="crd-td">35,17, 33,35</td><td class="crd-td">22,4k</td><td class="crd-td">25,8k</td><td class="crd-td">32,8k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>Stróvolos</strong></td><td class="crd-td">35,15, 33,33</td><td class="crd-td">19,9k</td><td class="crd-td">23k</td><td class="crd-td">29,3k</td><td class="crd-td">33k</td></tr>
<tr><td class="crd-td"><strong>Lárnaka</strong></td><td class="crd-td">34,92, 33,63</td><td class="crd-td">16,6k</td><td class="crd-td">19,2k</td><td class="crd-td">24,4k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Páfos</strong></td><td class="crd-td">34,78, 32,42</td><td class="crd-td">6,1k</td><td class="crd-td">7k</td><td class="crd-td">8,9k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Aglantziá</strong></td><td class="crd-td">35,15, 33,4</td><td class="crd-td">6k</td><td class="crd-td">6,9k</td><td class="crd-td">8,7k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Morphou</strong></td><td class="crd-td">35,2, 32,99</td><td class="crd-td">4k</td><td class="crd-td">4,6k</td><td class="crd-td">5,9k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Káto Polemídia</strong></td><td class="crd-td">34,7, 32,99</td><td class="crd-td">3,7k</td><td class="crd-td">4,2k</td><td class="crd-td">5,4k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Paralímni</strong></td><td class="crd-td">35,04, 33,98</td><td class="crd-td">3,6k</td><td class="crd-td">4,2k</td><td class="crd-td">5,3k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Latsiá</strong></td><td class="crd-td">35,1, 33,38</td><td class="crd-td">3,5k</td><td class="crd-td">4k</td><td class="crd-td">5,1k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ágios Athanásios</strong></td><td class="crd-td">34,71, 33,05</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Énkomi</strong></td><td class="crd-td">35,16, 33,88</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Aradíppou</strong></td><td class="crd-td">34,95, 33,59</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Lefka</strong></td><td class="crd-td">35,11, 32,85</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Lapithos</strong></td><td class="crd-td">35,34, 33,17</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Dromolaxiá-Meneoú</strong></td><td class="crd-td">34,88, 33,59</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Rizokarpaso</strong></td><td class="crd-td">35,6, 34,38</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Xylofágou</strong></td><td class="crd-td">34,98, 33,85</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Dáli</strong></td><td class="crd-td">35,02, 33,42</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Athiénou</strong></td><td class="crd-td">35,06, 33,54</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Derýneia</strong></td><td class="crd-td">35,06, 33,96</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Avgórou</strong></td><td class="crd-td">35,04, 33,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Ýpsonas</strong></td><td class="crd-td">34,69, 32,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Sotíra</strong></td><td class="crd-td">34,71, 32,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Germasógeia</strong></td><td class="crd-td">34,72, 33,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Livádia</strong></td><td class="crd-td">34,96, 33,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Trikomo</strong></td><td class="crd-td">35,29, 33,89</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Liopétri</strong></td><td class="crd-td">35,01, 33,89</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Geroskípou</strong></td><td class="crd-td">34,76, 32,45</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Tséri</strong></td><td class="crd-td">35,07, 33,32</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Kolóssi</strong></td><td class="crd-td">34,67, 32,93</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Episkopi</strong></td><td class="crd-td">34,67, 32,9</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Kíti</strong></td><td class="crd-td">34,85, 33,58</td><td class="crd-td">978</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Kokkinotrimithiá</strong></td><td class="crd-td">35,15, 33,2</td><td class="crd-td">951</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Chlórakas</strong></td><td class="crd-td">34,8, 32,41</td><td class="crd-td">682</td><td class="crd-td">788</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Polis Chrysochous</strong></td><td class="crd-td">35,04, 32,43</td><td class="crd-td">673</td><td class="crd-td">777</td><td class="crd-td">988</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Kyperounta</strong></td><td class="crd-td">34,94, 32,98</td><td class="crd-td">673</td><td class="crd-td">777</td><td class="crd-td">988</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Peyia</strong></td><td class="crd-td">34,88, 32,38</td><td class="crd-td">650</td><td class="crd-td">750</td><td class="crd-td">954</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Agía Nápa</strong></td><td class="crd-td">34,98, 34</td><td class="crd-td">634</td><td class="crd-td">732</td><td class="crd-td">930</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Voróklini</strong></td><td class="crd-td">34,98, 33,66</td><td class="crd-td">610</td><td class="crd-td">705</td><td class="crd-td">896</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Kornos</strong></td><td class="crd-td">34,92, 33,39</td><td class="crd-td">557</td><td class="crd-td">643</td><td class="crd-td">817</td><td class="crd-td">922</td></tr>
<tr><td class="crd-td"><strong>Kakopetria</strong></td><td class="crd-td">34,99, 32,9</td><td class="crd-td">534</td><td class="crd-td">616</td><td class="crd-td">783</td><td class="crd-td">883</td></tr>
<tr><td class="crd-td"><strong>Pissouri</strong></td><td class="crd-td">34,67, 32,7</td><td class="crd-td">510</td><td class="crd-td">589</td><td class="crd-td">749</td><td class="crd-td">845</td></tr>
<tr><td class="crd-td"><strong>Pano Lefkara</strong></td><td class="crd-td">34,87, 33,3</td><td class="crd-td">441</td><td class="crd-td">509</td><td class="crd-td">647</td><td class="crd-td">730</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Catalogued towns and villages in British Cyprus (44 sites) from 1918AD to 1960AD.</figcaption>
</figure>

# Limitations

Three reporting asymmetries affect the urban gazetteer. First, Lebanon's lack of post-1932AD municipal censuses restricts its ledger entries to five regional governorate-district aggregates rather than individual towns [@Saber2023French; @Dionigi2017Statehood], raising apparent mean site size relative to Syria or Cyprus. Second, folding 34 rapidly growing suburbs into parent cities prevents artificial fragmentation of Tel Aviv, Beirut, Amman and Baghdad, yet obscures internal core-to-ring suburbanisation rates during the 1950s. Third, smooth inter-censal interpolation across 1947–1950AD compresses the abrupt 1948AD displacement of Palestinian Arab villagers from Lydda, Ramle, Jaffa, Haifa and Galilee into Gaza, the West Bank and Jordan [@Marom2021Jind; @Marom2024Lajjun; @Oron2021Century].

# Conclusion

Across 434 catalogued settlements, urban population in the Levant, Iraq and Cyprus multiplied nearly two-and-a-half times between 1918AD (6,03M) and 1960AD (14,9M). Administrative centralisation, oil extraction, port expansion and refugee displacements concentrated growth inside a steep primate hierarchy ($\alpha = 1{,}206$) led by Baghdad, Damascus, Aleppo, Amman and Beirut alongside Tel Aviv-Yafo, Haifa and Gaza. Paired with subadministrative rural disaggregation, these urban series anchor the spatial population reconstruction of the post-Ottoman Near East.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums catalogued settlements and combined urban populations across all seven successor jurisdictions from 1918AD to 1960AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">1918AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">155</td><td class="crd-td">2,69M</td><td class="crd-td">3,51M</td><td class="crd-td">5,44M</td><td class="crd-td">6,78M</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">82</td><td class="crd-td">1,2M</td><td class="crd-td">1,56M</td><td class="crd-td">2,42M</td><td class="crd-td">3,01M</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">77</td><td class="crd-td">608,8k</td><td class="crd-td">902,3k</td><td class="crd-td">1,47M</td><td class="crd-td">1,9M</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">37</td><td class="crd-td">474,3k</td><td class="crd-td">617,6k</td><td class="crd-td">958,9k</td><td class="crd-td">1,19M</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">5</td><td class="crd-td">598,6k</td><td class="crd-td">691,4k</td><td class="crd-td">878,9k</td><td class="crd-td">991k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">34</td><td class="crd-td">297,3k</td><td class="crd-td">387,1k</td><td class="crd-td">601k</td><td class="crd-td">748,9k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">44</td><td class="crd-td">165,3k</td><td class="crd-td">190,9k</td><td class="crd-td">242,7k</td><td class="crd-td">273,7k</td></tr>
<tr><td class="crd-td"><strong>All Jurisdictions</strong></td><td class="crd-td">434</td><td class="crd-td">6,03M</td><td class="crd-td">7,85M</td><td class="crd-td">12,01M</td><td class="crd-td">14,9M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Combined urban population across all 434 catalogued settlements by jurisdiction, 1918AD to 1960AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

<div class="crd-footnotes-slot" data-crd-footnotes="true"></div>

---
title: "Syria, Lebanon, Jordan, Israel and Palestine after 1946"
subtitle: "Settlement Gazetteer: 242 Cities and Towns, 1946AD-2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_levant_israel_palestine_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_levant_israel_palestine_spatial.png"
hero_caption: "Spatial distribution of 242 catalogued urban settlements and 41 sub-regional mask units across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2026AD."
hero_label: "fig:hero-settlements-modern-levant-israel-palestine"
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

This settlement gazetteer compiles coordinate-exact population trajectories for 242 cities, towns and major urban clusters across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2025AD. Screened from 264 candidate localities across five national statistical bureaus—CBS Syria (84 included), CBS Israel (79), DOS Jordan (38), PCBS Palestine (34) and CAS Lebanon (7)—with 22 contiguous suburban municipalities merged into metropolitan cores to prevent double counting, the corpus captures an urban expansion from 5,83M inhabitants in 1946AD (237 active localities) to 14,93M in 1990AD and 31,59M in 2025AD. Unlike ancient polycentric periods, the post-1946 Levantine urban hierarchy exhibits a classic Zipf rank-size slope ($\alpha = 1{,}044$, $R^2 = 0{,}961$), anchored by Aleppo (2,86M peak), Amman (2,08M), Damascus (1,9M), Jerusalem (1,02M alongside Al-Quds at 314,5k), Homs (875,7k), Zarqa (730,6k), Gaza City (706k), Tel Aviv-Yafo (494,8k core) and Beirut (484,6k municipal proper). Each entry preserves founding-year truncation for post-1948 planned towns and aligns directly with geoBoundaries subadministrative polygons for pycnophylactic disaggregation.

<figure class="crd-figure-block" id="fig:hero-settlements-modern-levant-israel-palestine">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine-settlements/fig1_modern_levant_israel_palestine_spatial.png" alt="fig:hero-settlements-modern-levant-israel-palestine" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 242 catalogued urban settlements and 41 sub-regional mask units across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2026AD.</figcaption>
</figure>

# Background

Between the close of the French and British Mandates in 1946AD-1948AD and the mid-2020s, the eastern Mediterranean littoral and its Syro-Jordanian hinterland shifted from an agrarian society of provincial market towns into a deeply urbanised landscape. In 1946AD, only Damascus (515k), Aleppo (456,3k), Beirut (356k), Amman (345,8k within modern municipal extents), Jerusalem (190k), Homs (160,6k) and Tel Aviv-Yafo (145k) exceeded 140k inhabitants, while vast reaches of the Euphrates valley, the Hauran, southern Jordan and the northern Negev consisted of small villages and nomadic encampments [@Ahmad2012Syria; @Anon2008Population]. Over the next eight decades, four forces transformed that urban map: rapid post-war mortality decline and rural-urban migration toward national capitals; the 1948 and 1967 Palestinian refugee waves that created permanent camp-cities in Gaza, the West Bank, Jordan, Lebanon and Syria [@Scott2001Mortality; @Muhsen2017Urban; @Fayad2025Political]; state-planned Israeli new towns built during the 1950s and 1960s and later expanded by the 1990s post-Soviet *aliyah* [@SimardGendron2011Fertility; @Grinberg2013Ments]; and post-2011 Syrian war displacements that swelled Amman, Irbid, Zarqa, Beirut and the Beqaa while hollowing out contested districts of Aleppo and Homs [@Omran2017Urban; @Morrison2018Providing; @Knudsen2024Urban].

# Methodology

Settlement series were compiled from five primary national census systems: CBS Syria (1960AD, 1970AD, 1981AD, 1994AD, 2004AD censuses and post-2011 projections), CAS Lebanon (1932AD Mandate census, 1970AD survey and 1996AD-2017AD district benchmarks), DOS Jordan (1952AD, 1961AD, 1979AD, 1994AD, 2004AD and 2015AD censuses), CBS Israel (1948AD, 1961AD, 1972AD, 1983AD, 1995AD, 2008AD and 2022AD censuses) and PCBS Palestine (1997AD, 2007AD, 2017AD censuses and 2023AD estimates). Every coordinate pair was checked against geoBoundaries ADM1 and ADM2 polygons [@Runfola2020GeoBoundaries] and the 41 regional areal-mask units to ensure zero coastal or border misregistration.

Two critical data-hygiene rules prevent distortion in the urban ledger. First, 22 contiguous suburban municipalities—including 10 satellite municipalities in Israel such as Giv'atayim, Qiryat Bialik, Qiryat Yam, Yehud and Giv'at Shemu'el; 6 Damascus suburbs in Syria such as Al-Hajar al-Aswad, Zamalka, Yalda and Kafr Batna; 3 Jordanian towns ('Anjarah, Kurayyimah, 'Ajlun); and 3 Palestinian municipalities (Al-Burayj, Bani Suhayla and Ram Allah, folded into adjacent Gaza-Deir al-Balah and Al-Bireh-Ramallah clusters)—were merged into parent urban anchors prior to kriging so dense conurbations never double-count inhabitants. Second, documented founding dates govern post-1948 Israeli planned towns: Qiryat Gat (1955AD), Dimona (1955AD), Ashdod (1956AD), Arad (1962AD) and Karmi'el (1964AD) remain absent prior to foundation rather than receiving synthetic 1946AD back-projections.

# Testing and Validation

Across the 242 catalogued settlements, temporal continuity improves smoothly from 237 active localities in 1946AD (5,83M combined inhabitants) to 240 in 1960AD (7,85M) and all 242 from 1970AD through 2025AD (9,69M in 1970AD, 14,93M in 1990AD, 23,48M in 2010AD and 31,59M in 2025AD). Figure \ref{fig:gazetteer-ranksize} plots the log-log rank-size curve alongside the twelve highest-peaking cities. With $n = 242$ well above the minimum sample floor, the ordinary least-squares Zipf regression yields $\alpha = 1{,}044$ ($R^2 = 0{,}961$), confirming a mature, steeply hierarchical urban network led by five sovereign capitals plus Syria's northern metropolis of Aleppo.

<figure class="crd-figure-block" id="fig:gazetteer-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine-settlements/fig4_modern_levant_israel_palestine_settlements.png" alt="fig:gazetteer-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Log-log rank-size regression across all 242 catalogued settlements (left) and the twelve highest-peaking cities in the Levant, 1946AD-2025AD (right).</figcaption>
</figure>

# Results

## Syria

Syria contributes 84 catalogued settlements rising from 2,22M urban residents in 1946AD to 11,85M at peak benchmarks (Table \ref{tab:syr-sites}). Aleppo (456,3k in 1946AD to 2,86M benchmark) and Damascus (515k to 1,9M core, flanked by Rural Damascus centres such as Duma, Jaramanah, Darayya and Al-Tall) dominate the upper hierarchy, followed by central Syrian industrial hubs at Homs (875,7k) and Hama (420k), coastal ports at Latakia (515k) and Tartus, and Euphrates-Jazira agricultural capitals at Ar-Raqqah (295,8k), Dayr az-Zawr (284,3k), Al-Hasakeh (252,5k) and Al-Qamishli (247,2k) [@Ahmad2012Syria; @Omran2017Urban; @Mohamed2020Monitoring; @Younes2023Understand].

<figure class="crd-table-figure" id="tab:syr-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ḥalab</strong></td><td class="crd-td">36,2, 37,16</td><td class="crd-td">456,3k</td><td class="crd-td">1,37M</td><td class="crd-td">2,86M</td><td class="crd-td">2,86M (2025)</td></tr>
<tr><td class="crd-td"><strong>Dimashq</strong></td><td class="crd-td">33,51, 36,29</td><td class="crd-td">515k</td><td class="crd-td">1,3M</td><td class="crd-td">1,9M</td><td class="crd-td">1,9M (2025)</td></tr>
<tr><td class="crd-td"><strong>Ḥimṣ</strong></td><td class="crd-td">34,72, 36,73</td><td class="crd-td">160,6k</td><td class="crd-td">471,3k</td><td class="crd-td">875,7k</td><td class="crd-td">875,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Lādhiqiyah</strong></td><td class="crd-td">35,53, 35,79</td><td class="crd-td">91,1k</td><td class="crd-td">270,6k</td><td class="crd-td">515k</td><td class="crd-td">515k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ḥamāh</strong></td><td class="crd-td">35,13, 36,76</td><td class="crd-td">82k</td><td class="crd-td">233,7k</td><td class="crd-td">420k</td><td class="crd-td">420k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar-Raqqah</strong></td><td class="crd-td">35,95, 39,01</td><td class="crd-td">40,3k</td><td class="crd-td">135,7k</td><td class="crd-td">295,8k</td><td class="crd-td">295,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dayr az-Zawr</strong></td><td class="crd-td">35,34, 40,14</td><td class="crd-td">42,6k</td><td class="crd-td">123,3k</td><td class="crd-td">284,3k</td><td class="crd-td">284,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥasakah</strong></td><td class="crd-td">36,5, 40,75</td><td class="crd-td">34k</td><td class="crd-td">103k</td><td class="crd-td">252,5k</td><td class="crd-td">252,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Qāmishlī</strong></td><td class="crd-td">37,05, 41,23</td><td class="crd-td">43,1k</td><td class="crd-td">126k</td><td class="crd-td">247,2k</td><td class="crd-td">247,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Yarmūk</strong></td><td class="crd-td">33,47, 36,3</td><td class="crd-td">38,3k</td><td class="crd-td">100,9k</td><td class="crd-td">184,2k</td><td class="crd-td">184,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṭarṭūs</strong></td><td class="crd-td">34,89, 35,89</td><td class="crd-td">24,3k</td><td class="crd-td">71,6k</td><td class="crd-td">155,3k</td><td class="crd-td">155,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jaramānā</strong></td><td class="crd-td">33,49, 36,35</td><td class="crd-td">29,8k</td><td class="crd-td">80,6k</td><td class="crd-td">153,4k</td><td class="crd-td">153,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dūmā</strong></td><td class="crd-td">33,57, 36,4</td><td class="crd-td">23,8k</td><td class="crd-td">69,4k</td><td class="crd-td">148,8k</td><td class="crd-td">148,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Manbij</strong></td><td class="crd-td">36,53, 37,95</td><td class="crd-td">14,3k</td><td class="crd-td">48,7k</td><td class="crd-td">133,5k</td><td class="crd-td">133,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Idlib</strong></td><td class="crd-td">35,93, 36,63</td><td class="crd-td">23,9k</td><td class="crd-td">66,6k</td><td class="crd-td">132,6k</td><td class="crd-td">132,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dar'ā</strong></td><td class="crd-td">32,62, 36,1</td><td class="crd-td">22,9k</td><td class="crd-td">64,7k</td><td class="crd-td">131,5k</td><td class="crd-td">131,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dārayyā</strong></td><td class="crd-td">33,46, 36,23</td><td class="crd-td">15,8k</td><td class="crd-td">47,3k</td><td class="crd-td">105,7k</td><td class="crd-td">105,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Suwaydā'</strong></td><td class="crd-td">32,71, 36,57</td><td class="crd-td">20,1k</td><td class="crd-td">53,4k</td><td class="crd-td">98,8k</td><td class="crd-td">98,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ath-Thawrah</strong></td><td class="crd-td">35,84, 38,55</td><td class="crd-td">20,7k</td><td class="crd-td">53,2k</td><td class="crd-td">93,2k</td><td class="crd-td">93,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ḥarastā al-Baṣal</strong></td><td class="crd-td">33,56, 36,37</td><td class="crd-td">11,9k</td><td class="crd-td">37,7k</td><td class="crd-td">92,2k</td><td class="crd-td">92,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Salamiyah</strong></td><td class="crd-td">35,01, 37,05</td><td class="crd-td">16,6k</td><td class="crd-td">45,8k</td><td class="crd-td">89,5k</td><td class="crd-td">89,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Safīrah</strong></td><td class="crd-td">36,08, 37,37</td><td class="crd-td">9,8k</td><td class="crd-td">32,6k</td><td class="crd-td">85,5k</td><td class="crd-td">85,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Bāb</strong></td><td class="crd-td">36,37, 37,52</td><td class="crd-td">13,9k</td><td class="crd-td">40,1k</td><td class="crd-td">84,6k</td><td class="crd-td">84,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jablah</strong></td><td class="crd-td">35,36, 35,93</td><td class="crd-td">11,5k</td><td class="crd-td">33,6k</td><td class="crd-td">72,4k</td><td class="crd-td">72,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tadmur</strong></td><td class="crd-td">34,56, 38,28</td><td class="crd-td">8,4k</td><td class="crd-td">27,2k</td><td class="crd-td">68,9k</td><td class="crd-td">68,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Babīlā</strong></td><td class="crd-td">33,47, 36,33</td><td class="crd-td">14,2k</td><td class="crd-td">37,4k</td><td class="crd-td">68,3k</td><td class="crd-td">68,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nawā</strong></td><td class="crd-td">32,89, 36,04</td><td class="crd-td">9,4k</td><td class="crd-td">28,2k</td><td class="crd-td">63,2k</td><td class="crd-td">63,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Judaydat 'Arṭūz</strong></td><td class="crd-td">33,44, 36,16</td><td class="crd-td">12,6k</td><td class="crd-td">33,1k</td><td class="crd-td">60,4k</td><td class="crd-td">60,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Arbīn</strong></td><td class="crd-td">33,54, 36,37</td><td class="crd-td">12,5k</td><td class="crd-td">33k</td><td class="crd-td">60,3k</td><td class="crd-td">60,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Aīn al-'Arab</strong></td><td class="crd-td">36,89, 38,35</td><td class="crd-td">5,7k</td><td class="crd-td">20,5k</td><td class="crd-td">60,1k</td><td class="crd-td">60,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>At-Tall</strong></td><td class="crd-td">33,61, 36,31</td><td class="crd-td">8,4k</td><td class="crd-td">25,8k</td><td class="crd-td">59,8k</td><td class="crd-td">59,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Mayādīn</strong></td><td class="crd-td">35,02, 40,45</td><td class="crd-td">6,9k</td><td class="crd-td">22,8k</td><td class="crd-td">59,1k</td><td class="crd-td">59,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Kiswah</strong></td><td class="crd-td">33,36, 36,24</td><td class="crd-td">12,1k</td><td class="crd-td">31,9k</td><td class="crd-td">58,3k</td><td class="crd-td">58,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Abū Kamāl</strong></td><td class="crd-td">34,45, 40,92</td><td class="crd-td">8,1k</td><td class="crd-td">24,8k</td><td class="crd-td">57k</td><td class="crd-td">57k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bāniyās</strong></td><td class="crd-td">35,18, 35,95</td><td class="crd-td">9k</td><td class="crd-td">26,2k</td><td class="crd-td">55,9k</td><td class="crd-td">55,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jisr ash-Shughūr</strong></td><td class="crd-td">35,81, 36,32</td><td class="crd-td">9,9k</td><td class="crd-td">27,4k</td><td class="crd-td">53,6k</td><td class="crd-td">53,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar-Rastan</strong></td><td class="crd-td">34,93, 36,73</td><td class="crd-td">7k</td><td class="crd-td">22,1k</td><td class="crd-td">53,4k</td><td class="crd-td">53,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Arīḥā</strong></td><td class="crd-td">35,81, 36,61</td><td class="crd-td">8,2k</td><td class="crd-td">24,3k</td><td class="crd-td">53k</td><td class="crd-td">53k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hajīn</strong></td><td class="crd-td">34,7, 40,83</td><td class="crd-td">10,6k</td><td class="crd-td">27,9k</td><td class="crd-td">50,9k</td><td class="crd-td">50,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Afrīn</strong></td><td class="crd-td">36,51, 36,87</td><td class="crd-td">5,5k</td><td class="crd-td">18,5k</td><td class="crd-td">49,1k</td><td class="crd-td">49,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Aīn Tarmā</strong></td><td class="crd-td">33,51, 36,35</td><td class="crd-td">10k</td><td class="crd-td">26,3k</td><td class="crd-td">47,9k</td><td class="crd-td">47,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Khan Shaykhūn</strong></td><td class="crd-td">35,44, 36,65</td><td class="crd-td">9,6k</td><td class="crd-td">25,3k</td><td class="crd-td">46,1k</td><td class="crd-td">46,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qaṭanā</strong></td><td class="crd-td">33,44, 36,08</td><td class="crd-td">8,3k</td><td class="crd-td">23k</td><td class="crd-td">45,6k</td><td class="crd-td">45,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qudsayā</strong></td><td class="crd-td">33,55, 36,22</td><td class="crd-td">9,4k</td><td class="crd-td">24,7k</td><td class="crd-td">45k</td><td class="crd-td">45k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sarāqib</strong></td><td class="crd-td">35,86, 36,81</td><td class="crd-td">9,1k</td><td class="crd-td">23,9k</td><td class="crd-td">43,6k</td><td class="crd-td">43,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṭafas</strong></td><td class="crd-td">32,74, 36,07</td><td class="crd-td">9k</td><td class="crd-td">23,7k</td><td class="crd-td">43,3k</td><td class="crd-td">43,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jāsim</strong></td><td class="crd-td">32,99, 36,06</td><td class="crd-td">8,8k</td><td class="crd-td">23,3k</td><td class="crd-td">42,5k</td><td class="crd-td">42,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>A'zāz</strong></td><td class="crd-td">36,59, 37,05</td><td class="crd-td">7,7k</td><td class="crd-td">21,3k</td><td class="crd-td">42,4k</td><td class="crd-td">42,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Inkhil</strong></td><td class="crd-td">33,02, 36,13</td><td class="crd-td">8,7k</td><td class="crd-td">23k</td><td class="crd-td">41,9k</td><td class="crd-td">41,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tallbīsah</strong></td><td class="crd-td">34,84, 36,73</td><td class="crd-td">8,6k</td><td class="crd-td">22,6k</td><td class="crd-td">41,3k</td><td class="crd-td">41,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ashrafiyat Ṣaḥnāyā</strong></td><td class="crd-td">33,43, 36,24</td><td class="crd-td">8,5k</td><td class="crd-td">22,4k</td><td class="crd-td">41k</td><td class="crd-td">41k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruḥaybah</strong></td><td class="crd-td">34,28, 36,93</td><td class="crd-td">8,5k</td><td class="crd-td">22,4k</td><td class="crd-td">40,9k</td><td class="crd-td">40,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Quṣayr</strong></td><td class="crd-td">34,51, 36,58</td><td class="crd-td">6,9k</td><td class="crd-td">19,5k</td><td class="crd-td">40k</td><td class="crd-td">40k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dā'il</strong></td><td class="crd-td">32,75, 36,13</td><td class="crd-td">8,2k</td><td class="crd-td">21,6k</td><td class="crd-td">39,5k</td><td class="crd-td">39,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ra's al-'Aīn</strong></td><td class="crd-td">36,58, 38,36</td><td class="crd-td">6,6k</td><td class="crd-td">18,9k</td><td class="crd-td">39,4k</td><td class="crd-td">39,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṣūrān</strong></td><td class="crd-td">35,29, 36,75</td><td class="crd-td">8,1k</td><td class="crd-td">21,4k</td><td class="crd-td">39k</td><td class="crd-td">39k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Qūriyah</strong></td><td class="crd-td">34,96, 40,54</td><td class="crd-td">7,9k</td><td class="crd-td">20,7k</td><td class="crd-td">37,8k</td><td class="crd-td">37,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Amūdā</strong></td><td class="crd-td">37,1, 40,93</td><td class="crd-td">7,5k</td><td class="crd-td">19,7k</td><td class="crd-td">36k</td><td class="crd-td">36k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Quṭayfah</strong></td><td class="crd-td">33,74, 36,6</td><td class="crd-td">5,7k</td><td class="crd-td">16,6k</td><td class="crd-td">35,8k</td><td class="crd-td">35,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Mālikiyah</strong></td><td class="crd-td">37,18, 42,14</td><td class="crd-td">6,1k</td><td class="crd-td">17,3k</td><td class="crd-td">35,3k</td><td class="crd-td">35,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Az-Zabadānī</strong></td><td class="crd-td">33,72, 36,1</td><td class="crd-td">7,6k</td><td class="crd-td">19,8k</td><td class="crd-td">35,3k</td><td class="crd-td">35,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣanamayn</strong></td><td class="crd-td">33,07, 36,18</td><td class="crd-td">7,3k</td><td class="crd-td">19,3k</td><td class="crd-td">35,2k</td><td class="crd-td">35,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Yabrūd</strong></td><td class="crd-td">33,97, 36,66</td><td class="crd-td">7,9k</td><td class="crd-td">20,1k</td><td class="crd-td">34,7k</td><td class="crd-td">34,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Saqbā</strong></td><td class="crd-td">33,52, 36,38</td><td class="crd-td">7,2k</td><td class="crd-td">18,9k</td><td class="crd-td">34,5k</td><td class="crd-td">34,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aḍ-Ḍumayr</strong></td><td class="crd-td">33,64, 36,69</td><td class="crd-td">6,8k</td><td class="crd-td">17,8k</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṭaybat al-Imām</strong></td><td class="crd-td">35,27, 36,71</td><td class="crd-td">6,7k</td><td class="crd-td">17,7k</td><td class="crd-td">32,3k</td><td class="crd-td">32,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ash-Shaykh Maskīn</strong></td><td class="crd-td">32,83, 36,16</td><td class="crd-td">6,7k</td><td class="crd-td">17,7k</td><td class="crd-td">32,3k</td><td class="crd-td">32,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṣubaykhān</strong></td><td class="crd-td">34,85, 40,6</td><td class="crd-td">6,7k</td><td class="crd-td">17,5k</td><td class="crd-td">32k</td><td class="crd-td">32k (2025)</td></tr>
<tr><td class="crd-td"><strong>Salqīn</strong></td><td class="crd-td">36,14, 36,45</td><td class="crd-td">6,6k</td><td class="crd-td">17,4k</td><td class="crd-td">31,8k</td><td class="crd-td">31,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Malīḥah</strong></td><td class="crd-td">32,73, 36,2</td><td class="crd-td">6,4k</td><td class="crd-td">16,9k</td><td class="crd-td">30,9k</td><td class="crd-td">30,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Gharānīj</strong></td><td class="crd-td">34,78, 40,71</td><td class="crd-td">6,4k</td><td class="crd-td">16,9k</td><td class="crd-td">30,9k</td><td class="crd-td">30,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Maṣyāf</strong></td><td class="crd-td">35,07, 36,34</td><td class="crd-td">6k</td><td class="crd-td">16,1k</td><td class="crd-td">30,2k</td><td class="crd-td">30,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Abū Ḥammām</strong></td><td class="crd-td">34,82, 40,66</td><td class="crd-td">6,1k</td><td class="crd-td">16,1k</td><td class="crd-td">29,4k</td><td class="crd-td">29,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Binnish</strong></td><td class="crd-td">35,96, 36,71</td><td class="crd-td">6,1k</td><td class="crd-td">16,1k</td><td class="crd-td">29,3k</td><td class="crd-td">29,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ḥalfāyā</strong></td><td class="crd-td">35,26, 36,61</td><td class="crd-td">5,9k</td><td class="crd-td">15,6k</td><td class="crd-td">28,4k</td><td class="crd-td">28,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nubl</strong></td><td class="crd-td">36,38, 36,99</td><td class="crd-td">5,9k</td><td class="crd-td">15,5k</td><td class="crd-td">28,2k</td><td class="crd-td">28,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥarāk</strong></td><td class="crd-td">32,75, 36,31</td><td class="crd-td">5,8k</td><td class="crd-td">15,3k</td><td class="crd-td">27,9k</td><td class="crd-td">27,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tall Rif'at</strong></td><td class="crd-td">36,47, 37,09</td><td class="crd-td">5,7k</td><td class="crd-td">15,1k</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṣāfītā</strong></td><td class="crd-td">34,82, 36,12</td><td class="crd-td">4,6k</td><td class="crd-td">13,2k</td><td class="crd-td">27,2k</td><td class="crd-td">27,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kafr Lāhā</strong></td><td class="crd-td">34,89, 36,5</td><td class="crd-td">5,6k</td><td class="crd-td">14,7k</td><td class="crd-td">26,9k</td><td class="crd-td">26,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Buṣra āsh-Shām</strong></td><td class="crd-td">32,52, 36,48</td><td class="crd-td">5,5k</td><td class="crd-td">14,5k</td><td class="crd-td">26,4k</td><td class="crd-td">26,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Izra'</strong></td><td class="crd-td">32,87, 36,25</td><td class="crd-td">5,3k</td><td class="crd-td">14,1k</td><td class="crd-td">25,7k</td><td class="crd-td">25,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Majdal Shams</strong></td><td class="crd-td">33,27, 35,77</td><td class="crd-td">2,2k</td><td class="crd-td">5,8k</td><td class="crd-td">12k</td><td class="crd-td">12k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jaba</strong></td><td class="crd-td">33,16, 35,93</td><td class="crd-td">1k</td><td class="crd-td">2,7k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued cities and towns in Syria (84 settlements), showing coordinates, 1946AD, 1990AD and 2025AD estimates and peak population.</figcaption>
</figure>

## Israel

Israel contributes 79 catalogued settlements growing from 1,34M combined residents in 1946AD to 7,21M by 2025AD (Table \ref{tab:isr-sites}). Rather than concentrating into a single primate municipality, urban population distributes across Jerusalem/Yerushalayim (190k to 1,02M), Tel Aviv-Yafo (145k to 494,8k) and its surrounding Gush Dan ring cities—Rishon LeZiyyon (271,9k), Petah Tiqwa (266,8k), Bene Beraq (224,6k), Holon (202,8k), Ramat Gan (177,2k) and Bat Yam (130,3k)—alongside northern Haifa (299,1k), Netanya (237k), post-1956 Ashdod (239k) and Negev capital Beersheba [@SimardGendron2011Fertility; @Grinberg2013Ments].

<figure class="crd-table-figure" id="tab:isr-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yerushalayim</strong></td><td class="crd-td">31,75, 35,03</td><td class="crd-td">190k</td><td class="crd-td">530,2k</td><td class="crd-td">1,02M</td><td class="crd-td">1,02M (2025)</td></tr>
<tr><td class="crd-td"><strong>Tel Aviv-Yafo</strong></td><td class="crd-td">32,08, 34,78</td><td class="crd-td">145k</td><td class="crd-td">339,3k</td><td class="crd-td">494,8k</td><td class="crd-td">494,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hefa</strong></td><td class="crd-td">32,77, 35,07</td><td class="crd-td">100k</td><td class="crd-td">242,9k</td><td class="crd-td">299,1k</td><td class="crd-td">299,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rishon LeZiyyon</strong></td><td class="crd-td">31,97, 34,79</td><td class="crd-td">46,3k</td><td class="crd-td">135,5k</td><td class="crd-td">271,9k</td><td class="crd-td">271,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Petah Tiqwa</strong></td><td class="crd-td">32,09, 34,89</td><td class="crd-td">54,9k</td><td class="crd-td">138,2k</td><td class="crd-td">266,8k</td><td class="crd-td">266,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ashdod</strong></td><td class="crd-td">31,79, 34,65</td><td class="crd-td">-</td><td class="crd-td">96k</td><td class="crd-td">239k</td><td class="crd-td">239k (2025)</td></tr>
<tr><td class="crd-td"><strong>Netanya</strong></td><td class="crd-td">32,33, 34,86</td><td class="crd-td">45,3k</td><td class="crd-td">124,6k</td><td class="crd-td">237k</td><td class="crd-td">237k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bene Beraq</strong></td><td class="crd-td">32,08, 34,83</td><td class="crd-td">42,6k</td><td class="crd-td">114,5k</td><td class="crd-td">224,6k</td><td class="crd-td">224,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Be'er Sheva</strong></td><td class="crd-td">31,25, 34,79</td><td class="crd-td">49,1k</td><td class="crd-td">131,9k</td><td class="crd-td">223,4k</td><td class="crd-td">223,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Holon</strong></td><td class="crd-td">32,01, 34,78</td><td class="crd-td">59,1k</td><td class="crd-td">150k</td><td class="crd-td">208,8k</td><td class="crd-td">208,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ramat Gan</strong></td><td class="crd-td">32,08, 34,81</td><td class="crd-td">51,9k</td><td class="crd-td">123,3k</td><td class="crd-td">179,5k</td><td class="crd-td">179,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ashqelon</strong></td><td class="crd-td">31,67, 34,57</td><td class="crd-td">23,4k</td><td class="crd-td">67,8k</td><td class="crd-td">157,8k</td><td class="crd-td">157,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rehovot</strong></td><td class="crd-td">31,89, 34,81</td><td class="crd-td">30,1k</td><td class="crd-td">77k</td><td class="crd-td">156,4k</td><td class="crd-td">156,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bet Shemesh</strong></td><td class="crd-td">31,73, 34,99</td><td class="crd-td">5,7k</td><td class="crd-td">18,7k</td><td class="crd-td">149,9k</td><td class="crd-td">149,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bat Yam</strong></td><td class="crd-td">32,02, 34,75</td><td class="crd-td">57k</td><td class="crd-td">133,2k</td><td class="crd-td">133,6k</td><td class="crd-td">136,4k (1995)</td></tr>
<tr><td class="crd-td"><strong>Herzliyya</strong></td><td class="crd-td">32,17, 34,83</td><td class="crd-td">28k</td><td class="crd-td">73,9k</td><td class="crd-td">109,3k</td><td class="crd-td">109,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kefar Sava</strong></td><td class="crd-td">32,17, 34,91</td><td class="crd-td">19,3k</td><td class="crd-td">56,6k</td><td class="crd-td">107,7k</td><td class="crd-td">107,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hadera</strong></td><td class="crd-td">32,44, 34,9</td><td class="crd-td">17,2k</td><td class="crd-td">50,2k</td><td class="crd-td">106,4k</td><td class="crd-td">106,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Modi'in-Makkabbim-Re'ut</strong></td><td class="crd-td">31,89, 35,02</td><td class="crd-td">17,7k</td><td class="crd-td">46,6k</td><td class="crd-td">102,7k</td><td class="crd-td">102,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Lod</strong></td><td class="crd-td">31,95, 34,89</td><td class="crd-td">17,9k</td><td class="crd-td">46,5k</td><td class="crd-td">87,4k</td><td class="crd-td">87,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Modi'in Illit</strong></td><td class="crd-td">31,93, 35,04</td><td class="crd-td">1,9k</td><td class="crd-td">4,9k</td><td class="crd-td">85,7k</td><td class="crd-td">85,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nazerat</strong></td><td class="crd-td">32,7, 35,3</td><td class="crd-td">19,8k</td><td class="crd-td">48,8k</td><td class="crd-td">82,4k</td><td class="crd-td">82,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ramla</strong></td><td class="crd-td">31,93, 34,86</td><td class="crd-td">18,7k</td><td class="crd-td">50,5k</td><td class="crd-td">82,3k</td><td class="crd-td">82,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rahat</strong></td><td class="crd-td">31,4, 34,76</td><td class="crd-td">4,1k</td><td class="crd-td">15,5k</td><td class="crd-td">80,6k</td><td class="crd-td">80,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rosh HaAyin</strong></td><td class="crd-td">32,1, 34,95</td><td class="crd-td">5k</td><td class="crd-td">19,8k</td><td class="crd-td">75,8k</td><td class="crd-td">75,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hod HaSharon</strong></td><td class="crd-td">32,16, 34,89</td><td class="crd-td">9,1k</td><td class="crd-td">25,2k</td><td class="crd-td">69,1k</td><td class="crd-td">69,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nahariyya</strong></td><td class="crd-td">33,01, 35,1</td><td class="crd-td">12,3k</td><td class="crd-td">32,5k</td><td class="crd-td">64,3k</td><td class="crd-td">64,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Gat</strong></td><td class="crd-td">31,61, 34,76</td><td class="crd-td">-</td><td class="crd-td">35k</td><td class="crd-td">64,1k</td><td class="crd-td">64,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Atta</strong></td><td class="crd-td">32,81, 35,11</td><td class="crd-td">14,6k</td><td class="crd-td">38,3k</td><td class="crd-td">63,6k</td><td class="crd-td">63,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Afula</strong></td><td class="crd-td">32,61, 35,29</td><td class="crd-td">9,4k</td><td class="crd-td">27,8k</td><td class="crd-td">62,5k</td><td class="crd-td">62,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Umm al-Fahm</strong></td><td class="crd-td">32,52, 35,15</td><td class="crd-td">8,9k</td><td class="crd-td">24,9k</td><td class="crd-td">61k</td><td class="crd-td">61k (2025)</td></tr>
<tr><td class="crd-td"><strong>Yavne</strong></td><td class="crd-td">31,88, 34,74</td><td class="crd-td">6,2k</td><td class="crd-td">20,7k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Elat</strong></td><td class="crd-td">29,56, 34,95</td><td class="crd-td">8,4k</td><td class="crd-td">25,5k</td><td class="crd-td">55,8k</td><td class="crd-td">55,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nes Ziyyona</strong></td><td class="crd-td">31,93, 34,8</td><td class="crd-td">6,7k</td><td class="crd-td">18,7k</td><td class="crd-td">53,4k</td><td class="crd-td">53,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Akko</strong></td><td class="crd-td">32,93, 35,08</td><td class="crd-td">16,1k</td><td class="crd-td">40,8k</td><td class="crd-td">52,5k</td><td class="crd-td">52,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>El'ad</strong></td><td class="crd-td">32,05, 34,96</td><td class="crd-td">8,7k</td><td class="crd-td">22,8k</td><td class="crd-td">52,4k</td><td class="crd-td">52,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ramat HaSharon</strong></td><td class="crd-td">32,15, 34,84</td><td class="crd-td">14,4k</td><td class="crd-td">34,6k</td><td class="crd-td">50,7k</td><td class="crd-td">50,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Teverya</strong></td><td class="crd-td">32,79, 35,53</td><td class="crd-td">12,5k</td><td class="crd-td">32,2k</td><td class="crd-td">49,4k</td><td class="crd-td">49,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Motzkin</strong></td><td class="crd-td">32,84, 35,08</td><td class="crd-td">11,8k</td><td class="crd-td">30,4k</td><td class="crd-td">49,2k</td><td class="crd-td">49,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Karmi'el</strong></td><td class="crd-td">32,91, 35,3</td><td class="crd-td">-</td><td class="crd-td">24,2k</td><td class="crd-td">49k</td><td class="crd-td">49k (2025)</td></tr>
<tr><td class="crd-td"><strong>Pardes Hanna-Karkur</strong></td><td class="crd-td">32,47, 34,98</td><td class="crd-td">7,1k</td><td class="crd-td">19,2k</td><td class="crd-td">46,8k</td><td class="crd-td">46,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nof HaGalil</strong></td><td class="crd-td">32,71, 35,32</td><td class="crd-td">10,5k</td><td class="crd-td">30,8k</td><td class="crd-td">45,1k</td><td class="crd-td">45,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Netivot</strong></td><td class="crd-td">31,42, 34,59</td><td class="crd-td">3,6k</td><td class="crd-td">11,5k</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Ono</strong></td><td class="crd-td">32,06, 34,86</td><td class="crd-td">9,6k</td><td class="crd-td">22,9k</td><td class="crd-td">44,3k</td><td class="crd-td">44,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Zefat</strong></td><td class="crd-td">32,96, 35,5</td><td class="crd-td">7k</td><td class="crd-td">18,9k</td><td class="crd-td">39,6k</td><td class="crd-td">39,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Or Yehuda</strong></td><td class="crd-td">32,03, 34,85</td><td class="crd-td">8,5k</td><td class="crd-td">21,4k</td><td class="crd-td">38,9k</td><td class="crd-td">38,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dimona</strong></td><td class="crd-td">31,07, 35,03</td><td class="crd-td">-</td><td class="crd-td">29,2k</td><td class="crd-td">38k</td><td class="crd-td">38k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tamra</strong></td><td class="crd-td">32,85, 35,2</td><td class="crd-td">5,9k</td><td class="crd-td">16,4k</td><td class="crd-td">37,4k</td><td class="crd-td">37,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ofaqim</strong></td><td class="crd-td">31,31, 34,62</td><td class="crd-td">5,6k</td><td class="crd-td">16,8k</td><td class="crd-td">36k</td><td class="crd-td">36k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sakhnin</strong></td><td class="crd-td">32,87, 35,3</td><td class="crd-td">5,7k</td><td class="crd-td">15,8k</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Baqa al-Gharbiyye</strong></td><td class="crd-td">32,42, 35,04</td><td class="crd-td">5,1k</td><td class="crd-td">13,7k</td><td class="crd-td">32,8k</td><td class="crd-td">32,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sederot</strong></td><td class="crd-td">31,52, 34,6</td><td class="crd-td">4k</td><td class="crd-td">12,9k</td><td class="crd-td">32,3k</td><td class="crd-td">32,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Gedera</strong></td><td class="crd-td">31,81, 34,78</td><td class="crd-td">2,9k</td><td class="crd-td">7,9k</td><td class="crd-td">32,1k</td><td class="crd-td">32,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Be'er Ya'aqov</strong></td><td class="crd-td">31,94, 34,84</td><td class="crd-td">2,1k</td><td class="crd-td">6,2k</td><td class="crd-td">31,6k</td><td class="crd-td">31,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kefar Yona</strong></td><td class="crd-td">32,32, 34,94</td><td class="crd-td">1,4k</td><td class="crd-td">5k</td><td class="crd-td">29,5k</td><td class="crd-td">29,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Arad</strong></td><td class="crd-td">31,26, 35,21</td><td class="crd-td">-</td><td class="crd-td">16,5k</td><td class="crd-td">29,2k</td><td class="crd-td">29,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tire</strong></td><td class="crd-td">32,76, 34,97</td><td class="crd-td">4,9k</td><td class="crd-td">13,5k</td><td class="crd-td">29k</td><td class="crd-td">29k (2025)</td></tr>
<tr><td class="crd-td"><strong>Harish</strong></td><td class="crd-td">32,46, 35,05</td><td class="crd-td">510</td><td class="crd-td">1,3k</td><td class="crd-td">28,6k</td><td class="crd-td">28,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Arrabe</strong></td><td class="crd-td">32,85, 35,34</td><td class="crd-td">4,3k</td><td class="crd-td">12,1k</td><td class="crd-td">28,2k</td><td class="crd-td">28,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Migdal HaEmeq</strong></td><td class="crd-td">32,68, 35,24</td><td class="crd-td">5,9k</td><td class="crd-td">17,8k</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar'ara</strong></td><td class="crd-td">32,5, 35,09</td><td class="crd-td">3,5k</td><td class="crd-td">9,8k</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Mal'akhi</strong></td><td class="crd-td">31,73, 34,75</td><td class="crd-td">5,4k</td><td class="crd-td">15,7k</td><td class="crd-td">26,5k</td><td class="crd-td">26,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mevasseret Ziyyon</strong></td><td class="crd-td">31,8, 35,15</td><td class="crd-td">3,6k</td><td class="crd-td">12,3k</td><td class="crd-td">26,4k</td><td class="crd-td">26,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kafar Qasem</strong></td><td class="crd-td">32,11, 34,98</td><td class="crd-td">3,3k</td><td class="crd-td">9,8k</td><td class="crd-td">26,2k</td><td class="crd-td">26,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Yoqne'am Illit</strong></td><td class="crd-td">32,65, 35,09</td><td class="crd-td">2,2k</td><td class="crd-td">7,3k</td><td class="crd-td">25,5k</td><td class="crd-td">25,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hura</strong></td><td class="crd-td">31,3, 34,94</td><td class="crd-td">862</td><td class="crd-td">2,3k</td><td class="crd-td">25,3k</td><td class="crd-td">25,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qalansawe</strong></td><td class="crd-td">32,28, 34,98</td><td class="crd-td">3,5k</td><td class="crd-td">9,9k</td><td class="crd-td">25,3k</td><td class="crd-td">25,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Zikhron Ya'aqov</strong></td><td class="crd-td">32,57, 34,95</td><td class="crd-td">2,2k</td><td class="crd-td">7,2k</td><td class="crd-td">25,2k</td><td class="crd-td">25,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nesher</strong></td><td class="crd-td">32,77, 35,04</td><td class="crd-td">4,3k</td><td class="crd-td">14,1k</td><td class="crd-td">25,1k</td><td class="crd-td">25,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mughar</strong></td><td class="crd-td">32,89, 35,41</td><td class="crd-td">4,6k</td><td class="crd-td">12,9k</td><td class="crd-td">25k</td><td class="crd-td">25k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kuseife</strong></td><td class="crd-td">31,25, 35,09</td><td class="crd-td">919</td><td class="crd-td">3k</td><td class="crd-td">24,6k</td><td class="crd-td">24,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qadima-Zoran</strong></td><td class="crd-td">32,28, 34,92</td><td class="crd-td">1,6k</td><td class="crd-td">5,7k</td><td class="crd-td">24,2k</td><td class="crd-td">24,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Shemona</strong></td><td class="crd-td">33,21, 35,57</td><td class="crd-td">6,7k</td><td class="crd-td">17,5k</td><td class="crd-td">23,6k</td><td class="crd-td">23,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ma'alot-Tarshiha</strong></td><td class="crd-td">33,02, 35,27</td><td class="crd-td">3,3k</td><td class="crd-td">11,5k</td><td class="crd-td">23,6k</td><td class="crd-td">23,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Shoham</strong></td><td class="crd-td">32, 34,95</td><td class="crd-td">1,1k</td><td class="crd-td">2,8k</td><td class="crd-td">22,7k</td><td class="crd-td">22,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kafar Manda</strong></td><td class="crd-td">32,81, 35,26</td><td class="crd-td">2,9k</td><td class="crd-td">8,7k</td><td class="crd-td">22,3k</td><td class="crd-td">22,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Or Aqiva</strong></td><td class="crd-td">32,51, 34,92</td><td class="crd-td">3,4k</td><td class="crd-td">10,6k</td><td class="crd-td">21k</td><td class="crd-td">21k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar'ara-Banegev</strong></td><td class="crd-td">31,16, 35,02</td><td class="crd-td">576</td><td class="crd-td">4,1k</td><td class="crd-td">20,8k</td><td class="crd-td">20,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ari'el</strong></td><td class="crd-td">31,77, 35,22</td><td class="crd-td">541</td><td class="crd-td">7,1k</td><td class="crd-td">20,8k</td><td class="crd-td">20,8k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued cities and towns in Israel (79 settlements), showing coordinates, 1946AD, 1990AD and 2025AD estimates and peak population.</figcaption>
</figure>

## Jordan

Jordan contributes 38 catalogued settlements surging nearly eightfold from 879,6k in 1946AD to 6,66M in 2025AD (Table \ref{tab:jor-sites}). Greater Amman (2,08M), Az-Zarqa' (730,6k), Irbid (578,3k), Ar-Rusayfah (543,6k), Wadi as-Sir (278,2k), Al-Jubayhah (226,8k), Sahab (194,9k) and Ar-Ramtha (179,1k) anchor the northwestern highland corridor that absorbed successive waves of Palestinian, Gulf-returnee, Iraqi and post-2011 Syrian migrants, complemented by southern nodes at Al-Karak, Ma'an, At-Tafilah and Red Sea port Al-'Aqabah [@Knudsen2024Urban].

<figure class="crd-table-figure" id="tab:jor-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>'Ammān</strong></td><td class="crd-td">31,96, 35,95</td><td class="crd-td">345,8k</td><td class="crd-td">910,4k</td><td class="crd-td">2,08M</td><td class="crd-td">2,08M (2025)</td></tr>
<tr><td class="crd-td"><strong>Az-Zarqā'</strong></td><td class="crd-td">32,07, 36,09</td><td class="crd-td">122k</td><td class="crd-td">321,3k</td><td class="crd-td">730,6k</td><td class="crd-td">730,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Irbid</strong></td><td class="crd-td">32,56, 35,85</td><td class="crd-td">72,5k</td><td class="crd-td">190,8k</td><td class="crd-td">578,3k</td><td class="crd-td">578,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruṣayfah</strong></td><td class="crd-td">32,02, 36,05</td><td class="crd-td">62,2k</td><td class="crd-td">163,8k</td><td class="crd-td">543,6k</td><td class="crd-td">543,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Wādī as-Sīr</strong></td><td class="crd-td">31,95, 35,82</td><td class="crd-td">31k</td><td class="crd-td">81,6k</td><td class="crd-td">278,2k</td><td class="crd-td">278,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Jubayhah</strong></td><td class="crd-td">32,01, 35,9</td><td class="crd-td">13k</td><td class="crd-td">34,3k</td><td class="crd-td">226,8k</td><td class="crd-td">226,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Saḥāb</strong></td><td class="crd-td">31,87, 36</td><td class="crd-td">11,2k</td><td class="crd-td">29,4k</td><td class="crd-td">194,9k</td><td class="crd-td">194,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar-Ramthā</strong></td><td class="crd-td">32,56, 36,01</td><td class="crd-td">17,4k</td><td class="crd-td">45,8k</td><td class="crd-td">179,1k</td><td class="crd-td">179,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṣuwayliḥ</strong></td><td class="crd-td">32,02, 35,84</td><td class="crd-td">18,5k</td><td class="crd-td">48,8k</td><td class="crd-td">173,7k</td><td class="crd-td">173,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-'Aqabah</strong></td><td class="crd-td">29,53, 35,01</td><td class="crd-td">21,8k</td><td class="crd-td">57,5k</td><td class="crd-td">170,7k</td><td class="crd-td">170,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Mafraq</strong></td><td class="crd-td">32,34, 36,21</td><td class="crd-td">13,4k</td><td class="crd-td">35,2k</td><td class="crd-td">121,9k</td><td class="crd-td">121,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mādabā</strong></td><td class="crd-td">31,72, 35,79</td><td class="crd-td">19,4k</td><td class="crd-td">51,1k</td><td class="crd-td">121,2k</td><td class="crd-td">121,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Salṭ</strong></td><td class="crd-td">32,04, 35,73</td><td class="crd-td">19,6k</td><td class="crd-td">51,7k</td><td class="crd-td">114,9k</td><td class="crd-td">114,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Umm Quṣayr - Al-Muqābalīn</strong></td><td class="crd-td">31,91, 35,92</td><td class="crd-td">6,7k</td><td class="crd-td">17,7k</td><td class="crd-td">114,7k</td><td class="crd-td">114,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">31,7, 35,96</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td><td class="crd-td">109,3k</td><td class="crd-td">109,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Marj al-Ḥamām</strong></td><td class="crd-td">31,9, 35,85</td><td class="crd-td">5,8k</td><td class="crd-td">15,2k</td><td class="crd-td">95,2k</td><td class="crd-td">95,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Aīn al-Bāshā</strong></td><td class="crd-td">32,06, 35,83</td><td class="crd-td">7,4k</td><td class="crd-td">19,5k</td><td class="crd-td">69,2k</td><td class="crd-td">69,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Āīdūn</strong></td><td class="crd-td">32,51, 35,86</td><td class="crd-td">5,1k</td><td class="crd-td">13,4k</td><td class="crd-td">67,4k</td><td class="crd-td">67,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jarash</strong></td><td class="crd-td">32,28, 35,9</td><td class="crd-td">7,4k</td><td class="crd-td">19,5k</td><td class="crd-td">58,4k</td><td class="crd-td">58,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣarīḥ</strong></td><td class="crd-td">32,5, 35,89</td><td class="crd-td">5,6k</td><td class="crd-td">14,6k</td><td class="crd-td">52,9k</td><td class="crd-td">52,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Hāshimiyah</strong></td><td class="crd-td">32,13, 36,12</td><td class="crd-td">4,6k</td><td class="crd-td">12,1k</td><td class="crd-td">51,5k</td><td class="crd-td">51,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ma'ān</strong></td><td class="crd-td">30,2, 35,73</td><td class="crd-td">8k</td><td class="crd-td">21,1k</td><td class="crd-td">47,2k</td><td class="crd-td">47,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bayt Rās</strong></td><td class="crd-td">32,59, 35,86</td><td class="crd-td">4k</td><td class="crd-td">10,5k</td><td class="crd-td">47k</td><td class="crd-td">47k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥiṣn</strong></td><td class="crd-td">32,48, 35,88</td><td class="crd-td">5,7k</td><td class="crd-td">14,9k</td><td class="crd-td">40,4k</td><td class="crd-td">40,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nā'ūr</strong></td><td class="crd-td">31,87, 35,82</td><td class="crd-td">4,3k</td><td class="crd-td">11,3k</td><td class="crd-td">37,2k</td><td class="crd-td">37,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Karak</strong></td><td class="crd-td">31,18, 35,7</td><td class="crd-td">6,5k</td><td class="crd-td">17,1k</td><td class="crd-td">37,1k</td><td class="crd-td">37,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kufrinjah</strong></td><td class="crd-td">32,3, 35,7</td><td class="crd-td">5,9k</td><td class="crd-td">15,5k</td><td class="crd-td">35,7k</td><td class="crd-td">35,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dayr Abī Sa'īd</strong></td><td class="crd-td">32,5, 35,69</td><td class="crd-td">2,9k</td><td class="crd-td">7,6k</td><td class="crd-td">34k</td><td class="crd-td">34k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ash-Shajarah</strong></td><td class="crd-td">32,64, 35,94</td><td class="crd-td">3,1k</td><td class="crd-td">8,2k</td><td class="crd-td">32,1k</td><td class="crd-td">32,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mu'tah</strong></td><td class="crd-td">31,09, 35,69</td><td class="crd-td">2,9k</td><td class="crd-td">7,5k</td><td class="crd-td">31,5k</td><td class="crd-td">31,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Mashāri'</strong></td><td class="crd-td">32,43, 35,59</td><td class="crd-td">5,2k</td><td class="crd-td">13,7k</td><td class="crd-td">27,7k</td><td class="crd-td">27,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kafr Yūbā</strong></td><td class="crd-td">32,54, 35,8</td><td class="crd-td">3k</td><td class="crd-td">7,9k</td><td class="crd-td">26,4k</td><td class="crd-td">26,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭaybah</strong></td><td class="crd-td">30,25, 35,47</td><td class="crd-td">3,5k</td><td class="crd-td">9,2k</td><td class="crd-td">25,2k</td><td class="crd-td">25,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Mazār ash-Shamālī</strong></td><td class="crd-td">32,47, 35,8</td><td class="crd-td">3,6k</td><td class="crd-td">9,6k</td><td class="crd-td">24,4k</td><td class="crd-td">24,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bushrā</strong></td><td class="crd-td">32,56, 35,9</td><td class="crd-td">3k</td><td class="crd-td">7,8k</td><td class="crd-td">22,4k</td><td class="crd-td">22,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Umm as-Summāq</strong></td><td class="crd-td">31,89, 35,85</td><td class="crd-td">1,5k</td><td class="crd-td">4k</td><td class="crd-td">21,9k</td><td class="crd-td">21,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Fuḥayṣ</strong></td><td class="crd-td">32, 35,78</td><td class="crd-td">3,5k</td><td class="crd-td">9,2k</td><td class="crd-td">21,8k</td><td class="crd-td">21,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Busayra</strong></td><td class="crd-td">30,73, 35,61</td><td class="crd-td">1,4k</td><td class="crd-td">3,7k</td><td class="crd-td">7,7k</td><td class="crd-td">7,7k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued cities and towns in Jordan (38 settlements), showing coordinates, 1946AD, 1990AD and 2025AD estimates and peak population.</figcaption>
</figure>

## Palestine

Palestine contributes 34 catalogued settlements expanding over sixfold from 550,4k in 1946AD to 3,36M in 2025AD benchmarks (Table \ref{tab:pse-sites}). In the Gaza Strip, Gaza City (706k), Khan Yunis (275,5k), Jabalyah (248,5k), Rafah (233,2k) and Bayt Lahiya (100,5k) form one of the most densely packed urban strips on the Mediterranean littoral [@Scott2001Mortality; @Fayad2025Political]. Across the West Bank uplands, Al-Quds (314,5k), Hebron/Al-Khalil (224,9k), Nablus (175,5k), Tulkarm, Qalqilyah, Bethlehem and Jericho sustain dense municipal and camp populations despite fragmentation [@Muhsen2017Urban; @Harker2012Precarious; @Courbage2006Enjeux].

<figure class="crd-table-figure" id="tab:pse-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ghazzah</strong></td><td class="crd-td">31,5, 34,47</td><td class="crd-td">115,2k</td><td class="crd-td">303,2k</td><td class="crd-td">706k</td><td class="crd-td">706k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Quds</strong></td><td class="crd-td">31,8, 35,3</td><td class="crd-td">68,5k</td><td class="crd-td">180,2k</td><td class="crd-td">314,5k</td><td class="crd-td">314,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Khān Yūnis</strong></td><td class="crd-td">31,34, 34,31</td><td class="crd-td">40,1k</td><td class="crd-td">105,6k</td><td class="crd-td">275,5k</td><td class="crd-td">275,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jabālyah</strong></td><td class="crd-td">31,53, 34,48</td><td class="crd-td">37,1k</td><td class="crd-td">97,6k</td><td class="crd-td">248,5k</td><td class="crd-td">248,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rafaḥ</strong></td><td class="crd-td">31,3, 34,24</td><td class="crd-td">35,5k</td><td class="crd-td">93,6k</td><td class="crd-td">233,2k</td><td class="crd-td">233,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Khalīl</strong></td><td class="crd-td">31,53, 35,09</td><td class="crd-td">38,9k</td><td class="crd-td">102,4k</td><td class="crd-td">224,9k</td><td class="crd-td">224,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nābulus</strong></td><td class="crd-td">32,22, 35,25</td><td class="crd-td">32,6k</td><td class="crd-td">85,9k</td><td class="crd-td">175,5k</td><td class="crd-td">175,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bayt Lāhīyā</strong></td><td class="crd-td">31,55, 34,5</td><td class="crd-td">12,5k</td><td class="crd-td">33k</td><td class="crd-td">100,5k</td><td class="crd-td">100,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>An-Nuṣayrāt</strong></td><td class="crd-td">31,45, 34,39</td><td class="crd-td">14,6k</td><td class="crd-td">38,3k</td><td class="crd-td">96,9k</td><td class="crd-td">96,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dayr al-Balaḥ</strong></td><td class="crd-td">31,42, 34,35</td><td class="crd-td">14k</td><td class="crd-td">36,8k</td><td class="crd-td">91,8k</td><td class="crd-td">91,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṭūlkarm</strong></td><td class="crd-td">32,31, 35,03</td><td class="crd-td">14,3k</td><td class="crd-td">37,7k</td><td class="crd-td">83,3k</td><td class="crd-td">83,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Yaṭṭā</strong></td><td class="crd-td">31,45, 35,09</td><td class="crd-td">10,3k</td><td class="crd-td">27k</td><td class="crd-td">71k</td><td class="crd-td">71k (2025)</td></tr>
<tr><td class="crd-td"><strong>Janīn</strong></td><td class="crd-td">32,46, 35,3</td><td class="crd-td">11,7k</td><td class="crd-td">30,7k</td><td class="crd-td">67,5k</td><td class="crd-td">67,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bayt Ḥānūn</strong></td><td class="crd-td">31,54, 34,54</td><td class="crd-td">6,8k</td><td class="crd-td">17,8k</td><td class="crd-td">58,4k</td><td class="crd-td">58,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qalqīlyah</strong></td><td class="crd-td">32,19, 34,97</td><td class="crd-td">10,3k</td><td class="crd-td">27,2k</td><td class="crd-td">57,8k</td><td class="crd-td">57,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Bīrah</strong></td><td class="crd-td">31,91, 35,22</td><td class="crd-td">9,1k</td><td class="crd-td">24k</td><td class="crd-td">51,4k</td><td class="crd-td">51,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dūrā</strong></td><td class="crd-td">31,51, 35,03</td><td class="crd-td">5,1k</td><td class="crd-td">13,4k</td><td class="crd-td">44k</td><td class="crd-td">44k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aẓ-Ẓāhīriyah</strong></td><td class="crd-td">31,41, 34,98</td><td class="crd-td">6,7k</td><td class="crd-td">17,6k</td><td class="crd-td">40,2k</td><td class="crd-td">40,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Qarārah</strong></td><td class="crd-td">31,37, 34,34</td><td class="crd-td">3,9k</td><td class="crd-td">10,2k</td><td class="crd-td">32,4k</td><td class="crd-td">32,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bayt Laḥm</strong></td><td class="crd-td">31,7, 35,2</td><td class="crd-td">7,1k</td><td class="crd-td">18,8k</td><td class="crd-td">32k</td><td class="crd-td">32k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ḥalḥūl</strong></td><td class="crd-td">31,58, 35,1</td><td class="crd-td">5,1k</td><td class="crd-td">13,4k</td><td class="crd-td">30,2k</td><td class="crd-td">30,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Abasān al-Kabīrah</strong></td><td class="crd-td">31,32, 34,34</td><td class="crd-td">4,4k</td><td class="crd-td">11,5k</td><td class="crd-td">29,9k</td><td class="crd-td">29,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Baytūniyā</strong></td><td class="crd-td">31,9, 35,17</td><td class="crd-td">3,1k</td><td class="crd-td">8,1k</td><td class="crd-td">29,8k</td><td class="crd-td">29,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Samū'</strong></td><td class="crd-td">31,4, 35,07</td><td class="crd-td">4,2k</td><td class="crd-td">11,1k</td><td class="crd-td">29,1k</td><td class="crd-td">29,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Idhnā</strong></td><td class="crd-td">31,56, 34,97</td><td class="crd-td">4,4k</td><td class="crd-td">11,6k</td><td class="crd-td">29,1k</td><td class="crd-td">29,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Banī Na'īm</strong></td><td class="crd-td">31,52, 35,16</td><td class="crd-td">4,4k</td><td class="crd-td">11,6k</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qabāṭiyah</strong></td><td class="crd-td">32,41, 35,28</td><td class="crd-td">4,8k</td><td class="crd-td">12,6k</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṭūbās</strong></td><td class="crd-td">32,32, 35,37</td><td class="crd-td">3,9k</td><td class="crd-td">10,3k</td><td class="crd-td">24k</td><td class="crd-td">24k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-'Aīzariyah</strong></td><td class="crd-td">31,77, 35,27</td><td class="crd-td">4,2k</td><td class="crd-td">11,1k</td><td class="crd-td">23,7k</td><td class="crd-td">23,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Arīḥā</strong></td><td class="crd-td">31,87, 35,45</td><td class="crd-td">4,8k</td><td class="crd-td">12,6k</td><td class="crd-td">23,4k</td><td class="crd-td">23,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Yāmūn</strong></td><td class="crd-td">32,49, 35,23</td><td class="crd-td">4k</td><td class="crd-td">10,6k</td><td class="crd-td">23,2k</td><td class="crd-td">23,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Si'īr</strong></td><td class="crd-td">31,58, 35,14</td><td class="crd-td">3,1k</td><td class="crd-td">8,3k</td><td class="crd-td">23,2k</td><td class="crd-td">23,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tarqūmiyā</strong></td><td class="crd-td">31,58, 35,01</td><td class="crd-td">3,4k</td><td class="crd-td">9,1k</td><td class="crd-td">21,6k</td><td class="crd-td">21,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Salfīt</strong></td><td class="crd-td">32,08, 35,18</td><td class="crd-td">2,3k</td><td class="crd-td">6,1k</td><td class="crd-td">12,2k</td><td class="crd-td">12,2k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued cities and towns in Palestine (34 settlements across the West Bank and Gaza Strip), 1946AD-2025AD.</figcaption>
</figure>

## Lebanon

Lebanon contributes 7 primary urban and governorate-cluster entries growing from 844,3k in 1946AD to 2,51M in 2025AD (Table \ref{tab:lbn-sites}). Because CAS Lebanon reports post-1970 estimates primarily at the governorate and qada scale rather than municipal town lists, the ledger pairs Beirut municipal proper (356k in 1946AD to 484,6k in 2025AD) and coastal towns Sarafand (11,8k) and Bhamdoun el Mhatta (5,4k) with regional urbanised clusters in Al-Biqa' (597,7k), Ba'albak-Al-Harmal (512,2k), 'Akkar (473,8k) and An-Nabatiyah (429,3k) [@Knudsen2024Urban].

<figure class="crd-table-figure" id="tab:lbn-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Biqā'</strong></td><td class="crd-td">33,67, 35,83</td><td class="crd-td">152,6k</td><td class="crd-td">203,8k</td><td class="crd-td">597,7k</td><td class="crd-td">597,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ba'albak - Al-Harmal</strong></td><td class="crd-td">34,21, 36,3</td><td class="crd-td">107,6k</td><td class="crd-td">182,4k</td><td class="crd-td">512,2k</td><td class="crd-td">512,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bayrūt</strong></td><td class="crd-td">33,89, 35,5</td><td class="crd-td">356k</td><td class="crd-td">422,1k</td><td class="crd-td">484,6k</td><td class="crd-td">484,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Akkār</strong></td><td class="crd-td">34,54, 36,08</td><td class="crd-td">108,8k</td><td class="crd-td">184,4k</td><td class="crd-td">473,8k</td><td class="crd-td">473,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>An-Nabaṭīyah</strong></td><td class="crd-td">33,38, 35,48</td><td class="crd-td">112,7k</td><td class="crd-td">191,1k</td><td class="crd-td">429,3k</td><td class="crd-td">429,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sarafand</strong></td><td class="crd-td">33,45, 35,3</td><td class="crd-td">4,5k</td><td class="crd-td">7,6k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bhamdoun el Mhatta</strong></td><td class="crd-td">33,81, 35,66</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements and urbanised district anchors in Lebanon (7 entries), 1946AD-2025AD.</figcaption>
</figure>

# Limitations

Three methodological limitations frame this urban gazetteer. First, Lebanon's lack of a national census since 1932AD limits municipal-level resolution, compressing suburban Beirut and Tripoli growth into governorate aggregates that carry wider uncertainty than Israeli or Jordanian municipal counts [@Knudsen2024Urban]. Second, Syrian series after 2004AD rely on civil-registry extrapolations and wartime displacement surveys; local urban peaks at Aleppo, Homs, Dayr az-Zawr and Ar-Raqqah reflect pre-war trend projections alongside 2015AD-2021AD adjustments rather than post-war house-by-house censuses [@Omran2017Urban; @Morrison2018Providing]. Third, acute conflict in the Gaza Strip and southern Lebanon since October 2023 has caused severe displacement and structural destruction not yet reflected in pre-war 2023AD PCBS projections [@Koylu2025Israel; @Fayad2025Political].

# Conclusion

Together, the 242 settlements catalogued in Chapter 22 document an extraordinary urban transformation from 5,83M urban inhabitants in 1946AD to 31,59M in 2025AD across Syria, Lebanon, Jordan, Israel and Palestine. Anchored to geoBoundaries administrative polygons [@Runfola2020GeoBoundaries], deduplicated of 22 overlapping suburban satellites and adhering strictly to founding-year truncation for new Israeli towns, the corpus follows a sharp Zipf rank-size law ($\alpha = 1{,}044$, $R^2 = 0{,}961$) that cleanly captures metropolitan primacy, refugee-camp urbanisation and post-war coastal and highland growth.

# Appendix

## Jurisdiction Summary

Table \ref{tab:app-jur-summary} summarises catalogued settlement counts, temporal spans, median peak sizes and maximum urban peaks across all five states and territories.

<figure class="crd-table-figure" id="tab:app-jur-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Span</th><th class="crd-th">Median Peak</th><th class="crd-th">Max Peak</th><th class="crd-th">2025AD Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">84</td><td class="crd-td">1946-2025AD</td><td class="crd-td">45,9k</td><td class="crd-td">2,86M</td><td class="crd-td">11,85M</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">79</td><td class="crd-td">1946-2025AD</td><td class="crd-td">49k</td><td class="crd-td">1,02M</td><td class="crd-td">7,21M</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">38</td><td class="crd-td">1946-2025AD</td><td class="crd-td">55,6k</td><td class="crd-td">2,08M</td><td class="crd-td">6,66M</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">34</td><td class="crd-td">1946-2025AD</td><td class="crd-td">42,1k</td><td class="crd-td">706k</td><td class="crd-td">3,36M</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">7</td><td class="crd-td">1946-2025AD</td><td class="crd-td">473,8k</td><td class="crd-td">597,7k</td><td class="crd-td">2,51M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlement counts, temporal spans, median and maximum peaks and 2025AD urban totals across five Levantine jurisdictions.</figcaption>
</figure>

## Merged Subordinate Suburbs

Table \ref{tab:app-excluded} lists the 22 suburban candidates excluded from independent point modelling because their footprints sit inside contiguous metropolitan cores already represented in the main gazetteer.

<figure class="crd-table-figure" id="tab:app-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Locality</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Ledger Disposition</th><th class="crd-th">Source Bureau</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gan Yavne</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ganne Tiqwa</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Giv'at Shemu'el</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Giv'atayim</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qiryat Bialik</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qiryat Yam</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Shefar'am</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tel Sheva</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tirat Karmel</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Yehud</strong></td><td class="crd-td">Israel</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>'Ajlūn</strong></td><td class="crd-td">Jordan</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>'Anjarah</strong></td><td class="crd-td">Jordan</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kurayyimah</strong></td><td class="crd-td">Jordan</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Burayj</strong></td><td class="crd-td">Palestine</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Banī Suhaylā</strong></td><td class="crd-td">Palestine</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rām Allāh</strong></td><td class="crd-td">Palestine</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>'Adrā</strong></td><td class="crd-td">Syria</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥajar al-Aswad</strong></td><td class="crd-td">Syria</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jayrūd</strong></td><td class="crd-td">Syria</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kafr Baṭnā</strong></td><td class="crd-td">Syria</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Yaldā</strong></td><td class="crd-td">Syria</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Zamalkā</strong></td><td class="crd-td">Syria</td><td class="crd-td">Merged into adjacent metropolitan core</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Subordinate suburban localities (22 candidates) merged into parent metropolitan hubs to eliminate double counting.</figcaption>
</figure>

# Sources

::: {#refs}
:::

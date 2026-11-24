---
title: "Syria, Lebanon, Jordan, Israel and Palestine after 1946"
subtitle: "Settlement Gazetteer: 3.105 Cities, Towns and Localities, 1946AD-2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_levant_israel_palestine_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_levant_israel_palestine_spatial.png"
hero_caption: "Spatial distribution of 3.105 catalogued settlements and 41 sub-regional mask units across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2026AD."
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

This settlement gazetteer compiles coordinate-exact population trajectories for 3.105 cities, towns and rural localities across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2025AD. Screened from 3.376 candidate localities across five national statistical bureaus—CBS Syria (1.856 included), CBS Israel (892), PCBS Palestine (259), DOS Jordan (60) and CAS Lebanon (38)—with 271 duplicate aliases and contiguous suburban municipalities excluded or merged into metropolitan cores to prevent double counting, the corpus captures an enumerated settlement expansion from 1,94M inhabitants in 1946AD (35 active localities) to 14,11M in 1990AD and 31,28M in 2025AD. Combining major capitals with full national village registers yields a steep, tightly fitted Zipf rank-size slope ($\alpha = 1{,}556$, $R^2 = 0{,}967$), anchored by Aleppo (2,86M peak), Damascus (2,69M metropolitan peak in 2024AD), Beirut (2,42M metropolitan peak in 2023AD; 484,6k municipal proper), Amman (2,08M), Dayr az-Zawr (1,92M governorate peak in 2009AD), Irbid (1,91M governorate peak in 2018AD), Jerusalem (1,05M peak in 2024AD), Homs (875,7k), Gaza City (749,1k in 2023AD), Zarqa (730,6k), Latakia (709k in 2004AD) and Tel Aviv-Yafo (494,9k core in 2024AD). Each entry preserves founding-year truncation for post-1948 planned towns and aligns directly with geoBoundaries subadministrative polygons for pycnophylactic disaggregation.

<figure class="crd-figure-block" id="fig:hero-settlements-modern-levant-israel-palestine">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine-settlements/fig1_modern_levant_israel_palestine_spatial.png" alt="fig:hero-settlements-modern-levant-israel-palestine" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 3.105 catalogued settlements and 41 sub-regional mask units across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2026AD.</figcaption>
</figure>

# Background

Between the close of the French and British Mandates in 1946AD-1948AD and the mid-2020s, the eastern Mediterranean littoral and its Syro-Jordanian hinterland shifted from an agrarian society of provincial market towns into a deeply urbanised landscape. At the 1946AD post-Mandate baseline, only Aleppo (324,9k), Damascus (291,2k), Beirut (240k) and Jerusalem (205,1k) exceeded 200k inhabitants, while Amman stood near 72k in 1949AD (108,3k at the 1952AD census) and vast reaches of the Euphrates valley, the Hauran, southern Jordan and the northern Negev consisted of small villages and nomadic encampments [@Ahmad2012Syria; @Anon2008Population]. Over the next eight decades, four forces transformed that urban map: rapid post-war mortality decline and rural-urban migration toward national capitals; the 1948 and 1967 Palestinian refugee waves that created permanent camp-cities in Gaza, the West Bank, Jordan, Lebanon and Syria [@Scott2001Mortality; @Muhsen2017Urban; @Fayad2025Political]; state-planned Israeli new towns built during the 1950s and 1960s and later expanded by the 1990s post-Soviet *aliyah* [@SimardGendron2011Fertility; @Grinberg2013Ments]; and post-2011 Syrian war displacements that swelled Amman, Irbid, Zarqa, Beirut and the Beqaa while hollowing out contested districts of Aleppo and Homs [@Omran2017Urban; @Morrison2018Providing; @Knudsen2024Urban].

# Methodology

Settlement series were compiled from five primary national census systems: CBS Syria (1960AD, 1970AD, 1981AD, 1994AD, 2004AD full locality census and post-2011 projections), CAS Lebanon (1932AD Mandate census, 1970AD survey and 1996AD-2017AD district benchmarks), DOS Jordan (1952AD, 1961AD, 1979AD, 1994AD, 2004AD and 2015AD censuses), CBS Israel (1948AD, 1961AD, 1972AD, 1983AD, 1995AD, 2008AD and 2022AD censuses plus complete locality files) and PCBS Palestine (1997AD, 2007AD, 2017AD full locality censuses and 2023AD estimates). Every coordinate pair was checked against geoBoundaries ADM1 and ADM2 polygons [@Runfola2020GeoBoundaries] and the 41 regional areal-mask units to ensure zero coastal or border misregistration.

Two critical data-hygiene rules prevent distortion in the urban ledger. First, 271 duplicate aliases, overlapping spelling variants and contiguous suburban municipalities—spanning 93 exclusions in Syria, 100 in Israel, 37 in Palestine, 28 in Jordan and 13 in Lebanon—were excluded or merged into canonical parent anchors prior to kriging so dense conurbations never double-count inhabitants. Second, documented founding dates govern post-1948 Israeli planned towns: Qiryat Gat (1955AD), Dimona (1955AD), Ashdod (1956AD), Arad (1962AD) and Karmi'el (1964AD) remain absent prior to foundation rather than receiving synthetic 1946AD back-projections.

# Testing and Validation

Across the 3.105 catalogued settlements, temporal coverage expands from 35 active localities in 1946AD (1,94M combined inhabitants) to 95 in 1960AD (4,46M), 213 in 1990AD (14,11M) and 243 with direct 2025AD benchmarks (31,28M), supplemented by comprehensive 2004AD Syrian, 2017AD Palestinian and 2022AD-2024AD Israeli village enumerations. Figure \ref{fig:gazetteer-ranksize} plots the log-log rank-size curve alongside the twelve highest-peaking cities. Across all 3.105 localities spanning the full urban-to-village spectrum, ordinary least-squares Zipf regression yields $\alpha = 1{,}556$ ($R^2 = 0{,}967$), confirming a steep, tightly structured settlement hierarchy led by Aleppo, Damascus, Beirut, Amman and Jerusalem.

<figure class="crd-figure-block" id="fig:gazetteer-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine-settlements/fig4_modern_levant_israel_palestine_settlements.png" alt="fig:gazetteer-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Log-log rank-size regression across all 3.105 catalogued settlements (left, Zipf alpha = 1,556, R² = 0,967) and the twelve highest-peaking cities in the Levant, 1946AD-2025AD (right).</figcaption>
</figure>

# Results

## Syria

Syria contributes 1.856 catalogued settlements (incorporating the full CBS Syria 2004 locality register), with leading urban anchors expanding from 1,06M enumerated residents in 1946AD to 21,74M at latest benchmarks (Table \ref{tab:syr-sites}). Aleppo (324,9k in 1946AD to 2,86M peak in 2025AD) and Damascus (291,2k to 2,69M metropolitan peak in 2024AD and 1,9M core in 2025AD, flanked by Rif Dimashq centres such as Duma at 400k peak) dominate the upper hierarchy, followed by Dayr az-Zawr (1,92M governorate peak in 2009AD; 284,3k core in 2025AD), central Syrian hubs at Homs (875,7k) and Hama (696,9k peak in 2009AD), coastal port Latakia (709k peak in 2004AD) and Euphrates-Jazira capitals at Ar-Raqqah (299,8k peak), Al-Hasakeh (252,5k) and Al-Qamishli (247,2k) [@Ahmad2012Syria; @Omran2017Urban; @Mohamed2020Monitoring; @Younes2023Understand].

<figure class="crd-table-figure" id="tab:syr-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ḥalab</strong></td><td class="crd-td">36,2, 37,16</td><td class="crd-td">324,9k</td><td class="crd-td">1,37M</td><td class="crd-td">2,86M</td><td class="crd-td">2,86M (2025)</td></tr>
<tr><td class="crd-td"><strong>Dimashq</strong></td><td class="crd-td">33,51, 36,29</td><td class="crd-td">291,2k</td><td class="crd-td">1,3M</td><td class="crd-td">1,9M</td><td class="crd-td">2,69M (2024)</td></tr>
<tr><td class="crd-td"><strong>Dayr az-Zawr</strong></td><td class="crd-td">35,34, 40,14</td><td class="crd-td">42k</td><td class="crd-td">123,3k</td><td class="crd-td">284,3k</td><td class="crd-td">1,92M (2009)</td></tr>
<tr><td class="crd-td"><strong>Ḥimṣ</strong></td><td class="crd-td">34,72, 36,73</td><td class="crd-td">100k</td><td class="crd-td">471,3k</td><td class="crd-td">875,7k</td><td class="crd-td">875,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Latakia</strong></td><td class="crd-td">35,52, 35,78</td><td class="crd-td">38k</td><td class="crd-td">270,6k</td><td class="crd-td">515k</td><td class="crd-td">709k (2004)</td></tr>
<tr><td class="crd-td"><strong>Ḥamāh</strong></td><td class="crd-td">35,13, 36,76</td><td class="crd-td">71,4k</td><td class="crd-td">233,7k</td><td class="crd-td">420k</td><td class="crd-td">696,9k (2009)</td></tr>
<tr><td class="crd-td"><strong>Dūmā</strong></td><td class="crd-td">33,57, 36,4</td><td class="crd-td">19,8k</td><td class="crd-td">69,4k</td><td class="crd-td">148,8k</td><td class="crd-td">400k (2016)</td></tr>
<tr><td class="crd-td"><strong>Ar-Raqqah</strong></td><td class="crd-td">35,95, 39,01</td><td class="crd-td">9,8k</td><td class="crd-td">135,7k</td><td class="crd-td">295,8k</td><td class="crd-td">299,8k (2019)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥasakah</strong></td><td class="crd-td">36,5, 40,75</td><td class="crd-td">12,2k</td><td class="crd-td">103k</td><td class="crd-td">252,5k</td><td class="crd-td">252,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Qāmishlī</strong></td><td class="crd-td">37,05, 41,23</td><td class="crd-td">23k</td><td class="crd-td">126k</td><td class="crd-td">247,2k</td><td class="crd-td">247,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jablah</strong></td><td class="crd-td">36,44, 38,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">196,2k (2004)</td></tr>
<tr><td class="crd-td"><strong>Al-Yarmūk</strong></td><td class="crd-td">33,47, 36,3</td><td class="crd-td">-</td><td class="crd-td">100,9k</td><td class="crd-td">184,2k</td><td class="crd-td">184,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Harim</strong></td><td class="crd-td">36,21, 36,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">175,5k (2004)</td></tr>
<tr><td class="crd-td"><strong>Ṭarṭūs</strong></td><td class="crd-td">34,89, 35,89</td><td class="crd-td">10,9k</td><td class="crd-td">71,6k</td><td class="crd-td">155,3k</td><td class="crd-td">155,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jaramānā</strong></td><td class="crd-td">33,49, 36,35</td><td class="crd-td">-</td><td class="crd-td">80,6k</td><td class="crd-td">153,4k</td><td class="crd-td">153,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nawā</strong></td><td class="crd-td">32,89, 36,04</td><td class="crd-td">-</td><td class="crd-td">28,2k</td><td class="crd-td">63,2k</td><td class="crd-td">150k (2024)</td></tr>
<tr><td class="crd-td"><strong>Al-Bāb</strong></td><td class="crd-td">36,37, 37,52</td><td class="crd-td">13,4k</td><td class="crd-td">40,1k</td><td class="crd-td">84,6k</td><td class="crd-td">144,7k (2007)</td></tr>
<tr><td class="crd-td"><strong>Maharda</strong></td><td class="crd-td">35,25, 36,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">144,5k (2004)</td></tr>
<tr><td class="crd-td"><strong>Qabr as Sitt</strong></td><td class="crd-td">33,45, 36,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">136,4k (2004)</td></tr>
<tr><td class="crd-td"><strong>Manbij</strong></td><td class="crd-td">36,53, 37,95</td><td class="crd-td">7,9k</td><td class="crd-td">48,7k</td><td class="crd-td">133,5k</td><td class="crd-td">133,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Idlib</strong></td><td class="crd-td">35,93, 36,63</td><td class="crd-td">22,4k</td><td class="crd-td">66,6k</td><td class="crd-td">132,6k</td><td class="crd-td">132,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dar'ā</strong></td><td class="crd-td">32,62, 36,1</td><td class="crd-td">12,8k</td><td class="crd-td">64,7k</td><td class="crd-td">131,5k</td><td class="crd-td">131,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tall Abyad</strong></td><td class="crd-td">36,7, 38,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">129,7k (2004)</td></tr>
<tr><td class="crd-td"><strong>Tallkalakh</strong></td><td class="crd-td">34,67, 36,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">129,4k (2004)</td></tr>
<tr><td class="crd-td"><strong>As-Salamiyah</strong></td><td class="crd-td">35,01, 37,05</td><td class="crd-td">11,2k</td><td class="crd-td">45,8k</td><td class="crd-td">89,5k</td><td class="crd-td">110,7k (2013)</td></tr>
<tr><td class="crd-td"><strong>As-Safīrah</strong></td><td class="crd-td">36,08, 37,37</td><td class="crd-td">-</td><td class="crd-td">32,6k</td><td class="crd-td">85,5k</td><td class="crd-td">106,5k (2012)</td></tr>
<tr><td class="crd-td"><strong>Dārayyā</strong></td><td class="crd-td">33,46, 36,23</td><td class="crd-td">-</td><td class="crd-td">47,3k</td><td class="crd-td">105,7k</td><td class="crd-td">105,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Suwaydā'</strong></td><td class="crd-td">32,71, 36,57</td><td class="crd-td">11,4k</td><td class="crd-td">53,4k</td><td class="crd-td">98,8k</td><td class="crd-td">98,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ath-Thawrah</strong></td><td class="crd-td">35,84, 38,55</td><td class="crd-td">-</td><td class="crd-td">53,2k</td><td class="crd-td">93,2k</td><td class="crd-td">93,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al Khafsah</strong></td><td class="crd-td">36,23, 38,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">92,4k (2004)</td></tr>
<tr><td class="crd-td"><strong>Ḥarastā al-Baṣal</strong></td><td class="crd-td">33,56, 36,37</td><td class="crd-td">-</td><td class="crd-td">37,7k</td><td class="crd-td">92,2k</td><td class="crd-td">92,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ma'arrat Nu'man</strong></td><td class="crd-td">35,64, 36,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">90k (2004)</td></tr>
<tr><td class="crd-td"><strong>Al Haffah</strong></td><td class="crd-td">35,6, 36,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">81,2k (2004)</td></tr>
<tr><td class="crd-td"><strong>An Nabk</strong></td><td class="crd-td">34,02, 36,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">80k (2004)</td></tr>
<tr><td class="crd-td"><strong>Al Atarib</strong></td><td class="crd-td">36,14, 36,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">77k (2004)</td></tr>
<tr><td class="crd-td"><strong>An Nashabiyah</strong></td><td class="crd-td">33,51, 36,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">76,8k (2004)</td></tr>
<tr><td class="crd-td"><strong>Jablah</strong></td><td class="crd-td">35,36, 35,93</td><td class="crd-td">9,4k</td><td class="crd-td">33,6k</td><td class="crd-td">72,4k</td><td class="crd-td">75,9k (2009)</td></tr>
<tr><td class="crd-td"><strong>Al Qardahah</strong></td><td class="crd-td">35,46, 36,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">75,3k (2004)</td></tr>
<tr><td class="crd-td"><strong>Tall Hamis</strong></td><td class="crd-td">36,76, 41,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">71,7k (2004)</td></tr>
<tr><td class="crd-td"><strong>Talldaww</strong></td><td class="crd-td">34,88, 36,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">71,5k (2004)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 40 of 1.856 catalogued cities, towns and localities in Syria, showing coordinates, 1946AD, 1990AD and 2025AD estimates and peak population.</figcaption>
</figure>

## Israel

Israel contributes 892 catalogued localities from CBS Israel census and municipal files, expanding from 223,3k in 1946AD to 9,57M at latest benchmarks (Table \ref{tab:isr-sites}). Rather than concentrating into a single primate municipality, urban population distributes across Jerusalem/Yerushalayim (205,1k in 1946AD to 1,05M peak in 2024AD and 1,02M in 2025AD), Tel Aviv-Yafo (494,9k peak in 2024AD) and its surrounding Gush Dan ring cities—Netanya (276,8k peak), Rishon LeZiyyon (271,9k), Petah Tiqwa (270,4k peak), Ashdod (founded 1956AD), Bene Beraq, Holon and Ramat Gan—alongside northern Haifa (299,1k) and Negev capital Beersheba [@SimardGendron2011Fertility; @Grinberg2013Ments].

<figure class="crd-table-figure" id="tab:isr-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yerushalayim</strong></td><td class="crd-td">31,77, 35,22</td><td class="crd-td">205,1k</td><td class="crd-td">530,2k</td><td class="crd-td">1,02M</td><td class="crd-td">1,05M (2024)</td></tr>
<tr><td class="crd-td"><strong>Tel Aviv-Yafo</strong></td><td class="crd-td">32,08, 34,78</td><td class="crd-td">-</td><td class="crd-td">339,3k</td><td class="crd-td">494,8k</td><td class="crd-td">494,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Hefa</strong></td><td class="crd-td">32,82, 34,99</td><td class="crd-td">-</td><td class="crd-td">242,9k</td><td class="crd-td">299,1k</td><td class="crd-td">299,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Netanya</strong></td><td class="crd-td">32,33, 34,86</td><td class="crd-td">-</td><td class="crd-td">124,6k</td><td class="crd-td">237k</td><td class="crd-td">276,8k (2024)</td></tr>
<tr><td class="crd-td"><strong>Rishon LeZiyyon</strong></td><td class="crd-td">31,97, 34,79</td><td class="crd-td">-</td><td class="crd-td">135,5k</td><td class="crd-td">271,9k</td><td class="crd-td">271,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Petah Tiqwa</strong></td><td class="crd-td">32,09, 34,89</td><td class="crd-td">-</td><td class="crd-td">138,2k</td><td class="crd-td">266,8k</td><td class="crd-td">270,4k (2024)</td></tr>
<tr><td class="crd-td"><strong>Ashdod</strong></td><td class="crd-td">31,79, 34,65</td><td class="crd-td">-</td><td class="crd-td">96k</td><td class="crd-td">239k</td><td class="crd-td">239k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bene Beraq</strong></td><td class="crd-td">32,08, 34,83</td><td class="crd-td">-</td><td class="crd-td">114,5k</td><td class="crd-td">224,6k</td><td class="crd-td">230k (2024)</td></tr>
<tr><td class="crd-td"><strong>Be'er Sheva</strong></td><td class="crd-td">31,25, 34,79</td><td class="crd-td">-</td><td class="crd-td">131,9k</td><td class="crd-td">223,4k</td><td class="crd-td">223,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Holon</strong></td><td class="crd-td">32,01, 34,78</td><td class="crd-td">-</td><td class="crd-td">150k</td><td class="crd-td">208,8k</td><td class="crd-td">208,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ramat Gan</strong></td><td class="crd-td">32,08, 34,81</td><td class="crd-td">-</td><td class="crd-td">123,3k</td><td class="crd-td">179,5k</td><td class="crd-td">179,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bet Shemesh</strong></td><td class="crd-td">31,73, 34,99</td><td class="crd-td">-</td><td class="crd-td">18,7k</td><td class="crd-td">149,9k</td><td class="crd-td">176,8k (2024)</td></tr>
<tr><td class="crd-td"><strong>Ashqelon</strong></td><td class="crd-td">31,67, 34,57</td><td class="crd-td">-</td><td class="crd-td">67,8k</td><td class="crd-td">157,8k</td><td class="crd-td">166,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Rehovot</strong></td><td class="crd-td">31,89, 34,81</td><td class="crd-td">-</td><td class="crd-td">77k</td><td class="crd-td">156,4k</td><td class="crd-td">156,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bat Yam</strong></td><td class="crd-td">32,02, 34,75</td><td class="crd-td">-</td><td class="crd-td">133,2k</td><td class="crd-td">133,6k</td><td class="crd-td">146,4k (1991)</td></tr>
<tr><td class="crd-td"><strong>Herzliyya</strong></td><td class="crd-td">32,17, 34,83</td><td class="crd-td">-</td><td class="crd-td">73,9k</td><td class="crd-td">109,3k</td><td class="crd-td">110,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Hadera</strong></td><td class="crd-td">32,44, 34,9</td><td class="crd-td">-</td><td class="crd-td">50,2k</td><td class="crd-td">106,4k</td><td class="crd-td">108k (2024)</td></tr>
<tr><td class="crd-td"><strong>Kefar Sava</strong></td><td class="crd-td">32,17, 34,91</td><td class="crd-td">-</td><td class="crd-td">56,6k</td><td class="crd-td">107,7k</td><td class="crd-td">107,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Modi'in-Makkabbim-Re'ut</strong></td><td class="crd-td">31,89, 35,02</td><td class="crd-td">-</td><td class="crd-td">46,6k</td><td class="crd-td">102,7k</td><td class="crd-td">102,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Lod</strong></td><td class="crd-td">31,95, 34,89</td><td class="crd-td">18,2k</td><td class="crd-td">46,5k</td><td class="crd-td">87,4k</td><td class="crd-td">94,2k (2024)</td></tr>
<tr><td class="crd-td"><strong>Modi'in Illit</strong></td><td class="crd-td">31,93, 35,04</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">85,7k</td><td class="crd-td">89,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Ramla</strong></td><td class="crd-td">31,93, 34,86</td><td class="crd-td">-</td><td class="crd-td">50,5k</td><td class="crd-td">82,3k</td><td class="crd-td">86,1k (2024)</td></tr>
<tr><td class="crd-td"><strong>Nazerat</strong></td><td class="crd-td">32,7, 35,3</td><td class="crd-td">-</td><td class="crd-td">48,8k</td><td class="crd-td">82,4k</td><td class="crd-td">83,4k (2019)</td></tr>
<tr><td class="crd-td"><strong>Ra'annana</strong></td><td class="crd-td">32,19, 34,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">83k (2024)</td></tr>
<tr><td class="crd-td"><strong>Rahat</strong></td><td class="crd-td">31,4, 34,76</td><td class="crd-td">-</td><td class="crd-td">15,5k</td><td class="crd-td">80,6k</td><td class="crd-td">80,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rosh HaAyin</strong></td><td class="crd-td">32,1, 34,95</td><td class="crd-td">-</td><td class="crd-td">19,8k</td><td class="crd-td">75,8k</td><td class="crd-td">79k (2024)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Gat</strong></td><td class="crd-td">31,61, 34,76</td><td class="crd-td">-</td><td class="crd-td">35k</td><td class="crd-td">64,1k</td><td class="crd-td">72,1k (2024)</td></tr>
<tr><td class="crd-td"><strong>Betar Illit</strong></td><td class="crd-td">31,69, 35,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">71,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Hod HaSharon</strong></td><td class="crd-td">32,16, 34,89</td><td class="crd-td">-</td><td class="crd-td">25,2k</td><td class="crd-td">69,1k</td><td class="crd-td">69,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nahariyya</strong></td><td class="crd-td">33,01, 35,1</td><td class="crd-td">-</td><td class="crd-td">32,5k</td><td class="crd-td">64,3k</td><td class="crd-td">67,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Afula</strong></td><td class="crd-td">32,61, 35,29</td><td class="crd-td">-</td><td class="crd-td">27,8k</td><td class="crd-td">62,5k</td><td class="crd-td">66,4k (2024)</td></tr>
<tr><td class="crd-td"><strong>Qiryat Atta</strong></td><td class="crd-td">32,81, 35,11</td><td class="crd-td">-</td><td class="crd-td">38,3k</td><td class="crd-td">63,6k</td><td class="crd-td">63,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Umm al-Fahm</strong></td><td class="crd-td">32,52, 35,15</td><td class="crd-td">-</td><td class="crd-td">24,9k</td><td class="crd-td">61k</td><td class="crd-td">61k (2025)</td></tr>
<tr><td class="crd-td"><strong>Yavne</strong></td><td class="crd-td">31,88, 34,74</td><td class="crd-td">-</td><td class="crd-td">20,7k</td><td class="crd-td">56,7k</td><td class="crd-td">58,1k (2024)</td></tr>
<tr><td class="crd-td"><strong>Netivot</strong></td><td class="crd-td">31,42, 34,59</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">44,5k</td><td class="crd-td">56k (2024)</td></tr>
<tr><td class="crd-td"><strong>Elat</strong></td><td class="crd-td">29,56, 34,95</td><td class="crd-td">-</td><td class="crd-td">25,5k</td><td class="crd-td">55,8k</td><td class="crd-td">56k (2024)</td></tr>
<tr><td class="crd-td"><strong>Nes Ziyyona</strong></td><td class="crd-td">31,93, 34,8</td><td class="crd-td">-</td><td class="crd-td">18,7k</td><td class="crd-td">53,4k</td><td class="crd-td">53,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Akko</strong></td><td class="crd-td">32,93, 35,08</td><td class="crd-td">-</td><td class="crd-td">40,8k</td><td class="crd-td">52,5k</td><td class="crd-td">52,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>El'ad</strong></td><td class="crd-td">32,05, 34,96</td><td class="crd-td">-</td><td class="crd-td">22,8k</td><td class="crd-td">52,4k</td><td class="crd-td">52,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Teverya</strong></td><td class="crd-td">32,79, 35,53</td><td class="crd-td">-</td><td class="crd-td">32,2k</td><td class="crd-td">49,4k</td><td class="crd-td">52,1k (2024)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 40 of 892 catalogued cities, towns and localities in Israel, showing coordinates, 1946AD, 1990AD and 2025AD estimates and peak population.</figcaption>
</figure>

## Jordan

Jordan contributes 60 catalogued settlements from DOS Jordan census archives, reaching 7,22M at latest benchmarks (Table \ref{tab:jor-sites}). Greater Amman (2,08M in 2025AD), Irbid (1,91M governorate-level 2018AD peak; 578,3k city proper in 2025AD), Az-Zarqa' (730,6k), Ar-Rusayfah (543,6k) and Wadi as-Sir (278,2k) anchor the northwestern highland corridor that absorbed successive waves of Palestinian, Gulf-returnee, Iraqi and post-2011 Syrian migrants, complemented by southern nodes at Al-Karak, Ma'an, At-Tafilah and Red Sea port Al-'Aqabah [@Knudsen2024Urban].

<figure class="crd-table-figure" id="tab:jor-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>'Ammān</strong></td><td class="crd-td">31,96, 35,95</td><td class="crd-td">-</td><td class="crd-td">878k</td><td class="crd-td">2,08M</td><td class="crd-td">2,08M (2025)</td></tr>
<tr><td class="crd-td"><strong>Irbid</strong></td><td class="crd-td">32,56, 35,85</td><td class="crd-td">-</td><td class="crd-td">177k</td><td class="crd-td">578,3k</td><td class="crd-td">1,91M (2018)</td></tr>
<tr><td class="crd-td"><strong>Az-Zarqā'</strong></td><td class="crd-td">32,07, 36,09</td><td class="crd-td">-</td><td class="crd-td">308,3k</td><td class="crd-td">730,6k</td><td class="crd-td">730,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruṣayfah</strong></td><td class="crd-td">32,02, 36,05</td><td class="crd-td">-</td><td class="crd-td">122,9k</td><td class="crd-td">543,6k</td><td class="crd-td">543,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Wādī as-Sīr</strong></td><td class="crd-td">31,95, 35,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">278,2k</td><td class="crd-td">278,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Jubayhah</strong></td><td class="crd-td">32,01, 35,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">226,8k</td><td class="crd-td">226,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Saḥāb</strong></td><td class="crd-td">31,87, 36</td><td class="crd-td">-</td><td class="crd-td">23,7k</td><td class="crd-td">194,9k</td><td class="crd-td">194,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ar-Ramthā</strong></td><td class="crd-td">32,56, 36,01</td><td class="crd-td">-</td><td class="crd-td">42,5k</td><td class="crd-td">179,1k</td><td class="crd-td">179,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṣuwayliḥ</strong></td><td class="crd-td">32,02, 35,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">173,7k</td><td class="crd-td">173,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-'Aqabah</strong></td><td class="crd-td">29,53, 35,01</td><td class="crd-td">-</td><td class="crd-td">50,1k</td><td class="crd-td">170,7k</td><td class="crd-td">170,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Mafraq</strong></td><td class="crd-td">32,34, 36,21</td><td class="crd-td">-</td><td class="crd-td">32,9k</td><td class="crd-td">121,9k</td><td class="crd-td">121,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mādabā</strong></td><td class="crd-td">31,72, 35,79</td><td class="crd-td">-</td><td class="crd-td">46,5k</td><td class="crd-td">121,2k</td><td class="crd-td">121,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Salṭ</strong></td><td class="crd-td">32,04, 35,73</td><td class="crd-td">-</td><td class="crd-td">48,9k</td><td class="crd-td">114,9k</td><td class="crd-td">114,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Umm Quṣayr - Al-Muqābalīn</strong></td><td class="crd-td">31,91, 35,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">114,7k</td><td class="crd-td">114,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">31,7, 35,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">109,3k</td><td class="crd-td">109,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Marj al-Ḥamām</strong></td><td class="crd-td">31,9, 35,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">95,2k</td><td class="crd-td">95,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Askān Abū Nuṣaīr</strong></td><td class="crd-td">32,06, 35,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">72,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>'Aīn al-Bāshā</strong></td><td class="crd-td">32,06, 35,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">69,2k</td><td class="crd-td">69,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Baq'ah</strong></td><td class="crd-td">30,48, 35,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">68,8k (2015)</td></tr>
<tr><td class="crd-td"><strong>'Āīdūn</strong></td><td class="crd-td">32,51, 35,86</td><td class="crd-td">-</td><td class="crd-td">11,3k</td><td class="crd-td">67,4k</td><td class="crd-td">67,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jarash</strong></td><td class="crd-td">32,28, 35,9</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">58,4k</td><td class="crd-td">58,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Azraq</strong></td><td class="crd-td">31,83, 36,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">57,5k (2019)</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣarīḥ</strong></td><td class="crd-td">32,5, 35,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,9k</td><td class="crd-td">52,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Hāshimiyah</strong></td><td class="crd-td">32,13, 36,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">51,5k</td><td class="crd-td">51,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aḍ-Ḍulaīl</strong></td><td class="crd-td">32,12, 36,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Ma'ān</strong></td><td class="crd-td">30,2, 35,73</td><td class="crd-td">-</td><td class="crd-td">20,2k</td><td class="crd-td">47,2k</td><td class="crd-td">47,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bayt Rās</strong></td><td class="crd-td">32,59, 35,86</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">47k</td><td class="crd-td">47k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥiṣn</strong></td><td class="crd-td">32,48, 35,88</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">40,4k</td><td class="crd-td">40,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nā'ūr</strong></td><td class="crd-td">31,87, 35,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,2k</td><td class="crd-td">37,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Karak</strong></td><td class="crd-td">31,18, 35,7</td><td class="crd-td">-</td><td class="crd-td">16,5k</td><td class="crd-td">37,1k</td><td class="crd-td">37,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kufrinjah</strong></td><td class="crd-td">32,3, 35,7</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">35,7k</td><td class="crd-td">35,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Turra</strong></td><td class="crd-td">32,64, 35,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,9k (2017)</td></tr>
<tr><td class="crd-td"><strong>Dayr Abī Sa'īd</strong></td><td class="crd-td">32,5, 35,69</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">34k</td><td class="crd-td">34k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ash-Shajarah</strong></td><td class="crd-td">32,64, 35,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,1k</td><td class="crd-td">32,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mu'tah</strong></td><td class="crd-td">31,09, 35,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,5k</td><td class="crd-td">31,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kufr 'Awan</strong></td><td class="crd-td">32,42, 35,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k (2015)</td></tr>
<tr><td class="crd-td"><strong>An-Na'īmah</strong></td><td class="crd-td">32,42, 35,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Al-Mashāri'</strong></td><td class="crd-td">32,43, 35,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,7k</td><td class="crd-td">27,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭafīlah</strong></td><td class="crd-td">30,75, 35,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Ghawr aṣ-Ṣāfī</strong></td><td class="crd-td">31,04, 35,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,3k (2015)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 40 of 60 catalogued cities and towns in Jordan, showing coordinates, 1946AD, 1990AD and 2025AD estimates and peak population.</figcaption>
</figure>

## Palestine

Palestine contributes 259 catalogued localities from PCBS censuses and Mandate Village Statistics, reaching 4,21M at latest benchmarks (Table \ref{tab:pse-sites}). In the Gaza Strip, Gaza City (749,1k peak in 2023AD), Khan Yunis (275,5k), Jabalyah (248,5k) and Rafah form one of the most densely packed urban strips on the Mediterranean littoral [@Scott2001Mortality; @Fayad2025Political]. Across the West Bank uplands, Hebron/Al-Khalil, Nablus, Tulkarm, Qalqilyah, Bethlehem, Ramallah and hundreds of rural villages sustain dense highland populations despite territorial fragmentation [@Muhsen2017Urban; @Harker2012Precarious; @Courbage2006Enjeux].

<figure class="crd-table-figure" id="tab:pse-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ghazzah</strong></td><td class="crd-td">31,5, 34,47</td><td class="crd-td">-</td><td class="crd-td">273,9k</td><td class="crd-td">706k</td><td class="crd-td">749,1k (2023)</td></tr>
<tr><td class="crd-td"><strong>Khān Yūnis</strong></td><td class="crd-td">31,34, 34,31</td><td class="crd-td">-</td><td class="crd-td">101,2k</td><td class="crd-td">275,5k</td><td class="crd-td">275,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jabālyah</strong></td><td class="crd-td">31,53, 34,48</td><td class="crd-td">-</td><td class="crd-td">91k</td><td class="crd-td">248,5k</td><td class="crd-td">248,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rafaḥ</strong></td><td class="crd-td">31,3, 34,24</td><td class="crd-td">-</td><td class="crd-td">90,9k</td><td class="crd-td">233,2k</td><td class="crd-td">233,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Khalīl</strong></td><td class="crd-td">31,53, 35,09</td><td class="crd-td">-</td><td class="crd-td">91,6k</td><td class="crd-td">224,9k</td><td class="crd-td">224,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Nābulus</strong></td><td class="crd-td">32,22, 35,25</td><td class="crd-td">-</td><td class="crd-td">82,8k</td><td class="crd-td">175,5k</td><td class="crd-td">177,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Bayt Lāhīyā</strong></td><td class="crd-td">31,55, 34,5</td><td class="crd-td">-</td><td class="crd-td">23,9k</td><td class="crd-td">100,5k</td><td class="crd-td">100,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>An-Nuṣayrāt</strong></td><td class="crd-td">31,45, 34,39</td><td class="crd-td">-</td><td class="crd-td">36k</td><td class="crd-td">96,9k</td><td class="crd-td">96,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dayr al-Balaḥ</strong></td><td class="crd-td">31,42, 34,35</td><td class="crd-td">-</td><td class="crd-td">35,1k</td><td class="crd-td">91,8k</td><td class="crd-td">91,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṭūlkarm</strong></td><td class="crd-td">32,31, 35,03</td><td class="crd-td">-</td><td class="crd-td">34,4k</td><td class="crd-td">83,3k</td><td class="crd-td">83,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>GANEY MODIIN</strong></td><td class="crd-td">31,93, 35,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">76,4k (2019)</td></tr>
<tr><td class="crd-td"><strong>Yaṭṭā</strong></td><td class="crd-td">31,45, 35,09</td><td class="crd-td">-</td><td class="crd-td">22,4k</td><td class="crd-td">71k</td><td class="crd-td">71k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rimal</strong></td><td class="crd-td">31,52, 34,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">70k (2023)</td></tr>
<tr><td class="crd-td"><strong>Janīn</strong></td><td class="crd-td">32,46, 35,3</td><td class="crd-td">-</td><td class="crd-td">28,4k</td><td class="crd-td">67,5k</td><td class="crd-td">67,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Beitar Illit</strong></td><td class="crd-td">31,7, 35,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">63,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Bayt Ḥānūn</strong></td><td class="crd-td">31,54, 34,54</td><td class="crd-td">-</td><td class="crd-td">14,7k</td><td class="crd-td">58,4k</td><td class="crd-td">58,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qalqīlyah</strong></td><td class="crd-td">32,19, 34,97</td><td class="crd-td">-</td><td class="crd-td">23,6k</td><td class="crd-td">57,8k</td><td class="crd-td">57,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Bīrah</strong></td><td class="crd-td">31,91, 35,22</td><td class="crd-td">-</td><td class="crd-td">23,4k</td><td class="crd-td">51,4k</td><td class="crd-td">51,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dūrā</strong></td><td class="crd-td">31,51, 35,03</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">44k</td><td class="crd-td">44k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ramallah</strong></td><td class="crd-td">31,9, 35,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Taibe</strong></td><td class="crd-td">32,27, 35</td><td class="crd-td">-</td><td class="crd-td">21,2k</td><td class="crd-td">-</td><td class="crd-td">43,1k (2018)</td></tr>
<tr><td class="crd-td"><strong>Aẓ-Ẓāhīriyah</strong></td><td class="crd-td">31,41, 34,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40,2k</td><td class="crd-td">41,5k (2023)</td></tr>
<tr><td class="crd-td"><strong>Banī Suhaylā</strong></td><td class="crd-td">31,34, 34,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,4k (2017)</td></tr>
<tr><td class="crd-td"><strong>Ma'ale Adumim</strong></td><td class="crd-td">31,77, 35,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,6k (2021)</td></tr>
<tr><td class="crd-td"><strong>Bayt Laḥm</strong></td><td class="crd-td">31,7, 35,2</td><td class="crd-td">-</td><td class="crd-td">20,5k</td><td class="crd-td">32k</td><td class="crd-td">36k (2019)</td></tr>
<tr><td class="crd-td"><strong>Al-Qarārah</strong></td><td class="crd-td">31,37, 34,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,4k</td><td class="crd-td">32,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ḥalḥūl</strong></td><td class="crd-td">31,58, 35,1</td><td class="crd-td">-</td><td class="crd-td">12,6k</td><td class="crd-td">30,2k</td><td class="crd-td">30,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Abasān al-Kabīrah</strong></td><td class="crd-td">31,32, 34,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,9k</td><td class="crd-td">29,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Baytūniyā</strong></td><td class="crd-td">31,9, 35,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,8k</td><td class="crd-td">29,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>As-Samū'</strong></td><td class="crd-td">31,4, 35,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,1k</td><td class="crd-td">29,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Idhnā</strong></td><td class="crd-td">31,56, 34,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,1k</td><td class="crd-td">29,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Banī Na'īm</strong></td><td class="crd-td">31,52, 35,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Qabāṭiyah</strong></td><td class="crd-td">32,41, 35,28</td><td class="crd-td">-</td><td class="crd-td">11,9k</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kalandia</strong></td><td class="crd-td">31,86, 35,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,6k (2006)</td></tr>
<tr><td class="crd-td"><strong>Ṭūbās</strong></td><td class="crd-td">32,32, 35,37</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">24k</td><td class="crd-td">24k (2025)</td></tr>
<tr><td class="crd-td"><strong>Az-Zawayda</strong></td><td class="crd-td">31,43, 34,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,8k (2017)</td></tr>
<tr><td class="crd-td"><strong>Al-'Aīzariyah</strong></td><td class="crd-td">31,77, 35,27</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">23,7k</td><td class="crd-td">23,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Arīḥā</strong></td><td class="crd-td">31,87, 35,45</td><td class="crd-td">-</td><td class="crd-td">12,3k</td><td class="crd-td">23,4k</td><td class="crd-td">23,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Al-Yāmūn</strong></td><td class="crd-td">32,49, 35,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,2k</td><td class="crd-td">23,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jericho</strong></td><td class="crd-td">31,86, 35,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,2k (2016)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 40 of 259 catalogued cities, towns and villages in Palestine (West Bank and Gaza Strip), 1946AD-2025AD.</figcaption>
</figure>

## Lebanon

Lebanon contributes 38 catalogued urban centres and governorate-cluster entries reaching 4,56M at latest benchmarks (Table \ref{tab:lbn-sites}). Because CAS Lebanon reports post-1970 estimates primarily at the governorate and qada scale alongside municipal estimates, the ledger pairs Beirut (2,42M Greater Beirut metropolitan peak in 2023AD; 484,6k municipal proper in 2025AD) with North Lebanon (791k in 2017AD), Al-Biqa' (597,7k), Ba'albak-Al-Harmal (512,2k), 'Akkar (473,8k), An-Nabatiyah (429,3k) and coastal and mountain towns across Mount Lebanon and the South [@Knudsen2024Urban].

<figure class="crd-table-figure" id="tab:lbn-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1946AD</th><th class="crd-th">1990AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bayrūt</strong></td><td class="crd-td">33,89, 35,5</td><td class="crd-td">240k</td><td class="crd-td">422,1k</td><td class="crd-td">484,6k</td><td class="crd-td">2,42M (2023)</td></tr>
<tr><td class="crd-td"><strong>Lubnān ash-Shamālī</strong></td><td class="crd-td">34,33, 35,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">791k (2017)</td></tr>
<tr><td class="crd-td"><strong>Al-Biqā'</strong></td><td class="crd-td">33,67, 35,83</td><td class="crd-td">152,6k</td><td class="crd-td">203,8k</td><td class="crd-td">597,7k</td><td class="crd-td">597,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ba'albak - Al-Harmal</strong></td><td class="crd-td">34,21, 36,3</td><td class="crd-td">107,6k</td><td class="crd-td">182,4k</td><td class="crd-td">512,2k</td><td class="crd-td">512,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>'Akkār</strong></td><td class="crd-td">34,54, 36,08</td><td class="crd-td">9,6k</td><td class="crd-td">184,4k</td><td class="crd-td">473,8k</td><td class="crd-td">473,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>An-Nabaṭīyah</strong></td><td class="crd-td">33,38, 35,48</td><td class="crd-td">7,5k</td><td class="crd-td">191,1k</td><td class="crd-td">429,3k</td><td class="crd-td">429,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ṭarābulus</strong></td><td class="crd-td">34,44, 35,85</td><td class="crd-td">71k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">227,9k (2010)</td></tr>
<tr><td class="crd-td"><strong>Ṣaydā</strong></td><td class="crd-td">33,56, 35,37</td><td class="crd-td">18k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">200k (2010)</td></tr>
<tr><td class="crd-td"><strong>Ṣūr</strong></td><td class="crd-td">33,27, 35,19</td><td class="crd-td">9,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">160k (2018)</td></tr>
<tr><td class="crd-td"><strong>Bourj Hammoud</strong></td><td class="crd-td">33,89, 35,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">150k (2010)</td></tr>
<tr><td class="crd-td"><strong>Jūniyah</strong></td><td class="crd-td">33,98, 35,62</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">102,2k (2012)</td></tr>
<tr><td class="crd-td"><strong>Zaḥlah</strong></td><td class="crd-td">33,85, 35,9</td><td class="crd-td">21k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">100k (2006)</td></tr>
<tr><td class="crd-td"><strong>Baalbek</strong></td><td class="crd-td">34,02, 36,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">82,6k (1998)</td></tr>
<tr><td class="crd-td"><strong>Kabelias</strong></td><td class="crd-td">33,79, 35,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50k (2011)</td></tr>
<tr><td class="crd-td"><strong>Batroun</strong></td><td class="crd-td">34,25, 35,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38k (2010)</td></tr>
<tr><td class="crd-td"><strong>Bint Jbeil</strong></td><td class="crd-td">33,13, 35,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k (2010)</td></tr>
<tr><td class="crd-td"><strong>Jezzine</strong></td><td class="crd-td">33,54, 35,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25k (2004)</td></tr>
<tr><td class="crd-td"><strong>Baakleen</strong></td><td class="crd-td">33,68, 35,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17k (2010)</td></tr>
<tr><td class="crd-td"><strong>Ba'labakk</strong></td><td class="crd-td">34,01, 36,22</td><td class="crd-td">9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ras Baalbek</strong></td><td class="crd-td">34,26, 36,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (2010)</td></tr>
<tr><td class="crd-td"><strong>Tekrit</strong></td><td class="crd-td">34,52, 36,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13k (2010)</td></tr>
<tr><td class="crd-td"><strong>Qaa</strong></td><td class="crd-td">34,34, 36,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k (2010)</td></tr>
<tr><td class="crd-td"><strong>Sarafand</strong></td><td class="crd-td">33,45, 35,3</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Amioun</strong></td><td class="crd-td">34,3, 35,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (2010)</td></tr>
<tr><td class="crd-td"><strong>Marjayoun</strong></td><td class="crd-td">33,37, 35,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k (2010)</td></tr>
<tr><td class="crd-td"><strong>Toufiqiyeh</strong></td><td class="crd-td">34,18, 36,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k (2021)</td></tr>
<tr><td class="crd-td"><strong>Bhamdoun el Mhatta</strong></td><td class="crd-td">33,81, 35,66</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Aaqaybeh</strong></td><td class="crd-td">34,06, 35,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (2010)</td></tr>
<tr><td class="crd-td"><strong>Deyr el-Qamar</strong></td><td class="crd-td">33,7, 35,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k (2024)</td></tr>
<tr><td class="crd-td"><strong>Kfar Dane</strong></td><td class="crd-td">34,01, 36,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (2010)</td></tr>
<tr><td class="crd-td"><strong>Qaaqaaiyet Es Snaoubar</strong></td><td class="crd-td">33,43, 35,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (2014)</td></tr>
<tr><td class="crd-td"><strong>Kouachra</strong></td><td class="crd-td">34,61, 36,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (2010)</td></tr>
<tr><td class="crd-td"><strong>Anjar</strong></td><td class="crd-td">33,73, 35,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (2010)</td></tr>
<tr><td class="crd-td"><strong>Barhalioun</strong></td><td class="crd-td">34,26, 35,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (2010)</td></tr>
<tr><td class="crd-td"><strong>Chaaitiyeh</strong></td><td class="crd-td">33,2, 35,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (2014)</td></tr>
<tr><td class="crd-td"><strong>Freike</strong></td><td class="crd-td">33,94, 35,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (2017)</td></tr>
<tr><td class="crd-td"><strong>Jouar</strong></td><td class="crd-td">33,92, 35,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">879 (2010)</td></tr>
<tr><td class="crd-td"><strong>Ouadi Jilo</strong></td><td class="crd-td">33,24, 35,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">627 (2014)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 38 of 38 catalogued settlements and urbanised district anchors in Lebanon, 1946AD-2025AD.</figcaption>
</figure>

# Limitations

Three methodological limitations frame this urban gazetteer. First, Lebanon's lack of a national census since 1932AD limits municipal-level resolution, compressing suburban Beirut and Tripoli growth into governorate aggregates that carry wider uncertainty than Israeli or Jordanian municipal counts [@Knudsen2024Urban]. Second, Syrian series after 2004AD rely on civil-registry extrapolations and wartime displacement surveys; local urban peaks at Aleppo, Homs, Dayr az-Zawr and Ar-Raqqah reflect pre-war trend projections alongside 2015AD-2021AD adjustments rather than post-war house-by-house censuses [@Omran2017Urban; @Morrison2018Providing]. Third, acute conflict in the Gaza Strip and southern Lebanon since October 2023 has caused severe displacement and structural destruction not yet reflected in pre-war 2023AD PCBS projections [@Koylu2025Israel; @Fayad2025Political].

# Conclusion

Together, the 3.105 settlements catalogued in Chapter 22 document an extraordinary urban and rural transformation from 1,94M enumerated inhabitants in 1946AD to 31,28M across 2025AD urban series in Syria, Lebanon, Jordan, Israel and Palestine. Anchored to geoBoundaries administrative polygons [@Runfola2020GeoBoundaries], deduplicated of 271 duplicate aliases and overlapping suburban satellites and adhering strictly to founding-year truncation for new Israeli towns, the corpus follows a steep Zipf rank-size law ($\alpha = 1{,}556$, $R^2 = 0{,}967$) that cleanly captures metropolitan primacy, refugee-camp urbanisation and full rural locality density.

# Appendix

## Jurisdiction Summary

Table \ref{tab:app-jur-summary} summarises catalogued settlement counts, temporal spans, median peak sizes and maximum urban peaks across all five states and territories.

<figure class="crd-table-figure" id="tab:app-jur-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Span</th><th class="crd-th">Median Peak</th><th class="crd-th">Max Peak</th><th class="crd-th">Latest Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">1.856</td><td class="crd-td">1946-2025AD</td><td class="crd-td">1,5k</td><td class="crd-td">2,86M</td><td class="crd-td">21,74M</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">892</td><td class="crd-td">1946-2025AD</td><td class="crd-td">1,1k</td><td class="crd-td">1,05M</td><td class="crd-td">9,57M</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">259</td><td class="crd-td">1948-2025AD</td><td class="crd-td">2,5k</td><td class="crd-td">749,1k</td><td class="crd-td">4,21M</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">60</td><td class="crd-td">1949-2025AD</td><td class="crd-td">36,4k</td><td class="crd-td">2,08M</td><td class="crd-td">7,22M</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">38</td><td class="crd-td">1946-2025AD</td><td class="crd-td">15,3k</td><td class="crd-td">2,42M</td><td class="crd-td">4,56M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlement counts (3.105 total), temporal spans, median and maximum peaks and latest-benchmark totals across five Levantine jurisdictions.</figcaption>
</figure>

## Excluded Duplicates and Merged Subordinate Suburbs

Table \ref{tab:app-excluded} summarises the 271 excluded candidates across the five jurisdictions whose duplicate aliases or contiguous suburban footprints were merged into canonical parent cores in the regional source ledger.

<figure class="crd-table-figure" id="tab:app-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Excluded</th><th class="crd-th">Duplicate Aliases</th><th class="crd-th">Merged Suburbs</th><th class="crd-th">Representative Examples</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">100</td><td class="crd-td">84</td><td class="crd-td">16</td><td class="crd-td">Jerusalem, Haifa, Majdal Shams, Jerusalem, Yerushalayim</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">93</td><td class="crd-td">73</td><td class="crd-td">20</td><td class="crd-td">Al-Lādhiqiyah, Buq'ata, Mas'ade, Ghajar, Ein Qiniyye</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">37</td><td class="crd-td">29</td><td class="crd-td">8</td><td class="crd-td">Al-Quds, Jerusalem, Holon, Pardes Hanna-Karkur, Gedera</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">28</td><td class="crd-td">24</td><td class="crd-td">4</td><td class="crd-td">Amman, Irbid, 'Ammān, Az-Zarqā', Irbid</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">13</td><td class="crd-td">6</td><td class="crd-td">7</td><td class="crd-td">Ghajar, Beirut, Al-Biqā', Bayrūt, Ba'albak - Al-Harmal</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Summary of 271 excluded duplicate aliases and merged suburban candidates by jurisdiction in the Chapter 22 source ledger.</figcaption>
</figure>

# Sources

::: {#refs}
:::

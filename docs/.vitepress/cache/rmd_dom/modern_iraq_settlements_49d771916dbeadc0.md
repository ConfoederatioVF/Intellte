---
title: "Iraq after 1932"
subtitle: "Settlement Gazetteer across Eighteen Governorates, 1932AD to 2025AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_iraq_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_iraq_spatial.png"
hero_caption: "Spatial distribution of 222 catalogued Iraqi settlements across eighteen governorates from 1947AD to 2025AD, anchored by Baghdad, Mosul, Basra, Kirkuk and Erbil."
hero_label: "fig:hero-modern-iraq-settlements"
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

This settlement gazetteer compiles longitudinal population series for 222 catalogued Iraqi cities and towns from the inaugural 1947AD census through the 2024-2025 horizon. Drawn from Iraq's Central Organization for Statistics and Information Technology (COSIT) enumerations of 1947AD, 1957AD, 1965AD, 1977AD, 1987AD and 1997AD alongside 2009AD and 2024AD district estimates, the urban ledger traces a dramatic expansion in aggregate enumerated urban population from 1,47M in 1947AD to 3,84M in 1965AD, 8,22M in 1987AD, 20,71M in 2009AD and 29,25M in 2025AD. Organised across six geographical belts—the Baghdād metropolitan corridor, the northern Kurdistan highlands, the Upper Tigris and Jazīra oil foothills, the Middle Euphrates and Al-Anbār valley, the southern alluvium and marshlands, and the Al-Baṣrah Shatt al-Arab littoral—the tables expose both extreme metropolitan primacy in Baghdād (8,13M peak in 2018AD; 7,95M in 2025AD; Zipf $\alpha = 1{,}303$, $R^2 = 0{,}786$) and sharp local shocks driven by the Iran-Iraq War, Anfal clearances, marshland drainage and post-2003 internal displacement.

<figure class="crd-figure-block" id="fig:hero-modern-iraq-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iraq-settlements/fig1_modern_iraq_spatial.png" alt="fig:hero-modern-iraq-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 222 catalogued Iraqi settlements across eighteen governorates from 1947AD to 2025AD, anchored by Baghdad, Mosul, Basra, Kirkuk and Erbil.</figcaption>
</figure>

# Background

Modern Iraq's urban network grew out of an ancient riverine and caravan geography reordered by twentieth-century oil exports, centralised administration and recurrent warfare. At the inaugural national census of 1947AD, Baghdād already dominated the central Tigris crossing with 515,5k inhabitants across Greater Baghdād, far ahead of the northern caravan and administrative centre of Al-Mawṣil (133,6k), the southern Gulf port of Al-Baṣrah (101,5k), the oil-boom railhead of Kirkūk (68,3k) and the Kurdish piedmont cities of As-Sulaymāniyah (33,5k) and Arbīl (27k). Throughout the middle decades of the twentieth century, landlessness in the southern riverain provinces, state investment in flood-control barrages and the rapid growth of public-sector employment accelerated rural-to-urban migration into Baghdād, Kirkūk and Al-Baṣrah [@Wojtaszek2025Isolated; @Anonymous2017Case].

Between 1980 and 2017, conflict and environmental disruption repeatedly altered urban growth trajectories across provinces. Artillery shelling along the Shatt al-Arab during the Iran-Iraq War temporarily hollowed out Al-Baṣrah and southern river ports [@Lorenz2013Strategic], while the 1987-1988 Anfal campaign razed upland Kurdish villages and drove rural families into collective towns around Arbīl, As-Sulaymāniyah and Dahūk [@Ahram2023There; @Romano2007Refugee]. During the 1990s, international sanctions eroded living standards in Baghdād [@Wojtaszek2025Isolated; @Wang2017Global], and state drainage canals desiccated the southern Al-Ahwār marshes, forcing tens of thousands of *Ma'dān* households into An-Nāṣiriyah, Al-'Amārah and Baghdād's eastern districts [@Znad2024Conflicts; @Yldrm2023Torn]. Later, the 2003-2011 war and the 2014-2017 Islamic State occupation displaced millions from Al-Mawṣil, Ar-Ramādī, Al-Fallūjah and Tikrīt toward Baghdād, Karbalā', An-Najaf and Kurdistan before post-2017 reconstruction reopened northern and western urban cores [@Cetorelli2014Effect; @Sharara2021Health; @Koush2024Heritage].

# Methodology

Every settlement included in this gazetteer derives from COSIT national population censuses (1947-1997) harmonised with 2009AD listing frames and 2024AD district-level urban estimates across official census and projection horizons from 1947AD to 2025AD. Out of 426 candidate localities screened in the regional source ledger, 222 distinct urban and town centres passed deduplication and boundary separation rules, whereas 204 duplicate aliases and contiguous suburban towns were excluded or merged into canonical parent cities to prevent double-counting. Where original municipal registers record Arabic-script names, tables display standardised Latin romanisations with scholarly diacritics so that every toponym renders cleanly without missing-glyph substitutions.

To reflect Iraq's physical and administrative geography, the 222 settlements are partitioned into six contiguous zones ordered from the national capital outward: (1) Baghdād Metropolitan Corridor and Lower Diyālā (31 centres); (2) Kurdistan Highlands and Garmiyan Piedmont across Arbīl, As-Sulaymāniyah, Dahūk and Ḥalabjah (57 centres); (3) Upper Tigris, Jazīra and Kirkūk Foothills across Nīnawā, Kirkūk and Ṣalāḥ ad-Dīn (43 centres); (4) Middle Euphrates, Al-Anbār and Wāsiṭ (51 centres); (5) Southern Alluvium and Marshland Edge across Dhī Qār, Maysān, Al-Qādisiyyah and Al-Muthannā (29 centres); and (6) Al-Baṣrah and the Shatt al-Arab Littoral (11 centres). Within each regional table, settlements are ranked in descending order by peak population across five benchmark columns (1947AD, 1965AD, 1987AD, 2009AD and 2025AD), with hyphens marking benchmarks where a smaller town was not separately enumerated.

# Testing and Validation

Cross-checking the 222 urban trajectories against Iraq's 88 geoBoundaries second-order administrative districts (qadhas) [@Runfola2020GeoBoundaries] confirms tight structural alignment between municipal growth and subadministrative census enumerations. Across the full sample, peak settlement sizes obey a steep Zipf rank-size power law ($\alpha = 1{,}303$, $R^2 = 0{,}786$), capturing Baghdād's commanding lead over Al-Mawṣil while accommodating a broad tail of district towns and smaller provincial centres. Table \ref{tab:excluded-suburbs} summarises the 204 excluded duplicate aliases and merged suburban localities screened out during ledger deduplication.

<figure class="crd-table-figure" id="tab:excluded-suburbs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ledger Disposition</th><th class="crd-th">Excluded</th><th class="crd-th">Share</th><th class="crd-th">Representative Examples</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Duplicate census / spelling alias merged</strong></td><td class="crd-td">182</td><td class="crd-td">89,2%</td><td class="crd-td">Al-Kūfah, Baghdad, Baghdād, Al-Mawṣil, Al-Baṣrah, Kirkūk</td></tr>
<tr><td class="crd-td"><strong>Co-located or contiguous suburban core merged</strong></td><td class="crd-td">22</td><td class="crd-td">10,8%</td><td class="crd-td">Mosul, Basra, Erbil, Zakho, Abu Al-Khaseeb, Salman Pak</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Summary of 204 screened candidate localities excluded as duplicate aliases or merged suburbs during ledger audit.</figcaption>
</figure>

# Results

Figure \ref{fig:sett-rank} illustrates the Zipf rank-size regression across all 222 Iraqi settlements alongside the twelve largest cities by peak population. The sections below present the full regional gazetteer tables across all six geographical zones.

<figure class="crd-figure-block" id="fig:sett-rank">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iraq-settlements/fig4_modern_iraq_settlements.png" alt="fig:sett-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Rank-size Zipf distribution (n = 222, alpha = 1,303, R² = 0,786) and twelve leading Iraqi urban centres by peak population.</figcaption>
</figure>

## Baghdād Metropolitan Corridor and Lower Diyālā

Table \ref{tab:zone1-baghdad} records 31 settlements anchoring the central Tigris-Diyālā core, led by Baghdād (8,13M peak in 2018AD; 7,95M in 2025AD) and the Diyālā provincial capital of Ba'qūbah (467,9k peak in 2003AD; 391k in 2025AD), together with fast-growing peri-urban satellites such as Abū Ghraib, Al-Waḥdah, Al-Maḥmūdiyah, Al-Muqdādiyah and Al-Khāliṣ [@Wojtaszek2025Isolated].

<figure class="crd-table-figure" id="tab:zone1-baghdad">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">1987AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdād</strong></td><td class="crd-td">33,34, 44,4</td><td class="crd-td">515,5k</td><td class="crd-td">1,52M</td><td class="crd-td">3,84M</td><td class="crd-td">5,52M</td><td class="crd-td">7,95M</td></tr>
<tr><td class="crd-td"><strong>Ba'qūbah</strong></td><td class="crd-td">33,75, 44,61</td><td class="crd-td">10,5k</td><td class="crd-td">34,6k</td><td class="crd-td">114,5k</td><td class="crd-td">227,8k</td><td class="crd-td">391k</td></tr>
<tr><td class="crd-td"><strong>Abu Ghraib</strong></td><td class="crd-td">33,31, 44,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Waḥdah</strong></td><td class="crd-td">33,31, 44,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">91,1k</td><td class="crd-td">149,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥmūdiyah</strong></td><td class="crd-td">33,06, 44,37</td><td class="crd-td">4,5k</td><td class="crd-td">13,2k</td><td class="crd-td">-</td><td class="crd-td">83,3k</td><td class="crd-td">124,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Madā'in</strong></td><td class="crd-td">33,1, 44,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,2k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Ghazaliya</strong></td><td class="crd-td">33,32, 44,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandrīah</strong></td><td class="crd-td">32,89, 44,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">82,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Baladrūz</strong></td><td class="crd-td">33,7, 45,08</td><td class="crd-td">4,8k</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">52,1k</td><td class="crd-td">68,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Muqdādiyah</strong></td><td class="crd-td">33,98, 44,94</td><td class="crd-td">5,4k</td><td class="crd-td">14,6k</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">99,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Karmah</strong></td><td class="crd-td">33,4, 43,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣuwaīrah</strong></td><td class="crd-td">32,93, 44,78</td><td class="crd-td">4,2k</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">62k</td><td class="crd-td">93,2k</td></tr>
<tr><td class="crd-td"><strong>An-Naṣir and As-Salām</strong></td><td class="crd-td">33,3, 44,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-'Azīziyah</strong></td><td class="crd-td">32,91, 45,06</td><td class="crd-td">4,6k</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">44,9k</td><td class="crd-td">79,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Khāliṣ</strong></td><td class="crd-td">33,81, 44,53</td><td class="crd-td">4,2k</td><td class="crd-td">11,8k</td><td class="crd-td">-</td><td class="crd-td">51k</td><td class="crd-td">69,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Saydiya</strong></td><td class="crd-td">33,25, 44,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Saba Abkar</strong></td><td class="crd-td">33,39, 44,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ad-Dujaīl</strong></td><td class="crd-td">33,85, 44,23</td><td class="crd-td">3,1k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">29,9k</td><td class="crd-td">53,2k</td></tr>
<tr><td class="crd-td"><strong>Al Qaryah al ‘Aşrīyah</strong></td><td class="crd-td">32,88, 44,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Muṣṭafā</strong></td><td class="crd-td">33,83, 45,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40,2k</td></tr>
<tr><td class="crd-td"><strong>Al-'Āmiriyah</strong></td><td class="crd-td">33,67, 44,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,5k</td><td class="crd-td">33,7k</td></tr>
<tr><td class="crd-td"><strong>Buhriz</strong></td><td class="crd-td">33,7, 44,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭārmiyah</strong></td><td class="crd-td">33,67, 44,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Banī Sa'd</strong></td><td class="crd-td">33,99, 44,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,2k</td><td class="crd-td">31,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Laṭīfiyah</strong></td><td class="crd-td">33,02, 44,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,9k</td><td class="crd-td">29,8k</td></tr>
<tr><td class="crd-td"><strong>Kan'ān</strong></td><td class="crd-td">33,69, 44,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,3k</td><td class="crd-td">29,1k</td></tr>
<tr><td class="crd-td"><strong>'Aūr</strong></td><td class="crd-td">33,41, 44,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hibhib</strong></td><td class="crd-td">33,78, 44,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k</td><td class="crd-td">21,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Yūsufiyah</strong></td><td class="crd-td">33,08, 44,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,8k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Albu Aitha</strong></td><td class="crd-td">33,23, 44,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mandali</strong></td><td class="crd-td">33,75, 45,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Baghdād metropolitan corridor and Lower Diyālā settlements from 1947AD to 2025AD.</figcaption>
</figure>

## Kurdistan Highlands and Garmiyan Piedmont

Table \ref{tab:zone2-kurdistan} covers 57 cities and towns across Arbīl, As-Sulaymāniyah, Dahūk and the Garmiyan piedmont. Rapid post-1991 institutional stability and refugee return [@Romano2007Refugee; @Hamelink2025Enacting] propelled Arbīl to 1,02M, As-Sulaymāniyah to an 878,1k peak in 2018AD (840,5k in 2025AD), Dahūk to 459,4k and border-trade hub Zākhū to 301,4k by 2025AD.

<figure class="crd-table-figure" id="tab:zone2-kurdistan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">1987AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Arbīl</strong></td><td class="crd-td">36,19, 44,01</td><td class="crd-td">27k</td><td class="crd-td">90,3k</td><td class="crd-td">486k</td><td class="crd-td">675,5k</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>As-Sulaymāniyah</strong></td><td class="crd-td">35,56, 45,43</td><td class="crd-td">33,5k</td><td class="crd-td">83,6k</td><td class="crd-td">364,1k</td><td class="crd-td">559,7k</td><td class="crd-td">840,5k</td></tr>
<tr><td class="crd-td"><strong>Dahūk</strong></td><td class="crd-td">36,87, 42,99</td><td class="crd-td">5,6k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">280,1k</td><td class="crd-td">459,4k</td></tr>
<tr><td class="crd-td"><strong>Duhok</strong></td><td class="crd-td">36,85, 42,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Zākhū</strong></td><td class="crd-td">37,15, 42,69</td><td class="crd-td">13,5k</td><td class="crd-td">19,7k</td><td class="crd-td">-</td><td class="crd-td">174,2k</td><td class="crd-td">301,4k</td></tr>
<tr><td class="crd-td"><strong>Sumaīl</strong></td><td class="crd-td">36,86, 42,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">58,8k</td><td class="crd-td">154,7k</td></tr>
<tr><td class="crd-td"><strong>Kalār</strong></td><td class="crd-td">34,63, 45,32</td><td class="crd-td">2,2k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">120,1k</td><td class="crd-td">149,6k</td></tr>
<tr><td class="crd-td"><strong>Khasnahzān</strong></td><td class="crd-td">36,2, 44,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">54,4k</td><td class="crd-td">148,7k</td></tr>
<tr><td class="crd-td"><strong>Bakrah Jū</strong></td><td class="crd-td">35,56, 45,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">59,1k</td><td class="crd-td">141,6k</td></tr>
<tr><td class="crd-td"><strong>Baḥarkah</strong></td><td class="crd-td">36,32, 44,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28k</td><td class="crd-td">132,4k</td></tr>
<tr><td class="crd-td"><strong>Rānyah</strong></td><td class="crd-td">36,26, 44,88</td><td class="crd-td">3,4k</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">76,1k</td><td class="crd-td">115,8k</td></tr>
<tr><td class="crd-td"><strong>'Ākra</strong></td><td class="crd-td">36,73, 43,88</td><td class="crd-td">5,6k</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">56k</td><td class="crd-td">106,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥamzah</strong></td><td class="crd-td">37,09, 43,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">71,3k</td><td class="crd-td">95,3k</td></tr>
<tr><td class="crd-td"><strong>Sūrān</strong></td><td class="crd-td">35,31, 44,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">53k</td><td class="crd-td">92,9k</td></tr>
<tr><td class="crd-td"><strong>Qaladiza</strong></td><td class="crd-td">36,18, 45,13</td><td class="crd-td">3,8k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">61,2k</td><td class="crd-td">87k</td></tr>
<tr><td class="crd-td"><strong>Diyānā</strong></td><td class="crd-td">36,66, 44,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,6k</td><td class="crd-td">81,7k</td></tr>
<tr><td class="crd-td"><strong>Saīd Ṣādiq</strong></td><td class="crd-td">35,35, 45,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">51k</td><td class="crd-td">78,2k</td></tr>
<tr><td class="crd-td"><strong>Ḥalabjah</strong></td><td class="crd-td">35,18, 45,99</td><td class="crd-td">6,2k</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">55,6k</td><td class="crd-td">77k</td></tr>
<tr><td class="crd-td"><strong>Kuysanjaq</strong></td><td class="crd-td">36,08, 44,63</td><td class="crd-td">7,2k</td><td class="crd-td">14,1k</td><td class="crd-td">-</td><td class="crd-td">51,2k</td><td class="crd-td">69,3k</td></tr>
<tr><td class="crd-td"><strong>Kuysanjaq</strong></td><td class="crd-td">36,12, 45,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">51,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fāīdah</strong></td><td class="crd-td">36,76, 42,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">57,6k</td><td class="crd-td">66,4k</td></tr>
<tr><td class="crd-td"><strong>Ḥājī 'Āwā</strong></td><td class="crd-td">36,24, 44,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44,4k</td><td class="crd-td">64,1k</td></tr>
<tr><td class="crd-td"><strong>Dārahtūū</strong></td><td class="crd-td">35,15, 46,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44,3k</td><td class="crd-td">62,2k</td></tr>
<tr><td class="crd-td"><strong>Jamjamāl</strong></td><td class="crd-td">35,53, 44,83</td><td class="crd-td">4,1k</td><td class="crd-td">11,5k</td><td class="crd-td">-</td><td class="crd-td">54k</td><td class="crd-td">43,2k</td></tr>
<tr><td class="crd-td"><strong>Darbandikhān</strong></td><td class="crd-td">35,11, 45,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,6k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Jwār Qūrnah</strong></td><td class="crd-td">36,21, 44,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khabāt</strong></td><td class="crd-td">36,27, 43,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,5k</td><td class="crd-td">50,1k</td></tr>
<tr><td class="crd-td"><strong>Sheladize</strong></td><td class="crd-td">37,03, 43,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qasrok</strong></td><td class="crd-td">36,7, 43,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">46,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rizkārī</strong></td><td class="crd-td">37,11, 42,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,8k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Shūrash</strong></td><td class="crd-td">35,52, 44,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,7k</td><td class="crd-td">30,4k</td></tr>
<tr><td class="crd-td"><strong>Bardarash</strong></td><td class="crd-td">35,42, 45,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22k</td><td class="crd-td">41,8k</td></tr>
<tr><td class="crd-td"><strong>Ainkāwah</strong></td><td class="crd-td">36,23, 43,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,9k</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Ba'shīqah</strong></td><td class="crd-td">36,45, 43,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,1k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Pīrmām</strong></td><td class="crd-td">36,39, 44,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Baghdīdā</strong></td><td class="crd-td">36,27, 43,38</td><td class="crd-td">6,8k</td><td class="crd-td">13,4k</td><td class="crd-td">-</td><td class="crd-td">38,5k</td><td class="crd-td">28,3k</td></tr>
<tr><td class="crd-td"><strong>Banjwīn</strong></td><td class="crd-td">35,62, 45,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,7k</td><td class="crd-td">37,3k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shīkhān</strong></td><td class="crd-td">36,72, 44,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,5k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td"><strong>Qūshtabah</strong></td><td class="crd-td">36,01, 44,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,9k</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shīkhān</strong></td><td class="crd-td">36,7, 43,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kifrī</strong></td><td class="crd-td">34,69, 44,96</td><td class="crd-td">5,4k</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">28,6k</td><td class="crd-td">33,8k</td></tr>
<tr><td class="crd-td"><strong>Bīrah Makrūn</strong></td><td class="crd-td">35,73, 45,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Shaqlāwah</strong></td><td class="crd-td">36,4, 44,33</td><td class="crd-td">3,4k</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Harīr</strong></td><td class="crd-td">36,55, 44,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Qasrūk</strong></td><td class="crd-td">36,63, 44,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭakiyah</strong></td><td class="crd-td">35,61, 44,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Zumār</strong></td><td class="crd-td">35,99, 43,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,7k</td><td class="crd-td">22,7k</td></tr>
<tr><td class="crd-td"><strong>Qarah Tabah</strong></td><td class="crd-td">36,1, 45,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Khalīfān</strong></td><td class="crd-td">36,61, 44,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Darkār</strong></td><td class="crd-td">37,2, 42,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,2k</td><td class="crd-td">18,7k</td></tr>
<tr><td class="crd-td"><strong>Barṭallah</strong></td><td class="crd-td">36,35, 43,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Gunde Che</strong></td><td class="crd-td">37,26, 44,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Amedi</strong></td><td class="crd-td">37,09, 43,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Deraluk</strong></td><td class="crd-td">37,05, 43,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pendro</strong></td><td class="crd-td">37,06, 44,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sherkan</strong></td><td class="crd-td">36,32, 43,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Avzrog</strong></td><td class="crd-td">37,02, 42,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Kurdistan highlands and Garmiyan piedmont settlements from 1947AD to 2025AD.</figcaption>
</figure>

## Upper Tigris, Jazīra and Kirkūk Foothills

Table \ref{tab:zone3-north} enumerates 43 settlements across Nīnawā, Kirkūk and Ṣalāḥ ad-Dīn, headed by Al-Mawṣil (1,8M peak in 2008AD; 1,55M in 2025AD), the oil metropolis of Kirkūk (1,27M), Sāmarrā' (348,7k peak in 2003AD), Tikrīt (260k peak in 2002AD) and Tal'afar (181k) [@Anonymous2017Case; @Koush2024Heritage].

<figure class="crd-table-figure" id="tab:zone3-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">1987AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Mawṣil</strong></td><td class="crd-td">36,34, 43,12</td><td class="crd-td">133,6k</td><td class="crd-td">264,1k</td><td class="crd-td">664,2k</td><td class="crd-td">1,14M</td><td class="crd-td">1,55M</td></tr>
<tr><td class="crd-td"><strong>Kirkūk</strong></td><td class="crd-td">35,47, 44,39</td><td class="crd-td">68,3k</td><td class="crd-td">175,3k</td><td class="crd-td">418,6k</td><td class="crd-td">782,1k</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Sāmarrā'</strong></td><td class="crd-td">34,2, 43,89</td><td class="crd-td">7,5k</td><td class="crd-td">24,7k</td><td class="crd-td">-</td><td class="crd-td">119k</td><td class="crd-td">206k</td></tr>
<tr><td class="crd-td"><strong>Tikrīt</strong></td><td class="crd-td">34,62, 43,68</td><td class="crd-td">5,8k</td><td class="crd-td">11,5k</td><td class="crd-td">-</td><td class="crd-td">89,6k</td><td class="crd-td">152,8k</td></tr>
<tr><td class="crd-td"><strong>Tal'afar</strong></td><td class="crd-td">36,38, 42,45</td><td class="crd-td">20k</td><td class="crd-td">36,8k</td><td class="crd-td">-</td><td class="crd-td">144k</td><td class="crd-td">181k</td></tr>
<tr><td class="crd-td"><strong>Ṭūz Khūrmātū</strong></td><td class="crd-td">34,89, 44,63</td><td class="crd-td">7,6k</td><td class="crd-td">16,5k</td><td class="crd-td">-</td><td class="crd-td">84,3k</td><td class="crd-td">122,4k</td></tr>
<tr><td class="crd-td"><strong>Khānaqīn</strong></td><td class="crd-td">34,35, 45,39</td><td class="crd-td">10,1k</td><td class="crd-td">23,5k</td><td class="crd-td">-</td><td class="crd-td">42,1k</td><td class="crd-td">102,9k</td></tr>
<tr><td class="crd-td"><strong>Balad</strong></td><td class="crd-td">34,01, 44,15</td><td class="crd-td">5,2k</td><td class="crd-td">12,9k</td><td class="crd-td">-</td><td class="crd-td">49,3k</td><td class="crd-td">70,5k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shirqāṭ</strong></td><td class="crd-td">35,53, 43,22</td><td class="crd-td">3,6k</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">44,9k</td><td class="crd-td">68,3k</td></tr>
<tr><td class="crd-td"><strong>Baījī</strong></td><td class="crd-td">34,93, 43,49</td><td class="crd-td">2,5k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">68,2k</td><td class="crd-td">62,5k</td></tr>
<tr><td class="crd-td"><strong>Jalawlā'</strong></td><td class="crd-td">34,27, 45,17</td><td class="crd-td">-</td><td class="crd-td">14,5k</td><td class="crd-td">-</td><td class="crd-td">50,7k</td><td class="crd-td">64,8k</td></tr>
<tr><td class="crd-td"><strong>'Az Aldīn Salīm</strong></td><td class="crd-td">34,06, 44,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,2k</td><td class="crd-td">59,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥadīṭha</strong></td><td class="crd-td">34,14, 42,38</td><td class="crd-td">5,1k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">37,7k</td><td class="crd-td">56,8k</td></tr>
<tr><td class="crd-td"><strong>Dāqūq</strong></td><td class="crd-td">35,14, 44,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ishaqi Nahia</strong></td><td class="crd-td">34,28, 43,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kūthā</strong></td><td class="crd-td">34,08, 44,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,7k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawījah</strong></td><td class="crd-td">35,33, 43,77</td><td class="crd-td">2,4k</td><td class="crd-td">9,5k</td><td class="crd-td">-</td><td class="crd-td">36,8k</td><td class="crd-td">39,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawījah</strong></td><td class="crd-td">34,02, 44,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">36,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ash-Shāfī</strong></td><td class="crd-td">34,31, 44,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaīrawān</strong></td><td class="crd-td">36,4, 43,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">35k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Altūn Kūbrī</strong></td><td class="crd-td">35,75, 44,15</td><td class="crd-td">3,6k</td><td class="crd-td">7,8k</td><td class="crd-td">-</td><td class="crd-td">23,1k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dibs</strong></td><td class="crd-td">35,67, 44,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,1k</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>Talkayf</strong></td><td class="crd-td">36,49, 43,12</td><td class="crd-td">7,2k</td><td class="crd-td">12,4k</td><td class="crd-td">-</td><td class="crd-td">29,2k</td><td class="crd-td">26,3k</td></tr>
<tr><td class="crd-td"><strong>Makhmūr</strong></td><td class="crd-td">35,78, 43,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,1k</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td"><strong>Al-'Alam</strong></td><td class="crd-td">34,71, 43,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Al-Mūwafaqiyah</strong></td><td class="crd-td">36,36, 43,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Barwānah</strong></td><td class="crd-td">34,1, 42,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Aḍ-Ḍulū'īah</strong></td><td class="crd-td">34,03, 44,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawr</strong></td><td class="crd-td">34,46, 43,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,8k</td><td class="crd-td">24,2k</td></tr>
<tr><td class="crd-td"><strong>Ḥamām al-'Alīl</strong></td><td class="crd-td">36,16, 43,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,9k</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>Tāzah Khūrmātū</strong></td><td class="crd-td">35,3, 44,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Qayārah</strong></td><td class="crd-td">35,8, 43,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rabī'ah</strong></td><td class="crd-td">36,8, 42,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,6k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Qarah Tabah</strong></td><td class="crd-td">34,43, 44,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Az-Zāb</strong></td><td class="crd-td">35,26, 43,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Haqlaniyah</strong></td><td class="crd-td">34,09, 42,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Samrah</strong></td><td class="crd-td">34,74, 43,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Owaynat</strong></td><td class="crd-td">34,48, 43,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>ar Rubaydha</strong></td><td class="crd-td">34,8, 43,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Injanah</strong></td><td class="crd-td">34,54, 44,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hardan</strong></td><td class="crd-td">36,48, 42,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Abu Fishkah</strong></td><td class="crd-td">36,05, 43,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Khanak</strong></td><td class="crd-td">34,71, 43,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Upper Tigris, Jazīra and Kirkūk foothill settlements from 1947AD to 2025AD.</figcaption>
</figure>

## Middle Euphrates, Al-Anbār and Wāsiṭ

Table \ref{tab:zone4-mideuphrates} spans 51 centres across the Euphrates valley and central irrigation plains, anchored by Ar-Ramādī (874,5k peak in 2005AD; 299,3k in 2025AD), the shrine cities of An-Najaf (842,4k) and Karbalā' (795,3k), Al-Ḥillah (541k peak in 2015AD; 477,6k in 2025AD), Tigris agricultural hub Al-Kūt (513,2k) and Al-Fallūjah (312,8k) [@Cetorelli2014Effect; @Diwakar2019Violent].

<figure class="crd-table-figure" id="tab:zone4-mideuphrates">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">1987AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ar-Ramādī</strong></td><td class="crd-td">33,42, 43,31</td><td class="crd-td">5,2k</td><td class="crd-td">11,4k</td><td class="crd-td">192,6k</td><td class="crd-td">181,3k</td><td class="crd-td">299,3k</td></tr>
<tr><td class="crd-td"><strong>An-Najaf</strong></td><td class="crd-td">32,03, 44,35</td><td class="crd-td">56,3k</td><td class="crd-td">134k</td><td class="crd-td">309k</td><td class="crd-td">617,1k</td><td class="crd-td">842,4k</td></tr>
<tr><td class="crd-td"><strong>Karbalā'</strong></td><td class="crd-td">32,62, 44,02</td><td class="crd-td">44,1k</td><td class="crd-td">83,3k</td><td class="crd-td">296,7k</td><td class="crd-td">395,4k</td><td class="crd-td">795,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥillah</strong></td><td class="crd-td">32,46, 44,42</td><td class="crd-td">36,6k</td><td class="crd-td">84,7k</td><td class="crd-td">268,8k</td><td class="crd-td">373,1k</td><td class="crd-td">477,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Kūt</strong></td><td class="crd-td">32,51, 45,82</td><td class="crd-td">16,2k</td><td class="crd-td">42,1k</td><td class="crd-td">183,2k</td><td class="crd-td">312,6k</td><td class="crd-td">513,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Fallūjah</strong></td><td class="crd-td">33,35, 43,79</td><td class="crd-td">11k</td><td class="crd-td">38,1k</td><td class="crd-td">-</td><td class="crd-td">203,5k</td><td class="crd-td">312,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥur</strong></td><td class="crd-td">32,67, 44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">172,7k</td><td class="crd-td">292,9k</td></tr>
<tr><td class="crd-td"><strong>Kufa</strong></td><td class="crd-td">32,03, 44,4</td><td class="crd-td">13,7k</td><td class="crd-td">30,5k</td><td class="crd-td">-</td><td class="crd-td">141,5k</td><td class="crd-td">151,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Qā'im</strong></td><td class="crd-td">34,39, 40,99</td><td class="crd-td">2,8k</td><td class="crd-td">9,2k</td><td class="crd-td">-</td><td class="crd-td">60,1k</td><td class="crd-td">88,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Hindiyah</strong></td><td class="crd-td">32,54, 44,22</td><td class="crd-td">8,2k</td><td class="crd-td">16,4k</td><td class="crd-td">-</td><td class="crd-td">69,5k</td><td class="crd-td">141,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Musayab</strong></td><td class="crd-td">32,78, 44,29</td><td class="crd-td">7,9k</td><td class="crd-td">18,5k</td><td class="crd-td">-</td><td class="crd-td">46,9k</td><td class="crd-td">103,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Qāsim</strong></td><td class="crd-td">32,3, 44,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">66,7k</td><td class="crd-td">94,9k</td></tr>
<tr><td class="crd-td"><strong>An-Nu'māniyah</strong></td><td class="crd-td">32,56, 45,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">57k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥay</strong></td><td class="crd-td">32,17, 46,04</td><td class="crd-td">8,4k</td><td class="crd-td">17k</td><td class="crd-td">-</td><td class="crd-td">68,6k</td><td class="crd-td">84,5k</td></tr>
<tr><td class="crd-td"><strong>'Afak</strong></td><td class="crd-td">32,06, 45,25</td><td class="crd-td">3,2k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">29,2k</td><td class="crd-td">39,9k</td></tr>
<tr><td class="crd-td"><strong>Hīt</strong></td><td class="crd-td">33,64, 42,83</td><td class="crd-td">7,4k</td><td class="crd-td">13,2k</td><td class="crd-td">-</td><td class="crd-td">54,1k</td><td class="crd-td">71k</td></tr>
<tr><td class="crd-td"><strong>Az-Zubaīdiyah</strong></td><td class="crd-td">32,76, 45,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16k</td><td class="crd-td">31,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Madḥatiyah</strong></td><td class="crd-td">32,4, 44,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">48,7k</td><td class="crd-td">63,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Manādhirah</strong></td><td class="crd-td">31,91, 44,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,2k</td><td class="crd-td">62k</td></tr>
<tr><td class="crd-td"><strong>An-Naṣr</strong></td><td class="crd-td">32,33, 44,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,7k</td><td class="crd-td">60,9k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shāmiyah</strong></td><td class="crd-td">31,96, 44,6</td><td class="crd-td">6,8k</td><td class="crd-td">13,1k</td><td class="crd-td">-</td><td class="crd-td">47,7k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shāmiyah</strong></td><td class="crd-td">32,82, 45,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥabbāniyah</strong></td><td class="crd-td">33,38, 43,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,2k</td><td class="crd-td">49,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaḥṭānyah</strong></td><td class="crd-td">36,2, 41,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ghammās</strong></td><td class="crd-td">31,74, 44,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,5k</td><td class="crd-td">40,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥusayniyah</strong></td><td class="crd-td">32,67, 44,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Ba'āj</strong></td><td class="crd-td">36,04, 41,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,3k</td><td class="crd-td">35,9k</td></tr>
<tr><td class="crd-td"><strong>Saddat al-Hindiyah</strong></td><td class="crd-td">32,72, 44,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Abī Gharaq</strong></td><td class="crd-td">32,53, 44,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">35,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥāwīl</strong></td><td class="crd-td">32,66, 44,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,5k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Sinjār</strong></td><td class="crd-td">36,32, 41,88</td><td class="crd-td">4,8k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">33,9k</td><td class="crd-td">26,6k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruṭbah</strong></td><td class="crd-td">33,04, 40,29</td><td class="crd-td">2,2k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">23k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Mishkhāb</strong></td><td class="crd-td">31,8, 44,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,3k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Kifl</strong></td><td class="crd-td">32,23, 44,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,7k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>'Aīn at-Tamur</strong></td><td class="crd-td">32,57, 43,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-'Abāsiyah</strong></td><td class="crd-td">32,08, 44,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,8k</td><td class="crd-td">26,7k</td></tr>
<tr><td class="crd-td"><strong>Ad-Daghārah</strong></td><td class="crd-td">32,14, 44,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,9k</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td"><strong>'Alī al-Gharbī</strong></td><td class="crd-td">32,46, 46,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">25,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥīrah</strong></td><td class="crd-td">31,89, 44,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wāsiṭ</strong></td><td class="crd-td">32,38, 45,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,5k</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Shiykh Sa'ad</strong></td><td class="crd-td">32,56, 46,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>'Anah</strong></td><td class="crd-td">34,37, 41,98</td><td class="crd-td">5,8k</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">17k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Degaimah</strong></td><td class="crd-td">34,4, 41,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣaqlāwiyah</strong></td><td class="crd-td">33,4, 43,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Rawa</strong></td><td class="crd-td">34,48, 41,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ash-Shūmaly</strong></td><td class="crd-td">32,33, 44,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>al-Shawafi</strong></td><td class="crd-td">31,99, 44,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>ar Ribut</strong></td><td class="crd-td">34,43, 41,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>al Ubaytir</strong></td><td class="crd-td">32,63, 44,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>as Simmah</strong></td><td class="crd-td">34,44, 41,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Umm Jigayir</strong></td><td class="crd-td">32,58, 45,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Middle Euphrates, Al-Anbār and Wāsiṭ settlements from 1947AD to 2025AD.</figcaption>
</figure>

## Southern Alluvium and Marshland Edge

Table \ref{tab:zone5-south} documents 29 settlements across Dhī Qār, Maysān, Al-Qādisiyyah and Al-Muthannā, led by An-Nāṣiriyah (860,2k peak in 2012AD; 714,9k in 2025AD), Al-'Amārah (677,8k), Ad-Dīwāniyah (401,8k) and As-Samāwah (260,3k), reflecting decades of rural migration off drained marshlands and salinised paddies [@Znad2024Conflicts; @Mamshai2023Climate].

<figure class="crd-table-figure" id="tab:zone5-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">1987AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>An-Nāṣiriyah</strong></td><td class="crd-td">31,06, 46,26</td><td class="crd-td">24k</td><td class="crd-td">59,3k</td><td class="crd-td">265,9k</td><td class="crd-td">455,7k</td><td class="crd-td">714,9k</td></tr>
<tr><td class="crd-td"><strong>Al-'Amārah</strong></td><td class="crd-td">31,84, 47,14</td><td class="crd-td">26,9k</td><td class="crd-td">64,7k</td><td class="crd-td">208,8k</td><td class="crd-td">428,8k</td><td class="crd-td">677,8k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dīwāniyah</strong></td><td class="crd-td">31,99, 44,93</td><td class="crd-td">19,9k</td><td class="crd-td">60,6k</td><td class="crd-td">196,5k</td><td class="crd-td">332,1k</td><td class="crd-td">401,8k</td></tr>
<tr><td class="crd-td"><strong>Az-Zubayr</strong></td><td class="crd-td">31,18, 46,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">244,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>As-Samāwah</strong></td><td class="crd-td">31,33, 45,29</td><td class="crd-td">15,3k</td><td class="crd-td">33,5k</td><td class="crd-td">-</td><td class="crd-td">179,1k</td><td class="crd-td">260,3k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shaṭrah</strong></td><td class="crd-td">31,41, 46,17</td><td class="crd-td">10,2k</td><td class="crd-td">18,8k</td><td class="crd-td">-</td><td class="crd-td">148,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sūq ash-Shuyūkh</strong></td><td class="crd-td">30,89, 46,45</td><td class="crd-td">9,8k</td><td class="crd-td">16,6k</td><td class="crd-td">-</td><td class="crd-td">107,4k</td><td class="crd-td">145,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Qurnah</strong></td><td class="crd-td">31,02, 47,43</td><td class="crd-td">4,8k</td><td class="crd-td">12,6k</td><td class="crd-td">-</td><td class="crd-td">102,9k</td><td class="crd-td">136,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Majar al-Kabīr</strong></td><td class="crd-td">31,68, 47,2</td><td class="crd-td">4,9k</td><td class="crd-td">13,5k</td><td class="crd-td">-</td><td class="crd-td">76,4k</td><td class="crd-td">109,1k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rifā'ī</strong></td><td class="crd-td">31,7, 46,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ṭalḥah</strong></td><td class="crd-td">30,98, 47,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,1k</td><td class="crd-td">83,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Midaīnah</strong></td><td class="crd-td">30,96, 47,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qal'at Sikar</strong></td><td class="crd-td">31,86, 46,07</td><td class="crd-td">4,6k</td><td class="crd-td">11,4k</td><td class="crd-td">-</td><td class="crd-td">43,6k</td><td class="crd-td">73,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Gharrāf</strong></td><td class="crd-td">31,3, 46,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">39,6k</td><td class="crd-td">61k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawāyah</strong></td><td class="crd-td">31,49, 46,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Fuhūd</strong></td><td class="crd-td">30,97, 46,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,1k</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Jibāyish</strong></td><td class="crd-td">30,97, 47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Khiḍir</strong></td><td class="crd-td">31,21, 45,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Fajr</strong></td><td class="crd-td">31,92, 45,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,4k</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Qal'at Ṣāliḥ</strong></td><td class="crd-td">31,53, 47,29</td><td class="crd-td">5,2k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">31k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥaydariyah</strong></td><td class="crd-td">31,31, 45,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,2k</td><td class="crd-td">33,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Kaḥlā'</strong></td><td class="crd-td">31,67, 47,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,2k</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Baṭḥā'a</strong></td><td class="crd-td">31,13, 45,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,1k</td><td class="crd-td">30,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Budaīr</strong></td><td class="crd-td">31,86, 45,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,3k</td><td class="crd-td">29,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Maīmūnah</strong></td><td class="crd-td">31,68, 46,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,2k</td><td class="crd-td">28,4k</td></tr>
<tr><td class="crd-td"><strong>Karmat Banī Sa'īd</strong></td><td class="crd-td">30,91, 46,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k</td><td class="crd-td">25,1k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rashīd</strong></td><td class="crd-td">30,88, 46,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,3k</td><td class="crd-td">23,9k</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣaqlāwiyah</strong></td><td class="crd-td">31,25, 45,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al-Iṣlāḥ</strong></td><td class="crd-td">31,17, 46,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13k</td><td class="crd-td">18,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Southern alluvium and marshland-edge settlements from 1947AD to 2025AD.</figcaption>
</figure>

## Al-Baṣrah and the Shatt al-Arab Littoral

Table \ref{tab:zone6-basra} lists 11 port, oil-terminal and border-gateway centres in Al-Baṣrah governorate, led by Al-Baṣrah city (1,33M peak in 2018AD; 1,31M in 2025AD), Az-Zubayr (370k peak in 2014AD), Abū al-Khaṣīb (362,8k) and the deepwater port of Umm Qaṣr (71k) [@Lorenz2013Strategic].

<figure class="crd-table-figure" id="tab:zone6-basra">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">1987AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Baṣrah</strong></td><td class="crd-td">30,51, 47,78</td><td class="crd-td">101,5k</td><td class="crd-td">310,9k</td><td class="crd-td">406,3k</td><td class="crd-td">995,9k</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Az-Zubayr</strong></td><td class="crd-td">30,39, 47,7</td><td class="crd-td">17,9k</td><td class="crd-td">41,4k</td><td class="crd-td">-</td><td class="crd-td">244,9k</td><td class="crd-td">356,1k</td></tr>
<tr><td class="crd-td"><strong>Abū al-Kahṣīb</strong></td><td class="crd-td">30,44, 47,88</td><td class="crd-td">8,5k</td><td class="crd-td">17,5k</td><td class="crd-td">-</td><td class="crd-td">165,1k</td><td class="crd-td">362,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Hārithah</strong></td><td class="crd-td">30,58, 47,76</td><td class="crd-td">4,2k</td><td class="crd-td">12,4k</td><td class="crd-td">-</td><td class="crd-td">95,7k</td><td class="crd-td">140,7k</td></tr>
<tr><td class="crd-td"><strong>Umm Qaṣr</strong></td><td class="crd-td">30,04, 47,92</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">40,5k</td><td class="crd-td">53,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Fāw</strong></td><td class="crd-td">29,97, 48,47</td><td class="crd-td">5,4k</td><td class="crd-td">18,2k</td><td class="crd-td">-</td><td class="crd-td">29,2k</td><td class="crd-td">36,3k</td></tr>
<tr><td class="crd-td"><strong>Ad-Daīr</strong></td><td class="crd-td">30,8, 47,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,4k</td><td class="crd-td">54,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Karmah</strong></td><td class="crd-td">30,57, 47,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">46,7k</td></tr>
<tr><td class="crd-td"><strong>Safwān</strong></td><td class="crd-td">30,12, 47,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Kardalan</strong></td><td class="crd-td">30,53, 47,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Saihan</strong></td><td class="crd-td">30,32, 48,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Al-Baṣrah and Shatt al-Arab littoral settlements from 1947AD to 2025AD.</figcaption>
</figure>

# Limitations

Three evidentiary constraints shape these urban series. First, while major provincial capitals preserve continuous COSIT census series from 1947AD through 1987AD, smaller secondary and district towns entered national registers only in later enumerations (2003AD, 2009AD or 2015AD), marked by hyphens in earlier benchmark columns. Second, the exclusion of Arbīl, As-Sulaymāniyah and Dahūk from the 1997AD national census and the 27-year hiatus prior to November 2024 mean that post-1990 urban curves blend civil-registry ration-frame counts with 2009AD and 2024AD district estimates [@Romano2007Refugee; @Mansour2023Iraq]. Third, continuous suburban sprawl along the margins of Baghdād, Al-Baṣrah and Arbīl blurs municipal boundaries between core urban rings and newly incorporated satellite townships.

# Conclusion

From the 1947AD census through 2025AD, Iraq's 222 catalogued settlements grew from 1,47M enumerated urban inhabitants to 29,25M in 2025AD while preserving a steep primate hierarchy ($\alpha = 1{,}303$, $R^2 = 0{,}786$) anchored by Baghdād (8,13M peak; 7,95M in 2025AD). Despite severe wartime shocks along the Shatt al-Arab, northern Kurdish valleys, the southern marshes and the Upper Tigris corridor, sustained high fertility [@Cetorelli2014Effect] and rural-to-urban migration drove rapid expansion across every tier of Iraqi cities and provincial towns.

# Appendix

## Regional Urban Summary across Six Geographical Belts

Table \ref{tab:gaz-summary} aggregates settlement counts and combined urban population across all six Iraqi zones from 1947AD to 2025AD.

<figure class="crd-table-figure" id="tab:gaz-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Geographical Belt (Centres)</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th><th class="crd-th">2025AD Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Baghdād Metro &amp; Lower Diyālā (31)</strong></td><td class="crd-td">556,8k</td><td class="crd-td">1,64M</td><td class="crd-td">6,52M</td><td class="crd-td">9,32M</td><td class="crd-td">31,9%</td></tr>
<tr><td class="crd-td"><strong>2. Kurdistan Highlands &amp; Garmiyan (57)</strong></td><td class="crd-td">127,8k</td><td class="crd-td">307k</td><td class="crd-td">3,36M</td><td class="crd-td">5,14M</td><td class="crd-td">17,6%</td></tr>
<tr><td class="crd-td"><strong>3. Upper Tigris, Jazīra &amp; Kirkūk (43)</strong></td><td class="crd-td">282,5k</td><td class="crd-td">637,8k</td><td class="crd-td">3,08M</td><td class="crd-td">4,36M</td><td class="crd-td">14,9%</td></tr>
<tr><td class="crd-td"><strong>4. Middle Euphrates, Al-Anbār &amp; Wāsiṭ (51)</strong></td><td class="crd-td">240,6k</td><td class="crd-td">545k</td><td class="crd-td">3,53M</td><td class="crd-td">5,04M</td><td class="crd-td">17,2%</td></tr>
<tr><td class="crd-td"><strong>5. Southern Alluvium &amp; Marshes (29)</strong></td><td class="crd-td">125,6k</td><td class="crd-td">301,7k</td><td class="crd-td">2,59M</td><td class="crd-td">3,02M</td><td class="crd-td">10,3%</td></tr>
<tr><td class="crd-td"><strong>6. Al-Baṣrah &amp; Shatt al-Arab (11)</strong></td><td class="crd-td">137,5k</td><td class="crd-td">406,3k</td><td class="crd-td">1,63M</td><td class="crd-td">2,39M</td><td class="crd-td">8,2%</td></tr>
<tr><td class="crd-td"><strong>All Six Zones (222)</strong></td><td class="crd-td">1,47M</td><td class="crd-td">3,84M</td><td class="crd-td">20,71M</td><td class="crd-td">29,25M</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Aggregate population of the 222 catalogued Iraqi settlements across six geographical belts from 1947AD to 2025AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

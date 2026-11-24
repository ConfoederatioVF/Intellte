---
title: "Iran after 1925"
subtitle: "Settlement Gazetteer of 26.392 Iranian Cities and Villages, 1925AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: modern_iran_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_modern_iran_spatial.png"
hero_caption: "Spatial distribution of 26.392 catalogued SCI Iranian cities and villages across 31 ostans from 1925AD to 2026AD, contrasting metropolitan corridors against plateau oases."
hero_label: "fig:hero-modern-iran"

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



```{=latex}
\emergencystretch=1.5em
```

# Abstract

Between 1925AD and 2025AD, Iran shifted from an overwhelmingly rural society of scattered oasis towns into a densely urbanised nation whose leading cities absorb the majority of the national population. Across all 26.392 Statistical Centre of Iran (SCI) cities, towns and enumerated rural villages catalogued in this gazetteer, documented census populations extend from major provincial metropolises down to rural settlements of 264–500 inhabitants, totalling 2,43M across 1925AD urban baselines, 34,1M in 1996AD, 80,22M at the 2016AD census and 91,97M across projected 2025AD municipal series (with a combined peak sum of 92,87M). By 2025AD, nine cities exceeded 1M residents - Tehrān (9,86M), Mashhad (3,4M), Eṣfahān (2,22M), Karaj (1,81M), Shīrāz (1,78M), Tabrīz (1,77M), Qom (1,36M), Ahvāz (1,34M) and Kermānshāh (1,07M) - alongside 19 centres above 500k, conforming to a tight rank-size hierarchy ($\alpha = 1{,}369$, $R^2 = 0{,}994$). Organised across 31 ostans and six geographical macro-belts via polygon containment, this gazetteer records coordinates, provincial assignments and benchmark populations across Iran's plateau capitals, industrial ports, Tehran dormitory satellites and rural village lattice.

# Background

When the Pahlavi state consolidated authority in 1925AD, Iran's urban hierarchy still bore the imprint of Qajar caravan routes and regional agrarian basins. Only Tehrān (252k), Tabrīz (212k), Mashhad (105k), Eṣfahān (96k) and Shīrāz (75k) formed substantial regional hubs, while most provincial towns served as small administrative bazaars of ten to fifty thousand inhabitants. Over the following century, centralising railway construction, Khuzestan petroleum extraction, post-1956AD mortality decline, the 1963AD White Revolution land reform and post-1973AD oil spending unleashed sustained rural-to-urban migration [@Annamoradnejad2024Influentia; @Danaei2019Iran].

Urban growth accelerated further during the 1980-1988 Iran-Iraq War, when displaced households from Khoramshahr, Ābādān and border counties fled eastward and Afghan refugees settled heavily in Mashhad, Zāhedān, Qom and Tehran [@Annamoradnejad2024Influentia; @Erfani2011Fertility]. Even after Iran's rapid post-1989AD fertility transition lowered national population growth [@Simbar2012Achievemen; @Bank2010Fertility], urban expansion continued through peri-urban land subdivision, suburban housing estates and environmental displacement from drought-stricken agricultural basins around Lake Urmia and Khuzestan [@Berlin2018Drivers; @Hosseini2018Drivers; @Talebi2025Water].



# Methodology

This gazetteer compiles all 26.392 included Iranian cities, towns and enumerated villages from Statistical Centre of Iran (SCI) municipal and rural census tables covering 1956AD to 2016AD, supplemented by interwar urban registries (1940AD urban counts and Bharier 1930AD benchmarks) anchored to 1925AD and vital-registration projections to 2025AD [@Annamoradnejad2024Influentia; @Bahramnezhad2016Review]. During source-ledger auditing across 45.281 official SCI rows processed in bounds, duplicate-alias and co-located suburban entries were excluded, leaving 26.392 continuously reconciled localities extending down to a census floor of 264–500 inhabitants. Every settlement retains BGN/PCGN scholarly romanisation with macrons and underdots (*Tehrān*, *Eṣfahān*, *Shīrāz*, *Tabrīz*, *Orūmīyeh*, *Bandar-e 'Abās*), omitting Perso-Arabic script from printed tables to prevent missing-glyph artefacts in XeLaTeX.

To prevent anachronistic back-projection on twentieth-century industrial towns, metropolitan satellites and recently incorporated municipalities, settlements with documented modern foundations enforce explicit foundation-year bounds—including Khoramshahr (1812AD), Ābādān (1909AD), Karaj (1920AD), Bandar-e Emām Khomeynī (1929AD), Shīrvān (1938AD), Bandar-e Māhshahr (1945AD), Shahrīār (1953AD), Eslāmshahr (1975AD), Qods (1989AD) and Balavah (2013AD). Each locality is dynamically assigned at runtime to its encompassing ostan among the 31 provincial vector boundaries via ray-casting point-in-polygon matching, harmonised with the 379 geoBoundaries second-order (*shahrestan*) census polygons [@Runfola2020GeoBoundaries]. For regional presentation, the 31 ostans are grouped into six geographical macro-belts: Tehran, Alborz and Central Core, Caspian Littoral, Northwestern Azarbaijan and Zagros, Khuzestan and Persian Gulf Littoral, Central Plateau and Fars, and Khorasan and Southeastern Frontier.

# Testing and Validation

Figure \ref{fig:modern-iran-settlements} evaluates the structural consistency of the 26.392-locality gazetteer via a log-log rank-size plot and a ranking of Iran's twelve largest cities. Across all 26.392 settlements (well above the n >= 25 sample threshold), ordinary least-squares regression of log population against log rank returns a Zipf slope of $\alpha = 1{,}369$ and $R^2 = 0{,}994$. This near-perfect log-linear fit reflects Iran's balanced multi-tiered settlement distribution linking Tehran's metropolitan primacy (9,86M vs 3,4M in Mashhad) through regional provincial capitals down to thousands of enumerated plateau, Caspian and Zagros villages [@Mousavi2025Introducin].

<figure class="crd-figure-block" id="fig:modern-iran-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iran-settlements/fig4_modern_iran_settlements.png" alt="fig:modern-iran-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 26.392 catalogued Iranian cities and villages and peak populations of the twelve leading centres in 2025AD.</figcaption>
</figure>

Coverage rises smoothly over the century as rural-to-urban migration, village enumeration and new satellite incorporation bring larger shares of Iran's population inside the catalogued census layer (2,43M in 1925AD, 34,1M in 1996AD, 80,22M in 2016AD and 91,97M across projected 2025AD municipal trajectories). Provincial-level cross-checks against national mortality and urban-sprawl studies confirm that the sharpest post-1976AD municipal jumps occur precisely in the Tehran-Karaj-Qods commuter arc, northern Khorasan and Gulf port corridors [@Khosravi2007Differenti; @Mehriar2019Urban; @PARSIPOUR2019Cities].

# Results

Table \ref{tab:macro-summary} aggregates all 26.392 catalogued SCI cities and villages across Iran's six geographical macro-belts at 1925AD, 1996AD, 2016AD and 2025AD. The Central Core around Tehran, Alborz, Qom, Qazvin, Markazi and Semnan holds by far the largest urban mass (24,61M), followed by the Northwestern Azarbaijan and Zagros belt (21,69M) and the Central Plateau and Fars (17,79M).

<figure class="crd-table-figure" id="tab:macro-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Belt</th><th class="crd-th">Ostans</th><th class="crd-th">Localities</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2016AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehran, Alborz and Central Core</strong></td><td class="crd-td">6</td><td class="crd-td">2.322</td><td class="crd-td">464,5k</td><td class="crd-td">11,41M</td><td class="crd-td">21,09M</td><td class="crd-td">24,61M</td></tr>
<tr><td class="crd-td"><strong>Caspian Littoral</strong></td><td class="crd-td">3</td><td class="crd-td">2.637</td><td class="crd-td">225,8k</td><td class="crd-td">2,3M</td><td class="crd-td">6,85M</td><td class="crd-td">7,81M</td></tr>
<tr><td class="crd-td"><strong>Northwestern Azarbaijan and Zagros</strong></td><td class="crd-td">9</td><td class="crd-td">9.335</td><td class="crd-td">703,9k</td><td class="crd-td">7,41M</td><td class="crd-td">19,16M</td><td class="crd-td">21,69M</td></tr>
<tr><td class="crd-td"><strong>Khuzestan and Persian Gulf Littoral</strong></td><td class="crd-td">3</td><td class="crd-td">2.750</td><td class="crd-td">203,1k</td><td class="crd-td">2,96M</td><td class="crd-td">7,34M</td><td class="crd-td">8,31M</td></tr>
<tr><td class="crd-td"><strong>Central Plateau and Fars</strong></td><td class="crd-td">6</td><td class="crd-td">5.177</td><td class="crd-td">560k</td><td class="crd-td">6,12M</td><td class="crd-td">15,42M</td><td class="crd-td">17,79M</td></tr>
<tr><td class="crd-td"><strong>Khorasan and Southeastern Frontier</strong></td><td class="crd-td">4</td><td class="crd-td">4.171</td><td class="crd-td">275,4k</td><td class="crd-td">3,9M</td><td class="crd-td">10,37M</td><td class="crd-td">11,76M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Distribution of all 26.392 catalogued SCI cities and villages across six Iranian geographical macro-belts at 1925AD, 1996AD, 2016AD and 2025AD.</figcaption>
</figure>

## Tehran, Alborz and the Central Piedmont

Spanning Tehran, Alborz, Qom, Qazvin, Markazi and Semnan, the central piedmont corridor (24,61M in 2025AD municipal trajectories; Table \ref{tab:belt-central}) is Iran's metropolitan core. Beyond Tehrān (9,86M, up from 252k in 1925AD) and Qom (1,36M, up from 36,5k), its defining feature is explosive satellite suburbanisation west and south of the capital: Karaj surged from 4,2k in 1925AD and 14,5k in 1956AD to 1,81M, while Eslāmshahr (508,3k), Shahrīār (351,2k), Qods (351,2k), Malārd (318,8k) and Pākdasht absorb commuter overflow along highway corridors [@Berlin2018Drivers; @Erfani2015Family]. Industrial centres at Arāk (590,9k) and Qazvīn (456,8k) anchor the western flank toward the Zagros passes.

<figure class="crd-table-figure" id="tab:belt-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Coords</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehrān</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,69, 51,42</td><td class="crd-td">252k</td><td class="crd-td">6,76M</td><td class="crd-td">9,86M</td><td class="crd-td">9,86M</td></tr>
<tr><td class="crd-td"><strong>Karaj</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,83, 50,99</td><td class="crd-td">4,2k</td><td class="crd-td">941k</td><td class="crd-td">1,81M</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Qom</strong></td><td class="crd-td">Qom</td><td class="crd-td">34,64, 50,88</td><td class="crd-td">36,5k</td><td class="crd-td">777,7k</td><td class="crd-td">1,36M</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Arāk</strong></td><td class="crd-td">Markazi</td><td class="crd-td">34,09, 49,7</td><td class="crd-td">33,2k</td><td class="crd-td">388,2k</td><td class="crd-td">590,9k</td><td class="crd-td">590,9k</td></tr>
<tr><td class="crd-td"><strong>Eslāmshahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,55, 51,24</td><td class="crd-td">-</td><td class="crd-td">265,4k</td><td class="crd-td">508,3k</td><td class="crd-td">508,3k</td></tr>
<tr><td class="crd-td"><strong>Qazvīn</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,27, 50</td><td class="crd-td">45,5k</td><td class="crd-td">291,1k</td><td class="crd-td">456,8k</td><td class="crd-td">456,8k</td></tr>
<tr><td class="crd-td"><strong>Ray</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,6, 51,43</td><td class="crd-td">-</td><td class="crd-td">250k</td><td class="crd-td">351,8k</td><td class="crd-td">351,8k</td></tr>
<tr><td class="crd-td"><strong>Shahrīār</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,66, 51,06</td><td class="crd-td">-</td><td class="crd-td">45,5k</td><td class="crd-td">351,2k</td><td class="crd-td">351,2k</td></tr>
<tr><td class="crd-td"><strong>Qods</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,72, 51,11</td><td class="crd-td">-</td><td class="crd-td">138,3k</td><td class="crd-td">351,2k</td><td class="crd-td">351,2k</td></tr>
<tr><td class="crd-td"><strong>Malārd</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,67, 50,98</td><td class="crd-td">-</td><td class="crd-td">88,1k</td><td class="crd-td">318,8k</td><td class="crd-td">318,8k</td></tr>
<tr><td class="crd-td"><strong>Golestān</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,52, 51,18</td><td class="crd-td">-</td><td class="crd-td">112,6k</td><td class="crd-td">271,7k</td><td class="crd-td">271,7k</td></tr>
<tr><td class="crd-td"><strong>Pākdasht</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,48, 51,68</td><td class="crd-td">-</td><td class="crd-td">49,2k</td><td class="crd-td">268,1k</td><td class="crd-td">268,1k</td></tr>
<tr><td class="crd-td"><strong>Qarchak</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,43, 51,58</td><td class="crd-td">-</td><td class="crd-td">142,7k</td><td class="crd-td">262,1k</td><td class="crd-td">262,1k</td></tr>
<tr><td class="crd-td"><strong>Varāmīn</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,32, 51,65</td><td class="crd-td">7,1k</td><td class="crd-td">107,2k</td><td class="crd-td">255,9k</td><td class="crd-td">255,9k</td></tr>
<tr><td class="crd-td"><strong>Sāveh</strong></td><td class="crd-td">Markazi</td><td class="crd-td">35,02, 50,36</td><td class="crd-td">10,4k</td><td class="crd-td">111,2k</td><td class="crd-td">250,4k</td><td class="crd-td">250,4k</td></tr>
<tr><td class="crd-td"><strong>Nasīm Shahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,57, 51,16</td><td class="crd-td">-</td><td class="crd-td">85,1k</td><td class="crd-td">227,3k</td><td class="crd-td">227,3k</td></tr>
<tr><td class="crd-td"><strong>Naẓar'ābād</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,95, 50,61</td><td class="crd-td">-</td><td class="crd-td">69,3k</td><td class="crd-td">135,6k</td><td class="crd-td">213,4k</td></tr>
<tr><td class="crd-td"><strong>Semnān</strong></td><td class="crd-td">Semnan</td><td class="crd-td">35,58, 53,39</td><td class="crd-td">19,2k</td><td class="crd-td">91k</td><td class="crd-td">210k</td><td class="crd-td">210k</td></tr>
<tr><td class="crd-td"><strong>Fardīs</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,76, 51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">205,5k</td><td class="crd-td">205,5k</td></tr>
<tr><td class="crd-td"><strong>Shāhrūd</strong></td><td class="crd-td">Semnan</td><td class="crd-td">36,42, 54,98</td><td class="crd-td">15,2k</td><td class="crd-td">104,8k</td><td class="crd-td">170,3k</td><td class="crd-td">170,3k</td></tr>
<tr><td class="crd-td"><strong>Kamāl Shahr</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,86, 50,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">160,7k</td><td class="crd-td">160,7k</td></tr>
<tr><td class="crd-td"><strong>Mohammad Shahr</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,76, 50,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">132,8k</td><td class="crd-td">132,8k</td></tr>
<tr><td class="crd-td"><strong>Andīsheh</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,75, 51,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">131,6k</td><td class="crd-td">131,6k</td></tr>
<tr><td class="crd-td"><strong>Robāṭ Karīm</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,48, 51,08</td><td class="crd-td">-</td><td class="crd-td">36,5k</td><td class="crd-td">119,5k</td><td class="crd-td">119,5k</td></tr>
<tr><td class="crd-td"><strong>Pardīs</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,75, 51,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">83,2k</td><td class="crd-td">114,2k</td></tr>
<tr><td class="crd-td"><strong>Parand</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,47, 50,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">110,6k</td><td class="crd-td">110,6k</td></tr>
<tr><td class="crd-td"><strong>Shahrak-e Pardisan</strong></td><td class="crd-td">Qom</td><td class="crd-td">34,56, 50,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">109,5k</td><td class="crd-td">109,5k</td></tr>
<tr><td class="crd-td"><strong>Alvand</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,19, 50,06</td><td class="crd-td">-</td><td class="crd-td">60,8k</td><td class="crd-td">106,4k</td><td class="crd-td">106,4k</td></tr>
<tr><td class="crd-td"><strong>Mohammadiyeh</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,22, 50,18</td><td class="crd-td">-</td><td class="crd-td">28k</td><td class="crd-td">98,4k</td><td class="crd-td">98,4k</td></tr>
<tr><td class="crd-td"><strong>Mehestan</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,99, 50,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">94,6k</td><td class="crd-td">94,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading thirty catalogued settlements in Tehran, Alborz, Qom, Qazvin, Markazi and Semnan ostans, 1925AD to 2025AD.</figcaption>
</figure>

## Caspian Littoral

Along the humid southern Caspian shelf of Gilan, Mazandaran and Golestan, catalogued cities and villages grew from 225,8k in 1925AD urban baselines to 6,85M at the 2016AD census and 7,81M across projected 2025AD urban trajectories (Table \ref{tab:belt-caspian}). Rasht (771,3k), Gorgān (397,8k) and Sārī (351,4k) lead an unusually dense network of agricultural market towns, ports (Bandar-e Anzalī), foothills hubs (Āmol, Bābol, Qā'em Shahr, Gonbad-e Kāvūs) and hundreds of enumerated Caspian rice villages where rapid rural electrification and highway paving turned formerly isolated hamlets into continuous linear ribbons [@SalehiIsfahani2026Rural; @Annamoradnejad2024Influentia].

<figure class="crd-table-figure" id="tab:belt-caspian">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Coords</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rasht</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,28, 49,59</td><td class="crd-td">69k</td><td class="crd-td">417,7k</td><td class="crd-td">771,3k</td><td class="crd-td">771,3k</td></tr>
<tr><td class="crd-td"><strong>Gorgān</strong></td><td class="crd-td">Golestan</td><td class="crd-td">36,84, 54,44</td><td class="crd-td">14,2k</td><td class="crd-td">188,7k</td><td class="crd-td">397,8k</td><td class="crd-td">397,8k</td></tr>
<tr><td class="crd-td"><strong>Sārī</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,56, 53,06</td><td class="crd-td">21,4k</td><td class="crd-td">195,9k</td><td class="crd-td">351,4k</td><td class="crd-td">351,4k</td></tr>
<tr><td class="crd-td"><strong>Bābol</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,55, 52,68</td><td class="crd-td">33,5k</td><td class="crd-td">158,3k</td><td class="crd-td">283,8k</td><td class="crd-td">283,8k</td></tr>
<tr><td class="crd-td"><strong>Āmol</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,47, 52,35</td><td class="crd-td">12,9k</td><td class="crd-td">159,1k</td><td class="crd-td">269,4k</td><td class="crd-td">269,4k</td></tr>
<tr><td class="crd-td"><strong>Qā'em Shahr</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,47, 52,87</td><td class="crd-td">-</td><td class="crd-td">143,3k</td><td class="crd-td">232,5k</td><td class="crd-td">232,5k</td></tr>
<tr><td class="crd-td"><strong>Gonbad-e Kāvūs</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,25, 55,17</td><td class="crd-td">-</td><td class="crd-td">111,3k</td><td class="crd-td">172,3k</td><td class="crd-td">172,3k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Anzalī</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,47, 49,46</td><td class="crd-td">19,8k</td><td class="crd-td">98,5k</td><td class="crd-td">134,5k</td><td class="crd-td">134,5k</td></tr>
<tr><td class="crd-td"><strong>Lāhījān</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,2, 50,01</td><td class="crd-td">15,4k</td><td class="crd-td">53,1k</td><td class="crd-td">114,6k</td><td class="crd-td">114,6k</td></tr>
<tr><td class="crd-td"><strong>Chālūs</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,66, 51,42</td><td class="crd-td">-</td><td class="crd-td">41,3k</td><td class="crd-td">74k</td><td class="crd-td">107,5k</td></tr>
<tr><td class="crd-td"><strong>Behshahr</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,69, 53,55</td><td class="crd-td">7,8k</td><td class="crd-td">72,1k</td><td class="crd-td">107,4k</td><td class="crd-td">107,4k</td></tr>
<tr><td class="crd-td"><strong>Langarūd</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,2, 50,15</td><td class="crd-td">10,3k</td><td class="crd-td">56,6k</td><td class="crd-td">90,1k</td><td class="crd-td">90,1k</td></tr>
<tr><td class="crd-td"><strong>Nekā</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,65, 53,3</td><td class="crd-td">-</td><td class="crd-td">35,2k</td><td class="crd-td">69,2k</td><td class="crd-td">69,2k</td></tr>
<tr><td class="crd-td"><strong>Tonekābon</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,82, 50,87</td><td class="crd-td">6,9k</td><td class="crd-td">33,6k</td><td class="crd-td">62,9k</td><td class="crd-td">62,9k</td></tr>
<tr><td class="crd-td"><strong>Hashtpar</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,8, 48,91</td><td class="crd-td">-</td><td class="crd-td">33,6k</td><td class="crd-td">61,5k</td><td class="crd-td">61,5k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Torkaman</strong></td><td class="crd-td">Golestan</td><td class="crd-td">36,9, 54,07</td><td class="crd-td">-</td><td class="crd-td">38,8k</td><td class="crd-td">61,2k</td><td class="crd-td">61,2k</td></tr>
<tr><td class="crd-td"><strong>Āstārā</strong></td><td class="crd-td">Gilan</td><td class="crd-td">38,43, 48,87</td><td class="crd-td">7,4k</td><td class="crd-td">30,7k</td><td class="crd-td">58,5k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Ali Abad-e Katul</strong></td><td class="crd-td">Golestan</td><td class="crd-td">36,91, 54,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">58,1k</td><td class="crd-td">58,1k</td></tr>
<tr><td class="crd-td"><strong>Nowshahr</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,65, 51,5</td><td class="crd-td">-</td><td class="crd-td">35,1k</td><td class="crd-td">56k</td><td class="crd-td">56k</td></tr>
<tr><td class="crd-td"><strong>Ṣowme'eh Sarā</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,3, 49,32</td><td class="crd-td">-</td><td class="crd-td">29,4k</td><td class="crd-td">53,4k</td><td class="crd-td">53,4k</td></tr>
<tr><td class="crd-td"><strong>Astaneh-ye Ashrafiyeh</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,26, 49,94</td><td class="crd-td">-</td><td class="crd-td">33,5k</td><td class="crd-td">49,7k</td><td class="crd-td">49,7k</td></tr>
<tr><td class="crd-td"><strong>Āzādshahr</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,09, 55,17</td><td class="crd-td">-</td><td class="crd-td">33,1k</td><td class="crd-td">49,6k</td><td class="crd-td">49,6k</td></tr>
<tr><td class="crd-td"><strong>Rūdsar</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,14, 50,29</td><td class="crd-td">-</td><td class="crd-td">34,2k</td><td class="crd-td">43,1k</td><td class="crd-td">47,5k</td></tr>
<tr><td class="crd-td"><strong>Kordkūy</strong></td><td class="crd-td">Golestan</td><td class="crd-td">36,79, 54,11</td><td class="crd-td">-</td><td class="crd-td">26,5k</td><td class="crd-td">45,2k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Fereydūnkenār</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,68, 52,52</td><td class="crd-td">-</td><td class="crd-td">28k</td><td class="crd-td">43,3k</td><td class="crd-td">43,3k</td></tr>
<tr><td class="crd-td"><strong>Kalāleh</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,38, 55,49</td><td class="crd-td">-</td><td class="crd-td">23,6k</td><td class="crd-td">41k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Rāmsar</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,92, 50,65</td><td class="crd-td">-</td><td class="crd-td">29k</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Fūman</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,22, 49,31</td><td class="crd-td">7,2k</td><td class="crd-td">31,3k</td><td class="crd-td">40,7k</td><td class="crd-td">40,7k</td></tr>
<tr><td class="crd-td"><strong>Āq Qalā</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,01, 54,46</td><td class="crd-td">-</td><td class="crd-td">22,2k</td><td class="crd-td">39,8k</td><td class="crd-td">39,8k</td></tr>
<tr><td class="crd-td"><strong>Jūybār</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,64, 52,91</td><td class="crd-td">-</td><td class="crd-td">23,9k</td><td class="crd-td">37,3k</td><td class="crd-td">37,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading thirty catalogued settlements across Gilan, Mazandaran and Golestan ostans along the Caspian littoral, 1925AD to 2025AD.</figcaption>
</figure>

## Northwestern Azarbaijan and Zagros Highlands

Across East Azarbaijan, West Azarbaijan, Ardebil, Zanjan, Kordestan, Kermanshah, Hamadan, Lorestan and Ilam, catalogued cities and villages rose from 703,9k in 1925AD urban baselines to 19,16M in 2016AD and 21,69M in 2025AD municipal trajectories (Table \ref{tab:belt-nw-zagros}). Regional growth concentrated heavily in provincial capitals - Tabrīz (1,77M), Kermānshāh (1,07M), Orūmīyeh (835,1k), Hamadān (628,9k), Ardabīl (600,5k), Zanjān (488,7k), Sanandaj (468,2k) and Khoram Ābād (423,6k) - as upland farmers left rain-fed villages squeezed by land fragmentation and ecological stress around Lake Urmia [@Talebi2025Water; @Lutz2010Demography].

<figure class="crd-table-figure" id="tab:belt-nw-zagros">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Coords</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tabrīz</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,08, 46,29</td><td class="crd-td">212k</td><td class="crd-td">1,19M</td><td class="crd-td">1,77M</td><td class="crd-td">1,77M</td></tr>
<tr><td class="crd-td"><strong>Kermānshāh</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,31, 47,06</td><td class="crd-td">60,5k</td><td class="crd-td">693k</td><td class="crd-td">1,07M</td><td class="crd-td">1,07M</td></tr>
<tr><td class="crd-td"><strong>Orūmīyeh</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">37,55, 45,08</td><td class="crd-td">31,2k</td><td class="crd-td">435,2k</td><td class="crd-td">835,1k</td><td class="crd-td">835,1k</td></tr>
<tr><td class="crd-td"><strong>Hamadān</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,8, 48,51</td><td class="crd-td">64k</td><td class="crd-td">401,3k</td><td class="crd-td">628,9k</td><td class="crd-td">628,9k</td></tr>
<tr><td class="crd-td"><strong>Ardabīl</strong></td><td class="crd-td">Ardebil</td><td class="crd-td">38,25, 48,29</td><td class="crd-td">27,4k</td><td class="crd-td">340,4k</td><td class="crd-td">600,5k</td><td class="crd-td">600,5k</td></tr>
<tr><td class="crd-td"><strong>Zanjān</strong></td><td class="crd-td">Zanjan</td><td class="crd-td">36,68, 48,5</td><td class="crd-td">32,4k</td><td class="crd-td">286,3k</td><td class="crd-td">488,7k</td><td class="crd-td">488,7k</td></tr>
<tr><td class="crd-td"><strong>Sanandaj</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,31, 47</td><td class="crd-td">26,4k</td><td class="crd-td">277,8k</td><td class="crd-td">468,2k</td><td class="crd-td">468,2k</td></tr>
<tr><td class="crd-td"><strong>Khoram Ābād</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,49, 48,36</td><td class="crd-td">13,8k</td><td class="crd-td">272,8k</td><td class="crd-td">423,6k</td><td class="crd-td">423,6k</td></tr>
<tr><td class="crd-td"><strong>Borūjerd</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,9, 48,75</td><td class="crd-td">27,2k</td><td class="crd-td">217,8k</td><td class="crd-td">266,6k</td><td class="crd-td">266,6k</td></tr>
<tr><td class="crd-td"><strong>Marāgheh</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,39, 46,24</td><td class="crd-td">23,4k</td><td class="crd-td">132,3k</td><td class="crd-td">198,8k</td><td class="crd-td">262,6k</td></tr>
<tr><td class="crd-td"><strong>Khūy</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">38,55, 44,95</td><td class="crd-td">29,6k</td><td class="crd-td">148,9k</td><td class="crd-td">225,5k</td><td class="crd-td">225,5k</td></tr>
<tr><td class="crd-td"><strong>Īlām</strong></td><td class="crd-td">Ilam</td><td class="crd-td">33,64, 46,42</td><td class="crd-td">5,8k</td><td class="crd-td">126,3k</td><td class="crd-td">220,1k</td><td class="crd-td">220,1k</td></tr>
<tr><td class="crd-td"><strong>Būkān</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,52, 46,21</td><td class="crd-td">-</td><td class="crd-td">120k</td><td class="crd-td">219,5k</td><td class="crd-td">219,5k</td></tr>
<tr><td class="crd-td"><strong>Malāyer</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,3, 48,82</td><td class="crd-td">17,4k</td><td class="crd-td">144,4k</td><td class="crd-td">193,1k</td><td class="crd-td">193,1k</td></tr>
<tr><td class="crd-td"><strong>Mahābād</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,76, 45,72</td><td class="crd-td">11,6k</td><td class="crd-td">107,8k</td><td class="crd-td">191k</td><td class="crd-td">191k</td></tr>
<tr><td class="crd-td"><strong>Saqqez</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">36,25, 46,27</td><td class="crd-td">9,3k</td><td class="crd-td">115,4k</td><td class="crd-td">187,4k</td><td class="crd-td">187,4k</td></tr>
<tr><td class="crd-td"><strong>Pīrānshahr</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,7, 45,14</td><td class="crd-td">-</td><td class="crd-td">33,8k</td><td class="crd-td">103,8k</td><td class="crd-td">168,4k</td></tr>
<tr><td class="crd-td"><strong>Marīvān</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,52, 46,18</td><td class="crd-td">-</td><td class="crd-td">60,5k</td><td class="crd-td">155k</td><td class="crd-td">155k</td></tr>
<tr><td class="crd-td"><strong>Mīāndūāb</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,97, 46,11</td><td class="crd-td">-</td><td class="crd-td">90,1k</td><td class="crd-td">152,5k</td><td class="crd-td">152,5k</td></tr>
<tr><td class="crd-td"><strong>Marand</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,43, 45,77</td><td class="crd-td">11,2k</td><td class="crd-td">96,4k</td><td class="crd-td">148,4k</td><td class="crd-td">148,4k</td></tr>
<tr><td class="crd-td"><strong>Dūrūd</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,49, 49,06</td><td class="crd-td">-</td><td class="crd-td">88,2k</td><td class="crd-td">138k</td><td class="crd-td">138k</td></tr>
<tr><td class="crd-td"><strong>Salmās</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">38,2, 44,77</td><td class="crd-td">8,2k</td><td class="crd-td">65,4k</td><td class="crd-td">105,3k</td><td class="crd-td">127,9k</td></tr>
<tr><td class="crd-td"><strong>Bāneh</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">36, 45,89</td><td class="crd-td">-</td><td class="crd-td">55,4k</td><td class="crd-td">125k</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Ahar</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,48, 47,07</td><td class="crd-td">10,6k</td><td class="crd-td">78,1k</td><td class="crd-td">114,2k</td><td class="crd-td">114,2k</td></tr>
<tr><td class="crd-td"><strong>Abhar</strong></td><td class="crd-td">Zanjan</td><td class="crd-td">36,15, 49,22</td><td class="crd-td">-</td><td class="crd-td">55,3k</td><td class="crd-td">112,6k</td><td class="crd-td">112,6k</td></tr>
<tr><td class="crd-td"><strong>Mīāneh</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,42, 47,72</td><td class="crd-td">8,4k</td><td class="crd-td">78,1k</td><td class="crd-td">112,3k</td><td class="crd-td">112,3k</td></tr>
<tr><td class="crd-td"><strong>Pārs Ābād</strong></td><td class="crd-td">Ardebil</td><td class="crd-td">39,65, 47,92</td><td class="crd-td">-</td><td class="crd-td">60,5k</td><td class="crd-td">105,9k</td><td class="crd-td">105,9k</td></tr>
<tr><td class="crd-td"><strong>Eslāmābād-e Gharb</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,11, 46,53</td><td class="crd-td">-</td><td class="crd-td">81,6k</td><td class="crd-td">102,7k</td><td class="crd-td">102,7k</td></tr>
<tr><td class="crd-td"><strong>Alīgūdarz</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,4, 49,69</td><td class="crd-td">6,8k</td><td class="crd-td">69,4k</td><td class="crd-td">101,3k</td><td class="crd-td">101,3k</td></tr>
<tr><td class="crd-td"><strong>Kūhdasht</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,53, 47,61</td><td class="crd-td">-</td><td class="crd-td">72,1k</td><td class="crd-td">101,1k</td><td class="crd-td">101,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading thirty catalogued settlements in northwestern Azarbaijan and the northern Zagros highlands, 1925AD to 2025AD.</figcaption>
</figure>

## Khuzestan and the Persian Gulf Littoral

Khuzestan, Bushehr and Hormozgan encompass catalogued cities and villages expanding from 203,1k in 1925AD baselines to 7,34M in 2016AD and 8,31M in 2025AD municipal series (Table \ref{tab:belt-gulf}). Oil refining, maritime trade and post-1988AD reconstruction elevated Ahvāz (1,34M) and Bandar-e 'Abās (597,4k) far above early-century port levels, while Dezfūl (300,3k), Ābādān, Bushehr, Bandar-e Māhshahr and Khoramshahr record the demographic shock of the 1980-1988 war and subsequent petrochemical recovery [@Danaei2019Iran; @Talebi2025Water].

<figure class="crd-table-figure" id="tab:belt-gulf">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Coords</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ahvāz</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,32, 48,68</td><td class="crd-td">15,6k</td><td class="crd-td">805k</td><td class="crd-td">1,34M</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Bandar-e 'Abās</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">27,19, 56,28</td><td class="crd-td">11,6k</td><td class="crd-td">273,6k</td><td class="crd-td">597,4k</td><td class="crd-td">597,4k</td></tr>
<tr><td class="crd-td"><strong>Khoramshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,44, 48,18</td><td class="crd-td">18,6k</td><td class="crd-td">105,6k</td><td class="crd-td">151k</td><td class="crd-td">330,6k</td></tr>
<tr><td class="crd-td"><strong>Dezfūl</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,38, 48,41</td><td class="crd-td">31,2k</td><td class="crd-td">202,6k</td><td class="crd-td">300,3k</td><td class="crd-td">300,3k</td></tr>
<tr><td class="crd-td"><strong>Ābādān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,34, 48,3</td><td class="crd-td">25,4k</td><td class="crd-td">206,1k</td><td class="crd-td">262,6k</td><td class="crd-td">294,1k</td></tr>
<tr><td class="crd-td"><strong>Būshehr</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">28,97, 50,84</td><td class="crd-td">22,4k</td><td class="crd-td">143,6k</td><td class="crd-td">253,5k</td><td class="crd-td">253,5k</td></tr>
<tr><td class="crd-td"><strong>Andīmeshk</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,46, 48,35</td><td class="crd-td">-</td><td class="crd-td">106,9k</td><td class="crd-td">153,3k</td><td class="crd-td">240,1k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Māhshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,56, 49,19</td><td class="crd-td">-</td><td class="crd-td">88,4k</td><td class="crd-td">184,7k</td><td class="crd-td">184,7k</td></tr>
<tr><td class="crd-td"><strong>Behbahān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,6, 50,24</td><td class="crd-td">15,8k</td><td class="crd-td">88,2k</td><td class="crd-td">139,1k</td><td class="crd-td">139,1k</td></tr>
<tr><td class="crd-td"><strong>Īzeh</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,83, 49,87</td><td class="crd-td">-</td><td class="crd-td">81,3k</td><td class="crd-td">135,4k</td><td class="crd-td">135,4k</td></tr>
<tr><td class="crd-td"><strong>Borāzjān</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">29,27, 51,22</td><td class="crd-td">-</td><td class="crd-td">80,2k</td><td class="crd-td">125,4k</td><td class="crd-td">125,4k</td></tr>
<tr><td class="crd-td"><strong>Masjed-e Soleymān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,94, 49,3</td><td class="crd-td">16,5k</td><td class="crd-td">116,9k</td><td class="crd-td">114k</td><td class="crd-td">116,9k</td></tr>
<tr><td class="crd-td"><strong>Shūshtar</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,05, 48,85</td><td class="crd-td">18,5k</td><td class="crd-td">77,9k</td><td class="crd-td">115,6k</td><td class="crd-td">115,6k</td></tr>
<tr><td class="crd-td"><strong>Mīnāb</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">27,13, 57,09</td><td class="crd-td">9,6k</td><td class="crd-td">44,8k</td><td class="crd-td">83k</td><td class="crd-td">98k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Emām Khomeynī</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,44, 49,1</td><td class="crd-td">-</td><td class="crd-td">55,9k</td><td class="crd-td">88,9k</td><td class="crd-td">88,9k</td></tr>
<tr><td class="crd-td"><strong>Shūsh</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,19, 48,24</td><td class="crd-td">-</td><td class="crd-td">52,1k</td><td class="crd-td">87,5k</td><td class="crd-td">87,5k</td></tr>
<tr><td class="crd-td"><strong>Rāmhormoz</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,28, 49,6</td><td class="crd-td">9,3k</td><td class="crd-td">37,2k</td><td class="crd-td">84,3k</td><td class="crd-td">84,3k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Ganāveh</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">29,58, 50,52</td><td class="crd-td">-</td><td class="crd-td">50,3k</td><td class="crd-td">83,3k</td><td class="crd-td">83,3k</td></tr>
<tr><td class="crd-td"><strong>Omīdiyeh</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,76, 49,7</td><td class="crd-td">-</td><td class="crd-td">53,8k</td><td class="crd-td">76,5k</td><td class="crd-td">76,5k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Kangān</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">27,83, 52,06</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">68,3k</td><td class="crd-td">76,3k</td></tr>
<tr><td class="crd-td"><strong>Kūt-e Abdāllah</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,24, 48,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">63,8k</td><td class="crd-td">63,8k</td></tr>
<tr><td class="crd-td"><strong>Ḥamīdiyā</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,48, 48,43</td><td class="crd-td">-</td><td class="crd-td">13,1k</td><td class="crd-td">58,7k</td><td class="crd-td">58,7k</td></tr>
<tr><td class="crd-td"><strong>Sūsangerd</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,56, 48,19</td><td class="crd-td">-</td><td class="crd-td">39,2k</td><td class="crd-td">58,3k</td><td class="crd-td">58,3k</td></tr>
<tr><td class="crd-td"><strong>Shādegān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,65, 48,66</td><td class="crd-td">-</td><td class="crd-td">41,8k</td><td class="crd-td">47,3k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Maku</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">27,85, 52,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50,7k</td><td class="crd-td">50,7k</td></tr>
<tr><td class="crd-td"><strong>Khūrmūj</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">28,65, 51,38</td><td class="crd-td">-</td><td class="crd-td">25,2k</td><td class="crd-td">46,2k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Qeshm</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">26,95, 56,27</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">46,1k</td><td class="crd-td">46,1k</td></tr>
<tr><td class="crd-td"><strong>Kīsh</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">26,56, 54,02</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">45,2k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Dehbārez</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">27,44, 57,19</td><td class="crd-td">-</td><td class="crd-td">19,5k</td><td class="crd-td">41k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Sheyban</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,41, 48,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40,2k</td><td class="crd-td">40,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading thirty catalogued settlements in Khuzestan, Bushehr and Hormozgan ostans, 1925AD to 2025AD.</figcaption>
</figure>

## Central Plateau and Fars

Across Esfahan, Fars, Yazd, Kerman, Chahar Mahall and Bakhtiari and Kohgiluyeh and Buyer Ahmad, catalogued cities and villages climbed from 560k in 1925AD baselines to 15,42M in 2016AD and 17,79M in 2025AD municipal series (Table \ref{tab:belt-plateau-fars}). Eṣfahān (2,22M) and Shīrāz (1,78M) anchor major industrial and university conurbations surrounded by fast-growing satellites (Khomeynī Shahr, Najafābād, Shāhīn Shahr, Marvdasht), while oasis capitals at Kermān (609,9k), Yazd (600,8k) and Kāshān (345,4k) dominate central desert trade and manufacturing corridors [@Hosseini2018Drivers; @Shabahang2022Comparativ].

<figure class="crd-table-figure" id="tab:belt-plateau-fars">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Coords</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Eṣfahān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,65, 51,67</td><td class="crd-td">96k</td><td class="crd-td">1,33M</td><td class="crd-td">2,22M</td><td class="crd-td">2,22M</td></tr>
<tr><td class="crd-td"><strong>Shīrāz</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,61, 52,53</td><td class="crd-td">75k</td><td class="crd-td">1,05M</td><td class="crd-td">1,78M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Kermān</strong></td><td class="crd-td">Kerman</td><td class="crd-td">30,28, 57,08</td><td class="crd-td">52,4k</td><td class="crd-td">385k</td><td class="crd-td">609,9k</td><td class="crd-td">609,9k</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Yazd</td><td class="crd-td">31,9, 54,37</td><td class="crd-td">51,8k</td><td class="crd-td">326,8k</td><td class="crd-td">600,8k</td><td class="crd-td">600,8k</td></tr>
<tr><td class="crd-td"><strong>Kāshān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">33,98, 51,43</td><td class="crd-td">34,4k</td><td class="crd-td">201,4k</td><td class="crd-td">345,4k</td><td class="crd-td">345,4k</td></tr>
<tr><td class="crd-td"><strong>Khomeynī Shahr</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,69, 51,54</td><td class="crd-td">-</td><td class="crd-td">165,9k</td><td class="crd-td">280,3k</td><td class="crd-td">280,3k</td></tr>
<tr><td class="crd-td"><strong>Najaf Ābād</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,63, 51,37</td><td class="crd-td">18,6k</td><td class="crd-td">178,5k</td><td class="crd-td">266,9k</td><td class="crd-td">266,9k</td></tr>
<tr><td class="crd-td"><strong>Sīrjān</strong></td><td class="crd-td">Kerman</td><td class="crd-td">29,45, 55,68</td><td class="crd-td">11,2k</td><td class="crd-td">135k</td><td class="crd-td">226,5k</td><td class="crd-td">226,5k</td></tr>
<tr><td class="crd-td"><strong>Shahr-e Kord</strong></td><td class="crd-td">Chahar Mahall and Bakhtiari</td><td class="crd-td">32,33, 50,86</td><td class="crd-td">11,8k</td><td class="crd-td">100,5k</td><td class="crd-td">216k</td><td class="crd-td">216k</td></tr>
<tr><td class="crd-td"><strong>Shāhīn Shahr</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,86, 51,55</td><td class="crd-td">-</td><td class="crd-td">84,8k</td><td class="crd-td">196,6k</td><td class="crd-td">196,6k</td></tr>
<tr><td class="crd-td"><strong>Rafsanjān</strong></td><td class="crd-td">Kerman</td><td class="crd-td">30,41, 55,99</td><td class="crd-td">11,8k</td><td class="crd-td">98,3k</td><td class="crd-td">183,7k</td><td class="crd-td">183,7k</td></tr>
<tr><td class="crd-td"><strong>Marvdasht</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,87, 52,8</td><td class="crd-td">-</td><td class="crd-td">103,6k</td><td class="crd-td">168,8k</td><td class="crd-td">168,8k</td></tr>
<tr><td class="crd-td"><strong>Jahrom</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,5, 53,56</td><td class="crd-td">21,2k</td><td class="crd-td">94,2k</td><td class="crd-td">160,7k</td><td class="crd-td">160,7k</td></tr>
<tr><td class="crd-td"><strong>Shahrezā</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,01, 51,86</td><td class="crd-td">14,6k</td><td class="crd-td">89,8k</td><td class="crd-td">153,1k</td><td class="crd-td">153,1k</td></tr>
<tr><td class="crd-td"><strong>Yāsūj</strong></td><td class="crd-td">Kohgiluyeh and Buyer Ahmad</td><td class="crd-td">30,67, 51,59</td><td class="crd-td">-</td><td class="crd-td">69,1k</td><td class="crd-td">152,6k</td><td class="crd-td">152,6k</td></tr>
<tr><td class="crd-td"><strong>Jīroft</strong></td><td class="crd-td">Kerman</td><td class="crd-td">28,68, 57,74</td><td class="crd-td">-</td><td class="crd-td">59,2k</td><td class="crd-td">147,9k</td><td class="crd-td">147,9k</td></tr>
<tr><td class="crd-td"><strong>Bam</strong></td><td class="crd-td">Kerman</td><td class="crd-td">29,11, 58,36</td><td class="crd-td">15,6k</td><td class="crd-td">70,1k</td><td class="crd-td">144,5k</td><td class="crd-td">144,5k</td></tr>
<tr><td class="crd-td"><strong>Fasā</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,94, 53,65</td><td class="crd-td">11,7k</td><td class="crd-td">81,7k</td><td class="crd-td">125,7k</td><td class="crd-td">125,7k</td></tr>
<tr><td class="crd-td"><strong>Shahr-e Ṣadrā</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,8, 52,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">104,2k</td><td class="crd-td">122,2k</td></tr>
<tr><td class="crd-td"><strong>Kāzerūn</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,62, 51,65</td><td class="crd-td">16,2k</td><td class="crd-td">81,7k</td><td class="crd-td">109,7k</td><td class="crd-td">112,4k</td></tr>
<tr><td class="crd-td"><strong>Dūgonbadān</strong></td><td class="crd-td">Kohgiluyeh and Buyer Ahmad</td><td class="crd-td">30,36, 50,8</td><td class="crd-td">-</td><td class="crd-td">70,4k</td><td class="crd-td">109,7k</td><td class="crd-td">109,7k</td></tr>
<tr><td class="crd-td"><strong>Bahārestān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,49, 51,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">89,6k</td><td class="crd-td">106,4k</td></tr>
<tr><td class="crd-td"><strong>Khorasgan</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,65, 51,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">105k</td><td class="crd-td">105k</td></tr>
<tr><td class="crd-td"><strong>Fūlādshahr</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,49, 51,4</td><td class="crd-td">-</td><td class="crd-td">39,3k</td><td class="crd-td">100,3k</td><td class="crd-td">100,3k</td></tr>
<tr><td class="crd-td"><strong>Meybod</strong></td><td class="crd-td">Yazd</td><td class="crd-td">32,25, 54,02</td><td class="crd-td">-</td><td class="crd-td">38,1k</td><td class="crd-td">91,5k</td><td class="crd-td">91,5k</td></tr>
<tr><td class="crd-td"><strong>Ardakān</strong></td><td class="crd-td">Yazd</td><td class="crd-td">32,31, 54,02</td><td class="crd-td">10,7k</td><td class="crd-td">44,4k</td><td class="crd-td">85,4k</td><td class="crd-td">85,4k</td></tr>
<tr><td class="crd-td"><strong>Dārāb</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,75, 54,54</td><td class="crd-td">9,2k</td><td class="crd-td">48,1k</td><td class="crd-td">79,7k</td><td class="crd-td">79,7k</td></tr>
<tr><td class="crd-td"><strong>Mobārakeh</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,35, 51,5</td><td class="crd-td">-</td><td class="crd-td">46,4k</td><td class="crd-td">78,8k</td><td class="crd-td">78,8k</td></tr>
<tr><td class="crd-td"><strong>Fīrūz'ābād</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,84, 52,57</td><td class="crd-td">6,8k</td><td class="crd-td">50,1k</td><td class="crd-td">74,2k</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Ārān va Bīdgol</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">34,06, 51,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">74,2k</td><td class="crd-td">74,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading thirty catalogued settlements across Esfahan, Fars, Yazd, Kerman, Chahar Mahall and Bakhtiari and Kohgiluyeh and Buyer Ahmad, 1925AD to 2025AD.</figcaption>
</figure>

## Khorasan and the Southeastern Frontier

Razavi Khorasan, North Khorasan, South Khorasan and Sistan and Baluchestan encompass catalogued cities and villages growing from 275,4k in 1925AD baselines to 10,37M in 2016AD and 11,76M in 2025AD municipal series (Table \ref{tab:belt-khorasan-se}). Mashhad (3,4M) holds more than half the entire macro-belt's urban population, bolstered by religious pilgrimage, domestic migration and Afghan refugee settlement, while Zāhedān (666,7k), Neyshābūr, Sabzevār, Bojnūrd, Bīrjand and Chābahār structure Iran's eastern transit frontier [@PARSIPOUR2019Cities; @Danaei2019Iran].

<figure class="crd-table-figure" id="tab:belt-khorasan-se">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Coords</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,3, 59,61</td><td class="crd-td">105k</td><td class="crd-td">1,89M</td><td class="crd-td">3,4M</td><td class="crd-td">3,4M</td></tr>
<tr><td class="crd-td"><strong>Zāhedān</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">29,5, 60,86</td><td class="crd-td">5,6k</td><td class="crd-td">419,5k</td><td class="crd-td">666,7k</td><td class="crd-td">666,7k</td></tr>
<tr><td class="crd-td"><strong>Nīshābūr</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,21, 58,8</td><td class="crd-td">19,5k</td><td class="crd-td">158,8k</td><td class="crd-td">299,9k</td><td class="crd-td">299,9k</td></tr>
<tr><td class="crd-td"><strong>Maragheh</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,83, 59,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">292k</td><td class="crd-td">292k</td></tr>
<tr><td class="crd-td"><strong>Sabzevār</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,21, 57,68</td><td class="crd-td">22,5k</td><td class="crd-td">170,7k</td><td class="crd-td">276,4k</td><td class="crd-td">276,4k</td></tr>
<tr><td class="crd-td"><strong>Bojnūrd</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">37,47, 57,33</td><td class="crd-td">16,2k</td><td class="crd-td">134,8k</td><td class="crd-td">259,7k</td><td class="crd-td">259,7k</td></tr>
<tr><td class="crd-td"><strong>Bīrjand</strong></td><td class="crd-td">South Khorasan</td><td class="crd-td">32,87, 59,22</td><td class="crd-td">17,3k</td><td class="crd-td">127,6k</td><td class="crd-td">231k</td><td class="crd-td">231k</td></tr>
<tr><td class="crd-td"><strong>Torbat-e Heydariyeh</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,27, 59,22</td><td class="crd-td">-</td><td class="crd-td">94,6k</td><td class="crd-td">155,3k</td><td class="crd-td">155,3k</td></tr>
<tr><td class="crd-td"><strong>Zābol</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">31,03, 61,49</td><td class="crd-td">12,4k</td><td class="crd-td">100,9k</td><td class="crd-td">153,1k</td><td class="crd-td">153,1k</td></tr>
<tr><td class="crd-td"><strong>Kāshmar</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,24, 58,47</td><td class="crd-td">13,2k</td><td class="crd-td">69,2k</td><td class="crd-td">116k</td><td class="crd-td">131,5k</td></tr>
<tr><td class="crd-td"><strong>Īrānshahr</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">27,2, 60,68</td><td class="crd-td">4,4k</td><td class="crd-td">77k</td><td class="crd-td">129k</td><td class="crd-td">131,2k</td></tr>
<tr><td class="crd-td"><strong>Chābahār</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">25,29, 60,64</td><td class="crd-td">4,6k</td><td class="crd-td">34,6k</td><td class="crd-td">121,1k</td><td class="crd-td">121,1k</td></tr>
<tr><td class="crd-td"><strong>Qūchān</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">37,11, 58,51</td><td class="crd-td">16,4k</td><td class="crd-td">85,8k</td><td class="crd-td">115,2k</td><td class="crd-td">115,2k</td></tr>
<tr><td class="crd-td"><strong>Torbat-e Jām</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,24, 60,62</td><td class="crd-td">8,9k</td><td class="crd-td">68,5k</td><td class="crd-td">113,9k</td><td class="crd-td">113,9k</td></tr>
<tr><td class="crd-td"><strong>Shīrvān</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">37,4, 57,93</td><td class="crd-td">-</td><td class="crd-td">70k</td><td class="crd-td">93,8k</td><td class="crd-td">93,8k</td></tr>
<tr><td class="crd-td"><strong>Khāsh</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">28,22, 61,22</td><td class="crd-td">-</td><td class="crd-td">38,9k</td><td class="crd-td">64,2k</td><td class="crd-td">69,6k</td></tr>
<tr><td class="crd-td"><strong>Sarāvān</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">27,37, 62,33</td><td class="crd-td">5,1k</td><td class="crd-td">41,2k</td><td class="crd-td">68,1k</td><td class="crd-td">68,1k</td></tr>
<tr><td class="crd-td"><strong>Esfarāyen</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">37,08, 57,51</td><td class="crd-td">-</td><td class="crd-td">41,1k</td><td class="crd-td">67,5k</td><td class="crd-td">67,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭāybād</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">34,74, 60,78</td><td class="crd-td">-</td><td class="crd-td">39,3k</td><td class="crd-td">64,2k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Chenārān</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,65, 59,12</td><td class="crd-td">-</td><td class="crd-td">32,1k</td><td class="crd-td">61,1k</td><td class="crd-td">61,1k</td></tr>
<tr><td class="crd-td"><strong>Konārak</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">25,36, 60,4</td><td class="crd-td">-</td><td class="crd-td">14,9k</td><td class="crd-td">49,1k</td><td class="crd-td">49,1k</td></tr>
<tr><td class="crd-td"><strong>Qā'en</strong></td><td class="crd-td">South Khorasan</td><td class="crd-td">33,73, 59,18</td><td class="crd-td">7,3k</td><td class="crd-td">25,2k</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Sarakhs</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,54, 61,16</td><td class="crd-td">-</td><td class="crd-td">28,5k</td><td class="crd-td">47,8k</td><td class="crd-td">47,8k</td></tr>
<tr><td class="crd-td"><strong>Gonābād</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">34,35, 58,68</td><td class="crd-td">10,2k</td><td class="crd-td">30,1k</td><td class="crd-td">46,2k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Farīmān</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,71, 59,85</td><td class="crd-td">-</td><td class="crd-td">27k</td><td class="crd-td">44,8k</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Golbahār</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,57, 59,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,8k</td><td class="crd-td">41,8k</td></tr>
<tr><td class="crd-td"><strong>Dargaz</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">37,44, 59,11</td><td class="crd-td">-</td><td class="crd-td">31,2k</td><td class="crd-td">41,7k</td><td class="crd-td">41,7k</td></tr>
<tr><td class="crd-td"><strong>Qasr-e Qand</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">26,25, 60,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,1k</td><td class="crd-td">41,1k</td></tr>
<tr><td class="crd-td"><strong>Khvāf</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">34,57, 60,14</td><td class="crd-td">6,8k</td><td class="crd-td">16,8k</td><td class="crd-td">37,6k</td><td class="crd-td">37,6k</td></tr>
<tr><td class="crd-td"><strong>Bardaskan</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,26, 57,97</td><td class="crd-td">-</td><td class="crd-td">17,4k</td><td class="crd-td">32k</td><td class="crd-td">32k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Leading thirty catalogued settlements in Razavi Khorasan, North Khorasan, South Khorasan and Sistan and Baluchestan, 1925AD to 2025AD.</figcaption>
</figure>

# Limitations

Three constraints govern this settlement gazetteer. First, municipal annexations periodically absorbed neighbouring villages into expanding city boundaries - notably around Tehran, Mashhad, Isfahan and Bojnurd [@PARSIPOUR2019Cities; @Berlin2018Drivers] - creating stepped jumps in census series that reflect administrative reclassification alongside organic migration. Second, whereas Iran's core cities carry continuous multi-decade trajectories anchored from 1925AD or 1956AD through 2025AD, the expanded rural-village layer drawn from SCI 2006AD, 2011AD and 2016AD village censuses carries recent census snapshots rather than synthetic pre-2006AD back-projections. Third, because Iran postponed its 2021AD national census, 2025AD municipal values represent civil-registration and urban-growth projections pending the next door-to-door enumeration.

# Conclusion

Iran's 26.392 catalogued SCI cities and villages document an extraordinary century of urban multiplication and rural-to-urban restructuring across all 31 ostans. While Tehrān (9,86M) and its western commuter belt (Karaj, Eslāmshahr, Shahrīār, Qods) remain Iran's undisputed metropolitan anchor, high-order regional capitals in Mashhad (3,4M), Eṣfahān (2,22M), Shīrāz (1,78M), Tabrīz (1,77M), Qom (1,36M) and Ahvāz (1,34M) alongside thousands of enumerated villages sustain a cohesive rank-size hierarchy ($\alpha = 1{,}369$, $R^2 = 0{,}994$) across the plateau's disparate ecological belts.

# Appendix

Table \ref{tab:foundation-years} documents the catalogued Iranian settlements governed by explicit foundation-year truncation bounds so that pre-foundation periods never carry synthetic urban totals.

<figure class="crd-table-figure" id="tab:foundation-years">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Foundation</th><th class="crd-th">1996AD</th><th class="crd-th">2016AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Khoramshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1812AD</td><td class="crd-td">105,6k</td><td class="crd-td">133,1k</td><td class="crd-td">151k</td></tr>
<tr><td class="crd-td"><strong>Ābādān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1909AD</td><td class="crd-td">206,1k</td><td class="crd-td">231,5k</td><td class="crd-td">262,6k</td></tr>
<tr><td class="crd-td"><strong>Abadan</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">1909AD</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Abadan</strong></td><td class="crd-td">Markazi</td><td class="crd-td">1909AD</td><td class="crd-td">-</td><td class="crd-td">600</td><td class="crd-td">651</td></tr>
<tr><td class="crd-td"><strong>Karaj</strong></td><td class="crd-td">Alborz</td><td class="crd-td">1920AD</td><td class="crd-td">941k</td><td class="crd-td">1,59M</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Abadeh</strong></td><td class="crd-td">Fars</td><td class="crd-td">1925AD</td><td class="crd-td">48,9k</td><td class="crd-td">59,1k</td><td class="crd-td">69,7k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Emām Khomeynī</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1929AD</td><td class="crd-td">55,9k</td><td class="crd-td">78,4k</td><td class="crd-td">88,9k</td></tr>
<tr><td class="crd-td"><strong>Shīrvān</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">1938AD</td><td class="crd-td">70k</td><td class="crd-td">82,7k</td><td class="crd-td">93,8k</td></tr>
<tr><td class="crd-td"><strong>Shirvan</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">1938AD</td><td class="crd-td">-</td><td class="crd-td">421</td><td class="crd-td">455</td></tr>
<tr><td class="crd-td"><strong>Batman</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">1940AD</td><td class="crd-td">-</td><td class="crd-td">944</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Māhshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1945AD</td><td class="crd-td">88,4k</td><td class="crd-td">162,8k</td><td class="crd-td">184,7k</td></tr>
<tr><td class="crd-td"><strong>Ahmadi</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1946AD</td><td class="crd-td">-</td><td class="crd-td">579</td><td class="crd-td">630</td></tr>
<tr><td class="crd-td"><strong>Ahmadi</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">1946AD</td><td class="crd-td">-</td><td class="crd-td">412</td><td class="crd-td">445</td></tr>
<tr><td class="crd-td"><strong>Ahmadi</strong></td><td class="crd-td">Kerman</td><td class="crd-td">1946AD</td><td class="crd-td">-</td><td class="crd-td">338</td><td class="crd-td">364</td></tr>
<tr><td class="crd-td"><strong>Aminshahr</strong></td><td class="crd-td">Kerman</td><td class="crd-td">1949AD</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Shahrīār</strong></td><td class="crd-td">Tehran</td><td class="crd-td">1953AD</td><td class="crd-td">45,5k</td><td class="crd-td">309,6k</td><td class="crd-td">351,2k</td></tr>
<tr><td class="crd-td"><strong>Shahriar</strong></td><td class="crd-td">Chahar Mahall and Bakhtiari</td><td class="crd-td">1953AD</td><td class="crd-td">-</td><td class="crd-td">705</td><td class="crd-td">772</td></tr>
<tr><td class="crd-td"><strong>Shahryar</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">1953AD</td><td class="crd-td">-</td><td class="crd-td">365</td><td class="crd-td">393</td></tr>
<tr><td class="crd-td"><strong>Arad</strong></td><td class="crd-td">Fars</td><td class="crd-td">1962AD</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Eslāmshahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">1975AD</td><td class="crd-td">265,4k</td><td class="crd-td">448,1k</td><td class="crd-td">508,3k</td></tr>
<tr><td class="crd-td"><strong>Badr</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">1982AD</td><td class="crd-td">-</td><td class="crd-td">953</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Qods</strong></td><td class="crd-td">Tehran</td><td class="crd-td">1989AD</td><td class="crd-td">138,3k</td><td class="crd-td">309,6k</td><td class="crd-td">351,2k</td></tr>
<tr><td class="crd-td"><strong>Qods</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1989AD</td><td class="crd-td">-</td><td class="crd-td">966</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Qods</strong></td><td class="crd-td">Semnan</td><td class="crd-td">1989AD</td><td class="crd-td">-</td><td class="crd-td">342</td><td class="crd-td">380</td></tr>
<tr><td class="crd-td"><strong>Parand</strong></td><td class="crd-td">Tehran</td><td class="crd-td">1990AD</td><td class="crd-td">-</td><td class="crd-td">97,5k</td><td class="crd-td">110,6k</td></tr>
<tr><td class="crd-td"><strong>Shahr-e Zow</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">2003AD</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Hamashahr</strong></td><td class="crd-td">Kerman</td><td class="crd-td">2011AD</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Kukherdharang</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">2013AD</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Balavah</strong></td><td class="crd-td">Ilam</td><td class="crd-td">2013AD</td><td class="crd-td">-</td><td class="crd-td">264</td><td class="crd-td">290</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Iranian settlements carrying explicit historical foundation-year bounds in the gazetteer (29 sites).</figcaption>
</figure>

# Sources

::: {#refs}
:::

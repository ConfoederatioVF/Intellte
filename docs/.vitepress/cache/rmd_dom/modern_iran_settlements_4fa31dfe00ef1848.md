---
title: "Iran after 1925"
subtitle: "Settlement Gazetteer of 281 Iranian Cities, 1925AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: modern_iran_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_modern_iran_spatial.png"
hero_caption: "Spatial distribution of the 281 catalogued Iranian settlements across 31 ostans from 1925AD to 2026AD, contrasting metropolitan corridors against plateau oases."
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

Between 1925AD and 2025AD, Iran shifted from an overwhelmingly rural society of scattered oasis towns into a densely urbanised nation whose leading cities absorb nearly two-thirds of the national population. Across the 281 cities and large municipal centres catalogued in this gazetteer, aggregate urban inhabitants rose 8,5-fold from 6,84M across 275 settlements in 1925AD to 33,57M in 1996AD, 51,29M in 2016AD and 58,18M in 2025AD, accounting for 64,8% of Iran's 89,8M total. By 2025AD, nine cities exceeded 1M residents - Tehrān (9,86M), Mashhad (3,4M), Eṣfahān (2,22M), Karaj (1,81M), Shīrāz (1,78M), Tabrīz (1,77M), Qom (1,36M), Ahvāz (1,34M) and Kermānshāh (1,07M) - alongside 19 centres above 500k and 111 above 100k, with a median city size of 70,4k. Organised across 31 ostans and six geographical macro-belts via polygon containment, this gazetteer records coordinates, provincial assignments and benchmark populations at 1925AD, 1996AD and 2025AD, documenting both long-established plateau capitals and twentieth-century industrial ports and Tehran dormitory satellites.

# Background

When the Pahlavi state consolidated authority in 1925AD, Iran's urban hierarchy still bore the imprint of Qajar caravan routes and regional agrarian basins. Only Tehran, Tabriz, Mashhad, Isfahan and Shiraz formed substantial regional hubs, while most provincial towns served as small administrative bazaars of ten to fifty thousand inhabitants. Over the following century, centralising railway construction, Khuzestan petroleum extraction, post-1956AD mortality decline, the 1963AD White Revolution land reform and post-1973AD oil spending unleashed sustained rural-to-urban migration [@Annamoradnejad2024Influentia; @Danaei2019Iran].

Urban growth accelerated further during the 1980-1988 Iran-Iraq War, when displaced households from Khoramshahr, Ābādān and border counties fled eastward and Afghan refugees settled heavily in Mashhad, Zāhedān, Qom and Tehran [@Annamoradnejad2024Influentia; @Erfani2011Fertility]. Even after Iran's rapid post-1989AD fertility transition lowered national population growth [@Simbar2012Achievemen; @Bank2010Fertility], urban expansion continued through peri-urban land subdivision, suburban housing estates and environmental displacement from drought-stricken agricultural basins around Lake Urmia and Khuzestan [@Berlin2018Drivers; @Hosseini2018Drivers; @Talebi2025Water].



# Methodology

This gazetteer compiles all 281 included Iranian urban settlements from Statistical Centre of Iran (SCI) municipal enumerations covering 1956AD to 2016AD, supplemented by interwar urban registries back-projected to 1925AD and vital-registration projections to 2025AD [@Annamoradnejad2024Influentia; @Bahramnezhad2016Review]. During source auditing, 8 redundant or sub-threshold entries were excluded from an initial pool of 289 candidates, leaving 281 continuously reconciled cities down to a 2025AD floor of 28,4k inhabitants. Every settlement retains BGN/PCGN scholarly romanisation with macrons and underdots (*Tehrān*, *Eṣfahān*, *Shīrāz*, *Tabrīz*, *Orūmīyeh*, *Bandar-e 'Abās*), omitting Perso-Arabic script from printed tables to prevent missing-glyph artefacts in XeLaTeX.

To prevent anachronistic back-projection on twentieth-century industrial towns and metropolitan satellites, nine settlements enforce documented foundation-year bounds: Khoramshahr (1812AD), Ābādān (1909AD), Karaj (1920AD), Bandar-e Emām Khomeynī (1929AD), Shīrvān (1938AD), Bandar-e Māhshahr (1945AD), Shahrīār (1953AD), Eslāmshahr (1975AD) and Qods (1989AD). Each city is dynamically assigned at runtime to its encompassing ostan among the 31 provincial vector boundaries via ray-casting point-in-polygon matching, harmonised with the 379 geoBoundaries second-order (*shahrestan*) census polygons [@Runfola2020GeoBoundaries]. For regional presentation, the 31 ostans are grouped into six geographical macro-belts.

# Testing and Validation

Figure \ref{fig:modern-iran-settlements} evaluates the structural consistency of the 281-settlement gazetteer via a log-log rank-size plot and a ranking of Iran's twelve largest cities. Across all 281 settlements (well above the n >= 25 sample threshold), ordinary least-squares regression of log population against log rank returns a Zipf slope of $\alpha = 1{,}01$ and $R^2 = 0{,}99$. Near-unitary Zipf scaling indicates that Iran's urban system balances strong capital primacy in Tehran (9,86M vs 3,4M in Mashhad) against a dense mid-tier network of provincial capitals and industrial county seats [@Mousavi2025Introducin].

<figure class="crd-figure-block" id="fig:modern-iran-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iran-settlements/fig4_modern_iran_settlements.png" alt="fig:modern-iran-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 281 catalogued Iranian settlements and peak populations of the twelve leading centres in 2025AD.</figcaption>
</figure>

Coverage rises smoothly over the century as rural-to-urban migration and new satellite incorporation bring larger shares of Iran's population inside municipal limits: catalogued towns account for 54,1% of the 12,65M national total in 1925AD, 55,9% in 1996AD, 60,3% in 2006AD, 64,2% in 2016AD and 64,8% in 2025AD. Provincial-level cross-checks against national mortality and urban-sprawl studies confirm that the sharpest post-1976AD municipal jumps occur precisely in the Tehran-Karaj-Qods commuter arc, northern Khorasan and Gulf port corridors [@Khosravi2007Differenti; @Mehriar2019Urban; @PARSIPOUR2019Cities].

# Results

Table \ref{tab:macro-summary} aggregates the 281 settlements across Iran's six geographical macro-belts at 1925AD, 1996AD and 2025AD. The Central Core around Tehran, Alborz, Qom, Qazvin, Markazi and Semnan holds by far the largest urban mass (20,17M across 47 cities in 2025AD), followed by the Northwestern Azarbaijan and Zagros belt (11,83M across 72 cities) and the Central Plateau and Fars (10,67M across 63 cities).

<figure class="crd-table-figure" id="tab:macro-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Belt</th><th class="crd-th">Ostans</th><th class="crd-th">Cities</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehran, Alborz and Central Core</strong></td><td class="crd-td">6</td><td class="crd-td">50</td><td class="crd-td">2,29M</td><td class="crd-td">11,13M</td><td class="crd-td">20M</td></tr>
<tr><td class="crd-td"><strong>Caspian Littoral</strong></td><td class="crd-td">3</td><td class="crd-td">32</td><td class="crd-td">459,2k</td><td class="crd-td">2,26M</td><td class="crd-td">3,94M</td></tr>
<tr><td class="crd-td"><strong>Northwestern Azarbaijan and Zagros</strong></td><td class="crd-td">9</td><td class="crd-td">72</td><td class="crd-td">1,53M</td><td class="crd-td">7,41M</td><td class="crd-td">11,87M</td></tr>
<tr><td class="crd-td"><strong>Khuzestan and Persian Gulf Littoral</strong></td><td class="crd-td">3</td><td class="crd-td">36</td><td class="crd-td">567,4k</td><td class="crd-td">2,96M</td><td class="crd-td">5,12M</td></tr>
<tr><td class="crd-td"><strong>Central Plateau and Fars</strong></td><td class="crd-td">6</td><td class="crd-td">63</td><td class="crd-td">1,24M</td><td class="crd-td">6M</td><td class="crd-td">10,53M</td></tr>
<tr><td class="crd-td"><strong>Khorasan and Southeastern Frontier</strong></td><td class="crd-td">4</td><td class="crd-td">28</td><td class="crd-td">742,8k</td><td class="crd-td">3,8M</td><td class="crd-td">6,72M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Distribution of the 281 catalogued settlements across six Iranian geographical macro-belts at 1925AD, 1996AD and 2025AD.</figcaption>
</figure>

## Tehran, Alborz and the Central Piedmont

Spanning Tehran, Alborz, Qom, Qazvin, Markazi and Semnan, the central piedmont corridor contains 47 catalogued cities totalling 20,17M inhabitants in 2025AD (Table \ref{tab:belt-central}). Beyond Tehrān (9,86M) and Qom (1,36M), its defining feature is explosive satellite suburbanisation west and south of the capital: Karaj multiplied 17,4-fold from 103,6k in 1925AD to 1,81M, while Eslāmshahr (508,3k), Shahrīār (351,2k), Qods (351,2k), Malārd (318,8k) and Pākdasht (267,6k) absorb commuter overflow along highway corridors [@Berlin2018Drivers; @Erfani2015Family]. Industrial centres at Arāk (590,9k) and Qazvīn (456,8k) anchor the western flank toward the Zagros passes.

<figure class="crd-table-figure" id="tab:belt-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">settlement</th><th class="crd-th">ostan</th><th class="crd-th">coords</th><th class="crd-th">y1925</th><th class="crd-th">y1996</th><th class="crd-th">y2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehrān</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,69, 51,42</td><td class="crd-td">1,52M</td><td class="crd-td">6,76M</td><td class="crd-td">9,86M</td></tr>
<tr><td class="crd-td"><strong>Karaj</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,83, 50,99</td><td class="crd-td">103,6k</td><td class="crd-td">941k</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Qom</strong></td><td class="crd-td">Qom</td><td class="crd-td">34,64, 50,88</td><td class="crd-td">159,5k</td><td class="crd-td">777,7k</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Arāk</strong></td><td class="crd-td">Markazi</td><td class="crd-td">34,09, 49,7</td><td class="crd-td">77,6k</td><td class="crd-td">388,2k</td><td class="crd-td">590,9k</td></tr>
<tr><td class="crd-td"><strong>Eslāmshahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,55, 51,24</td><td class="crd-td">-</td><td class="crd-td">265,4k</td><td class="crd-td">508,3k</td></tr>
<tr><td class="crd-td"><strong>Qazvīn</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,27, 50</td><td class="crd-td">65,3k</td><td class="crd-td">291,1k</td><td class="crd-td">456,8k</td></tr>
<tr><td class="crd-td"><strong>Shahrīār</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,66, 51,06</td><td class="crd-td">-</td><td class="crd-td">45,5k</td><td class="crd-td">351,2k</td></tr>
<tr><td class="crd-td"><strong>Qods</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,72, 51,11</td><td class="crd-td">-</td><td class="crd-td">138,3k</td><td class="crd-td">351,2k</td></tr>
<tr><td class="crd-td"><strong>Malārd</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,67, 50,98</td><td class="crd-td">7,6k</td><td class="crd-td">88,1k</td><td class="crd-td">318,8k</td></tr>
<tr><td class="crd-td"><strong>Golestān</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,52, 51,18</td><td class="crd-td">10,7k</td><td class="crd-td">112,6k</td><td class="crd-td">271,7k</td></tr>
<tr><td class="crd-td"><strong>Pākdasht</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,48, 51,68</td><td class="crd-td">7,8k</td><td class="crd-td">49,2k</td><td class="crd-td">268,1k</td></tr>
<tr><td class="crd-td"><strong>Qarchak</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,43, 51,58</td><td class="crd-td">23k</td><td class="crd-td">142,7k</td><td class="crd-td">262,1k</td></tr>
<tr><td class="crd-td"><strong>Varāmīn</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,32, 51,65</td><td class="crd-td">18,2k</td><td class="crd-td">107,2k</td><td class="crd-td">255,9k</td></tr>
<tr><td class="crd-td"><strong>Sāveh</strong></td><td class="crd-td">Markazi</td><td class="crd-td">35,02, 50,36</td><td class="crd-td">20,5k</td><td class="crd-td">111,2k</td><td class="crd-td">250,4k</td></tr>
<tr><td class="crd-td"><strong>Nasīm Shahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,57, 51,16</td><td class="crd-td">11,7k</td><td class="crd-td">85,1k</td><td class="crd-td">227,3k</td></tr>
<tr><td class="crd-td"><strong>Semnān</strong></td><td class="crd-td">Semnan</td><td class="crd-td">35,58, 53,39</td><td class="crd-td">17,6k</td><td class="crd-td">91k</td><td class="crd-td">210k</td></tr>
<tr><td class="crd-td"><strong>Fardīs</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,76, 51</td><td class="crd-td">24,5k</td><td class="crd-td">-</td><td class="crd-td">205,5k</td></tr>
<tr><td class="crd-td"><strong>Shāhrūd</strong></td><td class="crd-td">Semnan</td><td class="crd-td">36,42, 54,98</td><td class="crd-td">21,6k</td><td class="crd-td">104,8k</td><td class="crd-td">170,3k</td></tr>
<tr><td class="crd-td"><strong>Kamāl Shahr</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,86, 50,87</td><td class="crd-td">13,5k</td><td class="crd-td">-</td><td class="crd-td">160,7k</td></tr>
<tr><td class="crd-td"><strong>Naẓar'ābād</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,95, 50,61</td><td class="crd-td">6,7k</td><td class="crd-td">69,3k</td><td class="crd-td">135,6k</td></tr>
<tr><td class="crd-td"><strong>Andīsheh</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,75, 51,28</td><td class="crd-td">12,7k</td><td class="crd-td">-</td><td class="crd-td">131,6k</td></tr>
<tr><td class="crd-td"><strong>Robāṭ Karīm</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,48, 51,08</td><td class="crd-td">6,2k</td><td class="crd-td">36,5k</td><td class="crd-td">119,5k</td></tr>
<tr><td class="crd-td"><strong>Parand</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,47, 50,98</td><td class="crd-td">13,2k</td><td class="crd-td">-</td><td class="crd-td">110,6k</td></tr>
<tr><td class="crd-td"><strong>Alvand</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,19, 50,06</td><td class="crd-td">12,8k</td><td class="crd-td">60,8k</td><td class="crd-td">106,4k</td></tr>
<tr><td class="crd-td"><strong>Tākestān</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,07, 49,7</td><td class="crd-td">11,2k</td><td class="crd-td">54,2k</td><td class="crd-td">91,1k</td></tr>
<tr><td class="crd-td"><strong>Būmahen</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,73, 51,87</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">89,6k</td></tr>
<tr><td class="crd-td"><strong>Pardīs</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,75, 51,81</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">83,2k</td></tr>
<tr><td class="crd-td"><strong>Khomeyn</strong></td><td class="crd-td">Markazi</td><td class="crd-td">33,64, 50,08</td><td class="crd-td">11,2k</td><td class="crd-td">56,3k</td><td class="crd-td">82,7k</td></tr>
<tr><td class="crd-td"><strong>Bāqershahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,53, 51,4</td><td class="crd-td">8,9k</td><td class="crd-td">-</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Māhdasht</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,73, 50,81</td><td class="crd-td">5,8k</td><td class="crd-td">29k</td><td class="crd-td">71,4k</td></tr>
<tr><td class="crd-td"><strong>Meshkīn Dasht</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,75, 50,94</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">70,3k</td></tr>
<tr><td class="crd-td"><strong>Ābyek</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,04, 50,53</td><td class="crd-td">6k</td><td class="crd-td">32,8k</td><td class="crd-td">68,2k</td></tr>
<tr><td class="crd-td"><strong>Pīshvā</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,31, 51,73</td><td class="crd-td">4,6k</td><td class="crd-td">29,9k</td><td class="crd-td">67,1k</td></tr>
<tr><td class="crd-td"><strong>Dāmghān</strong></td><td class="crd-td">Semnan</td><td class="crd-td">36,17, 54,34</td><td class="crd-td">9,6k</td><td class="crd-td">49,2k</td><td class="crd-td">67k</td></tr>
<tr><td class="crd-td"><strong>Hashtgerd</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,96, 50,68</td><td class="crd-td">5,8k</td><td class="crd-td">33,6k</td><td class="crd-td">63,1k</td></tr>
<tr><td class="crd-td"><strong>Eqbāliyeh</strong></td><td class="crd-td">Qazvin</td><td class="crd-td">36,23, 49,92</td><td class="crd-td">6,6k</td><td class="crd-td">31,5k</td><td class="crd-td">62,5k</td></tr>
<tr><td class="crd-td"><strong>Chāhārdāngeh</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,6, 51,31</td><td class="crd-td">7,1k</td><td class="crd-td">-</td><td class="crd-td">56,7k</td></tr>
<tr><td class="crd-td"><strong>Chāhārbāgh</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,84, 50,85</td><td class="crd-td">946</td><td class="crd-td">-</td><td class="crd-td">55,4k</td></tr>
<tr><td class="crd-td"><strong>Garmsār</strong></td><td class="crd-td">Semnan</td><td class="crd-td">35,22, 52,34</td><td class="crd-td">5k</td><td class="crd-td">29,7k</td><td class="crd-td">55,2k</td></tr>
<tr><td class="crd-td"><strong>Damāvand</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,72, 52,07</td><td class="crd-td">4,4k</td><td class="crd-td">22,3k</td><td class="crd-td">54,9k</td></tr>
<tr><td class="crd-td"><strong>Ḥasan Ābād</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,37, 51,23</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">49,8k</td></tr>
<tr><td class="crd-td"><strong>Maḥalāt</strong></td><td class="crd-td">Markazi</td><td class="crd-td">33,91, 50,45</td><td class="crd-td">6,5k</td><td class="crd-td">30k</td><td class="crd-td">49,1k</td></tr>
<tr><td class="crd-td"><strong>Delījān</strong></td><td class="crd-td">Markazi</td><td class="crd-td">33,99, 50,68</td><td class="crd-td">4,9k</td><td class="crd-td">24,9k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>Kahrīzak</strong></td><td class="crd-td">Semnan</td><td class="crd-td">35,35, 51,84</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>Vaḥīdīeh</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,71, 51,47</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">37,7k</td></tr>
<tr><td class="crd-td"><strong>Ṣafādasht</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,69, 50,85</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Eshtehārd</strong></td><td class="crd-td">Alborz</td><td class="crd-td">35,73, 50,37</td><td class="crd-td">2,2k</td><td class="crd-td">10,3k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Ferdows</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,6, 51,06</td><td class="crd-td">4,3k</td><td class="crd-td">21,8k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Rūdehen</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,73, 51,91</td><td class="crd-td">2,5k</td><td class="crd-td">11,9k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Shāhedshahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">35,57, 51,09</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">29k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements in Tehran, Alborz, Qom, Qazvin, Markazi and Semnan ostans, 1925AD to 2025AD.</figcaption>
</figure>

## Caspian Littoral

Along the humid southern Caspian shelf of Gilan, Mazandaran and Golestan, 32 catalogued cities grew from 379,1k in 1925AD to 4,02M in 2025AD (Table \ref{tab:belt-caspian}). Rasht (771,3k), Gorgān (397,8k) and Sārī (351,4k) lead an unusually dense network of agricultural market towns, ports (Bandar-e Anzalī) and foothills hubs (Āmol, Bābol, Qā'em Shahr, Gonbad-e Kāvūs) where rapid rural electrification and highway paving turned formerly isolated rice villages into continuous linear urban ribbons [@SalehiIsfahani2026Rural; @Annamoradnejad2024Influentia].

<figure class="crd-table-figure" id="tab:belt-caspian">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">settlement</th><th class="crd-th">ostan</th><th class="crd-th">coords</th><th class="crd-th">y1925</th><th class="crd-th">y1996</th><th class="crd-th">y2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rasht</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,28, 49,59</td><td class="crd-td">79,7k</td><td class="crd-td">417,7k</td><td class="crd-td">771,3k</td></tr>
<tr><td class="crd-td"><strong>Gorgān</strong></td><td class="crd-td">Golestan</td><td class="crd-td">36,84, 54,44</td><td class="crd-td">38k</td><td class="crd-td">188,7k</td><td class="crd-td">397,8k</td></tr>
<tr><td class="crd-td"><strong>Sārī</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,56, 53,06</td><td class="crd-td">39,2k</td><td class="crd-td">195,9k</td><td class="crd-td">351,4k</td></tr>
<tr><td class="crd-td"><strong>Bābol</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,55, 52,68</td><td class="crd-td">32,2k</td><td class="crd-td">158,3k</td><td class="crd-td">283,8k</td></tr>
<tr><td class="crd-td"><strong>Āmol</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,47, 52,35</td><td class="crd-td">32,8k</td><td class="crd-td">159,1k</td><td class="crd-td">269,4k</td></tr>
<tr><td class="crd-td"><strong>Qā'em Shahr</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,47, 52,87</td><td class="crd-td">29k</td><td class="crd-td">143,3k</td><td class="crd-td">232,5k</td></tr>
<tr><td class="crd-td"><strong>Gonbad-e Kāvūs</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,25, 55,17</td><td class="crd-td">24,1k</td><td class="crd-td">111,3k</td><td class="crd-td">172,3k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Anzalī</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,47, 49,46</td><td class="crd-td">22,2k</td><td class="crd-td">98,5k</td><td class="crd-td">134,5k</td></tr>
<tr><td class="crd-td"><strong>Lāhījān</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,2, 50,01</td><td class="crd-td">11,3k</td><td class="crd-td">53,1k</td><td class="crd-td">114,6k</td></tr>
<tr><td class="crd-td"><strong>Behshahr</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,69, 53,55</td><td class="crd-td">14,5k</td><td class="crd-td">72,1k</td><td class="crd-td">107,4k</td></tr>
<tr><td class="crd-td"><strong>Langarūd</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,2, 50,15</td><td class="crd-td">12,3k</td><td class="crd-td">56,6k</td><td class="crd-td">90,1k</td></tr>
<tr><td class="crd-td"><strong>Chālūs</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,66, 51,42</td><td class="crd-td">6,6k</td><td class="crd-td">41,3k</td><td class="crd-td">74k</td></tr>
<tr><td class="crd-td"><strong>Nekā</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,65, 53,3</td><td class="crd-td">6,8k</td><td class="crd-td">35,2k</td><td class="crd-td">69,2k</td></tr>
<tr><td class="crd-td"><strong>Tonekābon</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,82, 50,87</td><td class="crd-td">7,3k</td><td class="crd-td">33,6k</td><td class="crd-td">62,9k</td></tr>
<tr><td class="crd-td"><strong>Hashtpar</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,8, 48,91</td><td class="crd-td">6,8k</td><td class="crd-td">33,6k</td><td class="crd-td">61,5k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Torkaman</strong></td><td class="crd-td">Golestan</td><td class="crd-td">36,9, 54,07</td><td class="crd-td">8,1k</td><td class="crd-td">38,8k</td><td class="crd-td">61,2k</td></tr>
<tr><td class="crd-td"><strong>Āstārā</strong></td><td class="crd-td">Gilan</td><td class="crd-td">38,43, 48,87</td><td class="crd-td">6,4k</td><td class="crd-td">30,7k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Nowshahr</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,65, 51,5</td><td class="crd-td">7,7k</td><td class="crd-td">35,1k</td><td class="crd-td">56k</td></tr>
<tr><td class="crd-td"><strong>Ṣowme'eh Sarā</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,3, 49,32</td><td class="crd-td">5,8k</td><td class="crd-td">29,4k</td><td class="crd-td">53,4k</td></tr>
<tr><td class="crd-td"><strong>Āzādshahr</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,09, 55,17</td><td class="crd-td">6,3k</td><td class="crd-td">33,1k</td><td class="crd-td">49,6k</td></tr>
<tr><td class="crd-td"><strong>Kordkūy</strong></td><td class="crd-td">Golestan</td><td class="crd-td">36,79, 54,11</td><td class="crd-td">5,7k</td><td class="crd-td">26,5k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Fereydūnkenār</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,68, 52,52</td><td class="crd-td">5,9k</td><td class="crd-td">28k</td><td class="crd-td">43,3k</td></tr>
<tr><td class="crd-td"><strong>Rūdsar</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,14, 50,29</td><td class="crd-td">6,8k</td><td class="crd-td">34,2k</td><td class="crd-td">43,1k</td></tr>
<tr><td class="crd-td"><strong>Kalāleh</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,38, 55,49</td><td class="crd-td">4,5k</td><td class="crd-td">23,6k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Rāmsar</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,92, 50,65</td><td class="crd-td">6,4k</td><td class="crd-td">29k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Fūman</strong></td><td class="crd-td">Gilan</td><td class="crd-td">37,22, 49,31</td><td class="crd-td">6,8k</td><td class="crd-td">31,3k</td><td class="crd-td">40,7k</td></tr>
<tr><td class="crd-td"><strong>Āq Qalā</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,01, 54,46</td><td class="crd-td">4,7k</td><td class="crd-td">22,2k</td><td class="crd-td">39,8k</td></tr>
<tr><td class="crd-td"><strong>Jūybār</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,64, 52,91</td><td class="crd-td">5,1k</td><td class="crd-td">23,9k</td><td class="crd-td">37,3k</td></tr>
<tr><td class="crd-td"><strong>Maḥmūd'ābād</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,63, 52,26</td><td class="crd-td">3,5k</td><td class="crd-td">20,1k</td><td class="crd-td">36,1k</td></tr>
<tr><td class="crd-td"><strong>Amīrkolā</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,6, 52,67</td><td class="crd-td">4,8k</td><td class="crd-td">21,3k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Mīnūdasht</strong></td><td class="crd-td">Golestan</td><td class="crd-td">37,23, 55,37</td><td class="crd-td">4,3k</td><td class="crd-td">21k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Nūr</strong></td><td class="crd-td">Mazandaran</td><td class="crd-td">36,57, 52,02</td><td class="crd-td">3,6k</td><td class="crd-td">16,7k</td><td class="crd-td">30,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements across Gilan, Mazandaran and Golestan ostans along the Caspian littoral, 1925AD to 2025AD.</figcaption>
</figure>

## Northwestern Azarbaijan and Zagros Highlands

Across East Azarbaijan, West Azarbaijan, Ardebil, Zanjan, Kordestan, Kermanshah, Hamadan, Lorestan and Ilam, 72 catalogued cities rose from 1,44M in 1925AD to 11,83M in 2025AD (Table \ref{tab:belt-nw-zagros}). Regional growth concentrated heavily in provincial capitals - Tabrīz (1,77M), Kermānshāh (1,07M), Orūmīyeh (835,1k), Hamadān (628,9k), Ardabīl (600,5k), Zanjān (488,7k), Sanandaj (468,2k) and Khoram Ābād (423,6k) - as upland farmers left rain-fed villages squeezed by land fragmentation and ecological stress around Lake Urmia [@Talebi2025Water; @Lutz2010Demography].

<figure class="crd-table-figure" id="tab:belt-nw-zagros">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">settlement</th><th class="crd-th">ostan</th><th class="crd-th">coords</th><th class="crd-th">y1925</th><th class="crd-th">y1996</th><th class="crd-th">y2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tabrīz</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,08, 46,29</td><td class="crd-td">254,9k</td><td class="crd-td">1,19M</td><td class="crd-td">1,77M</td></tr>
<tr><td class="crd-td"><strong>Kermānshāh</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,31, 47,06</td><td class="crd-td">146,1k</td><td class="crd-td">693k</td><td class="crd-td">1,07M</td></tr>
<tr><td class="crd-td"><strong>Orūmīyeh</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">37,55, 45,08</td><td class="crd-td">83,7k</td><td class="crd-td">435,2k</td><td class="crd-td">835,1k</td></tr>
<tr><td class="crd-td"><strong>Hamadān</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,8, 48,51</td><td class="crd-td">81,9k</td><td class="crd-td">401,3k</td><td class="crd-td">628,9k</td></tr>
<tr><td class="crd-td"><strong>Ardabīl</strong></td><td class="crd-td">Ardebil</td><td class="crd-td">38,25, 48,29</td><td class="crd-td">72,8k</td><td class="crd-td">340,4k</td><td class="crd-td">600,5k</td></tr>
<tr><td class="crd-td"><strong>Zanjān</strong></td><td class="crd-td">Zanjan</td><td class="crd-td">36,68, 48,5</td><td class="crd-td">59,5k</td><td class="crd-td">286,3k</td><td class="crd-td">488,7k</td></tr>
<tr><td class="crd-td"><strong>Sanandaj</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,31, 47</td><td class="crd-td">57,1k</td><td class="crd-td">277,8k</td><td class="crd-td">468,2k</td></tr>
<tr><td class="crd-td"><strong>Khoram Ābād</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,49, 48,36</td><td class="crd-td">58,4k</td><td class="crd-td">272,8k</td><td class="crd-td">423,6k</td></tr>
<tr><td class="crd-td"><strong>Borūjerd</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,9, 48,75</td><td class="crd-td">47,1k</td><td class="crd-td">217,8k</td><td class="crd-td">266,6k</td></tr>
<tr><td class="crd-td"><strong>Khūy</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">38,55, 44,95</td><td class="crd-td">32,3k</td><td class="crd-td">148,9k</td><td class="crd-td">225,5k</td></tr>
<tr><td class="crd-td"><strong>Īlām</strong></td><td class="crd-td">Ilam</td><td class="crd-td">33,64, 46,42</td><td class="crd-td">27,3k</td><td class="crd-td">126,3k</td><td class="crd-td">220,1k</td></tr>
<tr><td class="crd-td"><strong>Būkān</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,52, 46,21</td><td class="crd-td">19,5k</td><td class="crd-td">120k</td><td class="crd-td">219,5k</td></tr>
<tr><td class="crd-td"><strong>Marāgheh</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,39, 46,24</td><td class="crd-td">27,5k</td><td class="crd-td">132,3k</td><td class="crd-td">198,8k</td></tr>
<tr><td class="crd-td"><strong>Malāyer</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,3, 48,82</td><td class="crd-td">30,5k</td><td class="crd-td">144,4k</td><td class="crd-td">193,1k</td></tr>
<tr><td class="crd-td"><strong>Mahābād</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,76, 45,72</td><td class="crd-td">19,2k</td><td class="crd-td">107,8k</td><td class="crd-td">191k</td></tr>
<tr><td class="crd-td"><strong>Saqqez</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">36,25, 46,27</td><td class="crd-td">23,2k</td><td class="crd-td">115,4k</td><td class="crd-td">187,4k</td></tr>
<tr><td class="crd-td"><strong>Marīvān</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,52, 46,18</td><td class="crd-td">10,6k</td><td class="crd-td">60,5k</td><td class="crd-td">155k</td></tr>
<tr><td class="crd-td"><strong>Mīāndūāb</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,97, 46,11</td><td class="crd-td">16,7k</td><td class="crd-td">90,1k</td><td class="crd-td">152,5k</td></tr>
<tr><td class="crd-td"><strong>Marand</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,43, 45,77</td><td class="crd-td">20k</td><td class="crd-td">96,4k</td><td class="crd-td">148,4k</td></tr>
<tr><td class="crd-td"><strong>Dūrūd</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,49, 49,06</td><td class="crd-td">18,1k</td><td class="crd-td">88,2k</td><td class="crd-td">138k</td></tr>
<tr><td class="crd-td"><strong>Bāneh</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">36, 45,89</td><td class="crd-td">9,6k</td><td class="crd-td">55,4k</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Ahar</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,48, 47,07</td><td class="crd-td">16,8k</td><td class="crd-td">78,1k</td><td class="crd-td">114,2k</td></tr>
<tr><td class="crd-td"><strong>Abhar</strong></td><td class="crd-td">Zanjan</td><td class="crd-td">36,15, 49,22</td><td class="crd-td">11,7k</td><td class="crd-td">55,3k</td><td class="crd-td">112,6k</td></tr>
<tr><td class="crd-td"><strong>Mīāneh</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,42, 47,72</td><td class="crd-td">17k</td><td class="crd-td">78,1k</td><td class="crd-td">112,3k</td></tr>
<tr><td class="crd-td"><strong>Pārs Ābād</strong></td><td class="crd-td">Ardebil</td><td class="crd-td">39,65, 47,92</td><td class="crd-td">11,2k</td><td class="crd-td">60,5k</td><td class="crd-td">105,9k</td></tr>
<tr><td class="crd-td"><strong>Salmās</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">38,2, 44,77</td><td class="crd-td">13,4k</td><td class="crd-td">65,4k</td><td class="crd-td">105,3k</td></tr>
<tr><td class="crd-td"><strong>Pīrānshahr</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,7, 45,14</td><td class="crd-td">6k</td><td class="crd-td">33,8k</td><td class="crd-td">103,8k</td></tr>
<tr><td class="crd-td"><strong>Eslāmābād-e Gharb</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,11, 46,53</td><td class="crd-td">18,1k</td><td class="crd-td">81,6k</td><td class="crd-td">102,7k</td></tr>
<tr><td class="crd-td"><strong>Alīgūdarz</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,4, 49,69</td><td class="crd-td">13,7k</td><td class="crd-td">69,4k</td><td class="crd-td">101,3k</td></tr>
<tr><td class="crd-td"><strong>Kūhdasht</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,53, 47,61</td><td class="crd-td">14,5k</td><td class="crd-td">72,1k</td><td class="crd-td">101,1k</td></tr>
<tr><td class="crd-td"><strong>Bonāb</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,34, 46,06</td><td class="crd-td">13,4k</td><td class="crd-td">63,2k</td><td class="crd-td">96,7k</td></tr>
<tr><td class="crd-td"><strong>Sahand</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,95, 46,11</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">93,6k</td></tr>
<tr><td class="crd-td"><strong>Naqadeh</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,96, 45,39</td><td class="crd-td">14,3k</td><td class="crd-td">64,8k</td><td class="crd-td">92,6k</td></tr>
<tr><td class="crd-td"><strong>Qorveh</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,17, 47,81</td><td class="crd-td">12k</td><td class="crd-td">61,7k</td><td class="crd-td">88,8k</td></tr>
<tr><td class="crd-td"><strong>Nahāvand</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,19, 48,37</td><td class="crd-td">13,9k</td><td class="crd-td">65,2k</td><td class="crd-td">86,4k</td></tr>
<tr><td class="crd-td"><strong>Meshgīn Shahr</strong></td><td class="crd-td">Ardebil</td><td class="crd-td">38,4, 47,68</td><td class="crd-td">9,6k</td><td class="crd-td">49,8k</td><td class="crd-td">84,1k</td></tr>
<tr><td class="crd-td"><strong>Nūr'ābād</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">34,07, 47,97</td><td class="crd-td">9,4k</td><td class="crd-td">49,2k</td><td class="crd-td">74,3k</td></tr>
<tr><td class="crd-td"><strong>Kāmyārān</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">34,8, 46,94</td><td class="crd-td">8k</td><td class="crd-td">41,9k</td><td class="crd-td">64,7k</td></tr>
<tr><td class="crd-td"><strong>Asad'ābād</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,78, 48,12</td><td class="crd-td">10,2k</td><td class="crd-td">48,4k</td><td class="crd-td">63,2k</td></tr>
<tr><td class="crd-td"><strong>Khoramdareh</strong></td><td class="crd-td">Zanjan</td><td class="crd-td">36,21, 49,2</td><td class="crd-td">8k</td><td class="crd-td">39,1k</td><td class="crd-td">62,8k</td></tr>
<tr><td class="crd-td"><strong>Javānrūd</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,81, 46,49</td><td class="crd-td">7k</td><td class="crd-td">33,3k</td><td class="crd-td">61,7k</td></tr>
<tr><td class="crd-td"><strong>Kangāvar</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,5, 47,97</td><td class="crd-td">11,1k</td><td class="crd-td">50,3k</td><td class="crd-td">58,2k</td></tr>
<tr><td class="crd-td"><strong>Tūyserkān</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,55, 48,44</td><td class="crd-td">7,7k</td><td class="crd-td">37,9k</td><td class="crd-td">57,2k</td></tr>
<tr><td class="crd-td"><strong>Bījār</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,87, 47,61</td><td class="crd-td">9,2k</td><td class="crd-td">44,2k</td><td class="crd-td">56,7k</td></tr>
<tr><td class="crd-td"><strong>Takāb</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,4, 47,11</td><td class="crd-td">9k</td><td class="crd-td">42,6k</td><td class="crd-td">56,3k</td></tr>
<tr><td class="crd-td"><strong>Aznā</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,46, 49,46</td><td class="crd-td">7k</td><td class="crd-td">35,4k</td><td class="crd-td">53,9k</td></tr>
<tr><td class="crd-td"><strong>Mākū</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">39,29, 44,46</td><td class="crd-td">7k</td><td class="crd-td">33,4k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Sardasht</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,16, 45,48</td><td class="crd-td">5,7k</td><td class="crd-td">30,9k</td><td class="crd-td">52,6k</td></tr>
<tr><td class="crd-td"><strong>Sarpol-e Dhahāb</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,46, 45,86</td><td class="crd-td">2,8k</td><td class="crd-td">27,4k</td><td class="crd-td">51,6k</td></tr>
<tr><td class="crd-td"><strong>Sarāb</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,94, 47,54</td><td class="crd-td">8,8k</td><td class="crd-td">36,7k</td><td class="crd-td">51,1k</td></tr>
<tr><td class="crd-td"><strong>Āzarshahr</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,76, 45,98</td><td class="crd-td">6,8k</td><td class="crd-td">31,7k</td><td class="crd-td">50,9k</td></tr>
<tr><td class="crd-td"><strong>Sonqor</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,78, 47,6</td><td class="crd-td">8,8k</td><td class="crd-td">40,8k</td><td class="crd-td">50,2k</td></tr>
<tr><td class="crd-td"><strong>Harsīn</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">34,27, 47,59</td><td class="crd-td">12,3k</td><td class="crd-td">55,1k</td><td class="crd-td">50,1k</td></tr>
<tr><td class="crd-td"><strong>Shāhīn Dezh</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">36,68, 46,57</td><td class="crd-td">5,5k</td><td class="crd-td">29k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Oshnavīeh</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">37,07, 45,07</td><td class="crd-td">5,6k</td><td class="crd-td">23,6k</td><td class="crd-td">45,1k</td></tr>
<tr><td class="crd-td"><strong>Khalkhāl</strong></td><td class="crd-td">Ardebil</td><td class="crd-td">37,62, 48,53</td><td class="crd-td">6,9k</td><td class="crd-td">35,6k</td><td class="crd-td">44,6k</td></tr>
<tr><td class="crd-td"><strong>Ṣaḥneh</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">34,48, 47,69</td><td class="crd-td">6,8k</td><td class="crd-td">31k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>Qeydār</strong></td><td class="crd-td">Zanjan</td><td class="crd-td">36,11, 48,59</td><td class="crd-td">3,5k</td><td class="crd-td">18,7k</td><td class="crd-td">39,6k</td></tr>
<tr><td class="crd-td"><strong>Hādīshahr</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,85, 45,66</td><td class="crd-td">6,2k</td><td class="crd-td">25,8k</td><td class="crd-td">39k</td></tr>
<tr><td class="crd-td"><strong>Dīvāndareh</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,91, 47,02</td><td class="crd-td">3,2k</td><td class="crd-td">19,1k</td><td class="crd-td">38,6k</td></tr>
<tr><td class="crd-td"><strong>'Ajab Shīr</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,48, 45,89</td><td class="crd-td">4,8k</td><td class="crd-td">23,1k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Aleshtar</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,86, 48,26</td><td class="crd-td">5,3k</td><td class="crd-td">23k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Dehlorān</strong></td><td class="crd-td">Ilam</td><td class="crd-td">32,69, 47,27</td><td class="crd-td">3,2k</td><td class="crd-td">23,5k</td><td class="crd-td">37,4k</td></tr>
<tr><td class="crd-td"><strong>Īvān</strong></td><td class="crd-td">Ilam</td><td class="crd-td">33,89, 46,16</td><td class="crd-td">4,9k</td><td class="crd-td">23,5k</td><td class="crd-td">35,5k</td></tr>
<tr><td class="crd-td"><strong>Sardrūd</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">38,03, 46,15</td><td class="crd-td">3,5k</td><td class="crd-td">16,5k</td><td class="crd-td">33,7k</td></tr>
<tr><td class="crd-td"><strong>Germī</strong></td><td class="crd-td">Ardebil</td><td class="crd-td">39,02, 48,08</td><td class="crd-td">5,9k</td><td class="crd-td">28,2k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Bahār</strong></td><td class="crd-td">Hamadan</td><td class="crd-td">34,91, 48,44</td><td class="crd-td">5,7k</td><td class="crd-td">25,9k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Malekān</strong></td><td class="crd-td">East Azarbaijan</td><td class="crd-td">37,14, 46,1</td><td class="crd-td">4,3k</td><td class="crd-td">20,2k</td><td class="crd-td">31,1k</td></tr>
<tr><td class="crd-td"><strong>Pol-e Dokhtar</strong></td><td class="crd-td">Lorestan</td><td class="crd-td">33,15, 47,71</td><td class="crd-td">3,5k</td><td class="crd-td">16,7k</td><td class="crd-td">29,9k</td></tr>
<tr><td class="crd-td"><strong>Dehgolān</strong></td><td class="crd-td">Kordestan</td><td class="crd-td">35,28, 47,42</td><td class="crd-td">2,5k</td><td class="crd-td">15,1k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Pāveh</strong></td><td class="crd-td">Kermanshah</td><td class="crd-td">35,04, 46,36</td><td class="crd-td">4,3k</td><td class="crd-td">17,6k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Showṭ</strong></td><td class="crd-td">West Azarbaijan</td><td class="crd-td">39,22, 44,77</td><td class="crd-td">3,7k</td><td class="crd-td">17,5k</td><td class="crd-td">28,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements in northwestern Azarbaijan and the northern Zagros highlands, 1925AD to 2025AD.</figcaption>
</figure>

## Khuzestan and the Persian Gulf Littoral

Khuzestan, Bushehr and Hormozgan contain 36 catalogued cities expanding from 627,1k in 1925AD to 5,45M in 2025AD (Table \ref{tab:belt-gulf}). Oil refining, maritime trade and post-1988AD reconstruction elevated Ahvāz (1,34M) and Bandar-e 'Abās (597,4k) far above early-century port levels, while Dezfūl (300,3k), Ābādān (262,6k), Bushehr (253,1k), Bandar-e Māhshahr (184,7k) and Khoramshahr (151k) record the demographic shock of the 1980-1988 war and subsequent petrochemical recovery [@Danaei2019Iran; @Talebi2025Water].

<figure class="crd-table-figure" id="tab:belt-gulf">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">settlement</th><th class="crd-th">ostan</th><th class="crd-th">coords</th><th class="crd-th">y1925</th><th class="crd-th">y1996</th><th class="crd-th">y2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ahvāz</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,32, 48,68</td><td class="crd-td">169,6k</td><td class="crd-td">805k</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Bandar-e 'Abās</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">27,19, 56,28</td><td class="crd-td">58,4k</td><td class="crd-td">273,6k</td><td class="crd-td">597,4k</td></tr>
<tr><td class="crd-td"><strong>Dezfūl</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,38, 48,41</td><td class="crd-td">42,4k</td><td class="crd-td">202,6k</td><td class="crd-td">300,3k</td></tr>
<tr><td class="crd-td"><strong>Ābādān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,34, 48,3</td><td class="crd-td">19,8k</td><td class="crd-td">206,1k</td><td class="crd-td">262,6k</td></tr>
<tr><td class="crd-td"><strong>Būshehr</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">28,97, 50,84</td><td class="crd-td">31,1k</td><td class="crd-td">143,6k</td><td class="crd-td">253,5k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Māhshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,56, 49,19</td><td class="crd-td">-</td><td class="crd-td">88,4k</td><td class="crd-td">184,7k</td></tr>
<tr><td class="crd-td"><strong>Andīmeshk</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,46, 48,35</td><td class="crd-td">17,3k</td><td class="crd-td">106,9k</td><td class="crd-td">153,3k</td></tr>
<tr><td class="crd-td"><strong>Khoramshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,44, 48,18</td><td class="crd-td">8,1k</td><td class="crd-td">105,6k</td><td class="crd-td">151k</td></tr>
<tr><td class="crd-td"><strong>Behbahān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,6, 50,24</td><td class="crd-td">20,1k</td><td class="crd-td">88,2k</td><td class="crd-td">139,1k</td></tr>
<tr><td class="crd-td"><strong>Īzeh</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,83, 49,87</td><td class="crd-td">15k</td><td class="crd-td">81,3k</td><td class="crd-td">135,4k</td></tr>
<tr><td class="crd-td"><strong>Borāzjān</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">29,27, 51,22</td><td class="crd-td">17,8k</td><td class="crd-td">80,2k</td><td class="crd-td">125,4k</td></tr>
<tr><td class="crd-td"><strong>Shūshtar</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,05, 48,85</td><td class="crd-td">16,5k</td><td class="crd-td">77,9k</td><td class="crd-td">115,6k</td></tr>
<tr><td class="crd-td"><strong>Masjed-e Soleymān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,94, 49,3</td><td class="crd-td">25,2k</td><td class="crd-td">116,9k</td><td class="crd-td">114k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Emām Khomeynī</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,44, 49,1</td><td class="crd-td">-</td><td class="crd-td">55,9k</td><td class="crd-td">88,9k</td></tr>
<tr><td class="crd-td"><strong>Shūsh</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">32,19, 48,24</td><td class="crd-td">11,3k</td><td class="crd-td">52,1k</td><td class="crd-td">87,5k</td></tr>
<tr><td class="crd-td"><strong>Rāmhormoz</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,28, 49,6</td><td class="crd-td">7,8k</td><td class="crd-td">37,2k</td><td class="crd-td">84,3k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Ganāveh</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">29,58, 50,52</td><td class="crd-td">11,4k</td><td class="crd-td">50,3k</td><td class="crd-td">83,3k</td></tr>
<tr><td class="crd-td"><strong>Mīnāb</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">27,13, 57,09</td><td class="crd-td">7,7k</td><td class="crd-td">44,8k</td><td class="crd-td">83k</td></tr>
<tr><td class="crd-td"><strong>Omīdiyeh</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,76, 49,7</td><td class="crd-td">13,1k</td><td class="crd-td">53,8k</td><td class="crd-td">76,5k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Kangān</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">27,83, 52,06</td><td class="crd-td">3,9k</td><td class="crd-td">18k</td><td class="crd-td">68,3k</td></tr>
<tr><td class="crd-td"><strong>Kūt-e Abdāllah</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,24, 48,66</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">63,8k</td></tr>
<tr><td class="crd-td"><strong>Ḥamīdiyā</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,48, 48,43</td><td class="crd-td">2,7k</td><td class="crd-td">13,1k</td><td class="crd-td">58,7k</td></tr>
<tr><td class="crd-td"><strong>Sūsangerd</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,56, 48,19</td><td class="crd-td">8,1k</td><td class="crd-td">39,2k</td><td class="crd-td">58,3k</td></tr>
<tr><td class="crd-td"><strong>Shādegān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,65, 48,66</td><td class="crd-td">9,7k</td><td class="crd-td">41,8k</td><td class="crd-td">47,3k</td></tr>
<tr><td class="crd-td"><strong>Khūrmūj</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">28,65, 51,38</td><td class="crd-td">5,3k</td><td class="crd-td">25,2k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Qeshm</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">26,95, 56,27</td><td class="crd-td">2,6k</td><td class="crd-td">13,6k</td><td class="crd-td">46,1k</td></tr>
<tr><td class="crd-td"><strong>Kīsh</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">26,56, 54,02</td><td class="crd-td">1,7k</td><td class="crd-td">8k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Dehbārez</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">27,44, 57,19</td><td class="crd-td">3,6k</td><td class="crd-td">19,5k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Chamrān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,71, 49,16</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Jam</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">27,83, 52,33</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">35,7k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Lengeh</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">26,56, 54,88</td><td class="crd-td">4,7k</td><td class="crd-td">21,1k</td><td class="crd-td">34,5k</td></tr>
<tr><td class="crd-td"><strong>Hendījān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,24, 49,71</td><td class="crd-td">5,3k</td><td class="crd-td">22,9k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Ḥājī Ābād</strong></td><td class="crd-td">Hormozgan</td><td class="crd-td">28,31, 55,9</td><td class="crd-td">2,8k</td><td class="crd-td">16,7k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Bāgh-e Malek</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">31,52, 49,89</td><td class="crd-td">3,1k</td><td class="crd-td">16,1k</td><td class="crd-td">29,9k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Deylam</strong></td><td class="crd-td">Bushehr</td><td class="crd-td">30,05, 50,16</td><td class="crd-td">3,4k</td><td class="crd-td">16,4k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Rāmshīr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">30,89, 49,41</td><td class="crd-td">5,3k</td><td class="crd-td">22,6k</td><td class="crd-td">28,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements in Khuzestan, Bushehr and Hormozgan ostans, 1925AD to 2025AD.</figcaption>
</figure>

## Central Plateau and Fars

Across Esfahan, Fars, Yazd, Kerman, Chahar Mahall and Bakhtiari and Kohgiluyeh and Buyer Ahmad, 63 catalogued cities climbed from 1,15M in 1925AD to 10,67M in 2025AD (Table \ref{tab:belt-plateau-fars}). Eṣfahān (2,22M) and Shīrāz (1,78M) anchor major industrial and university conurbations surrounded by fast-growing satellites (Khomeynī Shahr, Najafābād, Shāhīn Shahr, Marvdasht), while oasis capitals at Kermān (609,9k), Yazd (600,8k) and Kāshān (345,4k) dominate central desert trade and manufacturing corridors [@Hosseini2018Drivers; @Shabahang2022Comparativ].

<figure class="crd-table-figure" id="tab:belt-plateau-fars">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">settlement</th><th class="crd-th">ostan</th><th class="crd-th">coords</th><th class="crd-th">y1925</th><th class="crd-th">y1996</th><th class="crd-th">y2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Eṣfahān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,65, 51,67</td><td class="crd-td">276,9k</td><td class="crd-td">1,33M</td><td class="crd-td">2,22M</td></tr>
<tr><td class="crd-td"><strong>Shīrāz</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,61, 52,53</td><td class="crd-td">225,9k</td><td class="crd-td">1,05M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Kermān</strong></td><td class="crd-td">Kerman</td><td class="crd-td">30,28, 57,08</td><td class="crd-td">73k</td><td class="crd-td">385k</td><td class="crd-td">609,9k</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Yazd</td><td class="crd-td">31,9, 54,37</td><td class="crd-td">64,4k</td><td class="crd-td">326,8k</td><td class="crd-td">600,8k</td></tr>
<tr><td class="crd-td"><strong>Kāshān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">33,98, 51,43</td><td class="crd-td">36,3k</td><td class="crd-td">201,4k</td><td class="crd-td">345,4k</td></tr>
<tr><td class="crd-td"><strong>Khomeynī Shahr</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,69, 51,54</td><td class="crd-td">27,7k</td><td class="crd-td">165,9k</td><td class="crd-td">280,3k</td></tr>
<tr><td class="crd-td"><strong>Najaf Ābād</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,63, 51,37</td><td class="crd-td">37,5k</td><td class="crd-td">178,5k</td><td class="crd-td">266,9k</td></tr>
<tr><td class="crd-td"><strong>Sīrjān</strong></td><td class="crd-td">Kerman</td><td class="crd-td">29,45, 55,68</td><td class="crd-td">25,3k</td><td class="crd-td">135k</td><td class="crd-td">226,5k</td></tr>
<tr><td class="crd-td"><strong>Shahr-e Kord</strong></td><td class="crd-td">Chahar Mahall and Bakhtiari</td><td class="crd-td">32,33, 50,86</td><td class="crd-td">20,9k</td><td class="crd-td">100,5k</td><td class="crd-td">216k</td></tr>
<tr><td class="crd-td"><strong>Shāhīn Shahr</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,86, 51,55</td><td class="crd-td">14,7k</td><td class="crd-td">84,8k</td><td class="crd-td">196,6k</td></tr>
<tr><td class="crd-td"><strong>Rafsanjān</strong></td><td class="crd-td">Kerman</td><td class="crd-td">30,41, 55,99</td><td class="crd-td">18,7k</td><td class="crd-td">98,3k</td><td class="crd-td">183,7k</td></tr>
<tr><td class="crd-td"><strong>Marvdasht</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,87, 52,8</td><td class="crd-td">21,5k</td><td class="crd-td">103,6k</td><td class="crd-td">168,8k</td></tr>
<tr><td class="crd-td"><strong>Jahrom</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,5, 53,56</td><td class="crd-td">20,8k</td><td class="crd-td">94,2k</td><td class="crd-td">160,7k</td></tr>
<tr><td class="crd-td"><strong>Shahrezā</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,01, 51,86</td><td class="crd-td">19,8k</td><td class="crd-td">89,8k</td><td class="crd-td">153,1k</td></tr>
<tr><td class="crd-td"><strong>Yāsūj</strong></td><td class="crd-td">Kohgiluyeh and Buyer Ahmad</td><td class="crd-td">30,67, 51,59</td><td class="crd-td">11,5k</td><td class="crd-td">69,1k</td><td class="crd-td">152,6k</td></tr>
<tr><td class="crd-td"><strong>Jīroft</strong></td><td class="crd-td">Kerman</td><td class="crd-td">28,68, 57,74</td><td class="crd-td">9,5k</td><td class="crd-td">59,2k</td><td class="crd-td">147,9k</td></tr>
<tr><td class="crd-td"><strong>Bam</strong></td><td class="crd-td">Kerman</td><td class="crd-td">29,11, 58,36</td><td class="crd-td">13,8k</td><td class="crd-td">70,1k</td><td class="crd-td">144,5k</td></tr>
<tr><td class="crd-td"><strong>Fasā</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,94, 53,65</td><td class="crd-td">17,4k</td><td class="crd-td">81,7k</td><td class="crd-td">125,7k</td></tr>
<tr><td class="crd-td"><strong>Dūgonbadān</strong></td><td class="crd-td">Kohgiluyeh and Buyer Ahmad</td><td class="crd-td">30,36, 50,8</td><td class="crd-td">14,6k</td><td class="crd-td">70,4k</td><td class="crd-td">109,7k</td></tr>
<tr><td class="crd-td"><strong>Kāzerūn</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,62, 51,65</td><td class="crd-td">17,3k</td><td class="crd-td">81,7k</td><td class="crd-td">109,7k</td></tr>
<tr><td class="crd-td"><strong>Shahr-e Ṣadrā</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,8, 52,5</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">104,2k</td></tr>
<tr><td class="crd-td"><strong>Fūlādshahr</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,49, 51,4</td><td class="crd-td">8,2k</td><td class="crd-td">39,3k</td><td class="crd-td">100,3k</td></tr>
<tr><td class="crd-td"><strong>Meybod</strong></td><td class="crd-td">Yazd</td><td class="crd-td">32,25, 54,02</td><td class="crd-td">8,1k</td><td class="crd-td">38,1k</td><td class="crd-td">91,5k</td></tr>
<tr><td class="crd-td"><strong>Bahārestān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,49, 51,77</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">89,6k</td></tr>
<tr><td class="crd-td"><strong>Ardakān</strong></td><td class="crd-td">Yazd</td><td class="crd-td">32,31, 54,02</td><td class="crd-td">9,4k</td><td class="crd-td">44,4k</td><td class="crd-td">85,4k</td></tr>
<tr><td class="crd-td"><strong>Dārāb</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,75, 54,54</td><td class="crd-td">9,8k</td><td class="crd-td">48,1k</td><td class="crd-td">79,7k</td></tr>
<tr><td class="crd-td"><strong>Mobārakeh</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,35, 51,5</td><td class="crd-td">8,9k</td><td class="crd-td">46,4k</td><td class="crd-td">78,8k</td></tr>
<tr><td class="crd-td"><strong>Fīrūz'ābād</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,84, 52,57</td><td class="crd-td">10,2k</td><td class="crd-td">50,1k</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Ārān va Bīdgol</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">34,06, 51,48</td><td class="crd-td">9,4k</td><td class="crd-td">-</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Lār</strong></td><td class="crd-td">Fars</td><td class="crd-td">27,68, 54,34</td><td class="crd-td">9,9k</td><td class="crd-td">51,7k</td><td class="crd-td">70,4k</td></tr>
<tr><td class="crd-td"><strong>Zarand</strong></td><td class="crd-td">Kerman</td><td class="crd-td">30,81, 56,56</td><td class="crd-td">8,1k</td><td class="crd-td">41,3k</td><td class="crd-td">68,5k</td></tr>
<tr><td class="crd-td"><strong>Ābādeh</strong></td><td class="crd-td">Fars</td><td class="crd-td">28,83, 53,17</td><td class="crd-td">10,5k</td><td class="crd-td">48,9k</td><td class="crd-td">67,1k</td></tr>
<tr><td class="crd-td"><strong>Golpāyegān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">33,45, 50,29</td><td class="crd-td">9k</td><td class="crd-td">40,6k</td><td class="crd-td">66,8k</td></tr>
<tr><td class="crd-td"><strong>Borūjen</strong></td><td class="crd-td">Chahar Mahall and Bakhtiari</td><td class="crd-td">31,97, 51,29</td><td class="crd-td">9,1k</td><td class="crd-td">42,9k</td><td class="crd-td">64,7k</td></tr>
<tr><td class="crd-td"><strong>Dehdasht</strong></td><td class="crd-td">Kohgiluyeh and Buyer Ahmad</td><td class="crd-td">30,79, 50,57</td><td class="crd-td">6,3k</td><td class="crd-td">37,3k</td><td class="crd-td">64,7k</td></tr>
<tr><td class="crd-td"><strong>Zarīn Shahr</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,39, 51,38</td><td class="crd-td">11,3k</td><td class="crd-td">50,8k</td><td class="crd-td">63,3k</td></tr>
<tr><td class="crd-td"><strong>Kahnūj</strong></td><td class="crd-td">Kerman</td><td class="crd-td">27,94, 57,7</td><td class="crd-td">4k</td><td class="crd-td">22,6k</td><td class="crd-td">59,7k</td></tr>
<tr><td class="crd-td"><strong>Shahr-e Bābak</strong></td><td class="crd-td">Kerman</td><td class="crd-td">30,12, 55,12</td><td class="crd-td">5,6k</td><td class="crd-td">31,6k</td><td class="crd-td">58,6k</td></tr>
<tr><td class="crd-td"><strong>Neyrīz</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,2, 54,33</td><td class="crd-td">8k</td><td class="crd-td">37,4k</td><td class="crd-td">56,5k</td></tr>
<tr><td class="crd-td"><strong>Dorcheh Pīāz</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,62, 51,56</td><td class="crd-td">7,4k</td><td class="crd-td">33,4k</td><td class="crd-td">54,2k</td></tr>
<tr><td class="crd-td"><strong>Bāfq</strong></td><td class="crd-td">Yazd</td><td class="crd-td">31,6, 55,4</td><td class="crd-td">5,6k</td><td class="crd-td">25,1k</td><td class="crd-td">51,6k</td></tr>
<tr><td class="crd-td"><strong>Eqlīd</strong></td><td class="crd-td">Fars</td><td class="crd-td">30,9, 52,7</td><td class="crd-td">7,7k</td><td class="crd-td">36k</td><td class="crd-td">50,3k</td></tr>
<tr><td class="crd-td"><strong>Lordegān</strong></td><td class="crd-td">Chahar Mahall and Bakhtiari</td><td class="crd-td">31,51, 50,83</td><td class="crd-td">2,7k</td><td class="crd-td">16,9k</td><td class="crd-td">46k</td></tr>
<tr><td class="crd-td"><strong>Ṭabas</strong></td><td class="crd-td">Yazd</td><td class="crd-td">33,6, 56,92</td><td class="crd-td">4k</td><td class="crd-td">25,7k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Falāvarjān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,56, 51,51</td><td class="crd-td">7,1k</td><td class="crd-td">36,5k</td><td class="crd-td">42,8k</td></tr>
<tr><td class="crd-td"><strong>Estahbān</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,13, 54,04</td><td class="crd-td">7,2k</td><td class="crd-td">31,2k</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Sheybāni</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">30,95, 51,62</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Bāft</strong></td><td class="crd-td">Kerman</td><td class="crd-td">29,23, 56,6</td><td class="crd-td">5,3k</td><td class="crd-td">27,9k</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Gerāsh</strong></td><td class="crd-td">Fars</td><td class="crd-td">27,67, 54,14</td><td class="crd-td">4,7k</td><td class="crd-td">21,9k</td><td class="crd-td">39,1k</td></tr>
<tr><td class="crd-td"><strong>Mehrīz</strong></td><td class="crd-td">Yazd</td><td class="crd-td">31,58, 54,44</td><td class="crd-td">4,8k</td><td class="crd-td">25,2k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Qahderījān</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,58, 51,45</td><td class="crd-td">6,2k</td><td class="crd-td">27,1k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Zarqān</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,77, 52,72</td><td class="crd-td">3,6k</td><td class="crd-td">18,9k</td><td class="crd-td">36,6k</td></tr>
<tr><td class="crd-td"><strong>Farokh Shahr</strong></td><td class="crd-td">Chahar Mahall and Bakhtiari</td><td class="crd-td">32,27, 50,98</td><td class="crd-td">5,6k</td><td class="crd-td">26,2k</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Kavār</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,21, 52,69</td><td class="crd-td">3,1k</td><td class="crd-td">16,6k</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Fārsān</strong></td><td class="crd-td">Chahar Mahall and Bakhtiari</td><td class="crd-td">32,26, 50,56</td><td class="crd-td">4,3k</td><td class="crd-td">20,1k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Lāmerd</strong></td><td class="crd-td">Fars</td><td class="crd-td">27,33, 53,18</td><td class="crd-td">3,1k</td><td class="crd-td">15,4k</td><td class="crd-td">33,3k</td></tr>
<tr><td class="crd-td"><strong>Abarkūh</strong></td><td class="crd-td">Fars</td><td class="crd-td">31,13, 53,28</td><td class="crd-td">4,3k</td><td class="crd-td">19,2k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Nā'īn</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,86, 53,09</td><td class="crd-td">4,3k</td><td class="crd-td">20,8k</td><td class="crd-td">31,1k</td></tr>
<tr><td class="crd-td"><strong>Semīrom</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">31,42, 51,57</td><td class="crd-td">5,5k</td><td class="crd-td">24,5k</td><td class="crd-td">30,6k</td></tr>
<tr><td class="crd-td"><strong>Ṣafāshahr</strong></td><td class="crd-td">Fars</td><td class="crd-td">30,61, 53,2</td><td class="crd-td">3,7k</td><td class="crd-td">17,6k</td><td class="crd-td">30,6k</td></tr>
<tr><td class="crd-td"><strong>Qā'emiyeh</strong></td><td class="crd-td">Fars</td><td class="crd-td">29,85, 51,59</td><td class="crd-td">3,8k</td><td class="crd-td">20,5k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Goldasht</strong></td><td class="crd-td">Esfahan</td><td class="crd-td">32,63, 51,44</td><td class="crd-td">4k</td><td class="crd-td">19,3k</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Bardsīr</strong></td><td class="crd-td">Kerman</td><td class="crd-td">29,92, 56,57</td><td class="crd-td">5,1k</td><td class="crd-td">26k</td><td class="crd-td">28,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlements across Esfahan, Fars, Yazd, Kerman, Chahar Mahall and Bakhtiari and Kohgiluyeh and Buyer Ahmad, 1925AD to 2025AD.</figcaption>
</figure>

## Khorasan and the Southeastern Frontier

Razavi Khorasan, North Khorasan, South Khorasan and Sistan and Baluchestan encompass 31 catalogued cities growing from 765,7k in 1925AD to 6,03M in 2025AD (Table \ref{tab:belt-khorasan-se}). Mashhad (3,4M) holds more than half the entire macro-belt's urban population, bolstered by religious pilgrimage, domestic migration and Afghan refugee settlement, while Zāhedān (666,7k), Neyshābūr (299,8k), Sabzevār (276k), Bojnūrd (259k), Bīrjand (233,7k) and Chābahār (121k) structure Iran's eastern transit frontier [@PARSIPOUR2019Cities; @Danaei2019Iran].

<figure class="crd-table-figure" id="tab:belt-khorasan-se">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">settlement</th><th class="crd-th">ostan</th><th class="crd-th">coords</th><th class="crd-th">y1925</th><th class="crd-th">y1996</th><th class="crd-th">y2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,3, 59,61</td><td class="crd-td">365k</td><td class="crd-td">1,89M</td><td class="crd-td">3,4M</td></tr>
<tr><td class="crd-td"><strong>Zāhedān</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">29,5, 60,86</td><td class="crd-td">84,7k</td><td class="crd-td">419,5k</td><td class="crd-td">666,7k</td></tr>
<tr><td class="crd-td"><strong>Nīshābūr</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,21, 58,8</td><td class="crd-td">31,8k</td><td class="crd-td">158,8k</td><td class="crd-td">299,9k</td></tr>
<tr><td class="crd-td"><strong>Sabzevār</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,21, 57,68</td><td class="crd-td">34,7k</td><td class="crd-td">170,7k</td><td class="crd-td">276,4k</td></tr>
<tr><td class="crd-td"><strong>Bojnūrd</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">37,47, 57,33</td><td class="crd-td">26,3k</td><td class="crd-td">134,8k</td><td class="crd-td">259,7k</td></tr>
<tr><td class="crd-td"><strong>Bīrjand</strong></td><td class="crd-td">South Khorasan</td><td class="crd-td">32,87, 59,22</td><td class="crd-td">23,7k</td><td class="crd-td">127,6k</td><td class="crd-td">231k</td></tr>
<tr><td class="crd-td"><strong>Zābol</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">31,03, 61,49</td><td class="crd-td">21,3k</td><td class="crd-td">100,9k</td><td class="crd-td">153,1k</td></tr>
<tr><td class="crd-td"><strong>Īrānshahr</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">27,2, 60,68</td><td class="crd-td">13,2k</td><td class="crd-td">77k</td><td class="crd-td">129k</td></tr>
<tr><td class="crd-td"><strong>Chābahār</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">25,29, 60,64</td><td class="crd-td">7k</td><td class="crd-td">34,6k</td><td class="crd-td">121,1k</td></tr>
<tr><td class="crd-td"><strong>Kāshmar</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,24, 58,47</td><td class="crd-td">13,7k</td><td class="crd-td">69,2k</td><td class="crd-td">116k</td></tr>
<tr><td class="crd-td"><strong>Qūchān</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">37,11, 58,51</td><td class="crd-td">17,5k</td><td class="crd-td">85,8k</td><td class="crd-td">115,2k</td></tr>
<tr><td class="crd-td"><strong>Torbat-e Jām</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,24, 60,62</td><td class="crd-td">19,4k</td><td class="crd-td">68,5k</td><td class="crd-td">113,9k</td></tr>
<tr><td class="crd-td"><strong>Shīrvān</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">37,4, 57,93</td><td class="crd-td">-</td><td class="crd-td">70k</td><td class="crd-td">93,8k</td></tr>
<tr><td class="crd-td"><strong>Sarāvān</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">27,37, 62,33</td><td class="crd-td">7,8k</td><td class="crd-td">41,2k</td><td class="crd-td">68,1k</td></tr>
<tr><td class="crd-td"><strong>Esfarāyen</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">37,08, 57,51</td><td class="crd-td">8k</td><td class="crd-td">41,1k</td><td class="crd-td">67,5k</td></tr>
<tr><td class="crd-td"><strong>Khāsh</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">28,22, 61,22</td><td class="crd-td">6,4k</td><td class="crd-td">38,9k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Ṭāybād</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">34,74, 60,78</td><td class="crd-td">10,7k</td><td class="crd-td">39,3k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Chenārān</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,65, 59,12</td><td class="crd-td">6,3k</td><td class="crd-td">32,1k</td><td class="crd-td">61,1k</td></tr>
<tr><td class="crd-td"><strong>Konārak</strong></td><td class="crd-td">Sistan and Baluchestan</td><td class="crd-td">25,36, 60,4</td><td class="crd-td">2,6k</td><td class="crd-td">14,9k</td><td class="crd-td">49,1k</td></tr>
<tr><td class="crd-td"><strong>Qā'en</strong></td><td class="crd-td">South Khorasan</td><td class="crd-td">33,73, 59,18</td><td class="crd-td">4,6k</td><td class="crd-td">25,2k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Sarakhs</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,54, 61,16</td><td class="crd-td">5,2k</td><td class="crd-td">28,5k</td><td class="crd-td">47,8k</td></tr>
<tr><td class="crd-td"><strong>Gonābād</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">34,35, 58,68</td><td class="crd-td">5,8k</td><td class="crd-td">30,1k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Farīmān</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,71, 59,85</td><td class="crd-td">5,8k</td><td class="crd-td">27k</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Golbahār</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">36,57, 59,19</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">41,8k</td></tr>
<tr><td class="crd-td"><strong>Dargaz</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">37,44, 59,11</td><td class="crd-td">6,5k</td><td class="crd-td">31,2k</td><td class="crd-td">41,7k</td></tr>
<tr><td class="crd-td"><strong>Khvāf</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">34,57, 60,14</td><td class="crd-td">3,5k</td><td class="crd-td">16,8k</td><td class="crd-td">37,6k</td></tr>
<tr><td class="crd-td"><strong>Bardaskan</strong></td><td class="crd-td">Razavi Khorasan</td><td class="crd-td">35,26, 57,97</td><td class="crd-td">3,6k</td><td class="crd-td">17,4k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Āshkhāneh</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">37,56, 56,92</td><td class="crd-td">2,7k</td><td class="crd-td">12,9k</td><td class="crd-td">28,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Catalogued settlements in Razavi Khorasan, North Khorasan, South Khorasan and Sistan and Baluchestan, 1925AD to 2025AD.</figcaption>
</figure>

# Limitations

Three constraints govern this settlement gazetteer. First, municipal annexations periodically absorbed neighbouring villages into expanding city boundaries - notably around Tehran, Mashhad, Isfahan and Bojnurd [@PARSIPOUR2019Cities; @Berlin2018Drivers] - creating stepped jumps in census series that reflect administrative reclassification alongside organic migration. Second, 24 mid-sized towns lack standalone 1996AD entries in the underlying harmonised table because they either crossed municipal status thresholds later or were enumerated inside parent districts prior to separation, though all 281 settlements possess full series from 2016AD to 2025AD. Third, because Iran postponed its 2021AD national census, 2025AD settlement values represent civil-registration and urban-growth projections pending the next door-to-door enumeration.

# Conclusion

Iran's 281 catalogued settlements document an extraordinary century of urban multiplication, rising 8,5-fold from 6,84M residents in 1925AD to 58,18M in 2025AD. While Tehrān (9,86M) and its western commuter belt (Karaj, Eslāmshahr, Shahrīār, Qods) remain Iran's undisputed metropolitan anchor, high-order regional capitals in Mashhad (3,4M), Eṣfahān (2,22M), Shīrāz (1,78M), Tabrīz (1,77M), Qom (1,36M) and Ahvāz (1,34M) sustain a balanced, near-unitary rank-size hierarchy ($\alpha = 1{,}01$) across the plateau's disparate ecological belts.

# Appendix

Table \ref{tab:foundation-years} documents the nine catalogued Iranian cities governed by explicit foundation-year truncation bounds so that pre-foundation periods never carry synthetic urban totals.

<figure class="crd-table-figure" id="tab:foundation-years">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Ostan</th><th class="crd-th">Foundation</th><th class="crd-th">1996AD</th><th class="crd-th">2016AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Khoramshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1812AD</td><td class="crd-td">105,6k</td><td class="crd-td">133,1k</td><td class="crd-td">151k</td></tr>
<tr><td class="crd-td"><strong>Ābādān</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1909AD</td><td class="crd-td">206,1k</td><td class="crd-td">231,5k</td><td class="crd-td">262,6k</td></tr>
<tr><td class="crd-td"><strong>Karaj</strong></td><td class="crd-td">Alborz</td><td class="crd-td">1920AD</td><td class="crd-td">941k</td><td class="crd-td">1,59M</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Emām Khomeynī</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1929AD</td><td class="crd-td">55,9k</td><td class="crd-td">78,4k</td><td class="crd-td">88,9k</td></tr>
<tr><td class="crd-td"><strong>Shīrvān</strong></td><td class="crd-td">North Khorasan</td><td class="crd-td">1938AD</td><td class="crd-td">70k</td><td class="crd-td">82,7k</td><td class="crd-td">93,8k</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Māhshahr</strong></td><td class="crd-td">Khuzestan</td><td class="crd-td">1945AD</td><td class="crd-td">88,4k</td><td class="crd-td">162,8k</td><td class="crd-td">184,7k</td></tr>
<tr><td class="crd-td"><strong>Shahrīār</strong></td><td class="crd-td">Tehran</td><td class="crd-td">1953AD</td><td class="crd-td">45,5k</td><td class="crd-td">309,6k</td><td class="crd-td">351,2k</td></tr>
<tr><td class="crd-td"><strong>Eslāmshahr</strong></td><td class="crd-td">Tehran</td><td class="crd-td">1975AD</td><td class="crd-td">265,4k</td><td class="crd-td">448,1k</td><td class="crd-td">508,3k</td></tr>
<tr><td class="crd-td"><strong>Qods</strong></td><td class="crd-td">Tehran</td><td class="crd-td">1989AD</td><td class="crd-td">138,3k</td><td class="crd-td">309,6k</td><td class="crd-td">351,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Iranian settlements carrying explicit historical foundation-year bounds in the gazetteer.</figcaption>
</figure>

# Sources

::: {#refs}
:::

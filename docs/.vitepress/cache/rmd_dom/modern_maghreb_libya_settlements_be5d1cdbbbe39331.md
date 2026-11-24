---
title: "The Maghreb and Libya after Independence"
subtitle: "Settlement Gazetteer for Morocco, Algeria, Tunisia, Libya and Western Sahara"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_maghreb_libya_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_maghreb_libya_spatial.png"
hero_caption: "Spatial distribution of 3.054 catalogued urban, communal and oasis settlements across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD."
hero_label: "fig:hero-modern-maghreb-libya-settlements"
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

This settlement gazetteer catalogues 3.054 urban centres, rural communes, secondary provincial capitals, steppe market towns and Saharan oasis settlements across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD. Drawing on national census publications from HCP Morocco (1960–2024, including full 2014 and 2024 communal enumerations), ONS Algeria (1966–2008, including 1998 and 2008 commune tables), INS Tunisia (1956–2024), BSC Libya (1954–2006) and Spanish colonial and Moroccan regional enumerations in Western Sahara, the ledger consolidates 3.309 initial candidate localities after merging 255 duplicate aliases and subordinate metropolitan suburbs into canonical cores. Spanning the entire 103,8M macro-domain at the contemporary horizon, the register conforms closely to a near-unitary Zipf rank-size slope ($\alpha = 1{,}021$, $R^2 = 0{,}908$). Ordered by national jurisdiction, the tables document the emergence of coastal metropolitan corridors around Casablanca, Rabat-Salé, Tanger, Algiers, Oran, Tūnis, Ṣafāqis, Ṭarābulus and Banghāzī alongside high-growth High Plateaux and Saharan hubs at Djelfa, Batna, Ouargla, Ghardaïa, Sabhā, Tamanrasset, Adrar and Boujdour.

<figure class="crd-figure-block" id="fig:hero-modern-maghreb-libya-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig1_modern_maghreb_libya_spatial.png" alt="fig:hero-modern-maghreb-libya-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 3.054 catalogued urban, communal and oasis settlements across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD.</figcaption>
</figure>

# Background

Urbanisation across the post-colonial Maghreb and Libya proceeded at a pace unmatched by earlier centuries. In the early 1950s, when Libya attained independence and Morocco and Tunisia stood in the final five years of their French and Spanish protectorates, the largest cities across the five territories were Casablanca (682,4k in 1952AD), Algiers (587,6k in 1954AD), Tūnis (401,6k), Oran (277,6k), Rabat (266k), Fès (244,8k), Marrakech (222,3k), Banghāzī (214,3k) and Ṭarābulus (129,7k in 1954AD). Over the ensuing seven decades, post-colonial public health advances lowered infant mortality sharply while rural land fragmentation, drought cycles and industrialisation pushed millions of villagers into littoral ports and provincial capitals [@Amara2018Rural; @Conte2024Marriage; @O2026Oncogeriat; @D2026Spatial].

Regional urban trajectories reflect distinct political economies. In Algeria, wartime regroupment between 1954AD and 1962AD and the 1962AD departure of European settlers restructured urban housing overnight before state industrialisation, fertility shifts and post-1980s administrative subdivisions elevated steppe and Saharan towns [@Kamilia2025Relationsh; @Abbas2024Impact; @Saidi2025Role; @OuadahBedidi2013Fertility]. In Morocco, an export-oriented Atlantic corridor from Kénitra and Rabat-Salé through Casablanca to Safi was joined after 1990AD by rapid port-industrial expansion in Tangier-Assilah and tourism-service growth in Marrakech and Agadir [@Bouhoudan2024Impact; @M2026Systematic]. Tunisia concentrated industry and services along the Tunis-Sousse-Sfax littoral arc [@Amara2018Rural], while Libya's oil wealth funded simultaneous hyper-urbanisation in Tripoli, Misratah and Benghazi and aquifer-fed oasis cities across Fezzan.

# Methodology

Each settlement record in HANDBOOK reconciles municipal and communal census counts across national statistical archives onto fixed WGS84 coordinates, harmonising French, Spanish, Italian and Arabic transliterations into canonical Latin forms. To prevent metropolitan double counting and variant-spelling duplication, 255 duplicate aliases and subordinate suburbs identified in the ledger reconciliation pass were folded into their parent urban agglomerations, leaving 3.054 independent urban, communal and oasis localities across Morocco (HCP 2014/2024 enrichment), Algeria (ONS 1998/2008 enrichment), Tunisia (INS), Libya (BSC) and Western Sahara (detailed by jurisdiction in Table 1). Municipal series are anchored to national census benchmarks—HCP Morocco (1960, 1971, 1982, 1994, 2004, 2014 and 2024), ONS Algeria (1966, 1977, 1987, 1998 and 2008), INS Tunisia (1956, 1966, 1975, 1984, 1994, 2004, 2014 and 2024), BSC Libya (1954, 1964, 1973, 1984, 1995 and 2006) and Spanish colonial and HCP regional counts for Western Sahara. Spatial disaggregation pairs these settlement anchors with geoBoundaries administrative polygons [@Runfola2020GeoBoundaries] under strictly mass-conserving pycnophylactic scaling and non-stationary Matérn ($\nu = 3/2$) kriging.

# Testing and Validation

Across all 3.054 catalogued settlements, rank-size calibration produces a Zipf exponent of $\alpha = 1{,}021$ ($R^2 = 0{,}908$), confirming that post-independence state formation produced a balanced national and regional urban pyramid rather than extreme primacy [@Bousmaha2021Growth; @Bousmaha2024Review]. Combining multi-decadal metropolitan series (1952AD–2025AD) with comprehensive communal enumerations across Morocco (HCP 2014/2024), Algeria (ONS 1998/2008) and Tunisia (INS) eliminates lower-tail truncation across rural and semi-arid districts. Figure 2 plots the aggregate regional trajectory alongside leading sub-regional benchmarks, while Table 1 summarises jurisdiction-level settlement counts, median peak populations and leading metropolises across all five territories.

<figure class="crd-figure-block" id="fig:trajectory-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig2_modern_maghreb_libya_trajectory.png" alt="fig:trajectory-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate population growth across the Maghreb and Libya from 1951AD to 2025AD (left) and leading sub-regional benchmarks at the contemporary horizon (right).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">Active Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">1.433</td><td class="crd-td">46,9%</td><td class="crd-td">10,7k</td><td class="crd-td">Casablanca (4,37M)</td><td class="crd-td">1952AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">1.346</td><td class="crd-td">44,1%</td><td class="crd-td">12,9k</td><td class="crd-td">Algiers (3,42M)</td><td class="crd-td">1954AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">156</td><td class="crd-td">5,1%</td><td class="crd-td">36,2k</td><td class="crd-td">Tūnis (693,5k)</td><td class="crd-td">1956AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">113</td><td class="crd-td">3,7%</td><td class="crd-td">15,1k</td><td class="crd-td">Ṭarābulus (1,78M)</td><td class="crd-td">1954AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Western Sahara</strong></td><td class="crd-td">6</td><td class="crd-td">0,2%</td><td class="crd-td">6,5k</td><td class="crd-td">Meharrize (12,9k)</td><td class="crd-td">1967AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Total Gazetteer</strong></td><td class="crd-td">3.054</td><td class="crd-td">100%</td><td class="crd-td">12,1k</td><td class="crd-td">Casablanca (4,37M)</td><td class="crd-td">1951AD-2025AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued settlement counts, territorial shares, median peak sizes and leading metropolises across the five Maghreb and Libyan jurisdictions (3.054 total localities).</figcaption>
</figure>

# Results

## Morocco

Morocco's enriched HCP urban and communal gazetteer (over 1,4k localities across all sixteen territorial sub-regions) is paced by the Atlantic corridor from Casablanca (682,4k in 1952AD to 3,26M in 2025AD, peaking at 4,37M across its wider agglomeration in 2016AD and 3,36M in its prefecture in 2014AD), Salé (958,4k), Sidi Moumen (551,4k in 2024AD), Kénitra (514,9k), Témara (313,5k peak in 2014AD) and Dar Bouazza (307,2k in 2025AD), alongside Tanger's surge from 128,5k in 1952AD to 1,29M in 2025AD and interior expansion in Fès (1,2M), Marrakech (1,03M), Oujda (614k peak), Meknès (601k peak) and Agadir (538k peak) (Table 2).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">33,59, -7,61</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">2,9M</td><td class="crd-td">3,26M</td><td class="crd-td">4,37M (2016AD)</td></tr>
<tr><td class="crd-td"><strong>Tanger</strong></td><td class="crd-td">35,77, -5,8</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">604k</td><td class="crd-td">1,29M</td><td class="crd-td">1,29M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Fès</strong></td><td class="crd-td">34,03, -5</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">874,6k</td><td class="crd-td">1,2M</td><td class="crd-td">1,2M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">31,63, -8</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">759,6k</td><td class="crd-td">1,03M</td><td class="crd-td">1,03M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Salé</strong></td><td class="crd-td">34,05, -6,8</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">682,1k</td><td class="crd-td">958,4k</td><td class="crd-td">958,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">34,01, -6,83</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">624,6k</td><td class="crd-td">522,9k</td><td class="crd-td">625,3k (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">34,68, -1,91</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">382,8k</td><td class="crd-td">513,4k</td><td class="crd-td">614k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Meknès</strong></td><td class="crd-td">33,89, -5,55</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">444k</td><td class="crd-td">564,4k</td><td class="crd-td">601k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Sidi Moumen</strong></td><td class="crd-td">33,59, -7,53</td><td class="crd-td">2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">551,4k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">30,42, -9,6</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">306,2k</td><td class="crd-td">511,9k</td><td class="crd-td">538k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Hay El Hassani</strong></td><td class="crd-td">31,55, -8,73</td><td class="crd-td">2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">537,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Hay Hassani</strong></td><td class="crd-td">33,55, -7,66</td><td class="crd-td">2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">537,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Kénitra</strong></td><td class="crd-td">34,26, -6,58</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">330,8k</td><td class="crd-td">514,9k</td><td class="crd-td">514,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tétouan</strong></td><td class="crd-td">35,58, -5,37</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">302,6k</td><td class="crd-td">428,7k</td><td class="crd-td">428,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aïn Chock</strong></td><td class="crd-td">33,54, -7,61</td><td class="crd-td">2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">374,7k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">32,3, -9,24</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">275,5k</td><td class="crd-td">328,5k</td><td class="crd-td">328,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Témara</strong></td><td class="crd-td">33,93, -6,91</td><td class="crd-td">1982AD-2025AD</td><td class="crd-td">181,3k</td><td class="crd-td">301,3k</td><td class="crd-td">313,5k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Dar Bouazza</strong></td><td class="crd-td">33,52, -7,82</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">79,3k</td><td class="crd-td">307,2k</td><td class="crd-td">307,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Laayoune</strong></td><td class="crd-td">27,15, -13,2</td><td class="crd-td">1954AD-2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">270k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Laâyoune</strong></td><td class="crd-td">33,67, -7,07</td><td class="crd-td">2014AD-2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">262,8k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">33,26, -8,51</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">133,7k</td><td class="crd-td">240,8k</td><td class="crd-td">240,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aït Melloul</strong></td><td class="crd-td">30,34, -9,5</td><td class="crd-td">1982AD-2025AD</td><td class="crd-td">108,7k</td><td class="crd-td">213,8k</td><td class="crd-td">213,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Béni Mellal</strong></td><td class="crd-td">32,34, -6,35</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">153,6k</td><td class="crd-td">212,5k</td><td class="crd-td">212,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mohammédia</strong></td><td class="crd-td">33,69, -7,38</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">181k</td><td class="crd-td">197,1k</td><td class="crd-td">208,6k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Bouskoura</strong></td><td class="crd-td">33,45, -7,65</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">56,3k</td><td class="crd-td">203,2k</td><td class="crd-td">203,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Khouribga</strong></td><td class="crd-td">32,88, -6,91</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">160,5k</td><td class="crd-td">198,7k</td><td class="crd-td">198,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Settat</strong></td><td class="crd-td">33, -7,62</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">108k</td><td class="crd-td">174k</td><td class="crd-td">174k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Berrechid</strong></td><td class="crd-td">33,27, -7,59</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">73,7k</td><td class="crd-td">171,1k</td><td class="crd-td">171,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dakhla</strong></td><td class="crd-td">30,41, -9,55</td><td class="crd-td">2014AD-2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">165,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Dakhla</strong></td><td class="crd-td">23,72, -15,95</td><td class="crd-td">1960AD-2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">165,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Nador</strong></td><td class="crd-td">35,17, -2,93</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">124,4k</td><td class="crd-td">160,4k</td><td class="crd-td">161,7k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Aïn Sebaâ</strong></td><td class="crd-td">33,6, -7,54</td><td class="crd-td">2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">155,8k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">34,21, -4,01</td><td class="crd-td">1952AD-2025AD</td><td class="crd-td">131,9k</td><td class="crd-td">152,9k</td><td class="crd-td">152,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Inezgane</strong></td><td class="crd-td">30,36, -9,54</td><td class="crd-td">1982AD-2025AD</td><td class="crd-td">104,2k</td><td class="crd-td">139,5k</td><td class="crd-td">139,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Larache</strong></td><td class="crd-td">35,19, -6,16</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">100,2k</td><td class="crd-td">135,6k</td><td class="crd-td">135,6k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 35 of 1.433 catalogued settlements in Morocco ordered by peak population (1952AD-2025AD).</figcaption>
</figure>

## Algeria

Algeria's enriched ONS municipal and communal cohort (over 1,3k localities spanning all 48 wilayas) captures both northern metropolitan growth and interior steppe expansion. Alongside the northern coastal hubs of Algiers (587,6k in 1954AD to a peak of 3,42M in 2011AD and 3M in 2025AD), Oran (1,02M), Constantine (568,4k), Annaba (434,8k) and Blida (420,9k), High Plateaux and Saharan cities recorded extraordinary multipliers: Batna reached 367,3k, Djelfa 337,3k, Sétif 319,9k, Biskra 259,7k, El Oued 236,6k, Ouargla 215,6k, Béchar 209,6k, Ghardaïa 181,3k, Tamanrasset 103,7k and Adrar 86,6k (Table 3) [@Abdelhafid2023Problem; @Saidi2025Role].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">36,78, 3,06</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">2,14M</td><td class="crd-td">3M</td><td class="crd-td">3,42M (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">35,7, -0,64</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">748,3k</td><td class="crd-td">1,02M</td><td class="crd-td">1,02M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">36,37, 6,61</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">472,7k</td><td class="crd-td">568,4k</td><td class="crd-td">568,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">36,9, 7,77</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">333,7k</td><td class="crd-td">434,8k</td><td class="crd-td">434,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">36,47, 2,83</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">264,2k</td><td class="crd-td">420,9k</td><td class="crd-td">420,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">35,56, 6,17</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">254,8k</td><td class="crd-td">367,3k</td><td class="crd-td">367,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Djelfa</strong></td><td class="crd-td">34,67, 3,26</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">175,9k</td><td class="crd-td">337,3k</td><td class="crd-td">337,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sétif</strong></td><td class="crd-td">36,19, 5,41</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">221,8k</td><td class="crd-td">319,9k</td><td class="crd-td">319,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sidi bel Abbès</strong></td><td class="crd-td">35,19, -0,63</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">188,9k</td><td class="crd-td">266,6k</td><td class="crd-td">266,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">34,85, 5,73</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">182,3k</td><td class="crd-td">259,7k</td><td class="crd-td">259,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tébessa</strong></td><td class="crd-td">35,4, 8,12</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">161,6k</td><td class="crd-td">246,7k</td><td class="crd-td">246,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>El Oued</strong></td><td class="crd-td">33,36, 6,86</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">153,8k</td><td class="crd-td">236,6k</td><td class="crd-td">236,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">36,88, 6,91</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">172,1k</td><td class="crd-td">232,1k</td><td class="crd-td">232,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tiaret</strong></td><td class="crd-td">35,37, 1,32</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">154,4k</td><td class="crd-td">227k</td><td class="crd-td">227k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Béjaïa</strong></td><td class="crd-td">36,76, 5,08</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">150,3k</td><td class="crd-td">223,5k</td><td class="crd-td">223,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">34,88, -1,31</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">159,6k</td><td class="crd-td">220,2k</td><td class="crd-td">220,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ouargla</strong></td><td class="crd-td">31,95, 5,33</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">145k</td><td class="crd-td">215,6k</td><td class="crd-td">215,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Béchar</strong></td><td class="crd-td">31,62, -2,22</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">140,2k</td><td class="crd-td">209,6k</td><td class="crd-td">209,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">35,93, 0,09</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">143,7k</td><td class="crd-td">206,7k</td><td class="crd-td">206,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bordj Bou Arreridj</strong></td><td class="crd-td">36,07, 4,76</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">134,5k</td><td class="crd-td">201,5k</td><td class="crd-td">201,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">36,17, 1,33</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">130,7k</td><td class="crd-td">196,8k</td><td class="crd-td">196,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Souk Ahras</strong></td><td class="crd-td">36,29, 7,95</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">121,4k</td><td class="crd-td">194,7k</td><td class="crd-td">194,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Médéa</strong></td><td class="crd-td">36,26, 2,75</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">131,7k</td><td class="crd-td">184,5k</td><td class="crd-td">184,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>El Eulma</strong></td><td class="crd-td">36,15, 5,69</td><td class="crd-td">1966AD-2025AD</td><td class="crd-td">111,9k</td><td class="crd-td">184,4k</td><td class="crd-td">184,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Touggourt</strong></td><td class="crd-td">33,11, 6,07</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">119,5k</td><td class="crd-td">181,8k</td><td class="crd-td">181,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ghardaïa</strong></td><td class="crd-td">32,49, 3,67</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">130,8k</td><td class="crd-td">181,3k</td><td class="crd-td">181,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Saïda</strong></td><td class="crd-td">34,83, 0,15</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">127,6k</td><td class="crd-td">180,8k</td><td class="crd-td">180,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Laghouat</strong></td><td class="crd-td">33,8, 2,87</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">105,7k</td><td class="crd-td">170,5k</td><td class="crd-td">170,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>M'Sila</strong></td><td class="crd-td">35,71, 4,54</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">107,7k</td><td class="crd-td">168,7k</td><td class="crd-td">168,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jijel</strong></td><td class="crd-td">36,82, 5,76</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">110,9k</td><td class="crd-td">166,9k</td><td class="crd-td">166,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Relizane</strong></td><td class="crd-td">35,74, 0,56</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">116,6k</td><td class="crd-td">156,4k</td><td class="crd-td">156,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guelma</strong></td><td class="crd-td">36,46, 7,43</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">110,9k</td><td class="crd-td">152,2k</td><td class="crd-td">152,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bir El Djir</strong></td><td class="crd-td">35,72, -0,54</td><td class="crd-td">1998AD-2008AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">152,2k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Bordj El Kiffan</strong></td><td class="crd-td">36,75, 3,19</td><td class="crd-td">1998AD-2008AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">151,9k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Rouïba</strong></td><td class="crd-td">36,74, 3,28</td><td class="crd-td">1977AD-2025AD</td><td class="crd-td">107,3k</td><td class="crd-td">149,1k</td><td class="crd-td">149,1k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 35 of 1.346 catalogued settlements in Algeria ordered by peak population (1954AD-2025AD).</figcaption>
</figure>

## Tunisia

Tunisia's INS municipal gazetteer reflects both early fertility decline and persistent coastal concentration [@Conte2024Marriage; @Amara2018Rural]. Central Tūnis peaked at 693,5k in 2002AD (616,4k in 2025AD) as suburban municipalities such as Sukrah (157,7k), Sīdī Ḥusayn (134k) and Rawād (127,5k) absorbed metropolitan growth, while Sahel and northern ports such as Ṣafāqis (294,8k), Sūsah (257,7k) and Banzart (158,7k) expanded steadily ahead of inland Al-Qayrawān (158,3k) (Table 4).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tūnis</strong></td><td class="crd-td">36,82, 10,17</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">638,2k</td><td class="crd-td">616,4k</td><td class="crd-td">693,5k (2002AD)</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis</strong></td><td class="crd-td">34,74, 10,76</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">262,6k</td><td class="crd-td">294,8k</td><td class="crd-td">294,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sūsah</strong></td><td class="crd-td">35,83, 10,64</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">149,6k</td><td class="crd-td">257,7k</td><td class="crd-td">257,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sūq al-Aḥad</strong></td><td class="crd-td">33,78, 8,86</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">12,3k</td><td class="crd-td">15,3k</td><td class="crd-td">171,3k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Métouia</strong></td><td class="crd-td">33,96, 10</td><td class="crd-td">2014AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">170k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">37,27, 9,87</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">110,1k</td><td class="crd-td">158,7k</td><td class="crd-td">158,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qayrawān</strong></td><td class="crd-td">35,68, 10,1</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">106,9k</td><td class="crd-td">158,3k</td><td class="crd-td">158,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sukrah</strong></td><td class="crd-td">36,88, 10,25</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">85k</td><td class="crd-td">157,7k</td><td class="crd-td">157,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sīdī Ḥusayn</strong></td><td class="crd-td">36,76, 10,12</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">75,7k</td><td class="crd-td">134k</td><td class="crd-td">134k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rawād</strong></td><td class="crd-td">36,89, 10,19</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">51,4k</td><td class="crd-td">127,5k</td><td class="crd-td">127,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aryānah</strong></td><td class="crd-td">36,86, 10,19</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">93,1k</td><td class="crd-td">126,6k</td><td class="crd-td">126,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Murūj</strong></td><td class="crd-td">36,71, 10,21</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">78,1k</td><td class="crd-td">124,2k</td><td class="crd-td">124,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qābis</strong></td><td class="crd-td">33,88, 10,1</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">91k</td><td class="crd-td">110,7k</td><td class="crd-td">110,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Munastīr</strong></td><td class="crd-td">35,78, 10,83</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">62,2k</td><td class="crd-td">110,2k</td><td class="crd-td">110,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qafṣah</strong></td><td class="crd-td">34,42, 8,78</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">79,3k</td><td class="crd-td">106,3k</td><td class="crd-td">106,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Marsā</strong></td><td class="crd-td">36,88, 10,32</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">74,2k</td><td class="crd-td">104,5k</td><td class="crd-td">104,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bin 'Arūs</strong></td><td class="crd-td">36,75, 10,22</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">69,7k</td><td class="crd-td">99,3k</td><td class="crd-td">99,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dawwār Hayshar</strong></td><td class="crd-td">36,83, 10,08</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">72k</td><td class="crd-td">94,1k</td><td class="crd-td">94,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaṣrayn</strong></td><td class="crd-td">35,17, 8,84</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">69,4k</td><td class="crd-td">93,1k</td><td class="crd-td">93,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Karam</strong></td><td class="crd-td">36,85, 10,3</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">55,4k</td><td class="crd-td">90,7k</td><td class="crd-td">90,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>At-Taḍāmun</strong></td><td class="crd-td">36,83, 10,11</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">74,6k</td><td class="crd-td">87,6k</td><td class="crd-td">87,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jarbah Ḥawmat as-Sūq</strong></td><td class="crd-td">33,88, 10,86</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">61,9k</td><td class="crd-td">86,9k</td><td class="crd-td">86,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nābul</strong></td><td class="crd-td">36,46, 10,74</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">52,5k</td><td class="crd-td">83,5k</td><td class="crd-td">83,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥammāmāt</strong></td><td class="crd-td">36,4, 10,62</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">54,6k</td><td class="crd-td">81,9k</td><td class="crd-td">81,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Madanīn</strong></td><td class="crd-td">33,35, 10,51</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">52,1k</td><td class="crd-td">81,2k</td><td class="crd-td">81,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Munayhilah</strong></td><td class="crd-td">36,86, 10,12</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">38,3k</td><td class="crd-td">79,3k</td><td class="crd-td">79,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mūḥammadiyah</strong></td><td class="crd-td">36,67, 10,16</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">38,8k</td><td class="crd-td">78,2k</td><td class="crd-td">78,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jarjīs</strong></td><td class="crd-td">33,5, 11,11</td><td class="crd-td">1956AD-2025AD</td><td class="crd-td">65,9k</td><td class="crd-td">78,1k</td><td class="crd-td">78,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jarbah Madyūnī</strong></td><td class="crd-td">33,81, 10,99</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">48,1k</td><td class="crd-td">75,3k</td><td class="crd-td">75,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Fériana</strong></td><td class="crd-td">34,94, 8,56</td><td class="crd-td">2014AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">75k (2014AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 30 of 156 catalogued settlements in Tunisia ordered by peak population (1956AD-2025AD).</figcaption>
</figure>

## Libya and Western Sahara

Libya's BSC urban and oasis corpus traces hydrocarbon-financed urbanisation along the Tripolitanian and Cyrenaican coasts and Fezzan aquifers, led by Ṭarābulus (129,7k in 1954AD to a peak of 1,78M in 2007AD and 1,39M in 2025AD), Banghāzī (806,8k), Miṣrātah (378,8k), Zlīṭan (217k), Az-Zāwiyah (184,8k) and Sabhā (159k) (Table 5). In Western Sahara, catalogued coastal and interior localities under the Western Sahara jurisdiction—including Boujdour and Meharrize—anchor Saharan settlement points alongside Moroccan-enumerated Laâyoune (262,8k in 2024AD), Dakhla (165,5k) and Es Semara (56,6k) (Table 6).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ṭarābulus</strong></td><td class="crd-td">32,89, 13,19</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">958k</td><td class="crd-td">1,39M</td><td class="crd-td">1,78M (2007AD)</td></tr>
<tr><td class="crd-td"><strong>Banghāzī</strong></td><td class="crd-td">32,11, 20,07</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">564,5k</td><td class="crd-td">806,8k</td><td class="crd-td">806,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Miṣrātah</strong></td><td class="crd-td">32,38, 15,09</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">233,7k</td><td class="crd-td">378,8k</td><td class="crd-td">378,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zlīṭan</strong></td><td class="crd-td">32,47, 14,57</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">112,7k</td><td class="crd-td">217k</td><td class="crd-td">217k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Az-Zāwiyah</strong></td><td class="crd-td">32,75, 12,73</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">125,8k</td><td class="crd-td">184,8k</td><td class="crd-td">198,6k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Khums</strong></td><td class="crd-td">32,65, 14,26</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">91,2k</td><td class="crd-td">164,9k</td><td class="crd-td">164,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Janzūr</strong></td><td class="crd-td">32,82, 13,02</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">110,4k</td><td class="crd-td">164,4k</td><td class="crd-td">164,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sabhā</strong></td><td class="crd-td">27,04, 14,43</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">104,4k</td><td class="crd-td">159k</td><td class="crd-td">159k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭubruq</strong></td><td class="crd-td">32,09, 23,95</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">97,7k</td><td class="crd-td">150,7k</td><td class="crd-td">150,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ajdābiyā</strong></td><td class="crd-td">30,76, 20,23</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">93,9k</td><td class="crd-td">140,3k</td><td class="crd-td">140,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Bayḍā'</strong></td><td class="crd-td">32,76, 21,76</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">92,9k</td><td class="crd-td">137,9k</td><td class="crd-td">137,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Surt</strong></td><td class="crd-td">31,21, 16,59</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">68,1k</td><td class="crd-td">113,6k</td><td class="crd-td">135,5k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Gharyān</strong></td><td class="crd-td">32,17, 13,02</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">25,1k</td><td class="crd-td">38,5k</td><td class="crd-td">123,5k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Darnah</strong></td><td class="crd-td">32,77, 22,64</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">76,8k</td><td class="crd-td">109,3k</td><td class="crd-td">109,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qaṣr Bin Ghashīr</strong></td><td class="crd-td">32,68, 13,18</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">71,6k</td><td class="crd-td">106,6k</td><td class="crd-td">106,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ṣabrātah</strong></td><td class="crd-td">32,79, 12,49</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">54,6k</td><td class="crd-td">88,8k</td><td class="crd-td">102k (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Al-'Ajaylāt</strong></td><td class="crd-td">32,76, 12,38</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">58,7k</td><td class="crd-td">100,7k</td><td class="crd-td">100,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ṣurmān</strong></td><td class="crd-td">32,76, 12,57</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">50k</td><td class="crd-td">82,1k</td><td class="crd-td">100,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Marj</strong></td><td class="crd-td">32,49, 20,83</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">56,7k</td><td class="crd-td">81,7k</td><td class="crd-td">81,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zuwārah</strong></td><td class="crd-td">32,93, 12,08</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">25,9k</td><td class="crd-td">36,1k</td><td class="crd-td">80,3k (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Msalātah</strong></td><td class="crd-td">32,58, 14,04</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">52,9k</td><td class="crd-td">78,7k</td><td class="crd-td">78,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yafran</strong></td><td class="crd-td">32,06, 12,53</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">18,5k</td><td class="crd-td">24,2k</td><td class="crd-td">72,7k (2007AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Mukhīlī</strong></td><td class="crd-td">32,16, 22,28</td><td class="crd-td">1954AD-2025AD</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td><td class="crd-td">68,4k (1973AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Jumayl</strong></td><td class="crd-td">32,85, 12,06</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">40,7k</td><td class="crd-td">67,8k</td><td class="crd-td">67,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥarshah</strong></td><td class="crd-td">32,76, 12,67</td><td class="crd-td">1984AD-2006AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">66,2k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>As-Sawānī</strong></td><td class="crd-td">32,71, 13,07</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">40,8k</td><td class="crd-td">60,8k</td><td class="crd-td">60,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qubbah</strong></td><td class="crd-td">32,76, 22,24</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">16,1k</td><td class="crd-td">25k</td><td class="crd-td">60,6k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Al-'Azīziyah</strong></td><td class="crd-td">32,53, 13,02</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">38,6k</td><td class="crd-td">55,8k</td><td class="crd-td">55,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qarābūllī</strong></td><td class="crd-td">32,75, 13,71</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">35,5k</td><td class="crd-td">52,8k</td><td class="crd-td">52,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banī Walīd</strong></td><td class="crd-td">31,75, 13,98</td><td class="crd-td">1984AD-2025AD</td><td class="crd-td">34,7k</td><td class="crd-td">48,7k</td><td class="crd-td">50,8k (2008AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 30 of 113 catalogued settlements in Libya ordered by peak population (1954AD-2025AD).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Meharrize</strong></td><td class="crd-td">26,15, -11,07</td><td class="crd-td">1990AD-2025AD</td><td class="crd-td">9,4k</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bir Gandus</strong></td><td class="crd-td">21,62, -16,47</td><td class="crd-td">1994AD-2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Smara</strong></td><td class="crd-td">26,74, -11,67</td><td class="crd-td">1967AD-1974AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1974AD)</td></tr>
<tr><td class="crd-td"><strong>Tifariti</strong></td><td class="crd-td">26,16, -10,56</td><td class="crd-td">2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Zug</strong></td><td class="crd-td">21,55, -14,15</td><td class="crd-td">2004AD-2024AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">833 (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Agounit</strong></td><td class="crd-td">22,18, -13,13</td><td class="crd-td">2004AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">222 (2004AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlements in Western Sahara (6 sites) ordered by peak population (1951AD-2025AD).</figcaption>
</figure>

# Limitations

Three principal caveats attach to these municipal time series. First, Algeria (last census 2008AD) and Libya (last census 2006AD, 2020AD registry estimates) lack 2024AD census benchmarks comparable to HCP Morocco and INS Tunisia, widening post-2010AD municipal extrapolation variance, especially in Libyan cities affected by post-2011AD displacement. Second, strict administrative boundaries separate inner municipalities from adjoining commuter communes in Greater Tunis, Rabat-Salé and Casablanca, causing statutory core cities to plateau once peripheral infill saturates. Third, Western Sahara's territorial partition divides Moroccan-administered urban communes (such as Laâyoune and Dakhla, captured at the regional and ADM1 polygon scale) from eastern interior towns and Sahrawi camps near Tindouf.

# Conclusion

From 1951AD to 2026AD, the 3.054 catalogued urban, communal and oasis centres of Morocco, Algeria, Tunisia, Libya and Western Sahara anchor a near-unitary Zipf urban hierarchy ($\alpha = 1{,}021$, $R^2 = 0{,}908$) across coastal metropolises, High Plateaux towns and Saharan oases. Paired with 2.629 geoBoundaries administrative polygons and mass-conserving spatial kriging, this gazetteer supplies the municipal and communal foundation for modern North African demographic mapping.

# Appendix

## Settlement Rank-Size and Density Diagnostics

Figure 3 and Figure 4 display the continuous spatial density surface and the Zipf rank-size regression across all 3.054 catalogued settlements, illustrating both coastal concentration and the balanced upper metropolitan tier led by Casablanca and Algiers.

<figure class="crd-figure-block" id="fig:density-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig3_modern_maghreb_libya_density.png" alt="fig:density-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continuous population density surface across the Maghreb and Libya (left) and sub-regional population densities at the contemporary horizon (right).</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:rank-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig4_modern_maghreb_libya_settlements.png" alt="fig:rank-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Zipf rank-size distribution across 3.054 catalogued Maghreb and Libyan settlements (left) and the twelve largest urban centres by peak population (right).</figcaption>
</figure>

# Sources

::: {#refs}
:::

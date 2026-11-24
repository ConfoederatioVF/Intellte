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
hero_caption: "Spatial distribution of 531 catalogued urban and oasis settlements across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD."
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

This settlement gazetteer catalogues 531 urban centres, secondary provincial capitals, steppe market towns and Saharan oasis settlements across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD. Drawing on national census publications from HCP Morocco (1960–2024), ONS Algeria (1966–2008), INS Tunisia (1956–2024), BSC Libya (1954–2006) and Spanish colonial and Moroccan regional enumerations in Western Sahara, the ledger consolidates 542 initial candidate localities after merging 11 subordinate metropolitan suburbs into parent cores. Across the continuous settlement cohort, total catalogued urban and oasis population climbed more than fourfold from 12,01M in 1951AD to 17,59M in 1970AD, 28,26M in 1990AD, 36,43M in 2000AD and 53,42M in 2025AD, capturing slightly over half of the entire 103,8M macro-domain population at the contemporary horizon. Ordered by national jurisdiction, the tables document the emergence of coastal metropolitan corridors around Casablanca, Rabat-Salé, Tanger, El Djazaïr, Oran, Tūnis, Ṣafāqis, Ṭarābulus and Banghāzī alongside high-growth High Plateaux and Saharan hubs at Djelfa, Batna, Ouargla, Ghardaïa, Sabhā, Tamanrasset, Adrar and Boujdour.

<figure class="crd-figure-block" id="fig:hero-modern-maghreb-libya-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig1_modern_maghreb_libya_spatial.png" alt="fig:hero-modern-maghreb-libya-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 531 catalogued urban and oasis settlements across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD.</figcaption>
</figure>

# Background

Urbanisation across the post-colonial Maghreb and Libya proceeded at a pace unmatched by earlier centuries. In 1951AD, when Libya attained independence and Morocco and Tunisia stood in the final five years of their French and Spanish protectorates, only Casablanca (1,08M) exceeded one million inhabitants across the five territories, followed by El Djazaïr (859,6k), Tūnis (401,6k), Ṭarābulus (350,8k), Oran (277,6k), Rabat (266k), Fès (244,8k), Marrakech (222,3k) and Banghāzī (214,3k). Over the ensuing seven decades, post-colonial public health advances lowered infant mortality sharply while rural land fragmentation, drought cycles and industrialisation pushed millions of villagers into littoral ports and provincial capitals [@Amara2018Rural; @Conte2024Marriage; @O2026Oncogeriat; @D2026Spatial].

Regional urban trajectories reflect distinct political economies. In Algeria, wartime regroupment between 1954AD and 1962AD and the 1962AD departure of European settlers restructured urban housing overnight before state industrialisation, fertility shifts and post-1980s administrative subdivisions elevated steppe and Saharan towns [@Kamilia2025Relationsh; @Abbas2024Impact; @Saidi2025Role; @OuadahBedidi2013Fertility]. In Morocco, an export-oriented Atlantic corridor from Kénitra and Rabat-Salé through Casablanca to Safi was joined after 1990AD by rapid port-industrial expansion in Tangier-Assilah and tourism-service growth in Marrakech and Agadir [@Bouhoudan2024Impact; @M2026Systematic]. Tunisia concentrated industry and services along the Tunis-Sousse-Sfax littoral arc [@Amara2018Rural], while Libya's oil wealth funded simultaneous hyper-urbanisation in Tripoli, Misratah and Benghazi and aquifer-fed oasis cities across Fezzan.

# Methodology

Each settlement record in HANDBOOK reconciles municipal census counts across national statistical archives onto fixed WGS84 coordinates, harmonising French, Spanish, Italian and Arabic transliterations into canonical Latin forms. To prevent metropolitan double counting, 11 subordinate suburbs identified in the ledger reconciliation pass were folded into their parent urban agglomerations, leaving 531 independent urban and oasis localities: 172 in Algeria, 155 in Morocco, 103 in Libya, 99 in Tunisia and 2 in Western Sahara. Municipal series are anchored to national census benchmarks—HCP Morocco (1960, 1971, 1982, 1994, 2004, 2014 and 2024), ONS Algeria (1966, 1977, 1987, 1998 and 2008), INS Tunisia (1956, 1966, 1975, 1984, 1994, 2004, 2014 and 2024), BSC Libya (1954, 1964, 1973, 1984, 1995 and 2006) and Spanish colonial and HCP regional counts for Western Sahara—and interpolated cleanly to common decadal horizons (1951AD, 1980AD, 2000AD and 2025AD) for cross-border comparison. Spatial disaggregation pairs these settlement anchors with geoBoundaries administrative polygons [@Runfola2020GeoBoundaries] under strictly mass-conserving pycnophylactic scaling and non-stationary Matérn ($\nu = 3/2$) kriging.

# Testing and Validation

Across all 531 catalogued settlements, rank-size calibration produces a Zipf exponent of $\alpha = 1{,}003$ ($R^2 = 0{,}861$), confirming that post-independence state formation produced a balanced national and regional urban pyramid rather than extreme primacy [@Bousmaha2021Growth; @Bousmaha2024Review]. Temporal cohort coverage is nearly total: 528 of 531 settlements carry an enumerated or backcasted 1951AD baseline, rising to 530 by 1980AD and all 531 from 1990AD through 2025AD. Figure 2 plots the aggregate regional trajectory alongside leading sub-regional benchmarks, while Table 1 summarises jurisdiction-level settlement counts and combined catalogued populations across four benchmark years.

<figure class="crd-figure-block" id="fig:trajectory-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig2_modern_maghreb_libya_trajectory.png" alt="fig:trajectory-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate population growth across the Maghreb and Libya from 1951AD to 2025AD (left) and leading sub-regional benchmarks at the contemporary horizon (right).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction (Sites)</th><th class="crd-th">1951AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Ratio</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Morocco (155)</strong></td><td class="crd-td">4,34M</td><td class="crd-td">8,22M</td><td class="crd-td">14,18M</td><td class="crd-td">20,92M</td><td class="crd-td">4,8x</td></tr>
<tr><td class="crd-td"><strong>Algeria (172)</strong></td><td class="crd-td">3,74M</td><td class="crd-td">7,23M</td><td class="crd-td">13,43M</td><td class="crd-td">19,81M</td><td class="crd-td">5,3x</td></tr>
<tr><td class="crd-td"><strong>Libya (103)</strong></td><td class="crd-td">1,34M</td><td class="crd-td">2,54M</td><td class="crd-td">4,01M</td><td class="crd-td">6,06M</td><td class="crd-td">4,5x</td></tr>
<tr><td class="crd-td"><strong>Tunisia (99)</strong></td><td class="crd-td">2,58M</td><td class="crd-td">3,65M</td><td class="crd-td">4,76M</td><td class="crd-td">6,57M</td><td class="crd-td">2,5x</td></tr>
<tr><td class="crd-td"><strong>Western Sahara (2)</strong></td><td class="crd-td">5,2k</td><td class="crd-td">33,8k</td><td class="crd-td">43k</td><td class="crd-td">58,6k</td><td class="crd-td">11,2x</td></tr>
<tr><td class="crd-td"><strong>Total Gazetteer (531)</strong></td><td class="crd-td">12,01M</td><td class="crd-td">21,68M</td><td class="crd-td">36,43M</td><td class="crd-td">53,42M</td><td class="crd-td">4,4x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued settlement counts and combined municipal populations across the five Maghreb and Libyan jurisdictions (1951AD-2025AD).</figcaption>
</figure>

# Results

## Morocco

Morocco's 155 catalogued urban centres expanded from 4,06M inhabitants in 1951AD to 18,3M in 2025AD (4,5x), paced by the Atlantic corridor from Casablanca (1,08M to 3,26M, peaking at 3,36M in 2014AD), Salé (154,9k to 958,4k), Témara (24,6k to 301,3k), Dar Bouazza (307,2k in 2025AD) and Kénitra (95,2k to 514,9k), alongside Tanger's eightfold surge to 1,29M and interior expansion in Fès (1,2M), Marrakech (1,03M), Meknès (564,4k), Oujda (513,4k) and Agadir (511,9k) (Table 2).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1951AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">33,59, -7,61</td><td class="crd-td">1,08M</td><td class="crd-td">2,05M</td><td class="crd-td">2,9M</td><td class="crd-td">3,26M</td></tr>
<tr><td class="crd-td"><strong>Tanger</strong></td><td class="crd-td">35,77, -5,8</td><td class="crd-td">148,4k</td><td class="crd-td">280,8k</td><td class="crd-td">604k</td><td class="crd-td">1,29M</td></tr>
<tr><td class="crd-td"><strong>Fès</strong></td><td class="crd-td">34,03, -5</td><td class="crd-td">244,8k</td><td class="crd-td">463,3k</td><td class="crd-td">874,6k</td><td class="crd-td">1,2M</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">31,63, -8</td><td class="crd-td">222,3k</td><td class="crd-td">420,8k</td><td class="crd-td">759,6k</td><td class="crd-td">1,03M</td></tr>
<tr><td class="crd-td"><strong>Salé</strong></td><td class="crd-td">34,05, -6,8</td><td class="crd-td">154,9k</td><td class="crd-td">293,2k</td><td class="crd-td">682,1k</td><td class="crd-td">958,4k</td></tr>
<tr><td class="crd-td"><strong>Meknès</strong></td><td class="crd-td">33,89, -5,55</td><td class="crd-td">161,7k</td><td class="crd-td">306k</td><td class="crd-td">444k</td><td class="crd-td">564,4k</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">34,01, -6,83</td><td class="crd-td">266k</td><td class="crd-td">503,5k</td><td class="crd-td">624,6k</td><td class="crd-td">522,9k</td></tr>
<tr><td class="crd-td"><strong>Kénitra</strong></td><td class="crd-td">34,26, -6,58</td><td class="crd-td">95,2k</td><td class="crd-td">180,1k</td><td class="crd-td">330,8k</td><td class="crd-td">514,9k</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">34,68, -1,91</td><td class="crd-td">131,5k</td><td class="crd-td">248,9k</td><td class="crd-td">382,8k</td><td class="crd-td">513,4k</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">30,42, -9,6</td><td class="crd-td">66,9k</td><td class="crd-td">126,7k</td><td class="crd-td">306,2k</td><td class="crd-td">511,9k</td></tr>
<tr><td class="crd-td"><strong>Tétouan</strong></td><td class="crd-td">35,58, -5,37</td><td class="crd-td">100,9k</td><td class="crd-td">191k</td><td class="crd-td">302,6k</td><td class="crd-td">428,7k</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">32,3, -9,24</td><td class="crd-td">99,8k</td><td class="crd-td">188,8k</td><td class="crd-td">275,5k</td><td class="crd-td">328,5k</td></tr>
<tr><td class="crd-td"><strong>Dar Bouazza</strong></td><td class="crd-td">33,52, -7,82</td><td class="crd-td">17,5k</td><td class="crd-td">33,2k</td><td class="crd-td">79,3k</td><td class="crd-td">307,2k</td></tr>
<tr><td class="crd-td"><strong>Témara</strong></td><td class="crd-td">33,93, -6,91</td><td class="crd-td">24,6k</td><td class="crd-td">46,5k</td><td class="crd-td">181,3k</td><td class="crd-td">301,3k</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">33,26, -8,51</td><td class="crd-td">41,2k</td><td class="crd-td">77,9k</td><td class="crd-td">133,7k</td><td class="crd-td">240,8k</td></tr>
<tr><td class="crd-td"><strong>Aït Melloul</strong></td><td class="crd-td">30,34, -9,5</td><td class="crd-td">5,9k</td><td class="crd-td">11,2k</td><td class="crd-td">108,7k</td><td class="crd-td">213,8k</td></tr>
<tr><td class="crd-td"><strong>Béni Mellal</strong></td><td class="crd-td">32,34, -6,35</td><td class="crd-td">48k</td><td class="crd-td">90,9k</td><td class="crd-td">153,6k</td><td class="crd-td">212,5k</td></tr>
<tr><td class="crd-td"><strong>Bouskoura</strong></td><td class="crd-td">33,45, -7,65</td><td class="crd-td">8,9k</td><td class="crd-td">16,8k</td><td class="crd-td">56,3k</td><td class="crd-td">203,2k</td></tr>
<tr><td class="crd-td"><strong>Khouribga</strong></td><td class="crd-td">32,88, -6,91</td><td class="crd-td">64,3k</td><td class="crd-td">121,7k</td><td class="crd-td">160,5k</td><td class="crd-td">198,7k</td></tr>
<tr><td class="crd-td"><strong>Mohammédia</strong></td><td class="crd-td">33,69, -7,38</td><td class="crd-td">53,1k</td><td class="crd-td">100,6k</td><td class="crd-td">181k</td><td class="crd-td">197,1k</td></tr>
<tr><td class="crd-td"><strong>Settat</strong></td><td class="crd-td">33, -7,62</td><td class="crd-td">33k</td><td class="crd-td">62,4k</td><td class="crd-td">108k</td><td class="crd-td">174k</td></tr>
<tr><td class="crd-td"><strong>Berrechid</strong></td><td class="crd-td">33,27, -7,59</td><td class="crd-td">15k</td><td class="crd-td">28,5k</td><td class="crd-td">73,7k</td><td class="crd-td">171,1k</td></tr>
<tr><td class="crd-td"><strong>Nador</strong></td><td class="crd-td">35,17, -2,93</td><td class="crd-td">31,4k</td><td class="crd-td">59,4k</td><td class="crd-td">124,4k</td><td class="crd-td">160,4k</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">34,21, -4,01</td><td class="crd-td">39k</td><td class="crd-td">73,9k</td><td class="crd-td">131,9k</td><td class="crd-td">152,9k</td></tr>
<tr><td class="crd-td"><strong>Inezgane</strong></td><td class="crd-td">30,36, -9,54</td><td class="crd-td">22,8k</td><td class="crd-td">43,1k</td><td class="crd-td">104,2k</td><td class="crd-td">139,5k</td></tr>
<tr><td class="crd-td"><strong>Larache</strong></td><td class="crd-td">35,19, -6,16</td><td class="crd-td">32,3k</td><td class="crd-td">61,1k</td><td class="crd-td">100,2k</td><td class="crd-td">135,6k</td></tr>
<tr><td class="crd-td"><strong>Guelmim</strong></td><td class="crd-td">28,99, -10,06</td><td class="crd-td">19,3k</td><td class="crd-td">36,5k</td><td class="crd-td">85,7k</td><td class="crd-td">128,5k</td></tr>
<tr><td class="crd-td"><strong>Khémisset</strong></td><td class="crd-td">33,82, -6,07</td><td class="crd-td">29,8k</td><td class="crd-td">56,4k</td><td class="crd-td">98,3k</td><td class="crd-td">127,6k</td></tr>
<tr><td class="crd-td"><strong>Ksar El Kébir</strong></td><td class="crd-td">35, -5,9</td><td class="crd-td">37,2k</td><td class="crd-td">70,4k</td><td class="crd-td">107,3k</td><td class="crd-td">126,5k</td></tr>
<tr><td class="crd-td"><strong>Skhirat</strong></td><td class="crd-td">33,85, -7,03</td><td class="crd-td">3,1k</td><td class="crd-td">5,9k</td><td class="crd-td">37k</td><td class="crd-td">124,4k</td></tr>
<tr><td class="crd-td"><strong>Ben Guerir</strong></td><td class="crd-td">32,24, -7,95</td><td class="crd-td">11,3k</td><td class="crd-td">21,4k</td><td class="crd-td">56k</td><td class="crd-td">116,5k</td></tr>
<tr><td class="crd-td"><strong>Dcheira El Jihadia</strong></td><td class="crd-td">30,37, -9,55</td><td class="crd-td">20,1k</td><td class="crd-td">38k</td><td class="crd-td">82,2k</td><td class="crd-td">114,6k</td></tr>
<tr><td class="crd-td"><strong>Ouislane</strong></td><td class="crd-td">33,91, -5,49</td><td class="crd-td">11,1k</td><td class="crd-td">21,1k</td><td class="crd-td">39k</td><td class="crd-td">113,8k</td></tr>
<tr><td class="crd-td"><strong>Lqliâa</strong></td><td class="crd-td">30,3, -9,47</td><td class="crd-td">3,2k</td><td class="crd-td">6,1k</td><td class="crd-td">23,3k</td><td class="crd-td">108,6k</td></tr>
<tr><td class="crd-td"><strong>El Kelaâ des Sraghna</strong></td><td class="crd-td">32,05, -7,41</td><td class="crd-td">16,9k</td><td class="crd-td">31,9k</td><td class="crd-td">61,2k</td><td class="crd-td">107,9k</td></tr>
<tr><td class="crd-td"><strong>Tiflet</strong></td><td class="crd-td">33,89, -6,31</td><td class="crd-td">15k</td><td class="crd-td">28,4k</td><td class="crd-td">61k</td><td class="crd-td">105,3k</td></tr>
<tr><td class="crd-td"><strong>Taourirt</strong></td><td class="crd-td">34,41, -2,9</td><td class="crd-td">16,5k</td><td class="crd-td">31,3k</td><td class="crd-td">70,3k</td><td class="crd-td">101,8k</td></tr>
<tr><td class="crd-td"><strong>Oulad Teïma</strong></td><td class="crd-td">30,39, -9,21</td><td class="crd-td">6,3k</td><td class="crd-td">12k</td><td class="crd-td">57,8k</td><td class="crd-td">101,7k</td></tr>
<tr><td class="crd-td"><strong>Berkane</strong></td><td class="crd-td">34,92, -2,32</td><td class="crd-td">30,6k</td><td class="crd-td">57,9k</td><td class="crd-td">88k</td><td class="crd-td">100,5k</td></tr>
<tr><td class="crd-td"><strong>Aïn El Aouda</strong></td><td class="crd-td">33,8, -6,79</td><td class="crd-td">1,8k</td><td class="crd-td">3,4k</td><td class="crd-td">19,7k</td><td class="crd-td">99,9k</td></tr>
<tr><td class="crd-td"><strong>Errachidia</strong></td><td class="crd-td">31,93, -4,43</td><td class="crd-td">13,7k</td><td class="crd-td">25,9k</td><td class="crd-td">70,7k</td><td class="crd-td">99,1k</td></tr>
<tr><td class="crd-td"><strong>Fkih Ben Salah</strong></td><td class="crd-td">32,5, -6,69</td><td class="crd-td">24k</td><td class="crd-td">45,5k</td><td class="crd-td">79,3k</td><td class="crd-td">98,8k</td></tr>
<tr><td class="crd-td"><strong>Deroua</strong></td><td class="crd-td">33,37, -7,54</td><td class="crd-td">7,7k</td><td class="crd-td">14,5k</td><td class="crd-td">28,3k</td><td class="crd-td">98k</td></tr>
<tr><td class="crd-td"><strong>Martil</strong></td><td class="crd-td">35,62, -5,28</td><td class="crd-td">4,6k</td><td class="crd-td">8,8k</td><td class="crd-td">31,7k</td><td class="crd-td">97,2k</td></tr>
<tr><td class="crd-td"><strong>Sidi Slimane</strong></td><td class="crd-td">34,26, -5,93</td><td class="crd-td">25,5k</td><td class="crd-td">48,3k</td><td class="crd-td">74,6k</td><td class="crd-td">96,5k</td></tr>
<tr><td class="crd-td"><strong>Oued Zem</strong></td><td class="crd-td">32,86, -6,57</td><td class="crd-td">29,7k</td><td class="crd-td">56,2k</td><td class="crd-td">79,8k</td><td class="crd-td">95,1k</td></tr>
<tr><td class="crd-td"><strong>Bni Yakhlef</strong></td><td class="crd-td">32,35, -8,42</td><td class="crd-td">3,6k</td><td class="crd-td">6,8k</td><td class="crd-td">10,5k</td><td class="crd-td">90,8k</td></tr>
<tr><td class="crd-td"><strong>Gueznaia</strong></td><td class="crd-td">35,7, -5,89</td><td class="crd-td">993</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">89,9k</td></tr>
<tr><td class="crd-td"><strong>Lahraouyine</strong></td><td class="crd-td">33,54, -7,53</td><td class="crd-td">14,7k</td><td class="crd-td">27,9k</td><td class="crd-td">43,3k</td><td class="crd-td">89,2k</td></tr>
<tr><td class="crd-td"><strong>Séfrou</strong></td><td class="crd-td">33,83, -4,83</td><td class="crd-td">19,6k</td><td class="crd-td">37,2k</td><td class="crd-td">59,9k</td><td class="crd-td">88,1k</td></tr>
<tr><td class="crd-td"><strong>Tamesna</strong></td><td class="crd-td">33,82, -6,92</td><td class="crd-td">7k</td><td class="crd-td">13,3k</td><td class="crd-td">20,7k</td><td class="crd-td">88,1k</td></tr>
<tr><td class="crd-td"><strong>Tiznit</strong></td><td class="crd-td">29,7, -9,73</td><td class="crd-td">11,6k</td><td class="crd-td">21,9k</td><td class="crd-td">49,1k</td><td class="crd-td">87,8k</td></tr>
<tr><td class="crd-td"><strong>Taroudant</strong></td><td class="crd-td">30,47, -8,88</td><td class="crd-td">18,1k</td><td class="crd-td">34,3k</td><td class="crd-td">64,3k</td><td class="crd-td">84,7k</td></tr>
<tr><td class="crd-td"><strong>Essaouira</strong></td><td class="crd-td">31,51, -9,77</td><td class="crd-td">21,3k</td><td class="crd-td">40,2k</td><td class="crd-td">63,8k</td><td class="crd-td">84,1k</td></tr>
<tr><td class="crd-td"><strong>Guercif</strong></td><td class="crd-td">34,23, -3,35</td><td class="crd-td">5,7k</td><td class="crd-td">10,9k</td><td class="crd-td">50,6k</td><td class="crd-td">81,8k</td></tr>
<tr><td class="crd-td"><strong>Ouarzazate</strong></td><td class="crd-td">30,92, -6,89</td><td class="crd-td">8,7k</td><td class="crd-td">16,5k</td><td class="crd-td">48,9k</td><td class="crd-td">80,3k</td></tr>
<tr><td class="crd-td"><strong>Drargua</strong></td><td class="crd-td">30,45, -9,48</td><td class="crd-td">5,3k</td><td class="crd-td">10,1k</td><td class="crd-td">15,6k</td><td class="crd-td">79,9k</td></tr>
<tr><td class="crd-td"><strong>Aït Amira</strong></td><td class="crd-td">30,16, -9,47</td><td class="crd-td">12,1k</td><td class="crd-td">23k</td><td class="crd-td">35,7k</td><td class="crd-td">79,3k</td></tr>
<tr><td class="crd-td"><strong>Fnideq</strong></td><td class="crd-td">35,85, -5,36</td><td class="crd-td">6,9k</td><td class="crd-td">13k</td><td class="crd-td">44,9k</td><td class="crd-td">78,3k</td></tr>
<tr><td class="crd-td"><strong>Tan-Tan</strong></td><td class="crd-td">28,44, -11,1</td><td class="crd-td">21k</td><td class="crd-td">39,7k</td><td class="crd-td">54,2k</td><td class="crd-td">77,2k</td></tr>
<tr><td class="crd-td"><strong>Sidi Kacem</strong></td><td class="crd-td">34,22, -5,71</td><td class="crd-td">28,2k</td><td class="crd-td">53,4k</td><td class="crd-td">71,4k</td><td class="crd-td">76,1k</td></tr>
<tr><td class="crd-td"><strong>Had Soualem</strong></td><td class="crd-td">33,42, -7,85</td><td class="crd-td">8,2k</td><td class="crd-td">15,6k</td><td class="crd-td">24,1k</td><td class="crd-td">75,8k</td></tr>
<tr><td class="crd-td"><strong>Aïn Attig</strong></td><td class="crd-td">33,89, -6,97</td><td class="crd-td">6k</td><td class="crd-td">11,4k</td><td class="crd-td">16,8k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Souk El Arbaa</strong></td><td class="crd-td">34,68, -6</td><td class="crd-td">12,7k</td><td class="crd-td">24k</td><td class="crd-td">40,8k</td><td class="crd-td">71,9k</td></tr>
<tr><td class="crd-td"><strong>M'Diq</strong></td><td class="crd-td">35,68, -5,33</td><td class="crd-td">2,5k</td><td class="crd-td">4,7k</td><td class="crd-td">29,4k</td><td class="crd-td">68,6k</td></tr>
<tr><td class="crd-td"><strong>Benslimane</strong></td><td class="crd-td">33,62, -7,12</td><td class="crd-td">12,2k</td><td class="crd-td">23,1k</td><td class="crd-td">42,4k</td><td class="crd-td">68,3k</td></tr>
<tr><td class="crd-td"><strong>Sidi Taïbi</strong></td><td class="crd-td">34,19, -6,68</td><td class="crd-td">3,1k</td><td class="crd-td">5,8k</td><td class="crd-td">13,8k</td><td class="crd-td">68,2k</td></tr>
<tr><td class="crd-td"><strong>Youssoufia</strong></td><td class="crd-td">32,25, -8,53</td><td class="crd-td">21,3k</td><td class="crd-td">40,4k</td><td class="crd-td">62,9k</td><td class="crd-td">66,6k</td></tr>
<tr><td class="crd-td"><strong>Midelt</strong></td><td class="crd-td">32,69, -4,75</td><td class="crd-td">12,4k</td><td class="crd-td">23,5k</td><td class="crd-td">42,4k</td><td class="crd-td">63,5k</td></tr>
<tr><td class="crd-td"><strong>Aïn Harrouda</strong></td><td class="crd-td">33,64, -7,45</td><td class="crd-td">10,8k</td><td class="crd-td">20,4k</td><td class="crd-td">35,5k</td><td class="crd-td">61,7k</td></tr>
<tr><td class="crd-td"><strong>Souk Sebt Oulad Nemma</strong></td><td class="crd-td">32,3, -6,7</td><td class="crd-td">11,5k</td><td class="crd-td">21,7k</td><td class="crd-td">46,5k</td><td class="crd-td">61,1k</td></tr>
<tr><td class="crd-td"><strong>Mehdia</strong></td><td class="crd-td">34,26, -6,67</td><td class="crd-td">2,3k</td><td class="crd-td">4,3k</td><td class="crd-td">10,8k</td><td class="crd-td">59,4k</td></tr>
<tr><td class="crd-td"><strong>Ouezzane</strong></td><td class="crd-td">34,8, -5,58</td><td class="crd-td">20,5k</td><td class="crd-td">38,7k</td><td class="crd-td">55,6k</td><td class="crd-td">58,6k</td></tr>
<tr><td class="crd-td"><strong>Azrou</strong></td><td class="crd-td">33,43, -5,22</td><td class="crd-td">15,9k</td><td class="crd-td">30,1k</td><td class="crd-td">44,7k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Aït Ourir</strong></td><td class="crd-td">31,57, -7,66</td><td class="crd-td">3,1k</td><td class="crd-td">5,8k</td><td class="crd-td">16,4k</td><td class="crd-td">57,8k</td></tr>
<tr><td class="crd-td"><strong>Sidi Bennour</strong></td><td class="crd-td">32,65, -8,43</td><td class="crd-td">11,8k</td><td class="crd-td">22,4k</td><td class="crd-td">43,3k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>Tit Mellil</strong></td><td class="crd-td">33,56, -7,49</td><td class="crd-td">2,3k</td><td class="crd-td">4,3k</td><td class="crd-td">8,8k</td><td class="crd-td">56,8k</td></tr>
<tr><td class="crd-td"><strong>Bouznika</strong></td><td class="crd-td">33,79, -7,16</td><td class="crd-td">5,1k</td><td class="crd-td">9,7k</td><td class="crd-td">24,6k</td><td class="crd-td">56,5k</td></tr>
<tr><td class="crd-td"><strong>Ech-Challalate</strong></td><td class="crd-td">33,61, -7,43</td><td class="crd-td">10,6k</td><td class="crd-td">20k</td><td class="crd-td">31k</td><td class="crd-td">53,4k</td></tr>
<tr><td class="crd-td"><strong>Biougra</strong></td><td class="crd-td">31,21, -8,85</td><td class="crd-td">1,5k</td><td class="crd-td">2,8k</td><td class="crd-td">20,2k</td><td class="crd-td">51,3k</td></tr>
<tr><td class="crd-td"><strong>Beni Ensar</strong></td><td class="crd-td">35,26, -2,93</td><td class="crd-td">16,3k</td><td class="crd-td">30,8k</td><td class="crd-td">47,8k</td><td class="crd-td">51,2k</td></tr>
<tr><td class="crd-td"><strong>Al Hoceïma</strong></td><td class="crd-td">35,25, -3,94</td><td class="crd-td">21,1k</td><td class="crd-td">39,9k</td><td class="crd-td">55,3k</td><td class="crd-td">50,9k</td></tr>
<tr><td class="crd-td"><strong>Kasba Tadla</strong></td><td class="crd-td">32,6, -6,27</td><td class="crd-td">14,3k</td><td class="crd-td">27,1k</td><td class="crd-td">39,1k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Azilal</strong></td><td class="crd-td">31,96, -6,57</td><td class="crd-td">4k</td><td class="crd-td">7,5k</td><td class="crd-td">23,4k</td><td class="crd-td">48,8k</td></tr>
<tr><td class="crd-td"><strong>Bejaâd</strong></td><td class="crd-td">32,77, -6,39</td><td class="crd-td">14,3k</td><td class="crd-td">27,1k</td><td class="crd-td">37,5k</td><td class="crd-td">47,9k</td></tr>
<tr><td class="crd-td"><strong>Al Aâroui</strong></td><td class="crd-td">35,01, -3,01</td><td class="crd-td">5,5k</td><td class="crd-td">10,4k</td><td class="crd-td">32,1k</td><td class="crd-td">47,2k</td></tr>
<tr><td class="crd-td"><strong>M'Rirt</strong></td><td class="crd-td">33,16, -5,57</td><td class="crd-td">7k</td><td class="crd-td">13,3k</td><td class="crd-td">31,2k</td><td class="crd-td">46,9k</td></tr>
<tr><td class="crd-td"><strong>Chefchaouen</strong></td><td class="crd-td">35,17, -5,26</td><td class="crd-td">11,9k</td><td class="crd-td">22,5k</td><td class="crd-td">33,9k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Oulad Tayeb</strong></td><td class="crd-td">33,95, -5</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Aourir</strong></td><td class="crd-td">30,49, -9,64</td><td class="crd-td">4,4k</td><td class="crd-td">8,3k</td><td class="crd-td">16,7k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Tinghir</strong></td><td class="crd-td">31,51, -5,53</td><td class="crd-td">5,3k</td><td class="crd-td">10,1k</td><td class="crd-td">33,9k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Sidi Bouknadel</strong></td><td class="crd-td">34,12, -6,74</td><td class="crd-td">2,9k</td><td class="crd-td">5,5k</td><td class="crd-td">8,5k</td><td class="crd-td">44,2k</td></tr>
<tr><td class="crd-td"><strong>Zagora</strong></td><td class="crd-td">30,33, -5,84</td><td class="crd-td">5k</td><td class="crd-td">9,4k</td><td class="crd-td">31,1k</td><td class="crd-td">42,9k</td></tr>
<tr><td class="crd-td"><strong>Azemmour</strong></td><td class="crd-td">33,29, -8,34</td><td class="crd-td">12,5k</td><td class="crd-td">23,7k</td><td class="crd-td">35,1k</td><td class="crd-td">42,7k</td></tr>
<tr><td class="crd-td"><strong>El Hajeb</strong></td><td class="crd-td">33,69, -5,37</td><td class="crd-td">8,5k</td><td class="crd-td">16k</td><td class="crd-td">25,9k</td><td class="crd-td">41,9k</td></tr>
<tr><td class="crd-td"><strong>Jerada</strong></td><td class="crd-td">34,31, -2,16</td><td class="crd-td">21,7k</td><td class="crd-td">41,2k</td><td class="crd-td">49,5k</td><td class="crd-td">41,6k</td></tr>
<tr><td class="crd-td"><strong>El Aïoun Sidi Mellouk</strong></td><td class="crd-td">34,58, -2,51</td><td class="crd-td">10,4k</td><td class="crd-td">19,7k</td><td class="crd-td">33,1k</td><td class="crd-td">41,2k</td></tr>
<tr><td class="crd-td"><strong>Sidi Yahya El Gharb</strong></td><td class="crd-td">34,3, -6,3</td><td class="crd-td">11,6k</td><td class="crd-td">22k</td><td class="crd-td">31k</td><td class="crd-td">40,5k</td></tr>
<tr><td class="crd-td"><strong>Taounate</strong></td><td class="crd-td">34,54, -4,64</td><td class="crd-td">5,5k</td><td class="crd-td">10,3k</td><td class="crd-td">29k</td><td class="crd-td">39,7k</td></tr>
<tr><td class="crd-td"><strong>Chichaoua</strong></td><td class="crd-td">31,54, -8,76</td><td class="crd-td">3,8k</td><td class="crd-td">7,2k</td><td class="crd-td">12,9k</td><td class="crd-td">39k</td></tr>
<tr><td class="crd-td"><strong>Laâttaouia</strong></td><td class="crd-td">31,84, -7,31</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">16k</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td"><strong>Tabounte</strong></td><td class="crd-td">30,9, -6,92</td><td class="crd-td">5,1k</td><td class="crd-td">9,7k</td><td class="crd-td">17,5k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Temsia</strong></td><td class="crd-td">30,37, -9,41</td><td class="crd-td">4,6k</td><td class="crd-td">8,8k</td><td class="crd-td">13,6k</td><td class="crd-td">37,7k</td></tr>
<tr><td class="crd-td"><strong>Zaïo</strong></td><td class="crd-td">34,94, -2,73</td><td class="crd-td">7,4k</td><td class="crd-td">13,9k</td><td class="crd-td">28,2k</td><td class="crd-td">37,3k</td></tr>
<tr><td class="crd-td"><strong>Nouaceur</strong></td><td class="crd-td">33,38, -7,62</td><td class="crd-td">3,9k</td><td class="crd-td">7,3k</td><td class="crd-td">11,5k</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Assilah</strong></td><td class="crd-td">35,47, -6,03</td><td class="crd-td">9,5k</td><td class="crd-td">17,9k</td><td class="crd-td">26,7k</td><td class="crd-td">36,5k</td></tr>
<tr><td class="crd-td"><strong>Imzouren</strong></td><td class="crd-td">35,15, -3,85</td><td class="crd-td">4,9k</td><td class="crd-td">9,2k</td><td class="crd-td">26,2k</td><td class="crd-td">35,3k</td></tr>
<tr><td class="crd-td"><strong>Sidi Rahal Chatai</strong></td><td class="crd-td">33,45, -7,96</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td><td class="crd-td">7,5k</td><td class="crd-td">34,9k</td></tr>
<tr><td class="crd-td"><strong>Demnate</strong></td><td class="crd-td">31,73, -7,01</td><td class="crd-td">4,7k</td><td class="crd-td">8,9k</td><td class="crd-td">21k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Ben Ahmed</strong></td><td class="crd-td">33,07, -7,24</td><td class="crd-td">8k</td><td class="crd-td">15,1k</td><td class="crd-td">20,4k</td><td class="crd-td">33,9k</td></tr>
<tr><td class="crd-td"><strong>Aïn Taoujdate</strong></td><td class="crd-td">33,94, -5,21</td><td class="crd-td">3,9k</td><td class="crd-td">7,4k</td><td class="crd-td">19,4k</td><td class="crd-td">33,5k</td></tr>
<tr><td class="crd-td"><strong>Mechra Bel Ksiri</strong></td><td class="crd-td">34,57, -5,96</td><td class="crd-td">8,1k</td><td class="crd-td">15,3k</td><td class="crd-td">26,1k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Jorf El Melha</strong></td><td class="crd-td">34,49, -5,51</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">15,5k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Sidi Slimane Echcharaa</strong></td><td class="crd-td">34,91, -2,35</td><td class="crd-td">6,4k</td><td class="crd-td">12,1k</td><td class="crd-td">20,1k</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td"><strong>Zeghanghane</strong></td><td class="crd-td">35,16, -3</td><td class="crd-td">9,2k</td><td class="crd-td">17,5k</td><td class="crd-td">27,2k</td><td class="crd-td">31,9k</td></tr>
<tr><td class="crd-td"><strong>Oulad Berhil</strong></td><td class="crd-td">30,64, -8,47</td><td class="crd-td">3,6k</td><td class="crd-td">6,8k</td><td class="crd-td">12,5k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Lbir Jdid</strong></td><td class="crd-td">33,38, -8</td><td class="crd-td">4,1k</td><td class="crd-td">7,7k</td><td class="crd-td">13,2k</td><td class="crd-td">30,7k</td></tr>
<tr><td class="crd-td"><strong>Bouarfa</strong></td><td class="crd-td">32,53, -1,96</td><td class="crd-td">6,8k</td><td class="crd-td">12,9k</td><td class="crd-td">23,2k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Médiouna</strong></td><td class="crd-td">33,45, -7,52</td><td class="crd-td">4,5k</td><td class="crd-td">8,6k</td><td class="crd-td">13,4k</td><td class="crd-td">30,4k</td></tr>
<tr><td class="crd-td"><strong>Selouane</strong></td><td class="crd-td">35,07, -2,94</td><td class="crd-td">2,9k</td><td class="crd-td">5,4k</td><td class="crd-td">8,4k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Sidi Allal El Bahraoui</strong></td><td class="crd-td">34,01, -6,53</td><td class="crd-td">4,9k</td><td class="crd-td">9,3k</td><td class="crd-td">14,2k</td><td class="crd-td">29,6k</td></tr>
<tr><td class="crd-td"><strong>El Mansouria</strong></td><td class="crd-td">33,75, -7,3</td><td class="crd-td">3,3k</td><td class="crd-td">6,2k</td><td class="crd-td">10,9k</td><td class="crd-td">29,6k</td></tr>
<tr><td class="crd-td"><strong>Arfoud</strong></td><td class="crd-td">31,44, -4,23</td><td class="crd-td">5,1k</td><td class="crd-td">9,7k</td><td class="crd-td">21,5k</td><td class="crd-td">29,3k</td></tr>
<tr><td class="crd-td"><strong>Sabaâ Aïyoun</strong></td><td class="crd-td">33,9, -5,37</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td><td class="crd-td">18,9k</td><td class="crd-td">29,1k</td></tr>
<tr><td class="crd-td"><strong>Tahla</strong></td><td class="crd-td">34,05, -4,42</td><td class="crd-td">5,1k</td><td class="crd-td">9,6k</td><td class="crd-td">23,3k</td><td class="crd-td">29k</td></tr>
<tr><td class="crd-td"><strong>Er-Rich</strong></td><td class="crd-td">32,26, -4,5</td><td class="crd-td">3,6k</td><td class="crd-td">6,8k</td><td class="crd-td">17,4k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Missour</strong></td><td class="crd-td">33,05, -3,99</td><td class="crd-td">2,6k</td><td class="crd-td">4,8k</td><td class="crd-td">17,2k</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Toulal</strong></td><td class="crd-td">33,88, -5,6</td><td class="crd-td">4,9k</td><td class="crd-td">9,3k</td><td class="crd-td">13,4k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Echemmaia</strong></td><td class="crd-td">32,07, -8,65</td><td class="crd-td">5,5k</td><td class="crd-td">10,4k</td><td class="crd-td">20,2k</td><td class="crd-td">26,9k</td></tr>
<tr><td class="crd-td"><strong>Zaouïat Cheikh</strong></td><td class="crd-td">32,65, -5,92</td><td class="crd-td">6,7k</td><td class="crd-td">12,6k</td><td class="crd-td">21,6k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Imintanoute</strong></td><td class="crd-td">31,17, -8,85</td><td class="crd-td">4,9k</td><td class="crd-td">9,3k</td><td class="crd-td">15,1k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Sebt Gzoula</strong></td><td class="crd-td">32,11, -9,08</td><td class="crd-td">4k</td><td class="crd-td">7,6k</td><td class="crd-td">12,4k</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Oulad Ayad</strong></td><td class="crd-td">32,2, -6,8</td><td class="crd-td">5,9k</td><td class="crd-td">11,2k</td><td class="crd-td">20,4k</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Ourika</strong></td><td class="crd-td">30,72, -6,54</td><td class="crd-td">4,8k</td><td class="crd-td">9,1k</td><td class="crd-td">14,2k</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Mers El Kheir</strong></td><td class="crd-td">33,86, -6,93</td><td class="crd-td">4k</td><td class="crd-td">7,5k</td><td class="crd-td">11,7k</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Sidi Ifni</strong></td><td class="crd-td">29,38, -10,17</td><td class="crd-td">8,2k</td><td class="crd-td">15,5k</td><td class="crd-td">19,9k</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>Moulay Ali Cherif</strong></td><td class="crd-td">31,28, -4,27</td><td class="crd-td">3,9k</td><td class="crd-td">7,4k</td><td class="crd-td">19,6k</td><td class="crd-td">22,4k</td></tr>
<tr><td class="crd-td"><strong>Imouzzer Kandar</strong></td><td class="crd-td">33,73, -5,01</td><td class="crd-td">4,5k</td><td class="crd-td">8,5k</td><td class="crd-td">12,8k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>Aoulouz</strong></td><td class="crd-td">30,67, -8,18</td><td class="crd-td">6k</td><td class="crd-td">11,3k</td><td class="crd-td">17,2k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Harhoura</strong></td><td class="crd-td">33,94, -6,93</td><td class="crd-td">2,5k</td><td class="crd-td">4,7k</td><td class="crd-td">8k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Karia Ba Mohamed</strong></td><td class="crd-td">34,37, -5,21</td><td class="crd-td">5,2k</td><td class="crd-td">9,8k</td><td class="crd-td">15,2k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Outat El Haj</strong></td><td class="crd-td">33,34, -3,7</td><td class="crd-td">3,9k</td><td class="crd-td">7,3k</td><td class="crd-td">12,2k</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Tamallalt</strong></td><td class="crd-td">31,82, -7,51</td><td class="crd-td">3,4k</td><td class="crd-td">6,4k</td><td class="crd-td">10,7k</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>El Gara</strong></td><td class="crd-td">33,28, -7,23</td><td class="crd-td">6,1k</td><td class="crd-td">11,6k</td><td class="crd-td">17,1k</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>El Ksiba</strong></td><td class="crd-td">32,57, -6,02</td><td class="crd-td">6k</td><td class="crd-td">11,3k</td><td class="crd-td">17,2k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Lalla Mimouna</strong></td><td class="crd-td">34,85, -6,07</td><td class="crd-td">4k</td><td class="crd-td">7,7k</td><td class="crd-td">11,9k</td><td class="crd-td">19,9k</td></tr>
<tr><td class="crd-td"><strong>Tata</strong></td><td class="crd-td">29,74, -7,97</td><td class="crd-td">4,9k</td><td class="crd-td">9,2k</td><td class="crd-td">14,1k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>El Borouj</strong></td><td class="crd-td">32,5, -7,19</td><td class="crd-td">5,4k</td><td class="crd-td">10,1k</td><td class="crd-td">15,2k</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Boumia</strong></td><td class="crd-td">32,72, -5,1</td><td class="crd-td">3,9k</td><td class="crd-td">7,3k</td><td class="crd-td">11,4k</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Agouraï</strong></td><td class="crd-td">33,63, -5,58</td><td class="crd-td">3,9k</td><td class="crd-td">7,4k</td><td class="crd-td">11,9k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Ribate El Kheir</strong></td><td class="crd-td">33,81, -4,42</td><td class="crd-td">3,3k</td><td class="crd-td">6,2k</td><td class="crd-td">10,7k</td><td class="crd-td">18,7k</td></tr>
<tr><td class="crd-td"><strong>Bouizakarne</strong></td><td class="crd-td">29,18, -9,71</td><td class="crd-td">3,4k</td><td class="crd-td">6,3k</td><td class="crd-td">10,5k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Moulay Abdellah</strong></td><td class="crd-td">33,09, -7,06</td><td class="crd-td">2k</td><td class="crd-td">3,8k</td><td class="crd-td">5,9k</td><td class="crd-td">17,7k</td></tr>
<tr><td class="crd-td"><strong>Ahfir</strong></td><td class="crd-td">34,95, -2,1</td><td class="crd-td">8k</td><td class="crd-td">15,1k</td><td class="crd-td">19,9k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Aousserd</strong></td><td class="crd-td">22,55, -14,33</td><td class="crd-td">1,3k</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">6,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements in Morocco (155 sites) ordered by 2025AD population, 1951AD-2025AD.</figcaption>
</figure>

## Algeria

Algeria's 172 catalogued settlements grew more than fourfold from 4,33M in 1951AD to 18,92M in 2025AD. Alongside the northern coastal hubs of El Djazaïr (859,6k to 3M), Oran (277,6k to 1,02M), Constantine (194,4k to 568,4k), Annaba (100,8k to 434,8k) and Blida (56,9k to 420,9k), High Plateaux and Saharan cities recorded extraordinary multipliers: Djelfa rose from 26,8k to 337,3k, Batna from 58k to 367,3k, Biskra from 51,1k to 259,7k, El Oued from 26,6k to 236,6k, Ouargla from 23,8k to 215,6k, Béchar from 41,1k to 209,6k, Ghardaïa from 28,2k to 181,3k, Tamanrasset from 7k to 103,7k and Adrar from 6,7k to 86,6k (Table 3) [@Abdelhafid2023Problem; @Saidi2025Role].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1951AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>El Djazaïr</strong></td><td class="crd-td">36,73, 3,09</td><td class="crd-td">859,6k</td><td class="crd-td">1,52M</td><td class="crd-td">2,14M</td><td class="crd-td">3M</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">35,7, -0,64</td><td class="crd-td">277,6k</td><td class="crd-td">523k</td><td class="crd-td">748,3k</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">36,37, 6,61</td><td class="crd-td">194,4k</td><td class="crd-td">370,9k</td><td class="crd-td">472,7k</td><td class="crd-td">568,4k</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">36,9, 7,77</td><td class="crd-td">100,8k</td><td class="crd-td">190,8k</td><td class="crd-td">333,7k</td><td class="crd-td">434,8k</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">36,47, 2,83</td><td class="crd-td">56,9k</td><td class="crd-td">107,6k</td><td class="crd-td">264,2k</td><td class="crd-td">420,9k</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">35,56, 6,17</td><td class="crd-td">58k</td><td class="crd-td">121,9k</td><td class="crd-td">254,8k</td><td class="crd-td">367,3k</td></tr>
<tr><td class="crd-td"><strong>Djelfa</strong></td><td class="crd-td">34,67, 3,26</td><td class="crd-td">26,8k</td><td class="crd-td">56,3k</td><td class="crd-td">175,9k</td><td class="crd-td">337,3k</td></tr>
<tr><td class="crd-td"><strong>Sétif</strong></td><td class="crd-td">36,19, 5,41</td><td class="crd-td">73,2k</td><td class="crd-td">140,8k</td><td class="crd-td">221,8k</td><td class="crd-td">319,9k</td></tr>
<tr><td class="crd-td"><strong>Sidi bel Abbès</strong></td><td class="crd-td">35,19, -0,63</td><td class="crd-td">63,8k</td><td class="crd-td">123,7k</td><td class="crd-td">188,9k</td><td class="crd-td">266,6k</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">34,85, 5,73</td><td class="crd-td">51,1k</td><td class="crd-td">100,5k</td><td class="crd-td">182,3k</td><td class="crd-td">259,7k</td></tr>
<tr><td class="crd-td"><strong>Tébessa</strong></td><td class="crd-td">35,4, 8,12</td><td class="crd-td">34,5k</td><td class="crd-td">72,4k</td><td class="crd-td">161,6k</td><td class="crd-td">246,7k</td></tr>
<tr><td class="crd-td"><strong>El Oued</strong></td><td class="crd-td">33,36, 6,86</td><td class="crd-td">26,6k</td><td class="crd-td">53,1k</td><td class="crd-td">153,8k</td><td class="crd-td">236,6k</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">36,88, 6,91</td><td class="crd-td">51,6k</td><td class="crd-td">99,5k</td><td class="crd-td">172,1k</td><td class="crd-td">232,1k</td></tr>
<tr><td class="crd-td"><strong>Tiaret</strong></td><td class="crd-td">35,37, 1,32</td><td class="crd-td">30,1k</td><td class="crd-td">63,5k</td><td class="crd-td">154,4k</td><td class="crd-td">227k</td></tr>
<tr><td class="crd-td"><strong>Béjaïa</strong></td><td class="crd-td">36,76, 5,08</td><td class="crd-td">41,7k</td><td class="crd-td">84,3k</td><td class="crd-td">150,3k</td><td class="crd-td">223,5k</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">34,88, -1,31</td><td class="crd-td">61,7k</td><td class="crd-td">108,9k</td><td class="crd-td">159,6k</td><td class="crd-td">220,2k</td></tr>
<tr><td class="crd-td"><strong>Ouargla</strong></td><td class="crd-td">31,95, 5,33</td><td class="crd-td">23,8k</td><td class="crd-td">51,4k</td><td class="crd-td">145k</td><td class="crd-td">215,6k</td></tr>
<tr><td class="crd-td"><strong>Béchar</strong></td><td class="crd-td">31,62, -2,22</td><td class="crd-td">41,1k</td><td class="crd-td">81,8k</td><td class="crd-td">140,2k</td><td class="crd-td">209,6k</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">35,93, 0,09</td><td class="crd-td">48k</td><td class="crd-td">92,9k</td><td class="crd-td">143,7k</td><td class="crd-td">206,7k</td></tr>
<tr><td class="crd-td"><strong>Bordj Bou Arreridj</strong></td><td class="crd-td">36,07, 4,76</td><td class="crd-td">30,8k</td><td class="crd-td">62,1k</td><td class="crd-td">134,5k</td><td class="crd-td">201,5k</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">36,17, 1,33</td><td class="crd-td">42,8k</td><td class="crd-td">79,2k</td><td class="crd-td">130,7k</td><td class="crd-td">196,8k</td></tr>
<tr><td class="crd-td"><strong>Souk Ahras</strong></td><td class="crd-td">36,29, 7,95</td><td class="crd-td">29,4k</td><td class="crd-td">58,8k</td><td class="crd-td">121,4k</td><td class="crd-td">194,7k</td></tr>
<tr><td class="crd-td"><strong>Médéa</strong></td><td class="crd-td">36,26, 2,75</td><td class="crd-td">32,6k</td><td class="crd-td">64,1k</td><td class="crd-td">131,7k</td><td class="crd-td">184,5k</td></tr>
<tr><td class="crd-td"><strong>El Eulma</strong></td><td class="crd-td">36,15, 5,69</td><td class="crd-td">23,5k</td><td class="crd-td">48,2k</td><td class="crd-td">111,9k</td><td class="crd-td">184,4k</td></tr>
<tr><td class="crd-td"><strong>Touggourt</strong></td><td class="crd-td">33,11, 6,07</td><td class="crd-td">24k</td><td class="crd-td">49,5k</td><td class="crd-td">119,5k</td><td class="crd-td">181,8k</td></tr>
<tr><td class="crd-td"><strong>Ghardaïa</strong></td><td class="crd-td">32,49, 3,67</td><td class="crd-td">28,2k</td><td class="crd-td">53,4k</td><td class="crd-td">130,8k</td><td class="crd-td">181,3k</td></tr>
<tr><td class="crd-td"><strong>Saïda</strong></td><td class="crd-td">34,83, 0,15</td><td class="crd-td">31,5k</td><td class="crd-td">62,4k</td><td class="crd-td">127,6k</td><td class="crd-td">180,8k</td></tr>
<tr><td class="crd-td"><strong>Laghouat</strong></td><td class="crd-td">33,8, 2,87</td><td class="crd-td">22,7k</td><td class="crd-td">46,9k</td><td class="crd-td">105,7k</td><td class="crd-td">170,5k</td></tr>
<tr><td class="crd-td"><strong>M'Sila</strong></td><td class="crd-td">35,71, 4,54</td><td class="crd-td">19k</td><td class="crd-td">41,1k</td><td class="crd-td">107,7k</td><td class="crd-td">168,7k</td></tr>
<tr><td class="crd-td"><strong>Jijel</strong></td><td class="crd-td">36,82, 5,76</td><td class="crd-td">19,8k</td><td class="crd-td">41,8k</td><td class="crd-td">110,9k</td><td class="crd-td">166,9k</td></tr>
<tr><td class="crd-td"><strong>Relizane</strong></td><td class="crd-td">35,74, 0,56</td><td class="crd-td">31,3k</td><td class="crd-td">61,9k</td><td class="crd-td">116,6k</td><td class="crd-td">156,4k</td></tr>
<tr><td class="crd-td"><strong>Guelma</strong></td><td class="crd-td">36,46, 7,43</td><td class="crd-td">31,7k</td><td class="crd-td">61,9k</td><td class="crd-td">110,9k</td><td class="crd-td">152,2k</td></tr>
<tr><td class="crd-td"><strong>Rouïba</strong></td><td class="crd-td">36,74, 3,28</td><td class="crd-td">10,7k</td><td class="crd-td">24,2k</td><td class="crd-td">107,3k</td><td class="crd-td">149,1k</td></tr>
<tr><td class="crd-td"><strong>Aïn Béïda</strong></td><td class="crd-td">35,8, 7,39</td><td class="crd-td">24k</td><td class="crd-td">47,7k</td><td class="crd-td">93,3k</td><td class="crd-td">147,3k</td></tr>
<tr><td class="crd-td"><strong>Khenchela</strong></td><td class="crd-td">35,44, 7,14</td><td class="crd-td">25k</td><td class="crd-td">50,7k</td><td class="crd-td">91,6k</td><td class="crd-td">145,2k</td></tr>
<tr><td class="crd-td"><strong>Bou Saâda</strong></td><td class="crd-td">35,21, 4,17</td><td class="crd-td">26,4k</td><td class="crd-td">52k</td><td class="crd-td">102,1k</td><td class="crd-td">141,8k</td></tr>
<tr><td class="crd-td"><strong>Mascara</strong></td><td class="crd-td">35,4, 0,14</td><td class="crd-td">27,9k</td><td class="crd-td">53,5k</td><td class="crd-td">91,8k</td><td class="crd-td">137,8k</td></tr>
<tr><td class="crd-td"><strong>Tizi Ouzou</strong></td><td class="crd-td">36,71, 4,05</td><td class="crd-td">22k</td><td class="crd-td">44,1k</td><td class="crd-td">81,1k</td><td class="crd-td">132,3k</td></tr>
<tr><td class="crd-td"><strong>Barika</strong></td><td class="crd-td">35,39, 5,37</td><td class="crd-td">14,9k</td><td class="crd-td">33,1k</td><td class="crd-td">82,9k</td><td class="crd-td">124,5k</td></tr>
<tr><td class="crd-td"><strong>Aïn Oussera</strong></td><td class="crd-td">35,45, 2,91</td><td class="crd-td">9,7k</td><td class="crd-td">22,8k</td><td class="crd-td">84,3k</td><td class="crd-td">124,5k</td></tr>
<tr><td class="crd-td"><strong>Messaâd</strong></td><td class="crd-td">34,15, 3,5</td><td class="crd-td">11,2k</td><td class="crd-td">25,8k</td><td class="crd-td">79,4k</td><td class="crd-td">123,2k</td></tr>
<tr><td class="crd-td"><strong>Aflou</strong></td><td class="crd-td">34,11, 2,1</td><td class="crd-td">9,2k</td><td class="crd-td">19,6k</td><td class="crd-td">54,9k</td><td class="crd-td">118,7k</td></tr>
<tr><td class="crd-td"><strong>El Khroub</strong></td><td class="crd-td">36,26, 6,69</td><td class="crd-td">8,4k</td><td class="crd-td">18,5k</td><td class="crd-td">69,6k</td><td class="crd-td">114,3k</td></tr>
<tr><td class="crd-td"><strong>Maghnia</strong></td><td class="crd-td">34,85, -1,73</td><td class="crd-td">22,2k</td><td class="crd-td">42,8k</td><td class="crd-td">76,1k</td><td class="crd-td">110,9k</td></tr>
<tr><td class="crd-td"><strong>El Bayadh</strong></td><td class="crd-td">33,68, 1,02</td><td class="crd-td">15,9k</td><td class="crd-td">31,6k</td><td class="crd-td">64,6k</td><td class="crd-td">108,6k</td></tr>
<tr><td class="crd-td"><strong>Hamma Bouziane</strong></td><td class="crd-td">36,41, 6,6</td><td class="crd-td">12,2k</td><td class="crd-td">25,3k</td><td class="crd-td">68,1k</td><td class="crd-td">106,1k</td></tr>
<tr><td class="crd-td"><strong>Tamanrasset</strong></td><td class="crd-td">22,79, 5,52</td><td class="crd-td">7k</td><td class="crd-td">15,7k</td><td class="crd-td">68,4k</td><td class="crd-td">103,7k</td></tr>
<tr><td class="crd-td"><strong>Khemis Miliana</strong></td><td class="crd-td">36,26, 2,22</td><td class="crd-td">21k</td><td class="crd-td">41,9k</td><td class="crd-td">72,7k</td><td class="crd-td">102,1k</td></tr>
<tr><td class="crd-td"><strong>Hassi Bahbah</strong></td><td class="crd-td">35,07, 3,03</td><td class="crd-td">7k</td><td class="crd-td">16,7k</td><td class="crd-td">62k</td><td class="crd-td">97,7k</td></tr>
<tr><td class="crd-td"><strong>Sougueur</strong></td><td class="crd-td">35,19, 1,5</td><td class="crd-td">13,1k</td><td class="crd-td">26,5k</td><td class="crd-td">60,2k</td><td class="crd-td">90,1k</td></tr>
<tr><td class="crd-td"><strong>Aïn Témouchent</strong></td><td class="crd-td">35,3, -1,14</td><td class="crd-td">21,6k</td><td class="crd-td">40,8k</td><td class="crd-td">58k</td><td class="crd-td">89,8k</td></tr>
<tr><td class="crd-td"><strong>Bir El Ater</strong></td><td class="crd-td">34,74, 8,06</td><td class="crd-td">7,8k</td><td class="crd-td">16,7k</td><td class="crd-td">56,3k</td><td class="crd-td">89,8k</td></tr>
<tr><td class="crd-td"><strong>Bouira</strong></td><td class="crd-td">36,37, 3,9</td><td class="crd-td">13,9k</td><td class="crd-td">27,5k</td><td class="crd-td">55,4k</td><td class="crd-td">87k</td></tr>
<tr><td class="crd-td"><strong>Adrar</strong></td><td class="crd-td">27,87, -0,29</td><td class="crd-td">6,7k</td><td class="crd-td">15,5k</td><td class="crd-td">46,9k</td><td class="crd-td">86,6k</td></tr>
<tr><td class="crd-td"><strong>Oum El Bouaghi</strong></td><td class="crd-td">35,88, 7,11</td><td class="crd-td">8,5k</td><td class="crd-td">17,8k</td><td class="crd-td">51,2k</td><td class="crd-td">85,3k</td></tr>
<tr><td class="crd-td"><strong>Sidi Aïssa</strong></td><td class="crd-td">35,89, 3,77</td><td class="crd-td">9,5k</td><td class="crd-td">20,4k</td><td class="crd-td">55,6k</td><td class="crd-td">84,8k</td></tr>
<tr><td class="crd-td"><strong>Cheria</strong></td><td class="crd-td">35,27, 7,75</td><td class="crd-td">6,2k</td><td class="crd-td">13,7k</td><td class="crd-td">55,9k</td><td class="crd-td">83,9k</td></tr>
<tr><td class="crd-td"><strong>Tissemsilt</strong></td><td class="crd-td">35,61, 1,81</td><td class="crd-td">9,7k</td><td class="crd-td">19,5k</td><td class="crd-td">54,9k</td><td class="crd-td">83,8k</td></tr>
<tr><td class="crd-td"><strong>Aïn M'lila</strong></td><td class="crd-td">36,04, 6,57</td><td class="crd-td">15,1k</td><td class="crd-td">29,3k</td><td class="crd-td">53,3k</td><td class="crd-td">82,9k</td></tr>
<tr><td class="crd-td"><strong>Mécheria</strong></td><td class="crd-td">33,54, -0,28</td><td class="crd-td">12k</td><td class="crd-td">24,2k</td><td class="crd-td">54,5k</td><td class="crd-td">82,5k</td></tr>
<tr><td class="crd-td"><strong>Mila</strong></td><td class="crd-td">36,45, 6,26</td><td class="crd-td">9,7k</td><td class="crd-td">21,5k</td><td class="crd-td">56,3k</td><td class="crd-td">80,2k</td></tr>
<tr><td class="crd-td"><strong>Mohammadia</strong></td><td class="crd-td">35,59, 0,07</td><td class="crd-td">19,2k</td><td class="crd-td">36,1k</td><td class="crd-td">53,7k</td><td class="crd-td">79,2k</td></tr>
<tr><td class="crd-td"><strong>Koléa</strong></td><td class="crd-td">36,64, 2,77</td><td class="crd-td">13,5k</td><td class="crd-td">26,5k</td><td class="crd-td">52,2k</td><td class="crd-td">78,2k</td></tr>
<tr><td class="crd-td"><strong>Sig</strong></td><td class="crd-td">35,53, -0,19</td><td class="crd-td">18,2k</td><td class="crd-td">34,8k</td><td class="crd-td">55,3k</td><td class="crd-td">77,9k</td></tr>
<tr><td class="crd-td"><strong>Taher</strong></td><td class="crd-td">36,76, 5,9</td><td class="crd-td">5,3k</td><td class="crd-td">11,9k</td><td class="crd-td">53k</td><td class="crd-td">76,7k</td></tr>
<tr><td class="crd-td"><strong>Chettia</strong></td><td class="crd-td">36,18, 1,25</td><td class="crd-td">17,5k</td><td class="crd-td">33k</td><td class="crd-td">51,1k</td><td class="crd-td">76,3k</td></tr>
<tr><td class="crd-td"><strong>Ksar El Boukhari</strong></td><td class="crd-td">35,89, 2,75</td><td class="crd-td">14,3k</td><td class="crd-td">28,1k</td><td class="crd-td">53,3k</td><td class="crd-td">75,7k</td></tr>
<tr><td class="crd-td"><strong>El Guerrara</strong></td><td class="crd-td">32,79, 4,5</td><td class="crd-td">10,2k</td><td class="crd-td">20,7k</td><td class="crd-td">49,7k</td><td class="crd-td">74,3k</td></tr>
<tr><td class="crd-td"><strong>Ouled Djellal</strong></td><td class="crd-td">34,43, 5,06</td><td class="crd-td">10,8k</td><td class="crd-td">21,4k</td><td class="crd-td">44,6k</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Larbaâ</strong></td><td class="crd-td">36,56, 3,15</td><td class="crd-td">13,9k</td><td class="crd-td">26,7k</td><td class="crd-td">46,8k</td><td class="crd-td">74k</td></tr>
<tr><td class="crd-td"><strong>Arzew</strong></td><td class="crd-td">35,85, -0,32</td><td class="crd-td">11,8k</td><td class="crd-td">24,1k</td><td class="crd-td">56,6k</td><td class="crd-td">73,8k</td></tr>
<tr><td class="crd-td"><strong>El Meniaa</strong></td><td class="crd-td">30,58, 2,88</td><td class="crd-td">9,7k</td><td class="crd-td">18,3k</td><td class="crd-td">44,9k</td><td class="crd-td">72,8k</td></tr>
<tr><td class="crd-td"><strong>Boufarik</strong></td><td class="crd-td">36,57, 2,91</td><td class="crd-td">19,8k</td><td class="crd-td">36,7k</td><td class="crd-td">50,3k</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td"><strong>Boudouaou</strong></td><td class="crd-td">36,73, 3,41</td><td class="crd-td">9,5k</td><td class="crd-td">19,3k</td><td class="crd-td">45k</td><td class="crd-td">71,6k</td></tr>
<tr><td class="crd-td"><strong>Berrouaghia</strong></td><td class="crd-td">36,14, 2,91</td><td class="crd-td">6,5k</td><td class="crd-td">14,3k</td><td class="crd-td">52,6k</td><td class="crd-td">70,8k</td></tr>
<tr><td class="crd-td"><strong>Aïn Touta</strong></td><td class="crd-td">35,38, 5,9</td><td class="crd-td">8,3k</td><td class="crd-td">18k</td><td class="crd-td">46,9k</td><td class="crd-td">70,7k</td></tr>
<tr><td class="crd-td"><strong>Oued Rhiou</strong></td><td class="crd-td">35,96, 0,92</td><td class="crd-td">8,7k</td><td class="crd-td">18,3k</td><td class="crd-td">44,9k</td><td class="crd-td">70,3k</td></tr>
<tr><td class="crd-td"><strong>Aïn Defla</strong></td><td class="crd-td">36,26, 1,97</td><td class="crd-td">8,6k</td><td class="crd-td">17,6k</td><td class="crd-td">43,7k</td><td class="crd-td">70,1k</td></tr>
<tr><td class="crd-td"><strong>Hassi Bounif</strong></td><td class="crd-td">35,69, -0,5</td><td class="crd-td">3,1k</td><td class="crd-td">7,3k</td><td class="crd-td">39,1k</td><td class="crd-td">68,1k</td></tr>
<tr><td class="crd-td"><strong>En Nedjma</strong></td><td class="crd-td">35,65, -0,57</td><td class="crd-td">11,8k</td><td class="crd-td">22,3k</td><td class="crd-td">36,2k</td><td class="crd-td">65,5k</td></tr>
<tr><td class="crd-td"><strong>Ksar Chellala</strong></td><td class="crd-td">35,21, 2,32</td><td class="crd-td">8,6k</td><td class="crd-td">18k</td><td class="crd-td">41,5k</td><td class="crd-td">65,3k</td></tr>
<tr><td class="crd-td"><strong>Aïn Oulmane</strong></td><td class="crd-td">35,92, 5,32</td><td class="crd-td">7,1k</td><td class="crd-td">14,8k</td><td class="crd-td">41,2k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Tolga</strong></td><td class="crd-td">34,72, 5,38</td><td class="crd-td">8,4k</td><td class="crd-td">17,2k</td><td class="crd-td">41,8k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Frenda</strong></td><td class="crd-td">35,07, 1,05</td><td class="crd-td">10,2k</td><td class="crd-td">20,5k</td><td class="crd-td">44,6k</td><td class="crd-td">62,6k</td></tr>
<tr><td class="crd-td"><strong>Aïn Fakroun</strong></td><td class="crd-td">35,97, 6,87</td><td class="crd-td">6,7k</td><td class="crd-td">14,9k</td><td class="crd-td">42,2k</td><td class="crd-td">61,9k</td></tr>
<tr><td class="crd-td"><strong>Guemar</strong></td><td class="crd-td">33,49, 6,8</td><td class="crd-td">4,3k</td><td class="crd-td">9,4k</td><td class="crd-td">36,4k</td><td class="crd-td">61,4k</td></tr>
<tr><td class="crd-td"><strong>Aïn Sefra</strong></td><td class="crd-td">32,75, -0,58</td><td class="crd-td">8,3k</td><td class="crd-td">16,6k</td><td class="crd-td">36k</td><td class="crd-td">60,2k</td></tr>
<tr><td class="crd-td"><strong>Ouenza</strong></td><td class="crd-td">35,95, 8,13</td><td class="crd-td">17,1k</td><td class="crd-td">31,4k</td><td class="crd-td">40,7k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Khemis El Khechna</strong></td><td class="crd-td">36,65, 3,33</td><td class="crd-td">8,7k</td><td class="crd-td">17,1k</td><td class="crd-td">34,6k</td><td class="crd-td">59,6k</td></tr>
<tr><td class="crd-td"><strong>Douéra</strong></td><td class="crd-td">36,67, 2,94</td><td class="crd-td">5,5k</td><td class="crd-td">10,6k</td><td class="crd-td">22,5k</td><td class="crd-td">58,7k</td></tr>
<tr><td class="crd-td"><strong>El Milia</strong></td><td class="crd-td">36,75, 6,27</td><td class="crd-td">7,6k</td><td class="crd-td">15,6k</td><td class="crd-td">40,5k</td><td class="crd-td">58,3k</td></tr>
<tr><td class="crd-td"><strong>Tindouf</strong></td><td class="crd-td">27,67, -8,15</td><td class="crd-td">3,4k</td><td class="crd-td">7,6k</td><td class="crd-td">28,2k</td><td class="crd-td">57,9k</td></tr>
<tr><td class="crd-td"><strong>Sedrata</strong></td><td class="crd-td">36,13, 7,53</td><td class="crd-td">12,7k</td><td class="crd-td">24,9k</td><td class="crd-td">40,3k</td><td class="crd-td">57,5k</td></tr>
<tr><td class="crd-td"><strong>Sidi Amar</strong></td><td class="crd-td">36,82, 7,72</td><td class="crd-td">3k</td><td class="crd-td">7,3k</td><td class="crd-td">41,9k</td><td class="crd-td">57,3k</td></tr>
<tr><td class="crd-td"><strong>Ras El Oued</strong></td><td class="crd-td">35,94, 5,03</td><td class="crd-td">8,4k</td><td class="crd-td">17,3k</td><td class="crd-td">36k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>Bordj Menaïel</strong></td><td class="crd-td">36,74, 3,72</td><td class="crd-td">12,9k</td><td class="crd-td">24,3k</td><td class="crd-td">37,2k</td><td class="crd-td">56,5k</td></tr>
<tr><td class="crd-td"><strong>Hassi Messaoud</strong></td><td class="crd-td">31,68, 6,07</td><td class="crd-td">-</td><td class="crd-td">25,3k</td><td class="crd-td">38,8k</td><td class="crd-td">56,4k</td></tr>
<tr><td class="crd-td"><strong>Sour El Ghozlane</strong></td><td class="crd-td">36,15, 3,69</td><td class="crd-td">8,2k</td><td class="crd-td">16,4k</td><td class="crd-td">37k</td><td class="crd-td">55,8k</td></tr>
<tr><td class="crd-td"><strong>Lakhdaria</strong></td><td class="crd-td">36,56, 3,59</td><td class="crd-td">11,7k</td><td class="crd-td">22,6k</td><td class="crd-td">38,7k</td><td class="crd-td">54,4k</td></tr>
<tr><td class="crd-td"><strong>Tadjenanet</strong></td><td class="crd-td">36,12, 5,99</td><td class="crd-td">5,6k</td><td class="crd-td">11,6k</td><td class="crd-td">32,2k</td><td class="crd-td">53,1k</td></tr>
<tr><td class="crd-td"><strong>Bou Ismaïl</strong></td><td class="crd-td">36,64, 2,69</td><td class="crd-td">8,9k</td><td class="crd-td">17,7k</td><td class="crd-td">35k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Meftah</strong></td><td class="crd-td">36,62, 3,22</td><td class="crd-td">10,7k</td><td class="crd-td">20,4k</td><td class="crd-td">33,6k</td><td class="crd-td">51,9k</td></tr>
<tr><td class="crd-td"><strong>Ouled Moussa</strong></td><td class="crd-td">36,68, 3,37</td><td class="crd-td">4,2k</td><td class="crd-td">8,4k</td><td class="crd-td">20,1k</td><td class="crd-td">51,6k</td></tr>
<tr><td class="crd-td"><strong>Beni Saf</strong></td><td class="crd-td">35,3, -1,38</td><td class="crd-td">13,5k</td><td class="crd-td">25,5k</td><td class="crd-td">37,8k</td><td class="crd-td">50,4k</td></tr>
<tr><td class="crd-td"><strong>Métlili</strong></td><td class="crd-td">32,27, 3,63</td><td class="crd-td">8,2k</td><td class="crd-td">16,3k</td><td class="crd-td">34,8k</td><td class="crd-td">50,2k</td></tr>
<tr><td class="crd-td"><strong>El M'Ghair</strong></td><td class="crd-td">33,95, 5,92</td><td class="crd-td">10,4k</td><td class="crd-td">19,7k</td><td class="crd-td">32,9k</td><td class="crd-td">49,6k</td></tr>
<tr><td class="crd-td"><strong>Es Sénia</strong></td><td class="crd-td">35,65, -0,62</td><td class="crd-td">9,6k</td><td class="crd-td">18,2k</td><td class="crd-td">29k</td><td class="crd-td">49,6k</td></tr>
<tr><td class="crd-td"><strong>Sidi Khaled</strong></td><td class="crd-td">34,39, 4,99</td><td class="crd-td">6,7k</td><td class="crd-td">13,6k</td><td class="crd-td">32,9k</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td"><strong>Bougara</strong></td><td class="crd-td">36,54, 3,08</td><td class="crd-td">9,9k</td><td class="crd-td">19,2k</td><td class="crd-td">34,9k</td><td class="crd-td">48,7k</td></tr>
<tr><td class="crd-td"><strong>Akbou</strong></td><td class="crd-td">36,46, 4,53</td><td class="crd-td">11,3k</td><td class="crd-td">21,3k</td><td class="crd-td">33,8k</td><td class="crd-td">48,6k</td></tr>
<tr><td class="crd-td"><strong>Aïn Azel</strong></td><td class="crd-td">35,82, 5,51</td><td class="crd-td">5,2k</td><td class="crd-td">11k</td><td class="crd-td">31,6k</td><td class="crd-td">48,2k</td></tr>
<tr><td class="crd-td"><strong>Chetouane</strong></td><td class="crd-td">34,92, -1,3</td><td class="crd-td">5,6k</td><td class="crd-td">11,4k</td><td class="crd-td">27,2k</td><td class="crd-td">46,7k</td></tr>
<tr><td class="crd-td"><strong>M'Daourouch</strong></td><td class="crd-td">36,08, 7,82</td><td class="crd-td">4,4k</td><td class="crd-td">9k</td><td class="crd-td">23,1k</td><td class="crd-td">46,1k</td></tr>
<tr><td class="crd-td"><strong>Aïn El Turk</strong></td><td class="crd-td">35,74, -0,77</td><td class="crd-td">6,7k</td><td class="crd-td">14k</td><td class="crd-td">27,7k</td><td class="crd-td">46,1k</td></tr>
<tr><td class="crd-td"><strong>El Affroun</strong></td><td class="crd-td">36,47, 2,63</td><td class="crd-td">9,4k</td><td class="crd-td">18,2k</td><td class="crd-td">31,8k</td><td class="crd-td">44,5k</td></tr>
<tr><td class="crd-td"><strong>Djamaa</strong></td><td class="crd-td">33,53, 5,99</td><td class="crd-td">10k</td><td class="crd-td">18,7k</td><td class="crd-td">27,1k</td><td class="crd-td">44,3k</td></tr>
<tr><td class="crd-td"><strong>Cherchell</strong></td><td class="crd-td">36,6, 2,19</td><td class="crd-td">8,3k</td><td class="crd-td">15,8k</td><td class="crd-td">26,1k</td><td class="crd-td">43,6k</td></tr>
<tr><td class="crd-td"><strong>Beni Tamou</strong></td><td class="crd-td">36,54, 2,82</td><td class="crd-td">3,5k</td><td class="crd-td">7,4k</td><td class="crd-td">23,3k</td><td class="crd-td">42,9k</td></tr>
<tr><td class="crd-td"><strong>Hadjout</strong></td><td class="crd-td">36,51, 2,41</td><td class="crd-td">9k</td><td class="crd-td">17,5k</td><td class="crd-td">31,8k</td><td class="crd-td">42,9k</td></tr>
<tr><td class="crd-td"><strong>Azzaba</strong></td><td class="crd-td">36,74, 7,11</td><td class="crd-td">8,9k</td><td class="crd-td">17,2k</td><td class="crd-td">30,2k</td><td class="crd-td">42,8k</td></tr>
<tr><td class="crd-td"><strong>Aïn Taya</strong></td><td class="crd-td">36,79, 3,29</td><td class="crd-td">6,9k</td><td class="crd-td">13,7k</td><td class="crd-td">29,4k</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>El Attaf</strong></td><td class="crd-td">36,22, 1,67</td><td class="crd-td">6,3k</td><td class="crd-td">12,6k</td><td class="crd-td">28,3k</td><td class="crd-td">42,3k</td></tr>
<tr><td class="crd-td"><strong>El Harrouch</strong></td><td class="crd-td">36,6, 6,88</td><td class="crd-td">8,1k</td><td class="crd-td">15,8k</td><td class="crd-td">29k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Aïn El Melh</strong></td><td class="crd-td">34,84, 4,16</td><td class="crd-td">3,6k</td><td class="crd-td">8,1k</td><td class="crd-td">23,7k</td><td class="crd-td">41,7k</td></tr>
<tr><td class="crd-td"><strong>Gdyel</strong></td><td class="crd-td">35,78, -0,43</td><td class="crd-td">6,2k</td><td class="crd-td">12,3k</td><td class="crd-td">26,6k</td><td class="crd-td">41,6k</td></tr>
<tr><td class="crd-td"><strong>Kais</strong></td><td class="crd-td">35,49, 6,92</td><td class="crd-td">9,7k</td><td class="crd-td">18,3k</td><td class="crd-td">28,2k</td><td class="crd-td">41,4k</td></tr>
<tr><td class="crd-td"><strong>Sebdou</strong></td><td class="crd-td">34,64, -1,33</td><td class="crd-td">5,6k</td><td class="crd-td">11,6k</td><td class="crd-td">29,5k</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Aïn Bessem</strong></td><td class="crd-td">36,29, 3,67</td><td class="crd-td">7,3k</td><td class="crd-td">14,6k</td><td class="crd-td">29,2k</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Aïn Smara</strong></td><td class="crd-td">36,27, 6,5</td><td class="crd-td">1,6k</td><td class="crd-td">3,7k</td><td class="crd-td">22,3k</td><td class="crd-td">40,7k</td></tr>
<tr><td class="crd-td"><strong>Bougaa</strong></td><td class="crd-td">36,33, 5,09</td><td class="crd-td">10,9k</td><td class="crd-td">20,6k</td><td class="crd-td">30,8k</td><td class="crd-td">40,5k</td></tr>
<tr><td class="crd-td"><strong>Remchi</strong></td><td class="crd-td">35,06, -1,43</td><td class="crd-td">9k</td><td class="crd-td">17,1k</td><td class="crd-td">27k</td><td class="crd-td">40,4k</td></tr>
<tr><td class="crd-td"><strong>Mahdia</strong></td><td class="crd-td">35,43, 1,76</td><td class="crd-td">7,1k</td><td class="crd-td">14,5k</td><td class="crd-td">29,1k</td><td class="crd-td">39,8k</td></tr>
<tr><td class="crd-td"><strong>Sidi Moussa</strong></td><td class="crd-td">36,61, 3,09</td><td class="crd-td">7,5k</td><td class="crd-td">14,2k</td><td class="crd-td">23,4k</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Aïn Kercha</strong></td><td class="crd-td">35,92, 6,7</td><td class="crd-td">4,4k</td><td class="crd-td">9,3k</td><td class="crd-td">26,5k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Berriane</strong></td><td class="crd-td">32,83, 3,77</td><td class="crd-td">7,5k</td><td class="crd-td">15,2k</td><td class="crd-td">25,8k</td><td class="crd-td">38,3k</td></tr>
<tr><td class="crd-td"><strong>El Idrissia</strong></td><td class="crd-td">34,45, 2,53</td><td class="crd-td">3,4k</td><td class="crd-td">7,1k</td><td class="crd-td">19k</td><td class="crd-td">37,9k</td></tr>
<tr><td class="crd-td"><strong>Sidi Okba</strong></td><td class="crd-td">34,75, 5,9</td><td class="crd-td">6,3k</td><td class="crd-td">12,3k</td><td class="crd-td">23,9k</td><td class="crd-td">37,4k</td></tr>
<tr><td class="crd-td"><strong>N'Gaous</strong></td><td class="crd-td">35,55, 5,61</td><td class="crd-td">5,2k</td><td class="crd-td">10,7k</td><td class="crd-td">26,4k</td><td class="crd-td">37,4k</td></tr>
<tr><td class="crd-td"><strong>Draâ Ben Khedda</strong></td><td class="crd-td">36,73, 3,96</td><td class="crd-td">7,4k</td><td class="crd-td">14,5k</td><td class="crd-td">26,8k</td><td class="crd-td">37,3k</td></tr>
<tr><td class="crd-td"><strong>Collo</strong></td><td class="crd-td">37,01, 6,56</td><td class="crd-td">7k</td><td class="crd-td">13,9k</td><td class="crd-td">28,1k</td><td class="crd-td">37,2k</td></tr>
<tr><td class="crd-td"><strong>Ténès</strong></td><td class="crd-td">36,51, 1,31</td><td class="crd-td">9k</td><td class="crd-td">17,3k</td><td class="crd-td">28,4k</td><td class="crd-td">37,1k</td></tr>
<tr><td class="crd-td"><strong>Boumerdès</strong></td><td class="crd-td">36,77, 3,48</td><td class="crd-td">4,6k</td><td class="crd-td">9,8k</td><td class="crd-td">28,6k</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Zighout Youcef</strong></td><td class="crd-td">36,53, 6,71</td><td class="crd-td">5,6k</td><td class="crd-td">11,3k</td><td class="crd-td">25,8k</td><td class="crd-td">36,5k</td></tr>
<tr><td class="crd-td"><strong>Aïn El Hadjel</strong></td><td class="crd-td">35,67, 3,88</td><td class="crd-td">3,5k</td><td class="crd-td">8,1k</td><td class="crd-td">25,2k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Boukadir</strong></td><td class="crd-td">36,07, 1,13</td><td class="crd-td">4,4k</td><td class="crd-td">8,7k</td><td class="crd-td">19,3k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Mouzaïa</strong></td><td class="crd-td">36,47, 2,69</td><td class="crd-td">7,6k</td><td class="crd-td">14,6k</td><td class="crd-td">24,9k</td><td class="crd-td">36,2k</td></tr>
<tr><td class="crd-td"><strong>Grarem Gouga</strong></td><td class="crd-td">36,55, 6,38</td><td class="crd-td">4,9k</td><td class="crd-td">10k</td><td class="crd-td">23,1k</td><td class="crd-td">36,2k</td></tr>
<tr><td class="crd-td"><strong>Ghazaouet</strong></td><td class="crd-td">35,1, -1,86</td><td class="crd-td">9,7k</td><td class="crd-td">18,4k</td><td class="crd-td">27,9k</td><td class="crd-td">36,1k</td></tr>
<tr><td class="crd-td"><strong>El Mahmal</strong></td><td class="crd-td">35,37, 7,21</td><td class="crd-td">2,1k</td><td class="crd-td">4,7k</td><td class="crd-td">22,6k</td><td class="crd-td">35,8k</td></tr>
<tr><td class="crd-td"><strong>Sfisef</strong></td><td class="crd-td">35,23, -0,24</td><td class="crd-td">8,4k</td><td class="crd-td">16,3k</td><td class="crd-td">27,1k</td><td class="crd-td">35,4k</td></tr>
<tr><td class="crd-td"><strong>Nedroma</strong></td><td class="crd-td">35,01, -1,75</td><td class="crd-td">8,1k</td><td class="crd-td">15,2k</td><td class="crd-td">22k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td"><strong>Théniet El Haâd</strong></td><td class="crd-td">35,87, 2,03</td><td class="crd-td">5,9k</td><td class="crd-td">11,9k</td><td class="crd-td">26,3k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td"><strong>Ammi Moussa</strong></td><td class="crd-td">35,87, 1,11</td><td class="crd-td">3,3k</td><td class="crd-td">7,2k</td><td class="crd-td">25,3k</td><td class="crd-td">34,9k</td></tr>
<tr><td class="crd-td"><strong>Oued Zenati</strong></td><td class="crd-td">36,32, 7,16</td><td class="crd-td">7,7k</td><td class="crd-td">14,6k</td><td class="crd-td">23,4k</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>El Abadia</strong></td><td class="crd-td">36,27, 1,69</td><td class="crd-td">3,4k</td><td class="crd-td">7,2k</td><td class="crd-td">22,5k</td><td class="crd-td">34,5k</td></tr>
<tr><td class="crd-td"><strong>Faidh El Botma</strong></td><td class="crd-td">33,82, 4,32</td><td class="crd-td">5,6k</td><td class="crd-td">10,6k</td><td class="crd-td">17,5k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Birine</strong></td><td class="crd-td">35,63, 3,23</td><td class="crd-td">4,1k</td><td class="crd-td">8,6k</td><td class="crd-td">23,8k</td><td class="crd-td">33,8k</td></tr>
<tr><td class="crd-td"><strong>Dar Chioukh</strong></td><td class="crd-td">34,9, 3,49</td><td class="crd-td">3,2k</td><td class="crd-td">7k</td><td class="crd-td">23k</td><td class="crd-td">33,8k</td></tr>
<tr><td class="crd-td"><strong>Azazga</strong></td><td class="crd-td">36,74, 4,37</td><td class="crd-td">8k</td><td class="crd-td">15,2k</td><td class="crd-td">22,9k</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>Hennaya</strong></td><td class="crd-td">34,95, -1,37</td><td class="crd-td">7,2k</td><td class="crd-td">14k</td><td class="crd-td">24,9k</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>Teleghma</strong></td><td class="crd-td">36,1, 6,33</td><td class="crd-td">5,6k</td><td class="crd-td">10,9k</td><td class="crd-td">21k</td><td class="crd-td">33,3k</td></tr>
<tr><td class="crd-td"><strong>Ferjioua</strong></td><td class="crd-td">36,41, 5,96</td><td class="crd-td">4,3k</td><td class="crd-td">8,6k</td><td class="crd-td">20,1k</td><td class="crd-td">33,2k</td></tr>
<tr><td class="crd-td"><strong>Maâtkas</strong></td><td class="crd-td">36,6, 3,98</td><td class="crd-td">4,5k</td><td class="crd-td">9,4k</td><td class="crd-td">25,6k</td><td class="crd-td">33,2k</td></tr>
<tr><td class="crd-td"><strong>El Hadjar</strong></td><td class="crd-td">36,8, 7,74</td><td class="crd-td">6,6k</td><td class="crd-td">12,9k</td><td class="crd-td">24,2k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Hammam Bouhadjar</strong></td><td class="crd-td">35,38, -0,97</td><td class="crd-td">9,3k</td><td class="crd-td">17,2k</td><td class="crd-td">23,2k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Ouled Mimoun</strong></td><td class="crd-td">34,9, -1,03</td><td class="crd-td">6,1k</td><td class="crd-td">12k</td><td class="crd-td">23,8k</td><td class="crd-td">32,2k</td></tr>
<tr><td class="crd-td"><strong>Aïn Arnat</strong></td><td class="crd-td">36,19, 5,31</td><td class="crd-td">3,2k</td><td class="crd-td">6,4k</td><td class="crd-td">15,5k</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td"><strong>Reguiba</strong></td><td class="crd-td">33,56, 6,7</td><td class="crd-td">3,9k</td><td class="crd-td">7,9k</td><td class="crd-td">20,5k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Tipaza</strong></td><td class="crd-td">36,59, 2,45</td><td class="crd-td">4k</td><td class="crd-td">7,7k</td><td class="crd-td">12,1k</td><td class="crd-td">19,3k</td></tr>
<tr><td class="crd-td"><strong>Naâma</strong></td><td class="crd-td">33,27, -0,32</td><td class="crd-td">2,5k</td><td class="crd-td">4,7k</td><td class="crd-td">8,1k</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>El Tarf</strong></td><td class="crd-td">36,77, 8,31</td><td class="crd-td">2,8k</td><td class="crd-td">5,3k</td><td class="crd-td">8,8k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Illizi</strong></td><td class="crd-td">26,48, 8,47</td><td class="crd-td">2,4k</td><td class="crd-td">4,5k</td><td class="crd-td">6,7k</td><td class="crd-td">16,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements in Algeria (172 sites) ordered by 2025AD population, 1951AD-2025AD.</figcaption>
</figure>

## Tunisia

Tunisia's 99 catalogued municipalities rose from 1,92M in 1951AD to 6,05M in 2025AD (3,1x), reflecting both early fertility decline and coastal concentration [@Conte2024Marriage; @Amara2018Rural]. Central Tūnis peaked at 649,1k in 2004AD (616,4k in 2025AD) as suburban municipalities such as Sukrah (157,7k), Sīdī Ḥusayn (134k) and Rawād (127,5k) absorbed metropolitan growth, while Sahel and northern ports such as Ṣafāqis (294,8k), Sūsah (257,7k) and Banzart (158,7k) expanded steadily ahead of inland Al-Qayrawān (158,3k) (Table 4).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1951AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tūnis</strong></td><td class="crd-td">36,82, 10,17</td><td class="crd-td">401,6k</td><td class="crd-td">568,7k</td><td class="crd-td">638,2k</td><td class="crd-td">616,4k</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis</strong></td><td class="crd-td">34,74, 10,76</td><td class="crd-td">156,1k</td><td class="crd-td">221k</td><td class="crd-td">262,6k</td><td class="crd-td">294,8k</td></tr>
<tr><td class="crd-td"><strong>Sūsah</strong></td><td class="crd-td">35,83, 10,64</td><td class="crd-td">56,2k</td><td class="crd-td">79,6k</td><td class="crd-td">149,6k</td><td class="crd-td">257,7k</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">37,27, 9,87</td><td class="crd-td">63,6k</td><td class="crd-td">90,1k</td><td class="crd-td">110,1k</td><td class="crd-td">158,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Qayrawān</strong></td><td class="crd-td">35,68, 10,1</td><td class="crd-td">48,6k</td><td class="crd-td">68,9k</td><td class="crd-td">106,9k</td><td class="crd-td">158,3k</td></tr>
<tr><td class="crd-td"><strong>Sukrah</strong></td><td class="crd-td">36,88, 10,25</td><td class="crd-td">47,2k</td><td class="crd-td">66,8k</td><td class="crd-td">85k</td><td class="crd-td">157,7k</td></tr>
<tr><td class="crd-td"><strong>Sīdī Ḥusayn</strong></td><td class="crd-td">36,76, 10,12</td><td class="crd-td">42k</td><td class="crd-td">59,5k</td><td class="crd-td">75,7k</td><td class="crd-td">134k</td></tr>
<tr><td class="crd-td"><strong>Rawād</strong></td><td class="crd-td">36,89, 10,19</td><td class="crd-td">28,5k</td><td class="crd-td">40,4k</td><td class="crd-td">51,4k</td><td class="crd-td">127,5k</td></tr>
<tr><td class="crd-td"><strong>Aryānah</strong></td><td class="crd-td">36,86, 10,19</td><td class="crd-td">51,7k</td><td class="crd-td">73,2k</td><td class="crd-td">93,1k</td><td class="crd-td">126,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Murūj</strong></td><td class="crd-td">36,71, 10,21</td><td class="crd-td">43,4k</td><td class="crd-td">61,5k</td><td class="crd-td">78,1k</td><td class="crd-td">124,2k</td></tr>
<tr><td class="crd-td"><strong>Qābis</strong></td><td class="crd-td">33,88, 10,1</td><td class="crd-td">62,1k</td><td class="crd-td">87,9k</td><td class="crd-td">91k</td><td class="crd-td">110,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Munastīr</strong></td><td class="crd-td">35,78, 10,83</td><td class="crd-td">23,9k</td><td class="crd-td">33,8k</td><td class="crd-td">62,2k</td><td class="crd-td">110,2k</td></tr>
<tr><td class="crd-td"><strong>Qafṣah</strong></td><td class="crd-td">34,42, 8,78</td><td class="crd-td">41k</td><td class="crd-td">58,1k</td><td class="crd-td">79,3k</td><td class="crd-td">106,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Marsā</strong></td><td class="crd-td">36,88, 10,32</td><td class="crd-td">41,2k</td><td class="crd-td">58,4k</td><td class="crd-td">74,2k</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>Bin 'Arūs</strong></td><td class="crd-td">36,75, 10,22</td><td class="crd-td">35,1k</td><td class="crd-td">49,7k</td><td class="crd-td">69,7k</td><td class="crd-td">99,3k</td></tr>
<tr><td class="crd-td"><strong>Dawwār Hayshar</strong></td><td class="crd-td">36,83, 10,08</td><td class="crd-td">40k</td><td class="crd-td">56,6k</td><td class="crd-td">72k</td><td class="crd-td">94,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaṣrayn</strong></td><td class="crd-td">35,17, 8,84</td><td class="crd-td">32k</td><td class="crd-td">45,4k</td><td class="crd-td">69,4k</td><td class="crd-td">93,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Karam</strong></td><td class="crd-td">36,85, 10,3</td><td class="crd-td">30,8k</td><td class="crd-td">43,6k</td><td class="crd-td">55,4k</td><td class="crd-td">90,7k</td></tr>
<tr><td class="crd-td"><strong>At-Taḍāmun</strong></td><td class="crd-td">36,83, 10,11</td><td class="crd-td">41,5k</td><td class="crd-td">58,7k</td><td class="crd-td">74,6k</td><td class="crd-td">87,6k</td></tr>
<tr><td class="crd-td"><strong>Jarbah Ḥawmat as-Sūq</strong></td><td class="crd-td">33,88, 10,86</td><td class="crd-td">34,4k</td><td class="crd-td">48,7k</td><td class="crd-td">61,9k</td><td class="crd-td">86,9k</td></tr>
<tr><td class="crd-td"><strong>Nābul</strong></td><td class="crd-td">36,46, 10,74</td><td class="crd-td">26,6k</td><td class="crd-td">37,7k</td><td class="crd-td">52,5k</td><td class="crd-td">83,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥammāmāt</strong></td><td class="crd-td">36,4, 10,62</td><td class="crd-td">20,5k</td><td class="crd-td">29k</td><td class="crd-td">54,6k</td><td class="crd-td">81,9k</td></tr>
<tr><td class="crd-td"><strong>Madanīn</strong></td><td class="crd-td">33,35, 10,51</td><td class="crd-td">17,9k</td><td class="crd-td">25,4k</td><td class="crd-td">52,1k</td><td class="crd-td">81,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Munayhilah</strong></td><td class="crd-td">36,86, 10,12</td><td class="crd-td">21,3k</td><td class="crd-td">30,1k</td><td class="crd-td">38,3k</td><td class="crd-td">79,3k</td></tr>
<tr><td class="crd-td"><strong>Mūḥammadiyah</strong></td><td class="crd-td">36,67, 10,16</td><td class="crd-td">21,5k</td><td class="crd-td">30,5k</td><td class="crd-td">38,8k</td><td class="crd-td">78,2k</td></tr>
<tr><td class="crd-td"><strong>Jarjīs</strong></td><td class="crd-td">33,5, 11,11</td><td class="crd-td">33k</td><td class="crd-td">46,8k</td><td class="crd-td">65,9k</td><td class="crd-td">78,1k</td></tr>
<tr><td class="crd-td"><strong>Jarbah Madyūnī</strong></td><td class="crd-td">33,81, 10,99</td><td class="crd-td">26,7k</td><td class="crd-td">37,8k</td><td class="crd-td">48,1k</td><td class="crd-td">75,3k</td></tr>
<tr><td class="crd-td"><strong>Bin Qirdān</strong></td><td class="crd-td">33,14, 11,22</td><td class="crd-td">6,3k</td><td class="crd-td">9k</td><td class="crd-td">40,4k</td><td class="crd-td">74,9k</td></tr>
<tr><td class="crd-td"><strong>Rādis</strong></td><td class="crd-td">36,77, 10,27</td><td class="crd-td">23,7k</td><td class="crd-td">33,6k</td><td class="crd-td">42,8k</td><td class="crd-td">74,3k</td></tr>
<tr><td class="crd-td"><strong>Bārdaw</strong></td><td class="crd-td">36,81, 10,13</td><td class="crd-td">44,2k</td><td class="crd-td">62,6k</td><td class="crd-td">69,3k</td><td class="crd-td">73,4k</td></tr>
<tr><td class="crd-td"><strong>Taṭāwīn</strong></td><td class="crd-td">32,93, 10,45</td><td class="crd-td">20,4k</td><td class="crd-td">28,9k</td><td class="crd-td">51,9k</td><td class="crd-td">72,2k</td></tr>
<tr><td class="crd-td"><strong>Wādī al-Layl</strong></td><td class="crd-td">36,83, 10,04</td><td class="crd-td">25,2k</td><td class="crd-td">35,7k</td><td class="crd-td">45,4k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Bājah</strong></td><td class="crd-td">36,73, 9,18</td><td class="crd-td">31,4k</td><td class="crd-td">44,5k</td><td class="crd-td">54,5k</td><td class="crd-td">66,7k</td></tr>
<tr><td class="crd-td"><strong>Masākin</strong></td><td class="crd-td">35,73, 10,58</td><td class="crd-td">29,5k</td><td class="crd-td">41,8k</td><td class="crd-td">53,1k</td><td class="crd-td">65,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Muknīn</strong></td><td class="crd-td">35,63, 10,9</td><td class="crd-td">21,4k</td><td class="crd-td">30,3k</td><td class="crd-td">44,5k</td><td class="crd-td">64,6k</td></tr>
<tr><td class="crd-td"><strong>Ḥalq al-Wādī</strong></td><td class="crd-td">36,82, 10,31</td><td class="crd-td">15k</td><td class="crd-td">21,3k</td><td class="crd-td">27,1k</td><td class="crd-td">62,6k</td></tr>
<tr><td class="crd-td"><strong>Sāqiyat az-Zayt</strong></td><td class="crd-td">34,8, 10,76</td><td class="crd-td">23,8k</td><td class="crd-td">33,7k</td><td class="crd-td">42,8k</td><td class="crd-td">61,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Kāf</strong></td><td class="crd-td">36,17, 8,7</td><td class="crd-td">23,2k</td><td class="crd-td">32,9k</td><td class="crd-td">42,8k</td><td class="crd-td">61,7k</td></tr>
<tr><td class="crd-td"><strong>Manzil Bū Ruqaybah</strong></td><td class="crd-td">37,15, 9,79</td><td class="crd-td">34,6k</td><td class="crd-td">49k</td><td class="crd-td">48,5k</td><td class="crd-td">60,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Mahdiyah</strong></td><td class="crd-td">35,5, 11,06</td><td class="crd-td">24,8k</td><td class="crd-td">35,1k</td><td class="crd-td">44k</td><td class="crd-td">58,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Qal'at al-Kabīrah</strong></td><td class="crd-td">35,87, 10,54</td><td class="crd-td">24,3k</td><td class="crd-td">34,5k</td><td class="crd-td">43,8k</td><td class="crd-td">58,6k</td></tr>
<tr><td class="crd-td"><strong>Qaṣr Hilāl</strong></td><td class="crd-td">35,64, 10,86</td><td class="crd-td">21,2k</td><td class="crd-td">30k</td><td class="crd-td">38,1k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>Jammāl</strong></td><td class="crd-td">35,62, 10,76</td><td class="crd-td">22,1k</td><td class="crd-td">31,3k</td><td class="crd-td">39,8k</td><td class="crd-td">56,9k</td></tr>
<tr><td class="crd-td"><strong>Fūshānah</strong></td><td class="crd-td">36,7, 10,17</td><td class="crd-td">18k</td><td class="crd-td">25,5k</td><td class="crd-td">32,4k</td><td class="crd-td">54,8k</td></tr>
<tr><td class="crd-td"><strong>Sīdī Bū Zayd</strong></td><td class="crd-td">35,04, 9,48</td><td class="crd-td">12,9k</td><td class="crd-td">18,3k</td><td class="crd-td">34,2k</td><td class="crd-td">53,8k</td></tr>
<tr><td class="crd-td"><strong>Bū Mahl al-Bassātīn</strong></td><td class="crd-td">36,72, 10,28</td><td class="crd-td">14,8k</td><td class="crd-td">21k</td><td class="crd-td">26,7k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Qulaybiyah</strong></td><td class="crd-td">36,85, 11,09</td><td class="crd-td">16,6k</td><td class="crd-td">23,4k</td><td class="crd-td">38,6k</td><td class="crd-td">51,9k</td></tr>
<tr><td class="crd-td"><strong>Jundūbah</strong></td><td class="crd-td">36,5, 8,78</td><td class="crd-td">15,6k</td><td class="crd-td">22,2k</td><td class="crd-td">38,7k</td><td class="crd-td">48,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥāmmah</strong></td><td class="crd-td">33,89, 9,8</td><td class="crd-td">18,4k</td><td class="crd-td">26,1k</td><td class="crd-td">33,2k</td><td class="crd-td">48,3k</td></tr>
<tr><td class="crd-td"><strong>Qarmadah</strong></td><td class="crd-td">34,79, 10,72</td><td class="crd-td">19,3k</td><td class="crd-td">27,3k</td><td class="crd-td">34,7k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>Sulaymān</strong></td><td class="crd-td">36,7, 10,49</td><td class="crd-td">15,4k</td><td class="crd-td">21,8k</td><td class="crd-td">27,7k</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>Ḥammām al-Anif</strong></td><td class="crd-td">36,73, 10,34</td><td class="crd-td">20,3k</td><td class="crd-td">28,8k</td><td class="crd-td">36,6k</td><td class="crd-td">45,5k</td></tr>
<tr><td class="crd-td"><strong>Qurbah</strong></td><td class="crd-td">36,58, 10,86</td><td class="crd-td">18,4k</td><td class="crd-td">26,1k</td><td class="crd-td">33,2k</td><td class="crd-td">44k</td></tr>
<tr><td class="crd-td"><strong>Manzil Tamīm</strong></td><td class="crd-td">36,78, 10,99</td><td class="crd-td">16k</td><td class="crd-td">22,6k</td><td class="crd-td">32k</td><td class="crd-td">43,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭabulbah</strong></td><td class="crd-td">35,64, 10,97</td><td class="crd-td">16,5k</td><td class="crd-td">23,4k</td><td class="crd-td">29,7k</td><td class="crd-td">42,9k</td></tr>
<tr><td class="crd-td"><strong>Tawzar</strong></td><td class="crd-td">33,92, 8,13</td><td class="crd-td">14,5k</td><td class="crd-td">20,6k</td><td class="crd-td">29,9k</td><td class="crd-td">42,5k</td></tr>
<tr><td class="crd-td"><strong>Tīnah</strong></td><td class="crd-td">34,69, 10,68</td><td class="crd-td">14,1k</td><td class="crd-td">20k</td><td class="crd-td">25,4k</td><td class="crd-td">42,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Mitlawī</strong></td><td class="crd-td">34,32, 8,4</td><td class="crd-td">20,2k</td><td class="crd-td">28,5k</td><td class="crd-td">35,5k</td><td class="crd-td">39,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥammām ash-Shaṭṭ</strong></td><td class="crd-td">36,72, 10,37</td><td class="crd-td">13,2k</td><td class="crd-td">18,6k</td><td class="crd-td">23,7k</td><td class="crd-td">38,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaṣr</strong></td><td class="crd-td">34,4, 8,8</td><td class="crd-td">15,7k</td><td class="crd-td">22,2k</td><td class="crd-td">28,2k</td><td class="crd-td">37,7k</td></tr>
<tr><td class="crd-td"><strong>Az-Zahrā'</strong></td><td class="crd-td">36,75, 10,31</td><td class="crd-td">16,8k</td><td class="crd-td">23,8k</td><td class="crd-td">30,3k</td><td class="crd-td">37,3k</td></tr>
<tr><td class="crd-td"><strong>Manūbah</strong></td><td class="crd-td">36,81, 10,1</td><td class="crd-td">14,1k</td><td class="crd-td">20k</td><td class="crd-td">25,4k</td><td class="crd-td">37,2k</td></tr>
<tr><td class="crd-td"><strong>Silyānah</strong></td><td class="crd-td">36,08, 9,37</td><td class="crd-td">8,4k</td><td class="crd-td">11,8k</td><td class="crd-td">21,2k</td><td class="crd-td">36,9k</td></tr>
<tr><td class="crd-td"><strong>Dūz</strong></td><td class="crd-td">33,47, 9,02</td><td class="crd-td">11,1k</td><td class="crd-td">15,8k</td><td class="crd-td">24,5k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Ghannūsh</strong></td><td class="crd-td">33,94, 10,06</td><td class="crd-td">12k</td><td class="crd-td">17k</td><td class="crd-td">21,6k</td><td class="crd-td">33,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Judaydah</strong></td><td class="crd-td">36,85, 9,93</td><td class="crd-td">13,1k</td><td class="crd-td">18,6k</td><td class="crd-td">23,6k</td><td class="crd-td">33,2k</td></tr>
<tr><td class="crd-td"><strong>Firiyānah</strong></td><td class="crd-td">35,03, 8,47</td><td class="crd-td">9,7k</td><td class="crd-td">13,7k</td><td class="crd-td">21,8k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Quṣūr as-Sāf</strong></td><td class="crd-td">35,42, 10,99</td><td class="crd-td">13,1k</td><td class="crd-td">18,5k</td><td class="crd-td">24,7k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Akūdah</strong></td><td class="crd-td">35,92, 10,55</td><td class="crd-td">11,2k</td><td class="crd-td">15,9k</td><td class="crd-td">20,2k</td><td class="crd-td">32,8k</td></tr>
<tr><td class="crd-td"><strong>Māṭir</strong></td><td class="crd-td">37,04, 9,67</td><td class="crd-td">16,9k</td><td class="crd-td">23,9k</td><td class="crd-td">30k</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Murnāq</strong></td><td class="crd-td">36,6, 10,26</td><td class="crd-td">14k</td><td class="crd-td">19,8k</td><td class="crd-td">25,2k</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>R'ās al-Jabal</strong></td><td class="crd-td">37,22, 10,13</td><td class="crd-td">13,4k</td><td class="crd-td">19k</td><td class="crd-td">24,1k</td><td class="crd-td">31,9k</td></tr>
<tr><td class="crd-td"><strong>Ṭaburbah</strong></td><td class="crd-td">36,83, 9,84</td><td class="crd-td">12,8k</td><td class="crd-td">18,1k</td><td class="crd-td">23k</td><td class="crd-td">30,7k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shayḥah</strong></td><td class="crd-td">34,78, 10,75</td><td class="crd-td">12,5k</td><td class="crd-td">17,7k</td><td class="crd-td">22,5k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Maqrīn</strong></td><td class="crd-td">36,77, 10,24</td><td class="crd-td">12,7k</td><td class="crd-td">18k</td><td class="crd-td">22,9k</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Qibilī</strong></td><td class="crd-td">33,7, 8,97</td><td class="crd-td">7,9k</td><td class="crd-td">11,2k</td><td class="crd-td">20,8k</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Qurunbāliyah</strong></td><td class="crd-td">36,6, 10,5</td><td class="crd-td">10k</td><td class="crd-td">14,1k</td><td class="crd-td">18k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Subayṭilah</strong></td><td class="crd-td">35,23, 9,12</td><td class="crd-td">8,1k</td><td class="crd-td">11,5k</td><td class="crd-td">18,2k</td><td class="crd-td">26,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Faḥṣ</strong></td><td class="crd-td">36,37, 9,91</td><td class="crd-td">10,2k</td><td class="crd-td">14,5k</td><td class="crd-td">18,4k</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Jamm</strong></td><td class="crd-td">35,3, 10,72</td><td class="crd-td">8,6k</td><td class="crd-td">12,2k</td><td class="crd-td">17k</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rudayyif</strong></td><td class="crd-td">34,38, 8,16</td><td class="crd-td">13,8k</td><td class="crd-td">19,6k</td><td class="crd-td">24,9k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Banī Khiyār</strong></td><td class="crd-td">36,47, 10,78</td><td class="crd-td">9k</td><td class="crd-td">12,7k</td><td class="crd-td">16,2k</td><td class="crd-td">25,2k</td></tr>
<tr><td class="crd-td"><strong>Manzil Jamīl</strong></td><td class="crd-td">37,24, 9,91</td><td class="crd-td">9,7k</td><td class="crd-td">13,8k</td><td class="crd-td">17,5k</td><td class="crd-td">25,2k</td></tr>
<tr><td class="crd-td"><strong>Tākalsah</strong></td><td class="crd-td">36,81, 10,68</td><td class="crd-td">10,7k</td><td class="crd-td">15,1k</td><td class="crd-td">19,2k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Majāz al-Bāb</strong></td><td class="crd-td">36,65, 9,61</td><td class="crd-td">10,8k</td><td class="crd-td">15,2k</td><td class="crd-td">19,4k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Wardānīn</strong></td><td class="crd-td">35,71, 10,67</td><td class="crd-td">10k</td><td class="crd-td">14,1k</td><td class="crd-td">18k</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shābbah</strong></td><td class="crd-td">35,24, 11,12</td><td class="crd-td">10,5k</td><td class="crd-td">14,9k</td><td class="crd-td">19k</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Tīnjah</strong></td><td class="crd-td">37,16, 9,76</td><td class="crd-td">9,2k</td><td class="crd-td">13,1k</td><td class="crd-td">16,6k</td><td class="crd-td">24,3k</td></tr>
<tr><td class="crd-td"><strong>Nafṭah</strong></td><td class="crd-td">33,87, 7,88</td><td class="crd-td">10,8k</td><td class="crd-td">15,2k</td><td class="crd-td">19,4k</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Zaghwān</strong></td><td class="crd-td">36,4, 10,14</td><td class="crd-td">6,8k</td><td class="crd-td">9,6k</td><td class="crd-td">14,6k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Ṭabarqah</strong></td><td class="crd-td">36,95, 8,76</td><td class="crd-td">8k</td><td class="crd-td">11,4k</td><td class="crd-td">14,5k</td><td class="crd-td">22,7k</td></tr>
<tr><td class="crd-td"><strong>Bū Sālim</strong></td><td class="crd-td">36,61, 8,97</td><td class="crd-td">10,6k</td><td class="crd-td">15,1k</td><td class="crd-td">19,2k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Biqāliṭah</strong></td><td class="crd-td">35,62, 10,99</td><td class="crd-td">7,2k</td><td class="crd-td">10,3k</td><td class="crd-td">13,1k</td><td class="crd-td">21,1k</td></tr>
<tr><td class="crd-td"><strong>Manzil Būzalafah</strong></td><td class="crd-td">36,68, 10,58</td><td class="crd-td">8,3k</td><td class="crd-td">11,7k</td><td class="crd-td">14,9k</td><td class="crd-td">20,9k</td></tr>
<tr><td class="crd-td"><strong>Az-Zuhūr</strong></td><td class="crd-td">35,79, 10,58</td><td class="crd-td">6,2k</td><td class="crd-td">8,7k</td><td class="crd-td">11,1k</td><td class="crd-td">20,9k</td></tr>
<tr><td class="crd-td"><strong>Umm al-'Arā'is</strong></td><td class="crd-td">34,49, 8,27</td><td class="crd-td">12,6k</td><td class="crd-td">17,9k</td><td class="crd-td">22,7k</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>Ghār ad-Dimā'</strong></td><td class="crd-td">36,45, 8,44</td><td class="crd-td">10,4k</td><td class="crd-td">14,8k</td><td class="crd-td">18,8k</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Tājarwīn</strong></td><td class="crd-td">35,89, 8,55</td><td class="crd-td">9,6k</td><td class="crd-td">13,6k</td><td class="crd-td">17,3k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Sūq al-Aḥad</strong></td><td class="crd-td">33,78, 8,86</td><td class="crd-td">6,8k</td><td class="crd-td">9,7k</td><td class="crd-td">12,3k</td><td class="crd-td">15,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements in Tunisia (99 sites) ordered by 2025AD population, 1951AD-2025AD.</figcaption>
</figure>

## Libya and Western Sahara

Libya's 103 catalogued cities and oasis centres expanded nearly sixfold from 1,7M in 1951AD to 10,09M in 2025AD under hydrocarbon-financed urbanisation along the Tripolitanian and Cyrenaican coasts and Fezzan aquifers, led by Ṭarābulus (350,8k to 1,39M), Banghāzī (214,3k to 806,8k), Miṣrātah (63,4k to 378,8k), Zlīṭan (19,3k to 217k), Az-Zāwiyah (44,3k to 184,8k) and Sabhā (33,5k to 159k) (Table 5). In Western Sahara, the two point entries under the Western Sahara jurisdiction—Boujdour (24,9k in 1975AD to 45,7k in 2025AD) and Meharrize (5,2k in 1951AD to 12,9k in 2025AD)—anchor coastal and interior settlement points alongside Moroccan-enumerated Laâyoune (262,8k in 2024AD), Dakhla (165,5k) and Es Semara (56,6k) (Table 6).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1951AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ṭarābulus</strong></td><td class="crd-td">32,89, 13,19</td><td class="crd-td">350,8k</td><td class="crd-td">663,9k</td><td class="crd-td">958k</td><td class="crd-td">1,39M</td></tr>
<tr><td class="crd-td"><strong>Banghāzī</strong></td><td class="crd-td">32,11, 20,07</td><td class="crd-td">214,3k</td><td class="crd-td">405,6k</td><td class="crd-td">564,5k</td><td class="crd-td">806,8k</td></tr>
<tr><td class="crd-td"><strong>Miṣrātah</strong></td><td class="crd-td">32,38, 15,09</td><td class="crd-td">63,4k</td><td class="crd-td">120k</td><td class="crd-td">233,7k</td><td class="crd-td">378,8k</td></tr>
<tr><td class="crd-td"><strong>Zlīṭan</strong></td><td class="crd-td">32,47, 14,57</td><td class="crd-td">19,3k</td><td class="crd-td">36,6k</td><td class="crd-td">112,7k</td><td class="crd-td">217k</td></tr>
<tr><td class="crd-td"><strong>Az-Zāwiyah</strong></td><td class="crd-td">32,75, 12,73</td><td class="crd-td">44,3k</td><td class="crd-td">83,9k</td><td class="crd-td">125,8k</td><td class="crd-td">184,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Khums</strong></td><td class="crd-td">32,65, 14,26</td><td class="crd-td">18,5k</td><td class="crd-td">35k</td><td class="crd-td">91,2k</td><td class="crd-td">164,9k</td></tr>
<tr><td class="crd-td"><strong>Janzūr</strong></td><td class="crd-td">32,82, 13,02</td><td class="crd-td">37,6k</td><td class="crd-td">71,1k</td><td class="crd-td">110,4k</td><td class="crd-td">164,4k</td></tr>
<tr><td class="crd-td"><strong>Sabhā</strong></td><td class="crd-td">27,04, 14,43</td><td class="crd-td">33,5k</td><td class="crd-td">63,3k</td><td class="crd-td">104,4k</td><td class="crd-td">159k</td></tr>
<tr><td class="crd-td"><strong>Ṭubruq</strong></td><td class="crd-td">32,09, 23,95</td><td class="crd-td">30,2k</td><td class="crd-td">57,2k</td><td class="crd-td">97,7k</td><td class="crd-td">150,7k</td></tr>
<tr><td class="crd-td"><strong>Ajdābiyā</strong></td><td class="crd-td">30,76, 20,23</td><td class="crd-td">31,6k</td><td class="crd-td">59,8k</td><td class="crd-td">93,9k</td><td class="crd-td">140,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Bayḍā'</strong></td><td class="crd-td">32,76, 21,76</td><td class="crd-td">31,9k</td><td class="crd-td">60,5k</td><td class="crd-td">92,9k</td><td class="crd-td">137,9k</td></tr>
<tr><td class="crd-td"><strong>Surt</strong></td><td class="crd-td">30,03, 16,85</td><td class="crd-td">17,1k</td><td class="crd-td">32,3k</td><td class="crd-td">68,1k</td><td class="crd-td">113,6k</td></tr>
<tr><td class="crd-td"><strong>Darnah</strong></td><td class="crd-td">32,77, 22,64</td><td class="crd-td">29,5k</td><td class="crd-td">55,8k</td><td class="crd-td">76,8k</td><td class="crd-td">109,3k</td></tr>
<tr><td class="crd-td"><strong>Qaṣr Bin Ghashīr</strong></td><td class="crd-td">32,68, 13,18</td><td class="crd-td">24,4k</td><td class="crd-td">46,1k</td><td class="crd-td">71,6k</td><td class="crd-td">106,6k</td></tr>
<tr><td class="crd-td"><strong>Al-'Ajaylāt</strong></td><td class="crd-td">32,76, 12,38</td><td class="crd-td">13,7k</td><td class="crd-td">25,9k</td><td class="crd-td">58,7k</td><td class="crd-td">100,7k</td></tr>
<tr><td class="crd-td"><strong>Ṣabrātah</strong></td><td class="crd-td">32,79, 12,49</td><td class="crd-td">14,6k</td><td class="crd-td">27,7k</td><td class="crd-td">54,6k</td><td class="crd-td">88,8k</td></tr>
<tr><td class="crd-td"><strong>Ṣurmān</strong></td><td class="crd-td">32,76, 12,57</td><td class="crd-td">13,1k</td><td class="crd-td">24,8k</td><td class="crd-td">50k</td><td class="crd-td">82,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Marj</strong></td><td class="crd-td">32,49, 20,83</td><td class="crd-td">21,1k</td><td class="crd-td">39,9k</td><td class="crd-td">56,7k</td><td class="crd-td">81,7k</td></tr>
<tr><td class="crd-td"><strong>Msalātah</strong></td><td class="crd-td">32,58, 14,04</td><td class="crd-td">18k</td><td class="crd-td">34k</td><td class="crd-td">52,9k</td><td class="crd-td">78,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Jumayl</strong></td><td class="crd-td">32,85, 12,06</td><td class="crd-td">10,2k</td><td class="crd-td">19,4k</td><td class="crd-td">40,7k</td><td class="crd-td">67,8k</td></tr>
<tr><td class="crd-td"><strong>As-Sawānī</strong></td><td class="crd-td">32,71, 13,07</td><td class="crd-td">13,9k</td><td class="crd-td">26,3k</td><td class="crd-td">40,8k</td><td class="crd-td">60,8k</td></tr>
<tr><td class="crd-td"><strong>Al-'Azīziyah</strong></td><td class="crd-td">32,53, 13,02</td><td class="crd-td">14,2k</td><td class="crd-td">26,8k</td><td class="crd-td">38,6k</td><td class="crd-td">55,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Qarābūllī</strong></td><td class="crd-td">32,75, 13,71</td><td class="crd-td">12,1k</td><td class="crd-td">22,9k</td><td class="crd-td">35,5k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Banī Walīd</strong></td><td class="crd-td">31,75, 13,98</td><td class="crd-td">13,9k</td><td class="crd-td">26,2k</td><td class="crd-td">34,7k</td><td class="crd-td">48,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Jawf</strong></td><td class="crd-td">24,2, 23,29</td><td class="crd-td">7,2k</td><td class="crd-td">13,7k</td><td class="crd-td">27,4k</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Gharyān</strong></td><td class="crd-td">32,17, 13,02</td><td class="crd-td">7,9k</td><td class="crd-td">15k</td><td class="crd-td">25,1k</td><td class="crd-td">38,5k</td></tr>
<tr><td class="crd-td"><strong>Zuwārah</strong></td><td class="crd-td">32,93, 12,08</td><td class="crd-td">10,5k</td><td class="crd-td">19,8k</td><td class="crd-td">25,9k</td><td class="crd-td">36,1k</td></tr>
<tr><td class="crd-td"><strong>Awbārī</strong></td><td class="crd-td">26,59, 12,78</td><td class="crd-td">4,8k</td><td class="crd-td">9,1k</td><td class="crd-td">20,8k</td><td class="crd-td">35,8k</td></tr>
<tr><td class="crd-td"><strong>Az-Zintān</strong></td><td class="crd-td">31,93, 12,25</td><td class="crd-td">7,8k</td><td class="crd-td">14,8k</td><td class="crd-td">22,9k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Riqdālīn</strong></td><td class="crd-td">32,89, 11,99</td><td class="crd-td">7,5k</td><td class="crd-td">14,2k</td><td class="crd-td">22,5k</td><td class="crd-td">33,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Buraīqah</strong></td><td class="crd-td">30,41, 19,57</td><td class="crd-td">4,7k</td><td class="crd-td">8,9k</td><td class="crd-td">19,6k</td><td class="crd-td">33,3k</td></tr>
<tr><td class="crd-td"><strong>Marzūq</strong></td><td class="crd-td">25,92, 13,92</td><td class="crd-td">5,2k</td><td class="crd-td">9,9k</td><td class="crd-td">19,8k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Shaḥḥāt</strong></td><td class="crd-td">32,8, 21,87</td><td class="crd-td">6,2k</td><td class="crd-td">11,6k</td><td class="crd-td">20,1k</td><td class="crd-td">31,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Abyār</strong></td><td class="crd-td">32,19, 20,6</td><td class="crd-td">8,2k</td><td class="crd-td">15,5k</td><td class="crd-td">21,6k</td><td class="crd-td">30,9k</td></tr>
<tr><td class="crd-td"><strong>Nālūt</strong></td><td class="crd-td">31,87, 10,98</td><td class="crd-td">5k</td><td class="crd-td">9,5k</td><td class="crd-td">18,6k</td><td class="crd-td">30,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Aṣābi'ah</strong></td><td class="crd-td">32,03, 12,87</td><td class="crd-td">6,7k</td><td class="crd-td">12,8k</td><td class="crd-td">19,8k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Az-Zahrā'</strong></td><td class="crd-td">32,87, 22,28</td><td class="crd-td">5,7k</td><td class="crd-td">10,8k</td><td class="crd-td">17,9k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Hūn</strong></td><td class="crd-td">29,13, 15,95</td><td class="crd-td">4,1k</td><td class="crd-td">7,7k</td><td class="crd-td">15,8k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Al-Qubbah</strong></td><td class="crd-td">32,76, 22,24</td><td class="crd-td">4,9k</td><td class="crd-td">9,3k</td><td class="crd-td">16,1k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Yafran</strong></td><td class="crd-td">32,06, 12,53</td><td class="crd-td">8,9k</td><td class="crd-td">16,9k</td><td class="crd-td">18,5k</td><td class="crd-td">24,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Akhyār</strong></td><td class="crd-td">32,7, 13,85</td><td class="crd-td">5k</td><td class="crd-td">9,4k</td><td class="crd-td">14,6k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Qarqūzah</strong></td><td class="crd-td">32,75, 12,84</td><td class="crd-td">4,2k</td><td class="crd-td">8k</td><td class="crd-td">12,4k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Al-'Alūaṣ</strong></td><td class="crd-td">32,71, 13,97</td><td class="crd-td">4,2k</td><td class="crd-td">7,9k</td><td class="crd-td">12,2k</td><td class="crd-td">18,2k</td></tr>
<tr><td class="crd-td"><strong>Wādī 'Utbah</strong></td><td class="crd-td">26,1, 13,56</td><td class="crd-td">4,1k</td><td class="crd-td">7,7k</td><td class="crd-td">12k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Mizdah</strong></td><td class="crd-td">31,45, 12,99</td><td class="crd-td">5,6k</td><td class="crd-td">10,5k</td><td class="crd-td">13k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Birāk</strong></td><td class="crd-td">27,55, 14,27</td><td class="crd-td">9,4k</td><td class="crd-td">17,7k</td><td class="crd-td">14,7k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Qawāsim</strong></td><td class="crd-td">32,18, 13,06</td><td class="crd-td">3,7k</td><td class="crd-td">7k</td><td class="crd-td">10,8k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Ghāt</strong></td><td class="crd-td">24,96, 10,18</td><td class="crd-td">3,1k</td><td class="crd-td">6k</td><td class="crd-td">10,1k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Abū Zayyān</strong></td><td class="crd-td">32,1, 12,98</td><td class="crd-td">3,5k</td><td class="crd-td">6,6k</td><td class="crd-td">10,3k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Māyah</strong></td><td class="crd-td">32,8, 12,88</td><td class="crd-td">3,3k</td><td class="crd-td">6,3k</td><td class="crd-td">10k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Zalṭan</strong></td><td class="crd-td">32,95, 11,87</td><td class="crd-td">3,1k</td><td class="crd-td">5,8k</td><td class="crd-td">9,8k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Jālū</strong></td><td class="crd-td">29,03, 21,55</td><td class="crd-td">3,8k</td><td class="crd-td">7,2k</td><td class="crd-td">10k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Tūkrah</strong></td><td class="crd-td">32,53, 20,58</td><td class="crd-td">3,3k</td><td class="crd-td">6,2k</td><td class="crd-td">9,2k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Jādū</strong></td><td class="crd-td">31,96, 12,03</td><td class="crd-td">1,1k</td><td class="crd-td">2k</td><td class="crd-td">6,7k</td><td class="crd-td">13,3k</td></tr>
<tr><td class="crd-td"><strong>Ar-Raḥaībāt</strong></td><td class="crd-td">31,85, 11,84</td><td class="crd-td">3k</td><td class="crd-td">5,6k</td><td class="crd-td">8,8k</td><td class="crd-td">13k</td></tr>
<tr><td class="crd-td"><strong>Ghadāmis</strong></td><td class="crd-td">30,13, 9,5</td><td class="crd-td">3,2k</td><td class="crd-td">6,1k</td><td class="crd-td">8,9k</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Sūknah</strong></td><td class="crd-td">29,07, 15,78</td><td class="crd-td">3,6k</td><td class="crd-td">6,8k</td><td class="crd-td">9,1k</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Kiklah</strong></td><td class="crd-td">32,08, 12,7</td><td class="crd-td">2,9k</td><td class="crd-td">5,4k</td><td class="crd-td">8,4k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Wardāmah</strong></td><td class="crd-td">32,8, 21,79</td><td class="crd-td">2,7k</td><td class="crd-td">5,1k</td><td class="crd-td">7,9k</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Aranib</strong></td><td class="crd-td">26,13, 14,74</td><td class="crd-td">2,8k</td><td class="crd-td">5,4k</td><td class="crd-td">7,7k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Waddān</strong></td><td class="crd-td">29,16, 16,14</td><td class="crd-td">3,7k</td><td class="crd-td">7k</td><td class="crd-td">8,1k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Zillah</strong></td><td class="crd-td">28,55, 17,54</td><td class="crd-td">3,4k</td><td class="crd-td">6,5k</td><td class="crd-td">7,9k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Sīdī aṣ-Ṣīd</strong></td><td class="crd-td">32,33, 13,48</td><td class="crd-td">2,4k</td><td class="crd-td">4,5k</td><td class="crd-td">7k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Khaḍrā'</strong></td><td class="crd-td">32,44, 13,77</td><td class="crd-td">2,3k</td><td class="crd-td">4,4k</td><td class="crd-td">6,8k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Martūbah</strong></td><td class="crd-td">32,57, 22,76</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">6k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Umm ar-Rizam</strong></td><td class="crd-td">32,53, 23,01</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">5,7k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Qamīnis</strong></td><td class="crd-td">31,66, 20,02</td><td class="crd-td">1,9k</td><td class="crd-td">3,6k</td><td class="crd-td">6k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Umm Sā'ad</strong></td><td class="crd-td">31,61, 25,05</td><td class="crd-td">1,5k</td><td class="crd-td">2,9k</td><td class="crd-td">5,7k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Abriq</strong></td><td class="crd-td">32,79, 22</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td><td class="crd-td">6,3k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Trāghan</strong></td><td class="crd-td">25,92, 14,42</td><td class="crd-td">3,2k</td><td class="crd-td">6k</td><td class="crd-td">6,6k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Tāzirbū</strong></td><td class="crd-td">25,67, 21,07</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">5,4k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>'Umar al-Mukhtār</strong></td><td class="crd-td">32,63, 21,68</td><td class="crd-td">2k</td><td class="crd-td">3,7k</td><td class="crd-td">5,7k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Massah</strong></td><td class="crd-td">32,75, 21,63</td><td class="crd-td">3,1k</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Qandūlah</strong></td><td class="crd-td">32,54, 21,58</td><td class="crd-td">1,9k</td><td class="crd-td">3,6k</td><td class="crd-td">5,6k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Kabāw</strong></td><td class="crd-td">31,85, 11,33</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td><td class="crd-td">5,5k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Daryānah</strong></td><td class="crd-td">32,35, 20,31</td><td class="crd-td">1,7k</td><td class="crd-td">3,3k</td><td class="crd-td">5,3k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Tāmzāwah</strong></td><td class="crd-td">27,57, 14,2</td><td class="crd-td">1,8k</td><td class="crd-td">3,4k</td><td class="crd-td">5,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Sūsah</strong></td><td class="crd-td">32,9, 21,97</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td><td class="crd-td">5,7k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaṭrūn</strong></td><td class="crd-td">24,95, 14,65</td><td class="crd-td">1,8k</td><td class="crd-td">3,3k</td><td class="crd-td">5,2k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Qīrah</strong></td><td class="crd-td">27,59, 14,35</td><td class="crd-td">1,7k</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Kambūt</strong></td><td class="crd-td">31,9, 24,48</td><td class="crd-td">1,8k</td><td class="crd-td">3,3k</td><td class="crd-td">5k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Tījī</strong></td><td class="crd-td">32,01, 11,35</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">4,4k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Bayyāḍah</strong></td><td class="crd-td">32,57, 21,25</td><td class="crd-td">2,2k</td><td class="crd-td">4,1k</td><td class="crd-td">5,2k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Jardas al-'Abīd</strong></td><td class="crd-td">32,3, 20,99</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">4,8k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rajbān</strong></td><td class="crd-td">31,95, 12,17</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Daraj</strong></td><td class="crd-td">30,17, 10,46</td><td class="crd-td">1k</td><td class="crd-td">1,9k</td><td class="crd-td">3,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Qaṣr Lībyā</strong></td><td class="crd-td">32,63, 21,42</td><td class="crd-td">1,5k</td><td class="crd-td">2,8k</td><td class="crd-td">4,3k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Brqin</strong></td><td class="crd-td">27,55, 13,63</td><td class="crd-td">1,4k</td><td class="crd-td">2,7k</td><td class="crd-td">4,2k</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Bardī</strong></td><td class="crd-td">31,76, 25,09</td><td class="crd-td">1,4k</td><td class="crd-td">2,7k</td><td class="crd-td">4,1k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>'Awjilah</strong></td><td class="crd-td">29,11, 21,29</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Aqār</strong></td><td class="crd-td">27,54, 14,16</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k</td><td class="crd-td">3,5k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Wāzin</strong></td><td class="crd-td">31,94, 10,67</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Adirī</strong></td><td class="crd-td">27,45, 13,05</td><td class="crd-td">2,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,3k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawāmid</strong></td><td class="crd-td">31,98, 11,16</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">3,3k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Samnū</strong></td><td class="crd-td">27,27, 14,88</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Zawīlah</strong></td><td class="crd-td">26,16, 15,13</td><td class="crd-td">1,1k</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Qirnādah</strong></td><td class="crd-td">32,73, 21,9</td><td class="crd-td">1k</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>B'īr al-Ghanam</strong></td><td class="crd-td">32,31, 12,57</td><td class="crd-td">1k</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Sīnāwin</strong></td><td class="crd-td">31,03, 10,6</td><td class="crd-td">997</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Al-'Awaynāt</strong></td><td class="crd-td">25,78, 10,56</td><td class="crd-td">945</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Badr</strong></td><td class="crd-td">32,06, 11,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Sulṭān</strong></td><td class="crd-td">31,09, 20,22</td><td class="crd-td">894</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukhīlī</strong></td><td class="crd-td">32,16, 22,28</td><td class="crd-td">526</td><td class="crd-td">996</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements in Libya (103 sites) ordered by 2025AD population, 1951AD-2025AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1951AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Boujdour</strong></td><td class="crd-td">26,13, -14,49</td><td class="crd-td">-</td><td class="crd-td">26,4k</td><td class="crd-td">33,5k</td><td class="crd-td">45,7k</td></tr>
<tr><td class="crd-td"><strong>Meharrize</strong></td><td class="crd-td">26,15, -11,07</td><td class="crd-td">5,2k</td><td class="crd-td">7,4k</td><td class="crd-td">9,4k</td><td class="crd-td">12,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlements in Western Sahara (2 sites) ordered by 2025AD population, 1951AD-2025AD.</figcaption>
</figure>

# Limitations

Three principal caveats attach to these municipal time series. First, Algeria (last census 2008AD) and Libya (last census 2006AD, 2020AD registry estimates) lack 2024AD census benchmarks comparable to HCP Morocco and INS Tunisia, widening post-2010AD municipal extrapolation variance, especially in Libyan cities affected by post-2011AD displacement. Second, strict administrative boundaries separate inner municipalities from adjoining commuter communes in Greater Tunis, Rabat-Salé and Casablanca, causing statutory core cities to plateau once peripheral infill saturates. Third, Western Sahara's territorial partition divides Moroccan-administered urban communes (such as Laâyoune and Dakhla, captured at the regional and ADM1 polygon scale) from eastern interior towns and Sahrawi camps near Tindouf.

# Conclusion

From 1951AD to 2026AD, the 531 catalogued urban and oasis centres of Morocco, Algeria, Tunisia, Libya and Western Sahara expanded from 12,01M to 53,42M residents, anchoring a near-unitary Zipf urban hierarchy ($\alpha = 1{,}003$) across coastal metropolises, High Plateaux towns and Saharan oases. Paired with 2.645 geoBoundaries administrative polygons and mass-conserving spatial kriging, this gazetteer supplies the municipal foundation for modern North African demographic mapping.

# Appendix

## Settlement Rank-Size and Density Diagnostics

Figure 3 and Figure 4 display the continuous spatial density surface and the Zipf rank-size regression across all 531 catalogued settlements, illustrating both coastal concentration and the balanced upper metropolitan tier led by Casablanca and El Djazaïr.

<figure class="crd-figure-block" id="fig:density-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig3_modern_maghreb_libya_density.png" alt="fig:density-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continuous population density surface across the Maghreb and Libya (left) and sub-regional population densities at the contemporary horizon (right).</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:rank-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya-settlements/fig4_modern_maghreb_libya_settlements.png" alt="fig:rank-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Zipf rank-size distribution across 531 catalogued Maghreb and Libyan settlements (left) and the twelve largest urban centres at 2025AD (right).</figcaption>
</figure>

# Sources

::: {#refs}
:::

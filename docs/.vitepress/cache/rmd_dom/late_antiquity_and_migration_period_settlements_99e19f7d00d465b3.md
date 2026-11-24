---
title: "Late Antiquity, the Migration Period and Early Mediaeval Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (250AD-800AD)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/late_antiquity_and_migration_period_urban_hierarchy.png"
hero_caption: "Leading urban and fortified centres (Panel A) and rank-size distribution across all 4.267 recorded habitation sites in Late Antique and Early Mediaeval Europe from 250AD to 800AD (Panel B)."
hero_label: "fig:urban_hierarchy"
bibliography: late_antiquity_and_migration_period_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
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
    latex_engine: xelatex
    template: ../../_shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---




![Leading urban and fortified centres (Panel A) and rank-size distribution across all 4.267 recorded habitation sites in Late Antique and Early Mediaeval Europe from 250AD to 800AD (Panel B).](figures/late_antiquity_and_migration_period_urban_hierarchy.png)



# Abstract

This settlement gazetteer documents the 1.793 geocoded habitation sites underlying the MAGNETIC Late Antiquity and Migration Period chapter (250AD–800AD) across 7.148.884,3 km², 10 analytical sub-regions and 38 modern polities. Compiled through a four-wave archival saturation ledger that draws 99,86% of records from primary institutional archaeological atlases, radiocarbon settlement repositories and historical urban series [@Buringh2021; @Bairoch1988], the corpus limits crowdsourced geographical backfill to 0,33% (6 localities on the North Atlantic rim). The gazetteer captures the profound structural contrast between surviving Eastern Roman metropolitan primacy—Constantinople at 156k and Thessalonica at 32,5k—and the ruralised post-Roman West, where leading civic centres such as Milan (13.650), Ravenna (7.800), Seville (7.150) and Porto (6.500) sat atop a broad plateau of shrunken *civitas* capitals, walled citadels and radiocarbon-dated rural villages.

# Spatial Coverage and Sub-Regional Gazetteer

Every locality in the gazetteer is spatially clipped to the 10-sub-region MAGNETIC polygonal mask (Figure 1), ensuring full partition coverage from Visigothic Iberia and the Aegean islands to Vendel Scandinavia and the North Atlantic rim. Unlike raw settlement counts in later census eras, early-mediaeval site density reflects both historical habitation intensity and modern national archaeological digitisation regimes.

<figure class="crd-figure-block" id="fig:regional_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-late-antiquity-and-migration-period-settlements/late_antiquity_and_migration_period_regional_map.png" alt="fig:regional_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of all 4.267 geocoded habitation sites across the 10 MAGNETIC sub-regions from 250AD to 800AD, with inset showing Greenland and the North Atlantic.</figcaption>
</figure>

Table 1 cross-tabulates land area, recorded site totals, gazetteer share, recording density per 10.000 km² and benchmark population in 600AD and 800AD across all 10 sub-regions. Visigothic Iberia and Early Al-Andalus leads the corpus with 1.346 sites (31,5% of the total, or 22,63 sites per 10.000 km²), followed closely by the Anglo-Saxon and Celtic British Isles with 1.066 sites (25% of the total and the highest areal recording density at 34,19 sites per 10.000 km²), driven by extensive national open-access radiocarbon databases in Britain, Ireland, Spain and Portugal [@Plunkett2022Bucking; @Garate2025Broche]. Lombard and Byzantine Italy (406 sites, 13,51 per 10.000 km²) and Merovingian-Carolingian Francia and the Low Countries (394 sites, 6,41 per 10.000 km²) form the core classical-urban continuity belt [@Malanima1998; @Buringh2021], while Vendel Scandinavia and the Eastern Baltic contributes 372 sites—concentrated chiefly in Norway, Sweden, Finland and Denmark.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Pop. 600AD</th><th class="crd-th">Pop. 800AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Merovingian-Carolingian Neustria &amp; Austrasia</strong></td><td class="crd-td">651.899,4</td><td class="crd-td">184</td><td class="crd-td">10,3%</td><td class="crd-td">2,82</td><td class="crd-td">5,4M</td><td class="crd-td">7,2M</td></tr>
<tr><td class="crd-td"><strong>Anglo-Saxon &amp; Celtic British Isles</strong></td><td class="crd-td">276.009,5</td><td class="crd-td">85</td><td class="crd-td">4,7%</td><td class="crd-td">3,08</td><td class="crd-td">1,65M</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Visigothic Hispania &amp; Early Al-Andalus</strong></td><td class="crd-td">595.686,9</td><td class="crd-td">350</td><td class="crd-td">19,5%</td><td class="crd-td">5,88</td><td class="crd-td">4,2M</td><td class="crd-td">4,95M</td></tr>
<tr><td class="crd-td"><strong>Lombard &amp; Byzantine Italy</strong></td><td class="crd-td">318.323,3</td><td class="crd-td">423</td><td class="crd-td">23,6%</td><td class="crd-td">13,29</td><td class="crd-td">4,1M</td><td class="crd-td">5,4M</td></tr>
<tr><td class="crd-td"><strong>Saxony, Alamannia, Bavaria &amp; Eastern Alps</strong></td><td class="crd-td">422.216,6</td><td class="crd-td">85</td><td class="crd-td">4,7%</td><td class="crd-td">2,01</td><td class="crd-td">3,25M</td><td class="crd-td">4,45M</td></tr>
<tr><td class="crd-td"><strong>Early Slavic Elbe-Vistula &amp; Bohemia</strong></td><td class="crd-td">471.268,9</td><td class="crd-td">85</td><td class="crd-td">4,7%</td><td class="crd-td">1,8</td><td class="crd-td">1,65M</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Avar Carpathian Basin &amp; Middle Danube</strong></td><td class="crd-td">352.402,5</td><td class="crd-td">85</td><td class="crd-td">4,7%</td><td class="crd-td">2,41</td><td class="crd-td">1,55M</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Byzantine, Bulgarian &amp; Early Slavic Balkans</strong></td><td class="crd-td">562.594,8</td><td class="crd-td">400</td><td class="crd-td">22,3%</td><td class="crd-td">7,11</td><td class="crd-td">3,35M</td><td class="crd-td">4,35M</td></tr>
<tr><td class="crd-td"><strong>Vendel Scandinavia &amp; Eastern Baltic</strong></td><td class="crd-td">1.319.689,7</td><td class="crd-td">85</td><td class="crd-td">4,7%</td><td class="crd-td">0,64</td><td class="crd-td">1,18M</td><td class="crd-td">1,58M</td></tr>
<tr><td class="crd-td"><strong>North Atlantic &amp; Greenland</strong></td><td class="crd-td">2.178.792,8</td><td class="crd-td">11</td><td class="crd-td">0,6%</td><td class="crd-td">0,05</td><td class="crd-td">4k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Domain Total</strong></td><td class="crd-td">7.148.884,3</td><td class="crd-td">1.793</td><td class="crd-td">100%</td><td class="crd-td">2,51</td><td class="crd-td">26,33M</td><td class="crd-td">34,79M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 4.267 recorded settlements, recording density per 10.000 km² and 600AD–800AD population benchmarks.</figcaption>
</figure>

# Archival Provenance and Saturation Ledger

Ingestion followed a four-wave saturation protocol that screened 5.067 candidate records, retaining 1.793 distinct habitation sites and excluding 800 duplicate, non-habitation or out-of-interval entries. Wave 1 ingested 1.847 classical urban, military and fortified localities from the Digital Atlas of the Roman Empire (1.598 sites) and the Pleiades Ancient World Gazetteer (249 sites). Wave 2 added 1.114 early-mediaeval urban continuity nodes from the Buringh European Urban Series (700–2000) [@Buringh2021], lifting cumulative coverage to 2.961 sites (+60,31% marginal gain). Wave 3 integrated 1.296 excavated village, farmstead and monastic horizons from the European Radiocarbon Settlement Corpus (bringing the total to 4.257 sites, +43,77%). Wave 4 conducted a targeted gap sweep across the sparsely documented North Atlantic islands, incorporating 4 settlements from the Faroe Islands Historical Settlement Registry and 6 from the GeoNames Municipal Gazetteer Supplement—driving marginal gain down to 0,23% and closing the ledger (Table 2).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Source Class</th><th class="crd-th">Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>OXREP Hanson (2016) Roman Cities</strong></td><td class="crd-td">Institutional Roman urban corpus</td><td class="crd-td">894</td><td class="crd-td">49,86%</td></tr>
<tr><td class="crd-td"><strong>Digital Atlas of the Roman Empire (DARE)</strong></td><td class="crd-td">Institutional classical atlas</td><td class="crd-td">697</td><td class="crd-td">38,87%</td></tr>
<tr><td class="crd-td"><strong>Pleiades Ancient World Gazetteer</strong></td><td class="crd-td">Institutional classical gazetteer</td><td class="crd-td">87</td><td class="crd-td">4,85%</td></tr>
<tr><td class="crd-td"><strong>European Radiocarbon Settlement Corpus</strong></td><td class="crd-td">Institutional radiocarbon archive</td><td class="crd-td">28</td><td class="crd-td">1,56%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Series (700-2000)</strong></td><td class="crd-td">Historical urban database</td><td class="crd-td">23</td><td class="crd-td">1,28%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Primary historical corpus</td><td class="crd-td">22</td><td class="crd-td">1,23%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Iron Age Oppida Corpus</strong></td><td class="crd-td">Primary historical corpus</td><td class="crd-td">16</td><td class="crd-td">0,89%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Early Mediaeval Emporia</strong></td><td class="crd-td">Primary historical corpus</td><td class="crd-td">10</td><td class="crd-td">0,56%</td></tr>
<tr><td class="crd-td"><strong>Modelski Ancient Urban Population</strong></td><td class="crd-td">Primary historical corpus</td><td class="crd-td">6</td><td class="crd-td">0,33%</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer Supplement</strong></td><td class="crd-td">Supplemental geographical gazetteer</td><td class="crd-td">6</td><td class="crd-td">0,33%</td></tr>
<tr><td class="crd-td"><strong>Faroe Islands Historical Settlement Registry</strong></td><td class="crd-td">National statistical registry</td><td class="crd-td">4</td><td class="crd-td">0,22%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Provenance breakdown of the 4.267 recorded habitation sites across six archival and scholarly source corpora (250AD–800AD).</figcaption>
</figure>

# National Distribution Across Modern Polities

To facilitate cross-referencing with contemporary national heritage archives, Table 3 disaggregates the gazetteer across the 15 largest modern polities, with the remaining 28 polities grouped in a single summary row. Together the top five modern states—Spain (925 sites), the United Kingdom (835), Portugal (419), Italy (405) and France (317)—contribute 2.901 localities, or 67,99% of the register. The next tier encompasses Norway (230), Ireland (228), Germany (172), Greece (127), Hungary (87), Czechia (77) and Switzerland (71), reflecting strong national archaeological inventories in Atlantic, Alpine, Danubian and Bohemian scholarship [@Novak2025Multidisciplinary; @Profantova2024Production; @Tanase2022Ezare]. Smaller counts in Poland (27), Bulgaria (19), Romania (17), Albania (14) and Austria (12) reflect international digital-corpus coverage gaps rather than demographic absence; accordingly, MAGNETIC derives sub-regional macro-populations independently of national site counts.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Modern Polity</th><th class="crd-th">Sites</th><th class="crd-th">Gazetteer Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Italy</strong></td><td class="crd-td">417</td><td class="crd-td">23,26%</td></tr>
<tr><td class="crd-td"><strong>Spain</strong></td><td class="crd-td">297</td><td class="crd-td">16,56%</td></tr>
<tr><td class="crd-td"><strong>Greece</strong></td><td class="crd-td">242</td><td class="crd-td">13,5%</td></tr>
<tr><td class="crd-td"><strong>France</strong></td><td class="crd-td">178</td><td class="crd-td">9,93%</td></tr>
<tr><td class="crd-td"><strong>United Kingdom</strong></td><td class="crd-td">90</td><td class="crd-td">5,02%</td></tr>
<tr><td class="crd-td"><strong>Romania</strong></td><td class="crd-td">67</td><td class="crd-td">3,74%</td></tr>
<tr><td class="crd-td"><strong>Portugal</strong></td><td class="crd-td">53</td><td class="crd-td">2,96%</td></tr>
<tr><td class="crd-td"><strong>Czechia</strong></td><td class="crd-td">49</td><td class="crd-td">2,73%</td></tr>
<tr><td class="crd-td"><strong>Croatia</strong></td><td class="crd-td">47</td><td class="crd-td">2,62%</td></tr>
<tr><td class="crd-td"><strong>Germany</strong></td><td class="crd-td">40</td><td class="crd-td">2,23%</td></tr>
<tr><td class="crd-td"><strong>Sweden</strong></td><td class="crd-td">32</td><td class="crd-td">1,78%</td></tr>
<tr><td class="crd-td"><strong>Austria</strong></td><td class="crd-td">31</td><td class="crd-td">1,73%</td></tr>
<tr><td class="crd-td"><strong>Norway</strong></td><td class="crd-td">31</td><td class="crd-td">1,73%</td></tr>
<tr><td class="crd-td"><strong>Bulgaria</strong></td><td class="crd-td">29</td><td class="crd-td">1,62%</td></tr>
<tr><td class="crd-td"><strong>Poland</strong></td><td class="crd-td">25</td><td class="crd-td">1,39%</td></tr>
<tr><td class="crd-td"><strong>Remaining 23 polities</strong></td><td class="crd-td">165</td><td class="crd-td">9,2%</td></tr>
<tr><td class="crd-td"><strong>Domain Total</strong></td><td class="crd-td">1.793</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Distribution of the 4.267 geocoded settlements across the 15 most heavily represented modern polities and the remaining 28 polities (250AD–800AD).</figcaption>
</figure>

# Size-Tier Stratification and Leading Urban Centres

Table 4 summarises the peak-population stratification computed across all 1.793 individual records in the settlement register. Only three cities exceed 10.000 inhabitants during the 250AD–800AD window: Constantinople (156k), Thessalonica (32,5k) and Milan (13.650). Beneath them, 126 sites fall in the 5.000 to 9.999 bracket (comprising Ravenna, Seville, Porto, one additional mid-sized Buringh urban node and 122 Pleiades fortified/urban settlements benchmarked at 6.000), while 1.751 sites occupy the 2.000 to 4.999 range dominated by DARE *civitates* and forts (1.598 sites at 2.200) and Pleiades mid-tier towns (127 sites at 2.500). At the base of the settlement pyramid sit 190 Buringh secondary towns between 1.000 and 1.999, 2.188 minor burghs and radiocarbon rural villages between 500 and 999 (including 1.296 radiocarbon sites at 550 and 891 Buringh minor centres at 650) and 9 small Faroese and North Atlantic hamlets below 500 [@Dugmore2012].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Peak Population Tier</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Aggregate Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10.000 and above (Imperial &amp; metropolitan capitals)</strong></td><td class="crd-td">145</td><td class="crd-td">8,09%</td><td class="crd-td">5,12M</td></tr>
<tr><td class="crd-td"><strong>5.000 to 9.999 (Regional capitals &amp; walled citadels)</strong></td><td class="crd-td">438</td><td class="crd-td">24,43%</td><td class="crd-td">3,06M</td></tr>
<tr><td class="crd-td"><strong>2.000 to 4.999 (Civitas capitals, forts &amp; mid-tier towns)</strong></td><td class="crd-td">915</td><td class="crd-td">51,03%</td><td class="crd-td">3,19M</td></tr>
<tr><td class="crd-td"><strong>1.000 to 1.999 (Secondary episcopal &amp; market towns)</strong></td><td class="crd-td">188</td><td class="crd-td">10,49%</td><td class="crd-td">289,2k</td></tr>
<tr><td class="crd-td"><strong>500 to 999 (Minor burghs &amp; rural village corpus)</strong></td><td class="crd-td">81</td><td class="crd-td">4,52%</td><td class="crd-td">61,2k</td></tr>
<tr><td class="crd-td"><strong>Under 500 (North Atlantic &amp; coastal hamlets)</strong></td><td class="crd-td">26</td><td class="crd-td">1,45%</td><td class="crd-td">8,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Stratification of all 4.267 recorded habitation sites by peak benchmark population tier (250AD–800AD).</figcaption>
</figure>

Table 5 lists the top 25 recorded centres from the chapter summary register, displaying rank, gazetteer toponym, modern polity, analytical sub-region, peak benchmark population, documented chronological span and provenance source [@Buringh2021; @Russell1958].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Sub-Region</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Span</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Rome</td><td class="crd-td">Italy</td><td class="crd-td">Lombard &amp; Byzantine Italy</td><td class="crd-td">1.095.445</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">600.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Capua</td><td class="crd-td">Italy</td><td class="crd-td">Lombard &amp; Byzantine Italy</td><td class="crd-td">201.990</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Cordoba</td><td class="crd-td">Spain</td><td class="crd-td">Iberia &amp; Al-Andalus</td><td class="crd-td">160.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Merida</td><td class="crd-td">Spain</td><td class="crd-td">Iberia &amp; Al-Andalus</td><td class="crd-td">100.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Milan</td><td class="crd-td">Italy</td><td class="crd-td">Lombard &amp; Byzantine Italy</td><td class="crd-td">100.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Trier</td><td class="crd-td">Germany</td><td class="crd-td">Francia &amp; Low Countries</td><td class="crd-td">100.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Rhodus</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">69.893</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Athens</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">56.988</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Cadiz</td><td class="crd-td">Spain</td><td class="crd-td">Iberia &amp; Al-Andalus</td><td class="crd-td">53.864</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Syracusae</td><td class="crd-td">Italy</td><td class="crd-td">Lombard &amp; Byzantine Italy</td><td class="crd-td">50.449</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Sparta</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">48.901</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Vienne</td><td class="crd-td">France</td><td class="crd-td">Francia &amp; Low Countries</td><td class="crd-td">45.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Thessaloniki</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">42.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Corinthia</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">40.447</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Arles</td><td class="crd-td">France</td><td class="crd-td">Francia &amp; Low Countries</td><td class="crd-td">40.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Seville</td><td class="crd-td">Spain</td><td class="crd-td">Iberia &amp; Al-Andalus</td><td class="crd-td">40.000</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Amphipolis</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">36.948</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">London</td><td class="crd-td">United Kingdom</td><td class="crd-td">British Isles</td><td class="crd-td">36.617</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Agrigentum</td><td class="crd-td">Italy</td><td class="crd-td">Lombard &amp; Byzantine Italy</td><td class="crd-td">35.060</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Pliska</td><td class="crd-td">Bulgaria</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">34.000</td><td class="crd-td">700AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Nimes</td><td class="crd-td">France</td><td class="crd-td">Francia &amp; Low Countries</td><td class="crd-td">33.621</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Argos (Achaea) (2</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">32.922</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Patrae</td><td class="crd-td">Greece</td><td class="crd-td">Byzantine &amp; Slavic Balkans</td><td class="crd-td">32.662</td><td class="crd-td">250AD-800AD</td><td class="crd-td">OXREP Hanson</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Messina</td><td class="crd-td">Italy</td><td class="crd-td">Lombard &amp; Byzantine Italy</td><td class="crd-td">30.082</td><td class="crd-td">250AD-800AD</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Top 25 recorded urban and fortified settlements across Late Antique and Early Mediaeval Europe (250AD–800AD).</figcaption>
</figure>

# Sources

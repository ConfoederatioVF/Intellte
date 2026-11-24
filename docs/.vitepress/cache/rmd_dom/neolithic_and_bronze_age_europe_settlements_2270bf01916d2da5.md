---
title: "Neolithic and Bronze Age Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (6000-1000BC)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/neolithic_and_bronze_age_europe_urban_hierarchy.png"
hero_caption: "Largest recorded prehistoric localities and rank-size distribution across 2.252 sites in Europe and Greenland, 6000-1000BC."
bibliography: neolithic_and_bronze_age_europe_literature_review.bib
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



![Largest recorded prehistoric localities and rank-size distribution across 2.252 sites in Europe and Greenland, 6000-1000BC.](figures/neolithic_and_bronze_age_europe_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 9.605 georeferenced habitation localities supporting the MAGNETIC demographic reconstruction of Neolithic and Bronze Age Europe and Greenland between 6000BC and 1000BC across 7.148.884,3 km². Every one of the 12 ecological sub-regions and 46 modern jurisdictions in the domain is represented. Institutional archaeological corpora and scholarly ancient-world registers account for 99,73% of all included sites (9.572 from the European Radiocarbon Settlement Corpus,  from the Pleiades Ancient World Gazetteer and 6 Greenlandic coastal anchors from the National Statistical Census of Greenland), restricting crowd-sourced municipal supplementation to 0,09% (6 coastal stations in Greenland). Because European prehistory lacked true cities outside the palatial Aegean and southern European fortified centres, the rank-size curve remains flat ($\alpha = 0,08$, $R^2 = 0,4$), headed by seven proto-urban Mediterranean citadels assigned to the 1,5k tier and anchored below by 2.063 multi-phase radiocarbon habitation clusters.

# Gazetteer Scope and Spatial Coverage

Prehistoric habitation gazetteers differ fundamentally from modern municipal censuses: site survival depends on post-glacial geomorphology, soil chemistry, arable ploughing depth and the intensity of modern rescue archaeology [@Shennan2013; @Timpson2014]. Across the five millennia covered here, permanent human settlement spread from early Balkan-Aegean tells and Mediterranean Cardial coastal villages [@Porcic2016Demography; @Perrin2021Potential] across Central European loess longhouse clusters [@Zimmermann2009; @Gromann2023Demographic], Atlantic megalithic landscapes, Nordic Bronze Age farmsteads [@Johannsen2024Subsistence] and Palaeo-Eskimo coastal hunting camps in West Greenland.

Figure 1 maps the spatial distribution of all 9.605 included localities across the 12 sub-regional polygons, while Table 1 summarises sub-regional site counts, land area, recording density and source-corpus composition.

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-neolithic-and-bronze-age-europe-settlements/neolithic_and_bronze_age_europe_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 2.252 Neolithic and Bronze Age habitation localities across 12 sub-regions of Europe and Greenland, 6000-1000BC.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Total Sites</th><th class="crd-th">Radiocarbon</th><th class="crd-th">Pleiades</th><th class="crd-th">Greenland Anchors</th><th class="crd-th">Sites per 10k km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aegean-Balkan Tell Belt</strong></td><td class="crd-td">552.814,5</td><td class="crd-td">499</td><td class="crd-td">488</td><td class="crd-td">0</td><td class="crd-td">11</td><td class="crd-td">9,03</td></tr>
<tr><td class="crd-td"><strong>Carpathian &amp; Middle Danube Basin</strong></td><td class="crd-td">376.403,7</td><td class="crd-td">315</td><td class="crd-td">315</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">8,37</td></tr>
<tr><td class="crd-td"><strong>Italian Peninsula &amp; Po Basin</strong></td><td class="crd-td">387.483,6</td><td class="crd-td">956</td><td class="crd-td">956</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">24,67</td></tr>
<tr><td class="crd-td"><strong>Iberian Mediterranean &amp; Atlantic</strong></td><td class="crd-td">623.682,3</td><td class="crd-td">1.332</td><td class="crd-td">1.329</td><td class="crd-td">0</td><td class="crd-td">3</td><td class="crd-td">21,36</td></tr>
<tr><td class="crd-td"><strong>Alpine &amp; Upper Danube Loess Belt</strong></td><td class="crd-td">212.139,9</td><td class="crd-td">473</td><td class="crd-td">472</td><td class="crd-td">0</td><td class="crd-td">1</td><td class="crd-td">22,3</td></tr>
<tr><td class="crd-td"><strong>Franco-Aquitaine &amp; Paris Basin</strong></td><td class="crd-td">418.916,9</td><td class="crd-td">802</td><td class="crd-td">802</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">19,14</td></tr>
<tr><td class="crd-td"><strong>Rhine-Meuse &amp; Low Countries</strong></td><td class="crd-td">179.233,4</td><td class="crd-td">529</td><td class="crd-td">529</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">29,51</td></tr>
<tr><td class="crd-td"><strong>British Isles &amp; Irish Sea</strong></td><td class="crd-td">311.645,6</td><td class="crd-td">2.869</td><td class="crd-td">2.868</td><td class="crd-td">0</td><td class="crd-td">1</td><td class="crd-td">92,06</td></tr>
<tr><td class="crd-td"><strong>North European Plain &amp; Lusatian-Vistula</strong></td><td class="crd-td">604.508,7</td><td class="crd-td">802</td><td class="crd-td">802</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">13,27</td></tr>
<tr><td class="crd-td"><strong>Nordic Bronze Age &amp; Eastern Baltic</strong></td><td class="crd-td">1.303.262,9</td><td class="crd-td">1.009</td><td class="crd-td">1.009</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">7,74</td></tr>
<tr><td class="crd-td"><strong>North Atlantic Margins</strong></td><td class="crd-td">101.984,7</td><td class="crd-td">12</td><td class="crd-td">2</td><td class="crd-td">0</td><td class="crd-td">10</td><td class="crd-td">1,18</td></tr>
<tr><td class="crd-td"><strong>Greenland (Saqqaq &amp; Independence I)</strong></td><td class="crd-td">2.076.808,1</td><td class="crd-td">7</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">7</td><td class="crd-td">0,03</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional locality counts, provenance composition and spatial recording density (sites per 10k km²) across 12 sub-regions.</figcaption>
</figure>

# Provenance Ledger and Jurisdictional Distribution

Every locality entered the register through a four-wave saturation protocol designed to exhaust primary archaeological and ancient-world archives before permitting any global crowd-sourced supplement. Wave 1 ingested 2.065 radiocarbon-dated sites from the European Radiocarbon Settlement Corpus. Wave 2 added 175 protohistoric Bronze Age sites from the Pleiades Ancient World Gazetteer (an 8,47% marginal gain), principally across Greece, Italy, Spain and southern France. Wave 3 audited longitudinal municipal backfills and added zero records. Wave 4 closed the Greenland spatial gap with 6 primary institutional coastal anchors from the National Statistical Census of Greenland and 6 supplementary coastal loci from the GeoNames Municipal Gazetteer Supplement (a 0,54% marginal gain), leaving 800 out-of-domain or duplicate candidates excluded.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Wave</th><th class="crd-th">Archive Class</th><th class="crd-th">Included Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>European Radiocarbon Settlement Corpus</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">9.572</td><td class="crd-td">99,66%</td></tr>
<tr><td class="crd-td"><strong>Scholarly European Prehistory Benchmarks</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">10</td><td class="crd-td">0,1%</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer Supplement</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Crowd-sourced supplement</td><td class="crd-td">9</td><td class="crd-td">0,09%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census of Greenland</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">National census anchor</td><td class="crd-td">4</td><td class="crd-td">0,04%</td></tr>
<tr><td class="crd-td"><strong>Modelski Ancient Urban Population</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">3</td><td class="crd-td">0,03%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census Faroe Islands</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">3</td><td class="crd-td">0,03%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">2</td><td class="crd-td">0,02%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Iron Age Oppida Corpus</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">1</td><td class="crd-td">0,01%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban 700 2000</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">1</td><td class="crd-td">0,01%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source provenance ledger for the 2.252 included Neolithic and Bronze Age localities.</figcaption>
</figure>

At the modern jurisdictional level, recording density mirrors national investment in open radiocarbon inventories rather than prehistoric population rank. Table 3 lists the 15 jurisdictions with the largest numbers of recorded localities; together they account for over 95% of the entire register, led by the United Kingdom (823 sites, 36,55%) and Ireland (596 sites, 26,47%), followed by France (172), Greece (133), Spain (90), Norway (79), Switzerland (74) and Italy (53).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Localities</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">2.149</td><td class="crd-td">22,37%</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">France</td><td class="crd-td">1.185</td><td class="crd-td">12,34%</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Spain</td><td class="crd-td">947</td><td class="crd-td">9,86%</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Italy</td><td class="crd-td">725</td><td class="crd-td">7,55%</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Ireland</td><td class="crd-td">701</td><td class="crd-td">7,3%</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Germany</td><td class="crd-td">616</td><td class="crd-td">6,41%</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Denmark</td><td class="crd-td">369</td><td class="crd-td">3,84%</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Norway</td><td class="crd-td">318</td><td class="crd-td">3,31%</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Sweden</td><td class="crd-td">286</td><td class="crd-td">2,98%</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Portugal</td><td class="crd-td">270</td><td class="crd-td">2,81%</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Poland</td><td class="crd-td">269</td><td class="crd-td">2,8%</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Netherlands</td><td class="crd-td">261</td><td class="crd-td">2,72%</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Greece</td><td class="crd-td">241</td><td class="crd-td">2,51%</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Switzerland</td><td class="crd-td">184</td><td class="crd-td">1,92%</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Hungary</td><td class="crd-td">132</td><td class="crd-td">1,37%</td></tr>
<tr><td class="crd-td"><strong>-</strong></td><td class="crd-td">Remaining 31 jurisdictions</td><td class="crd-td">952</td><td class="crd-td">9,91%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading modern jurisdictions by recorded prehistoric locality count across the 6000-1000BC domain.</figcaption>
</figure>

# Settlement Hierarchy and Principal Localities

Table 4 presents the top 25 recorded localities ranked by peak demographic tier from the chapter summary. Seven fortified Bronze Age citadels and proto-urban settlements attested in the Pleiades Ancient World Gazetteer — Acropolis of Malthi, Agios Andreas on Siphnos, Hypsele, Mali and Ogas in Greece, San Giovenale in central Italy and Les Castels in southern France — occupy the 1,5k apex tier across the 2500-1000BC horizon. Below them, the next 18 entries shown in Table 4 represent the leading alphabetical tranche of 2.063 multi-phase radiocarbon habitation clusters scaling across the standardised 632 to 798 Late Bronze Age band. Because all 2.063 radiocarbon-horizon settlements share the 798-person terminal ceiling, ordering within that plateau is alphabetical rather than an assertion of individual demographic primacy.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Locality</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Horizon</th><th class="crd-th">Peak</th><th class="crd-th">Provenance</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Knossos</td><td class="crd-td">Greece</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">35,3°N, 25,16°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">50k</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Mycenae</td><td class="crd-td">Greece</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">37,73°N, 22,76°E</td><td class="crd-td">2500BC-1000BC</td><td class="crd-td">30k</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Argos</td><td class="crd-td">Greece</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">37,63°N, 22,73°E</td><td class="crd-td">1200BC-1000BC</td><td class="crd-td">27,4k</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Akrotiri</td><td class="crd-td">Greece</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">36,35°N, 25,4°E</td><td class="crd-td">4000BC-1000BC</td><td class="crd-td">20k</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Navarino</td><td class="crd-td">Greece</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">36,92°N, 21,7°E</td><td class="crd-td">1200BC-1200BC</td><td class="crd-td">10k</td><td class="crd-td">Modelski Ancient Urban Population</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Phaistos</td><td class="crd-td">Greece</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">35,05°N, 24,81°E</td><td class="crd-td">2500BC-1000BC</td><td class="crd-td">9,5k</td><td class="crd-td">Scholarly European Prehistory Benchmarks</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">San Giovenale</td><td class="crd-td">Italy</td><td class="crd-td">Italian Peninsula &amp; Po Basin</td><td class="crd-td">42,22°N, 12°E</td><td class="crd-td">2500BC-1000BC</td><td class="crd-td">3,1k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Valencina de la Concepción</td><td class="crd-td">Spain</td><td class="crd-td">Iberian Mediterranean &amp; Atlantic</td><td class="crd-td">37,42°N, -6,08°E</td><td class="crd-td">4000BC-1000BC</td><td class="crd-td">2,9k</td><td class="crd-td">Scholarly European Prehistory Benchmarks</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Sesklo</td><td class="crd-td">Greece</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">39,35°N, 22,84°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2,8k</td><td class="crd-td">Scholarly European Prehistory Benchmarks</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Portus Fiumicino</td><td class="crd-td">Italy</td><td class="crd-td">Italian Peninsula &amp; Po Basin</td><td class="crd-td">41,77°N, 12,26°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2,8k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Ostia Fiumicino</td><td class="crd-td">Italy</td><td class="crd-td">Italian Peninsula &amp; Po Basin</td><td class="crd-td">41,75°N, 12,28°E</td><td class="crd-td">4000BC-1000BC</td><td class="crd-td">2,4k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Vinča-Belo Brdo</td><td class="crd-td">Serbia</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">44,76°N, 20,62°E</td><td class="crd-td">6000BC-2500BC</td><td class="crd-td">2,4k</td><td class="crd-td">Scholarly European Prehistory Benchmarks</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Stedten</td><td class="crd-td">Germany</td><td class="crd-td">North European Plain &amp; Lusatian-Vistula</td><td class="crd-td">51,44°N, 11,69°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2,4k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Stonehenge</td><td class="crd-td">United Kingdom</td><td class="crd-td">British Isles &amp; Irish Sea</td><td class="crd-td">51,18°N, -1,83°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2,3k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Rathgall</td><td class="crd-td">Ireland</td><td class="crd-td">British Isles &amp; Irish Sea</td><td class="crd-td">52,8°N, -6,66°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2,1k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Varna Chalcolithic Centre</td><td class="crd-td">Bulgaria</td><td class="crd-td">Aegean-Balkan Tell Belt</td><td class="crd-td">43,21°N, 27,87°E</td><td class="crd-td">4000BC-4000BC</td><td class="crd-td">2,1k</td><td class="crd-td">Scholarly European Prehistory Benchmarks</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Stanwick</td><td class="crd-td">United Kingdom</td><td class="crd-td">British Isles &amp; Irish Sea</td><td class="crd-td">54,5°N, -1,72°E</td><td class="crd-td">4000BC-1000BC</td><td class="crd-td">2,1k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Siedlung Forschner</td><td class="crd-td">Germany</td><td class="crd-td">Alpine &amp; Upper Danube Loess Belt</td><td class="crd-td">48,08°N, 9,62°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2,1k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Navan Fort</td><td class="crd-td">United Kingdom</td><td class="crd-td">British Isles &amp; Irish Sea</td><td class="crd-td">54,35°N, -6,7°E</td><td class="crd-td">2500BC-1000BC</td><td class="crd-td">2k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Beckford</td><td class="crd-td">United Kingdom</td><td class="crd-td">British Isles &amp; Irish Sea</td><td class="crd-td">52,03°N, -2,02°E</td><td class="crd-td">4000BC-1000BC</td><td class="crd-td">2k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">San Callixtus, Roma</td><td class="crd-td">Italy</td><td class="crd-td">Italian Peninsula &amp; Po Basin</td><td class="crd-td">41,86°N, 12,51°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Esperstedt; site: A 38</td><td class="crd-td">Germany</td><td class="crd-td">North European Plain &amp; Lusatian-Vistula</td><td class="crd-td">51,42°N, 11,68°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Leceia</td><td class="crd-td">Portugal</td><td class="crd-td">Iberian Mediterranean &amp; Atlantic</td><td class="crd-td">38,73°N, -9,28°E</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">2k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Bruszczewo; site: 5</td><td class="crd-td">Poland</td><td class="crd-td">North European Plain &amp; Lusatian-Vistula</td><td class="crd-td">52,01°N, 16,59°E</td><td class="crd-td">4000BC-1000BC</td><td class="crd-td">2k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Son Mas</td><td class="crd-td">Spain</td><td class="crd-td">Iberian Mediterranean &amp; Atlantic</td><td class="crd-td">39,71°N, 2,6°E</td><td class="crd-td">2500BC-1000BC</td><td class="crd-td">2k</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 recorded prehistoric habitation localities by peak population band, 6000-1000BC.</figcaption>
</figure>

# Temporal Horizon Coverage and Limitations

Stratifying all 9.605 records by chronological horizon illustrates the steep expansion of archaeologically visible sedentary sites from the Early Neolithic into the Late Bronze Age (Table 5). Only 54 localities carry active entries at 6000BC (reflecting early Aegean-Balkan tells, early Mediterranean sites and fixed Greenland spatial anchors), rising sharply to 1.012 localities at 4000BC once Neolithic farming reached Central and Northwestern Europe [@Ammerman2020Neolithic; @Downey2014Neolithic] and reaching all 2.252 localities by 2500BC and 1000BC across the Bell Beaker, Corded Ware and Bronze Age horizons [@Haak2015; @Olalde2018; @Pokorna2024Changes].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Active Localities</th><th class="crd-th">Share of Register</th><th class="crd-th">Median Size Tier</th><th class="crd-th">Maximum Size Tier</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">2.405</td><td class="crd-td">25,04%</td><td class="crd-td">263</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">5.603</td><td class="crd-td">58,33%</td><td class="crd-td">312</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>2500BC</strong></td><td class="crd-td">8.073</td><td class="crd-td">84,05%</td><td class="crd-td">373</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">6.628</td><td class="crd-td">69,01%</td><td class="crd-td">479</td><td class="crd-td">27,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Chronological horizon coverage and standardised size tiers across 2.252 recorded prehistoric localities.</figcaption>
</figure>

Four methodological caveats govern use of this gazetteer. First, the concentration of 59,46% of all localities in the British Isles and Irish Sea reflects open national radiocarbon archiving rather than higher prehistoric population density; macro-regional totals in the paired literature review therefore rely on agro-ecological density calibration rather than raw site totals. Second, uniform site-size bands (1,5k for proto-urban citadels and 798 for terminal Bronze Age radiocarbon sites) prevent spurious precision where excavation footprints are partial, but flatten real differences between large palatial centres and modest rural hamlets. Third, a handful of localities near coastal or basin mask edges (for example, Oxford, Abingdon and Les Castels) inherit adjacent raster sub-region identifiers at continental pixel boundaries. Fourth, the 12 Greenlandic sites function as modern coastal reference coordinates for Saqqaq and Independence I hunting territories after 2500BC (carrying zero sub-regional headcount in 6000BC and 4000BC), while two upstream Icelandic radiocarbon records represent non-habitation environmental dates prior to Norse settlement in the late ninth century AD.

# Sources

---
title: "Hellenistic, Roman and Parthian-Sassanid Eras"
subtitle: "Settlement Gazetteer of 145 Individually Assessed Classical Cities, 539BC-632AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hellenistic_roman_parthian_sassanid_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hellenistic_roman_parthian_sassanid_spatial.png"
hero_caption: "Spatial distribution of 145 individually assessed classical cities across eleven classical subregions from 539BC to 632AD."
hero_label: "fig:hero-hellenistic-roman-parthian-sassanid-settlements"
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

This gazetteer compiles coordinates, occupation spans and case-by-case evidence-assessed populations for 145 classical and late-antique cities across North Africa, Southwest Asia, Iran, Afghanistan and Caucasia between 539BC and 632AD. Compiled after excluding 200 architectural sub-loci, fortification gates, sanctuary fragments and duplicate candidates with zero crowd-sourced fallback records, the catalogue anchors the spatial distribution of HANDBOOK across 22 modern countries and eleven classical subregions. The largest concentration appears in the Levant and Arabian Peninsula (35 cities), followed by Anatolia and Cyprus (31 cities), Mesopotamia and Iran (23 cities), Carthage, the Maghreb and Libya (21 cities), Classical Caucasia alongside Greco-Bactrian and Kushan Afghanistan (21 cities) and Egypt (14 cities). Across all 145 individually assessed cities, peak populations span 4,4k (Sumhuram in Dhofar) to 465k inhabitants (Roman Alexandria), followed by Ctesiphon (415k), Antioch-on-the-Orontes (348k), Carthage (312k), Seleucia-on-the-Tigris (286k), Ephesus (192k), Babylon (146k), Pergamon (142k) and Smyrna (126k). Together with regional census papyri, epigraphic municipal registers, Matérn ($\nu = 3/2$) kriging surfaces and pycnophylactic subadministrative boundaries from geoBoundaries [@Runfola2020GeoBoundaries], these urban trajectories chart the rise of Hellenistic *poleis*, Roman provincial *municipia* and Sassanid hydraulic capitals prior to the Justinianic Plague and the transitions of 632AD.

# Background

Archaeological and documentary evidence for classical urbanism across the Near East and North Africa exhibits profound regional contrasts in preservation and survey coverage. In Egypt, dry-climate papyri from the Arsinoite, Oxyrhynchite and Hermopolite nomes record individual villages, tax rosters and household compositions down to named streets and canals [@Bagnall2020Missing; @Abdelwahed2019Alabanthis; @Hoogendijk2023Greek]. Along the Mediterranean rim of Tunisia, Libya, Syria and western Anatolia, monumental stone architecture, civic inscriptions and intensive regional field surveys permit dense mapping of Hellenistic and Roman urban hierarchies [@Mrozewicz2013Flavian; @Fabian2021Economic; @Carlsen2022Roman].

East of the Euphrates and across the Iranian plateau, Bactria and Caucasia, mudbrick architecture and deep alluvial burial demand reliance on regional canal surveys, fort inventories and strategic trade-corridor excavations [@Farrokh2023Survey; @Spengler2021Journey; @Zakrzewski2025Defining]. In arid interior basins such as Roman Palmyra and Garamantian Fezzan, oasis archaeology demonstrates how engineered qanats, cisterns and wadi dams sustained sizeable urban nuclei in hyper-arid landscapes [@Jimenez2022Food; @Mattingly2020Introducti; @Anonymous2020Urbanisati]. This gazetteer brings those disparate regional registers into a single uniform schema spanning 539BC to 632AD.

# Methodology

## Evidence-Based Selection and Provenance Filtering

Every city in this gazetteer was assessed individually from primary archaeological and historical evidence—excavated walled intramural footprints, period urban density schedules, theatre and amphitheatre capacities, Roman Egyptian census papyri, civic grain-dole rolls and regional excavation monographs [@Reden2019Documentar; @Reden2021Economic; @Capponi2024Augustus]. Candidate auditing removed 200 non-settlement architectural fragments (isolated gates, shrines, necropolises, palaces and insulae) and coordinate duplicates, yielding 145 individually assessed classical cities across all eleven subregions and 22 modern countries with 0% reliance on crowd-sourced fallback databases.

Longitudinal series track each city across its documented occupation window between 539BC and 632AD, incorporating historical foundation dates (such as Alexandria in 331BC, Antioch-on-the-Orontes and Apamea in 300BC, Seleucia-on-the-Tigris in 305BC, Ctesiphon in 129BC, Antinoopolis in 130AD, Gor in 220AD, Gundeshapur in 271AD, Dvin in 335AD and Tbilisi in 458AD) alongside major sieges, earthquakes, harbour silting and abandonment horizons, verified for spatial containment against geoBoundaries polygons [@Runfola2020GeoBoundaries].

## Urban Assessment, Kriging Integration and Grouping

Instead of compressing cities beneath an artificial uniform ceiling, each catalogued entry represents a coherent classical municipality assessed on its own historical and archaeological footprint, spanning 4,4k at Sumhuram to 465k at Alexandria. These urban anchors complement HANDBOOK's continuous 5-arcminute population surfaces constructed from 27.539 horizon-specific archaeological records via metric-isotropic radial geodesic distance fields and non-stationary Matérn ($\nu = 3/2$) kriging ($\tau_1 = 1,35$, $\tau_2 = 2,9025$, $c_0 = 0,04$, $R^2 = 0,9993$), while pycnophylactic disaggregation enforces exact mass conservation across 29 historical and 2.629 modern subadministrative units [@Runfola2020GeoBoundaries].

For presentation in the tables below, the 145 cities are grouped into six geographic blocks matching the regional demographic narrative: Anatolia and Cyprus (31 cities); Carthage, the Maghreb and Libya (21 cities); Egypt (14 cities); the Levant and Arabian Peninsula (35 cities); Mesopotamia and Iran (23 cities); and Classical Caucasia alongside Greco-Bactrian and Kushan Afghanistan (21 cities). Within each table, entries are ordered descending by peak assessed population and alphabetically by city name.

# Testing and Validation

To verify internal consistency across the full 145-city corpus, rank-size behaviour was evaluated across all eleven classical subregions. Figure \ref{fig:gazetteer-ranksize} displays the resulting log-log rank-size curve alongside the twelve largest cities by peak population: Alexandria (465k), Ctesiphon (415k), Antioch-on-the-Orontes (348k), Carthage (312k), Seleucia-on-the-Tigris (286k), Ephesus (192k), Babylon (146k), Pergamon (142k), Smyrna (126k), Apamea (108k), Tarsus (88,5k) and Bactra (85,5k). Removing non-settlement fragments and evaluating each municipality on primary area and documentary evidence yields a well-behaved OLS rank-size slope of $\alpha = 0,76$ ($R^2 = 0,90$), reflecting a polycentric trans-imperial hierarchy stretching from Mediterranean and Nilotic ports to Sassanid and Kushan capitals.

Temporal occupancy checks show 55 active cities at the 539BC Achaemenid baseline, expanding to 101 by 300BC during the Hellenistic urban wave, 133 in 200AD at the Roman-Parthian-Kushan apogee and 138 in 500AD following Sassanid and Late Antique royal foundations, before easing to 136 in 632AD after the abandonment of Red Sea, Euphrates and Arabian caravan sites such as Myos Hormos, Berenike, Dura-Europos, Hatra, Hegra, Qaryat al-Faw, Thaj and Sumhuram. Coordinate integrity checks confirm 100% spatial containment within the classical domain mask and zero duplicate coordinate-name collisions.

<figure class="crd-figure-block" id="fig:gazetteer-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-hellenistic-roman-parthian-sassanid-settlements/fig4_hellenistic_roman_parthian_sassanid_settlements.png" alt="fig:gazetteer-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size curve across all 145 individually assessed classical cities and top twelve cities by peak population.</figcaption>
</figure>

# Results

## Anatolia and Cyprus

Table \ref{tab:gaz-anatolia} catalogues 31 individually assessed cities across modern Turkey (26, including Antioch-on-the-Orontes and Upper Mesopotamian border cities Edessa, Nisibis, Amida, Carrhae and Tigranocerta) and Cyprus (5), spanning Ionian, Bithynian, Lydian, Pamphylian, Cilician, Cappadocian and Pontic landscapes [@Fabian2021Economic; @Carlsen2022Roman]. Major coastal metropoleis—Antioch-on-the-Orontes (348k), Ephesus (192k), Pergamon (142k), Smyrna (126k), Tarsus (88,5k), Nicomedia (82,5k), Cyzicus (58,5k), Salamis Cyprus (57,4k) and Miletus (48,5k)—sit alongside inland crossroads including Sardis (78k), Ancyra (54,2k), Nicaea (52,4k), Caesarea Mazaca (48,6k), Laodicea on the Lycus (44,8k) and Aphrodisias (22,8k).

<figure class="crd-table-figure" id="tab:gaz-anatolia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Antioch-on-the-Orontes</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,2; 36,16</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">348k</td></tr>
<tr><td class="crd-td"><strong>Ephesus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,94; 27,34</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">192k</td></tr>
<tr><td class="crd-td"><strong>Pergamon</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,13; 27,18</td><td class="crd-td">400BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">142k</td></tr>
<tr><td class="crd-td"><strong>Smyrna</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,42; 27,13</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">126k</td></tr>
<tr><td class="crd-td"><strong>Tarsus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,92; 34,9</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">88,5k</td></tr>
<tr><td class="crd-td"><strong>Nicomedia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,77; 29,92</td><td class="crd-td">264BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">82,5k</td></tr>
<tr><td class="crd-td"><strong>Sardis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,49; 28,04</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">78k</td></tr>
<tr><td class="crd-td"><strong>Cyzicus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,38; 27,88</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Salamis Cyprus</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">35,18; 33,9</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">57,4k</td></tr>
<tr><td class="crd-td"><strong>Edessa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,16; 38,79</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">56,8k</td></tr>
<tr><td class="crd-td"><strong>Ancyra</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,94; 32,86</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">54,2k</td></tr>
<tr><td class="crd-td"><strong>Nicaea</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,43; 29,72</td><td class="crd-td">316BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">52,4k</td></tr>
<tr><td class="crd-td"><strong>Caesarea Mazaca</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,72; 35,48</td><td class="crd-td">400BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">48,6k</td></tr>
<tr><td class="crd-td"><strong>Miletus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,53; 27,28</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">48,5k</td></tr>
<tr><td class="crd-td"><strong>Nisibis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,08; 41,22</td><td class="crd-td">539BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Tigranocerta</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,13; 41</td><td class="crd-td">77BC-632AD</td><td class="crd-td">77BC</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Laodicea on the Lycus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,84; 29,11</td><td class="crd-td">261BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Amida</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,91; 40,24</td><td class="crd-td">200BC-632AD</td><td class="crd-td">400AD</td><td class="crd-td">44,5k</td></tr>
<tr><td class="crd-td"><strong>Halicarnassus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,04; 27,42</td><td class="crd-td">539BC-632AD</td><td class="crd-td">350BC</td><td class="crd-td">36,5k</td></tr>
<tr><td class="crd-td"><strong>Sinope</strong></td><td class="crd-td">Turkey</td><td class="crd-td">42,03; 35,15</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100BC</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Zeugma</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,06; 37,87</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Side</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,77; 31,39</td><td class="crd-td">500BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Samosata</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,58; 38,48</td><td class="crd-td">300BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Perge</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,96; 30,85</td><td class="crd-td">400BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Nea Paphos</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">34,76; 32,41</td><td class="crd-td">320BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Carrhae</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,86; 39,03</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td"><strong>Trapezus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01; 39,73</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Aphrodisias</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,71; 28,72</td><td class="crd-td">200BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Kition</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">34,92; 33,62</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Amathus</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">34,71; 33,14</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">15,8k</td></tr>
<tr><td class="crd-td"><strong>Kourion</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">34,67; 32,88</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">15,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed classical cities across Anatolia and Cyprus from 539BC to 632AD (31 cities).</figcaption>
</figure>

## Carthage, Maghreb and Libya

Table \ref{tab:gaz-maghreb} lists 21 individually assessed cities across Tunisia (6), Algeria (6), Libya (6) and Morocco (3). Leading metropoleis and provincial capitals—Carthage (312k), Lepcis Magna (78,5k), Cyrene (58,2k), Hadrumetum (56,2k), Caesarea Mauretaniae (46,8k), Cirta (42,6k), Utica (42,5k), Thysdrus (38,6k), Ptolemais Cyrenaica (34,6k), Oea (28,8k), Hippo Regius (28,6k), Tingis (22,8k) and Volubilis (17,8k)—chart Flavian-Severan municipal urbanisation, olive-oil exports and *limes* garrisons [@Mrozewicz2013Flavian; @Toumi2025Agricultur; @Zakrzewski2025Defining], complementing Saharan oasis networks across interior Libya [@Mattingly2020Introducti; @Anonymous2020Urbanisati].

<figure class="crd-table-figure" id="tab:gaz-maghreb">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Carthage</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,85; 10,32</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">312k</td></tr>
<tr><td class="crd-td"><strong>Lepcis Magna</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,64; 14,29</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Cyrene</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,82; 21,86</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">58,2k</td></tr>
<tr><td class="crd-td"><strong>Hadrumetum</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,83; 10,64</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">56,2k</td></tr>
<tr><td class="crd-td"><strong>Caesarea Mauretaniae</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,61; 2,19</td><td class="crd-td">500BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Cirta</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37; 6,61</td><td class="crd-td">400BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>Utica</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,06; 10,06</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100BC</td><td class="crd-td">42,5k</td></tr>
<tr><td class="crd-td"><strong>Thysdrus</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,3; 10,71</td><td class="crd-td">200BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">38,6k</td></tr>
<tr><td class="crd-td"><strong>Ptolemais Cyrenaica</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,71; 20,95</td><td class="crd-td">250BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Oea</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,9; 13,18</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Hippo Regius</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,88; 7,75</td><td class="crd-td">500BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Lambaesis</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,49; 6,26</td><td class="crd-td">81AD-632AD</td><td class="crd-td">200AD</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Sabratha</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,81; 12,48</td><td class="crd-td">500BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Tingis</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,79; -5,81</td><td class="crd-td">500BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Berenice Cyrenaica</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,12; 20,07</td><td class="crd-td">500BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Tipasa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,59; 2,44</td><td class="crd-td">400BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Volubilis</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,07; -5,55</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Thamugadi</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,48; 6,47</td><td class="crd-td">100AD-632AD</td><td class="crd-td">300AD</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Bulla Regia</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,56; 8,76</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">14,6k</td></tr>
<tr><td class="crd-td"><strong>Thugga</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,42; 9,22</td><td class="crd-td">400BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Sala Colonia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,01; -6,82</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">10,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed classical cities across Carthage, the Maghreb and Libya from 539BC to 632AD (21 cities).</figcaption>
</figure>

## Ptolemaic and Roman Egypt

Table \ref{tab:gaz-egypt} records 14 individually assessed Egyptian cities stretching from Mediterranean and Delta ports through Memphis and the reclaimed Arsinoite Fayum basin to Upper Egypt and the Red Sea [@Dogaer2023Property; @Capponi2024Augustus; @Abdelwahed2019Alabanthis; @Choat2019Egypt]. Alexandria (465k) leads the urban hierarchy above Memphis (73k), Sais (51,5k), Arsinoe (43,8k), Hermopolis Magna (42,4k), Oxyrhynchus (35,6k), Antinoopolis (33,2k), Tanis (31,8k), Pelusium (29,6k), Ptolemais Hermiou (29,2k), Coptos (22,6k), Syene (16,9k) and the Indo-Roman Red Sea ports Berenike (8,9k) and Myos Hormos (6,2k), cross-checked against surviving nome census and house-register papyri [@Bagnall2020Missing; @Winkler2025Cavalrymen].

<figure class="crd-table-figure" id="tab:gaz-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2; 29,92</td><td class="crd-td">331BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">465k</td></tr>
<tr><td class="crd-td"><strong>Memphis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,84; 31,25</td><td class="crd-td">539BC-632AD</td><td class="crd-td">539BC</td><td class="crd-td">73k</td></tr>
<tr><td class="crd-td"><strong>Sais</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,96; 30,77</td><td class="crd-td">539BC-632AD</td><td class="crd-td">539BC</td><td class="crd-td">51,5k</td></tr>
<tr><td class="crd-td"><strong>Arsinoe</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,31; 30,84</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">43,8k</td></tr>
<tr><td class="crd-td"><strong>Hermopolis Magna</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,78; 30,8</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">42,4k</td></tr>
<tr><td class="crd-td"><strong>Oxyrhynchus</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,54; 30,65</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">35,6k</td></tr>
<tr><td class="crd-td"><strong>Antinoopolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,81; 30,88</td><td class="crd-td">130AD-632AD</td><td class="crd-td">400AD</td><td class="crd-td">33,2k</td></tr>
<tr><td class="crd-td"><strong>Tanis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,98; 31,88</td><td class="crd-td">539BC-632AD</td><td class="crd-td">539BC</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Pelusium</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04; 32,55</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">29,6k</td></tr>
<tr><td class="crd-td"><strong>Ptolemais Hermiou</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,48; 31,8</td><td class="crd-td">300BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Coptos</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26; 32,82</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Syene</strong></td><td class="crd-td">Egypt</td><td class="crd-td">24,09; 32,9</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Berenike</strong></td><td class="crd-td">Egypt</td><td class="crd-td">23,91; 35,47</td><td class="crd-td">275BC-500AD</td><td class="crd-td">100AD</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Myos Hormos</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,16; 34,24</td><td class="crd-td">270BC-250AD</td><td class="crd-td">100AD</td><td class="crd-td">6,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed Ptolemaic, Roman and Late Antique cities in Egypt from 539BC to 632AD (14 cities).</figcaption>
</figure>

## Seleucid and Roman Levant and Arabian Peninsula

Table \ref{tab:gaz-levant} presents 35 individually assessed cities spanning Syria (8), Saudi Arabia (7), Israel (5), Yemen (4), Jordan (3), Lebanon (3), Palestine (2), Oman (2) and Bahrain (1). Highlights include Seleucid and Roman Levantine hubs such as Apamea (108k), Jerusalem (72,5k), Damascus (64,8k), Palmyra (64,5k), Caesarea Maritima (58,4k), Tyre (57,2k), Berytus (46,8k), Laodicea ad Mare (45,6k), Emesa (44,5k), Gaza (38,6k), Sidon (38,4k), Scythopolis (36,8k) and Bostra (36,8k), alongside Nabataean, Himyarite and Gulf caravan-maritime centres including Ma'rib (34,8k), Petra (31,8k), Sanaa (29,2k), Zafar (28,6k), Yathrib (22,8k), Najran (21,8k), Thaj (18,6k), Sohar (15,4k), Qal'at al-Bahrain (12,9k) and Sumhuram (4,4k) [@Jimenez2022Food; @Reden2021Economic; @Dolganov2025Archives].

<figure class="crd-table-figure" id="tab:gaz-levant">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Apamea</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,42; 36,4</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">108k</td></tr>
<tr><td class="crd-td"><strong>Jerusalem</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,78; 35,23</td><td class="crd-td">539BC-632AD</td><td class="crd-td">66AD</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td"><strong>Damascus</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,51; 36,31</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">64,8k</td></tr>
<tr><td class="crd-td"><strong>Palmyra</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,55; 38,27</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">64,5k</td></tr>
<tr><td class="crd-td"><strong>Caesarea Maritima</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,5; 34,89</td><td class="crd-td">22BC-632AD</td><td class="crd-td">400AD</td><td class="crd-td">58,4k</td></tr>
<tr><td class="crd-td"><strong>Tyre</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,27; 35,2</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">57,2k</td></tr>
<tr><td class="crd-td"><strong>Berytus</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,89; 35,5</td><td class="crd-td">539BC-632AD</td><td class="crd-td">400AD</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Laodicea ad Mare</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,52; 35,78</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">45,6k</td></tr>
<tr><td class="crd-td"><strong>Emesa</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,73; 36,72</td><td class="crd-td">200BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">44,5k</td></tr>
<tr><td class="crd-td"><strong>Gaza</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,5; 34,47</td><td class="crd-td">539BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">38,6k</td></tr>
<tr><td class="crd-td"><strong>Sidon</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,56; 35,38</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">38,4k</td></tr>
<tr><td class="crd-td"><strong>Bostra</strong></td><td class="crd-td">Syria</td><td class="crd-td">32,52; 36,48</td><td class="crd-td">200BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Scythopolis</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,5; 35,5</td><td class="crd-td">300BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Beroea</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2; 37,16</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Ma'rib</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,43; 45,34</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200BC</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>Petra</strong></td><td class="crd-td">Jordan</td><td class="crd-td">30,33; 35,44</td><td class="crd-td">300BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Sanaa</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,35; 44,21</td><td class="crd-td">1AD-632AD</td><td class="crd-td">632AD</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Ashkelon</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,67; 34,55</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Zafar</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,21; 44,4</td><td class="crd-td">110BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Philadelphia</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,95; 35,93</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Tiberias</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,79; 35,54</td><td class="crd-td">20AD-632AD</td><td class="crd-td">300AD</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Yathrib</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,47; 39,61</td><td class="crd-td">400BC-632AD</td><td class="crd-td">632AD</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Najran</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,49; 44,13</td><td class="crd-td">500BC-632AD</td><td class="crd-td">400AD</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Sepphoris</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,75; 35,28</td><td class="crd-td">200BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td"><strong>Gerasa</strong></td><td class="crd-td">Jordan</td><td class="crd-td">32,28; 35,89</td><td class="crd-td">200BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Thaj</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,87; 48,72</td><td class="crd-td">400BC-400AD</td><td class="crd-td">100BC</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Qaryat al-Faw</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">19,79; 45,15</td><td class="crd-td">300BC-400AD</td><td class="crd-td">100AD</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Sohar</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,36; 56,75</td><td class="crd-td">1AD-632AD</td><td class="crd-td">632AD</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Dura-Europos</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,75; 40,73</td><td class="crd-td">300BC-256AD</td><td class="crd-td">200AD</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Tayma</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,63; 38,54</td><td class="crd-td">539BC-632AD</td><td class="crd-td">539BC</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Hegra</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,79; 37,95</td><td class="crd-td">100BC-500AD</td><td class="crd-td">100AD</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Qal'at al-Bahrain</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,23; 50,52</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Mecca</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,42; 39,83</td><td class="crd-td">400AD-632AD</td><td class="crd-td">632AD</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Qana</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,01; 48,33</td><td class="crd-td">200BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Sumhuram</strong></td><td class="crd-td">Oman</td><td class="crd-td">17,04; 54,43</td><td class="crd-td">300BC-400AD</td><td class="crd-td">100AD</td><td class="crd-td">4,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed classical cities across the Levant and Arabian Peninsula from 539BC to 632AD (35 cities).</figcaption>
</figure>

## Parthian and Sassanid Mesopotamia and Iran

Table \ref{tab:gaz-meso} brings together 23 individually assessed cities across Iran (15) and Iraq (8). Prominent imperial and hydraulic capitals include Ctesiphon (415k), Seleucia-on-the-Tigris (286k), Babylon (146k), Susa (82,5k), Istakhr (68,5k), Gundeshapur (66,4k), Rhagae (64,8k), Ecbatana (58,5k), Charax Spasinu (52,4k), Hatra (51,5k), Nishapur (51,4k), Bishapur (48,6k), Hecatompylos (44,2k), Arbela (42,8k), Gor (42,6k), Jayy (42,6k) and Al-Hira (38,6k) [@Farrokh2023Survey; @Panaino2020Conceptual; @Spengler2021Journey].

<figure class="crd-table-figure" id="tab:gaz-meso">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ctesiphon</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,09; 44,58</td><td class="crd-td">129BC-632AD</td><td class="crd-td">600AD</td><td class="crd-td">415k</td></tr>
<tr><td class="crd-td"><strong>Seleucia-on-the-Tigris</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,09; 44,52</td><td class="crd-td">305BC-632AD</td><td class="crd-td">1AD</td><td class="crd-td">286k</td></tr>
<tr><td class="crd-td"><strong>Babylon</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,54; 44,42</td><td class="crd-td">539BC-632AD</td><td class="crd-td">539BC</td><td class="crd-td">146k</td></tr>
<tr><td class="crd-td"><strong>Susa</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,19; 48,26</td><td class="crd-td">539BC-632AD</td><td class="crd-td">400BC</td><td class="crd-td">82,5k</td></tr>
<tr><td class="crd-td"><strong>Istakhr</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,98; 52,91</td><td class="crd-td">300BC-632AD</td><td class="crd-td">400AD</td><td class="crd-td">68,5k</td></tr>
<tr><td class="crd-td"><strong>Gundeshapur</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,28; 48,52</td><td class="crd-td">271AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">66,4k</td></tr>
<tr><td class="crd-td"><strong>Rhagae</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,6; 51,43</td><td class="crd-td">539BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">64,8k</td></tr>
<tr><td class="crd-td"><strong>Ecbatana</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,81; 48,52</td><td class="crd-td">539BC-632AD</td><td class="crd-td">539BC</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Charax Spasinu</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,89; 47,58</td><td class="crd-td">324BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">52,4k</td></tr>
<tr><td class="crd-td"><strong>Hatra</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,59; 42,72</td><td class="crd-td">200BC-241AD</td><td class="crd-td">200AD</td><td class="crd-td">51,5k</td></tr>
<tr><td class="crd-td"><strong>Nishapur</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,17; 58,84</td><td class="crd-td">245AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">51,4k</td></tr>
<tr><td class="crd-td"><strong>Bishapur</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,78; 51,57</td><td class="crd-td">266AD-632AD</td><td class="crd-td">400AD</td><td class="crd-td">48,6k</td></tr>
<tr><td class="crd-td"><strong>Hecatompylos</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,96; 54,05</td><td class="crd-td">300BC-632AD</td><td class="crd-td">100BC</td><td class="crd-td">44,2k</td></tr>
<tr><td class="crd-td"><strong>Arbela</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,19; 44,01</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">42,8k</td></tr>
<tr><td class="crd-td"><strong>Gor</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,85; 52,53</td><td class="crd-td">220AD-632AD</td><td class="crd-td">400AD</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>Jayy</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,63; 51,72</td><td class="crd-td">539BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Hira</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,88; 44,45</td><td class="crd-td">240AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">38,6k</td></tr>
<tr><td class="crd-td"><strong>Shushtar</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,05; 48,86</td><td class="crd-td">300BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>Darabgird</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,71; 54,49</td><td class="crd-td">200BC-632AD</td><td class="crd-td">400AD</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Veh-Ardashir Kerman</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,28; 57,08</td><td class="crd-td">230AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Singara</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,32; 41,88</td><td class="crd-td">100BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,9; 54,36</td><td class="crd-td">400BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Siraf</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,66; 52,34</td><td class="crd-td">350AD-632AD</td><td class="crd-td">632AD</td><td class="crd-td">14,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed Parthian and Sassanid cities in Mesopotamia and Iran from 539BC to 632AD (23 cities).</figcaption>
</figure>

## Classical Caucasia and Kushan Afghanistan

Table \ref{tab:gaz-cauc} details 21 individually assessed cities across Afghanistan (11), Georgia (5), Armenia (3) and Azerbaijan (2), anchoring Greco-Bactrian, Kushan, Armenian, Iberian, Lazic and Caucasian Albanian corridors along the Oxus-Hindu Kush, Araxes, Kura and Black Sea routes: Bactra (85,5k), Artaxata (62,4k), Dvin (54,4k), Kapisa (49,2k), Alexandria in Aria (44,8k), Partaw (38,8k), Alexandria in Arachosia (36,4k), Vagharshapat (34,6k), Nagarahara (32,8k), Ai-Khanoum (32,4k), Mtskheta (32,4k), Zaranj (29,4k), Kunduz (28,6k), Qabala (28,4k) and Tbilisi (23,8k) [@Spengler2021Journey; @Arts2011Violets; @Kwon2009West; @Liu2026Research].

<figure class="crd-table-figure" id="tab:gaz-cauc">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bactra</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,76; 66,9</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">85,5k</td></tr>
<tr><td class="crd-td"><strong>Artaxata</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,88; 44,58</td><td class="crd-td">176BC-632AD</td><td class="crd-td">1AD</td><td class="crd-td">62,4k</td></tr>
<tr><td class="crd-td"><strong>Dvin</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40; 44,58</td><td class="crd-td">335AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">54,4k</td></tr>
<tr><td class="crd-td"><strong>Kapisa</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,99; 69,31</td><td class="crd-td">329BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">49,2k</td></tr>
<tr><td class="crd-td"><strong>Alexandria in Aria</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,34; 62,2</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Partaw</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,37; 47,13</td><td class="crd-td">459AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Alexandria in Arachosia</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">31,6; 65,66</td><td class="crd-td">539BC-632AD</td><td class="crd-td">100AD</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Vagharshapat</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,17; 44,29</td><td class="crd-td">200BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Nagarahara</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,37; 70,47</td><td class="crd-td">200BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">32,8k</td></tr>
<tr><td class="crd-td"><strong>Ai-Khanoum</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">37,17; 69,41</td><td class="crd-td">327BC-145BC</td><td class="crd-td">200BC</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Mtskheta</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,85; 44,72</td><td class="crd-td">400BC-632AD</td><td class="crd-td">300AD</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Zaranj</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">30,96; 61,86</td><td class="crd-td">539BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,73; 68,86</td><td class="crd-td">400BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Qabala</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,89; 47,71</td><td class="crd-td">300BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">28,4k</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,69; 44,8</td><td class="crd-td">458AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">33,55; 68,42</td><td class="crd-td">200BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Bamiyan</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,83; 67,83</td><td class="crd-td">1AD-632AD</td><td class="crd-td">600AD</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Phasis</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,15; 41,67</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Dioscurias</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43; 41,02</td><td class="crd-td">539BC-632AD</td><td class="crd-td">200AD</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Archaeopolis</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,36; 42,2</td><td class="crd-td">300BC-632AD</td><td class="crd-td">500AD</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Surkh Kotal</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,04; 68,59</td><td class="crd-td">100AD-632AD</td><td class="crd-td">200AD</td><td class="crd-td">11,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed classical cities across Classical Caucasia and Kushan Afghanistan from 539BC to 632AD (21 cities).</figcaption>
</figure>

# Limitations

Three structural constraints affect this city gazetteer. First, archaeological excavation intensity varies across modern jurisdictions: modern Turkey (26 cities), Iran (15), Egypt (14) and Afghanistan (11) supply dense urban anchors, whereas smaller littoral and frontier territories such as Bahrain (1) and Palestine, Azerbaijan and Oman (2 each) contribute fewer individually assessed municipalities. Second, while excluding 200 architectural fragments, gates and sub-loci restores coherent urban centroids and yields a realistic classical rank-size slope ($\alpha = 0,76$, $R^2 = 0,90$), walled-area and documentary estimates still carry ±20% to ±30% uncertainty for metropoleis with extensive extramural suburbs or multi-storey residential blocks. Third, alluvial sedimentation in lower Iraq and the Nile Delta conceals small unfortified classical farmsteads, making the continuous Matérn kriging surface essential for estimating rural biomass beyond urban nuclei.

# Conclusion

Across 145 individually assessed classical cities and 22 modern national territories, this gazetteer documents the polycentric expansion of Hellenistic, Roman, Parthian, Sassanid and Kushan urban networks between 539BC and 632AD. Rising from 55 active cities at the 539BC Achaemenid baseline to 101 by 300BC, 133 during the 200AD Roman-Parthian-Kushan apogee, 138 in 500AD following Sassanid royal foundations and 136 on the eve of the Islamic conquests in 632AD, the spatial record tracks both the Mediterranean municipal boom and the eastward hydraulic surge under the Sassanids, supplying the urban foundation for HANDBOOK's continuous demographic surfaces and subadministrative audits.

# Appendix

Table \ref{tab:gaz-summary} summarises the 145 individually assessed classical cities aggregated by modern country, reporting city counts, earliest active year, latest active year, median peak population and maximum peak population.

<figure class="crd-table-figure" id="tab:gaz-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Sites</th><th class="crd-th">Earliest</th><th class="crd-th">Latest</th><th class="crd-th">Median Peak</th><th class="crd-th">Max Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">26</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">47,6k</td><td class="crd-td">348k</td></tr>
<tr><td class="crd-td"><strong>Iran</strong></td><td class="crd-td">15</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">44,2k</td><td class="crd-td">82,5k</td></tr>
<tr><td class="crd-td"><strong>Egypt</strong></td><td class="crd-td">14</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">32,5k</td><td class="crd-td">465k</td></tr>
<tr><td class="crd-td"><strong>Afghanistan</strong></td><td class="crd-td">11</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">32,4k</td><td class="crd-td">85,5k</td></tr>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">8</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">52k</td><td class="crd-td">415k</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">8</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">45k</td><td class="crd-td">108k</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">7</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">16,4k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">6</td><td class="crd-td">500BC</td><td class="crd-td">632AD</td><td class="crd-td">26,7k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">6</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">31,7k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">6</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">40,5k</td><td class="crd-td">312k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">5</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">19,2k</td><td class="crd-td">57,4k</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">5</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">14,4k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">5</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">28,8k</td><td class="crd-td">58,4k</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">4</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">28,9k</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">3</td><td class="crd-td">200BC</td><td class="crd-td">632AD</td><td class="crd-td">54,4k</td><td class="crd-td">62,4k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">3</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">24,8k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">3</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">46,8k</td><td class="crd-td">57,2k</td></tr>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">3</td><td class="crd-td">500BC</td><td class="crd-td">632AD</td><td class="crd-td">17,8k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">2</td><td class="crd-td">300BC</td><td class="crd-td">632AD</td><td class="crd-td">33,6k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">2</td><td class="crd-td">300BC</td><td class="crd-td">632AD</td><td class="crd-td">9,9k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">2</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">55,5k</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">1</td><td class="crd-td">539BC</td><td class="crd-td">632AD</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Country-level summary of the 145 individually assessed classical cities between 539BC and 632AD.</figcaption>
</figure>

# Sources

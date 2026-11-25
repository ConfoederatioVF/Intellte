---
title: "Early Modern Sahel and Sudan (1500-1898)"
subtitle: "Settlement Gazetteer: 4.038 Cities, Capitals and Towns (1500-1898)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_modern_sahel_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 4.038 individually assessed settlements across 21 modern countries and ten historical sub-regions from Mauritania to Sudan and Ethiopia between 1500AD and 1898AD."
hero_label: "fig:hero-settlements-sahel"

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

This gazetteer compiles geographic coordinates and dated population series for 4.038 individually assessed settlements across the Sahel and Sudan between 1500AD and 1898AD, spanning 12.348 historical observations across 23 modern countries. Screened from 4.706 candidate walled capitals, caravan oases, river ports and colonial communes (668 duplicate orthographies and historical aliases excluded), the retained entries partition deterministically across ten historical sub-regions from Mauritania, Senegambia and the Niger Bend through Hausaland and Lake Chad to Darfur, the Turco-Egyptian Nile and Equatoria. Active interpolated sites rise from 2.255 settlements in 1500AD to 2.022 in 1700AD, 2.284 in 1780AD and 1.784 in 1860AD before consolidating at 362 in 1890AD, tracing urban trajectories from imperial Gao (68,6k), Birnin Gazargamu (62,4k), Gondar (62k), Niani (60k) and Timbuktu (58,4k) to nineteenth-century Kano (58,4k), Khartoum (60k), Kukawa (60k), Nioro du Sahel (95k) and Mahdist Omdurman (148k).



# Background

Early modern Sahelian and Sudanic urbanism operated across a vast savanna-and-steppe belt uniting trans-Saharan caravan terminals, riverine ports and fortified agrarian capitals [@Caillie1830TravelsThrough; @MacDonald2012WalledSegou; @Crawford1951FungSennar]. Along the western Saharan and Senegambian margin, oasis towns such as Chinguetti and Tichitt exchanged desert salt for gold and millet from Futa Toro, Segou and the Inland Niger Delta [@Chastanet1992SurvivalStrategies; @Houdoy1881SoudanFrancais]. Across the central and eastern Sudan, walled manufacturing capitals in Hausaland, fired-brick elite centres in Kanem-Bornu and caravan seats across Wadai, Darfur and Sennar sustained dense urban populations shaped by nineteenth-century Islamic reform movements, Turco-Egyptian expansion and Mahdist state formation [@Last1967SokotoCaliphate; @Magnavita2025NewLuminescence; @Ofahey1980StateDarFur; @Spaulding1985HeroicAge].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate settlements were gathered from French Senegalese communal censuses, British Gambian and Sierra Leonean colonial returns, nineteenth-century traveller surveys [@Lyon1821NarrativeTravels; @Baikie1862NotesJourney], Arabic chronicles and archaeological wall-circuit mappings [@MacDonald2012WalledSegou; @Suleiman2007BirninZaria]. Out of 4.706 candidates situated within the 9.350.985 km² domain bounded by geoBoundaries polygons [@Runfola2020GeoBoundaries], 668 duplicate orthographies and historical aliases were merged, leaving 4.038 city-proper settlements across 23 countries. Each settlement maps cleanly to one of the ten historical sub-regions defined in the companion study.

## Population Interpolation and Table Layout

Every entry records city-proper populations anchored to attested historical dates without synthetic extrapolations or flat caps [@Hamza2004DorayiKano; @Aouatef2026PoliticalStructures]. Tables 1 to 10 present linearly interpolated populations at five benchmark years (1500AD, 1700AD, 1780AD, 1860AD and 1890AD) alongside each site's observed peak population and peak date, marking years outside a settlement's recorded chronological span with a hyphen (-).

# Testing and Validation

Across 397 spatially deduplicated city peaks (merging two co-located historical entries at Freetown), ordinary least-squares rank-size regression across the upper 180 settlements yields a Pareto slope of $q = 0,77$ ($R^2 = 0,98$; Figure \ref{fig:settlements-rank}), matching a multi-polar belt of regional capitals across West, Central and Nilotic Sudan rather than single-metropolis primacy [@Azarya1980TradersAnd; @Smaldone1962WarfareThe]. Cross-checking chronological bounds ensures alignment with documented foundation and abandonment dates, from post-1821AD Khartoum and post-1881AD Omdurman back to sixteenth-century Songhai and Funj capitals [@Crawford1951FungSennar; @Spaulding1985HeroicAge].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-sahel-sudan-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size scaling across 397 spatially deduplicated settlements (top-180 OLS slope q = 0,77, R² = 0,98) and mean sub-regional density in 1890AD.</figcaption>
</figure>

# Results

## Trarza, Brakna and Adrar Emirates

Table \ref{tab:zone1-sites} compiles 430 settlements across Mauritania, northern and central Senegal and western Gambia, led by Saint-Louis (20,2k in 1891AD), Bakel (10,9k in 1863AD), Dakar (8,74k in 1891AD), Tichitt (8,35k in 1750AD), Rufisque (8,09k in 1891AD) and Chinguetti (6,85k in 1650AD) [@Chastanet1992SurvivalStrategies; @Houdoy1881SoudanFrancais].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saint-Louis</strong></td><td class="crd-td">SEN: 16,03, -16,49</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">5,3k</td><td class="crd-td">15,2k</td><td class="crd-td">25k</td><td class="crd-td">25k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Rufisque</strong></td><td class="crd-td">SEN: 14,72, -17,27</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">18k</td><td class="crd-td">18k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Bakel</strong></td><td class="crd-td">SEN: 14,91, -12,46</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">1,3k</td><td class="crd-td">3,4k</td><td class="crd-td">10,9k (1863AD)</td></tr>
<tr><td class="crd-td"><strong>Dakar</strong></td><td class="crd-td">SEN: 14,77, -17,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">8,7k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Tichitt</strong></td><td class="crd-td">MRT: 18,44, -9,49</td><td class="crd-td">1k</td><td class="crd-td">7,7k</td><td class="crd-td">7,7k</td><td class="crd-td">5,6k</td><td class="crd-td">4,1k</td><td class="crd-td">8,3k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Chinguetti</strong></td><td class="crd-td">MRT: 20,46, -12,36</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">5,6k</td><td class="crd-td">3,6k</td><td class="crd-td">3,2k</td><td class="crd-td">6,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Banjul</strong></td><td class="crd-td">GMB: 13,45, -16,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Kahone</strong></td><td class="crd-td">SEN: 14,16, -16,04</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td><td class="crd-td">4,9k</td><td class="crd-td">5,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Kaédi</strong></td><td class="crd-td">MRT: 16,16, -13,5</td><td class="crd-td">1,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,7k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k</td><td class="crd-td">5,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Diakhao</strong></td><td class="crd-td">SEN: 14,46, -16,29</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td><td class="crd-td">4,6k</td><td class="crd-td">3,7k</td><td class="crd-td">5,7k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Koussan</strong></td><td class="crd-td">SEN: 14,13, -12,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">5,2k</td><td class="crd-td">4,3k</td><td class="crd-td">5,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaye</strong></td><td class="crd-td">SEN: 14,78, -16,48</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td><td class="crd-td">4k</td><td class="crd-td">3,2k</td><td class="crd-td">5,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Ouadane</strong></td><td class="crd-td">MRT: 20,93, -11,62</td><td class="crd-td">1,2k</td><td class="crd-td">3,3k</td><td class="crd-td">2,6k</td><td class="crd-td">1,9k</td><td class="crd-td">1,6k</td><td class="crd-td">5,3k (1506AD)</td></tr>
<tr><td class="crd-td"><strong>Mboul</strong></td><td class="crd-td">SEN: 15,32, -16,65</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Linguère</strong></td><td class="crd-td">SEN: 15,4, -15,12</td><td class="crd-td">5,1k</td><td class="crd-td">3,5k</td><td class="crd-td">3,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbissel</strong></td><td class="crd-td">SEN: 14,16, -16,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Podor</strong></td><td class="crd-td">SEN: 16,65, -14,96</td><td class="crd-td">4,9k</td><td class="crd-td">4,1k</td><td class="crd-td">3,6k</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gorée</strong></td><td class="crd-td">SEN: 14,67, -17,4</td><td class="crd-td">280</td><td class="crd-td">1,1k</td><td class="crd-td">2,3k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Bambylor</strong></td><td class="crd-td">SEN: 14,8, -17,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Ndiourbel</strong></td><td class="crd-td">SEN: 16,25, -15,89</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1819AD)</td></tr>
<tr><td class="crd-td"><strong>Tidjikdja</strong></td><td class="crd-td">MRT: 18,56, -11,42</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,6k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Nioro du Rip</strong></td><td class="crd-td">SEN: 13,75, -15,77</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Boghé</strong></td><td class="crd-td">MRT: 16,6, -14,26</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Joal - Fadiouth</strong></td><td class="crd-td">SEN: 14,18, -16,85</td><td class="crd-td">1,3k</td><td class="crd-td">3,5k</td><td class="crd-td">3,9k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Louga</strong></td><td class="crd-td">SEN: 15,62, -16,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Jaxaay - Parcelles</strong></td><td class="crd-td">SEN: 14,77, -17,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Atar</strong></td><td class="crd-td">MRT: 20,5, -13,05</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Saly Portudal</strong></td><td class="crd-td">SEN: 14,44, -17,02</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">2,4k</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Yang-Yang</strong></td><td class="crd-td">SEN: 15,59, -15,34</td><td class="crd-td">351</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mbour</strong></td><td class="crd-td">SEN: 14,44, -16,97</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">2,9k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,3k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Matam</strong></td><td class="crd-td">SEN: 15,65, -13,26</td><td class="crd-td">1,7k</td><td class="crd-td">3,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Awdaghost</strong></td><td class="crd-td">MRT: 17,42, -10,42</td><td class="crd-td">3,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Diourbel</strong></td><td class="crd-td">SEN: 14,67, -16,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kaolack</strong></td><td class="crd-td">SEN: 14,17, -16,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Rao</strong></td><td class="crd-td">SEN: 15,91, -16,41</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fatick</strong></td><td class="crd-td">SEN: 14,34, -16,42</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Brikama Ba</strong></td><td class="crd-td">GMB: 13,53, -14,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Sélibabi</strong></td><td class="crd-td">MRT: 15,16, -12,17</td><td class="crd-td">622</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Walaldé</strong></td><td class="crd-td">SEN: 16,51, -14,2</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Guédé Ouro</strong></td><td class="crd-td">SEN: 16,62, -14,79</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 390 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Trarza, Brakna and Adrar Emirates from 1500AD to 1890AD with peak populations (top 40 of 430 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Futa Toro, Segou Bamana and Toucouleur

Table \ref{tab:zone2-sites} lists 575 settlements across western and central Mali, Guinea, Guinea-Bissau, Sierra Leone, southern Senegal, eastern Gambia, south-eastern Mauritania and northern Ivory Coast, headed by Nioro du Sahel (95k wartime congregation in 1892AD), Niani (60k in 1550AD), Tombouctou (58,4k in 1550AD), Hamdallahi (42,6k in 1855AD), Ségou (40k in 1858AD), Djenné (32,4k in 1550AD) and Freetown (30k in 1891AD) [@MacDonald2012WalledSegou; @Azarya1980TradersAnd; @Ill1999MandeAnd; @Bellagamba2004EntrustmentAnd].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nioro du Sahel</strong></td><td class="crd-td">MLI: 15,23, -9,59</td><td class="crd-td">1,9k</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">11,6k</td><td class="crd-td">8,5k</td><td class="crd-td">95k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Niani</strong></td><td class="crd-td">GIN: 11,38, -8,38</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Tombouctou</strong></td><td class="crd-td">MLI: 16,77, -3</td><td class="crd-td">23,8k</td><td class="crd-td">23,2k</td><td class="crd-td">16,8k</td><td class="crd-td">12,4k</td><td class="crd-td">9,1k</td><td class="crd-td">58,4k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Hamdallahi</strong></td><td class="crd-td">MLI: 14,32, -4,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,9k</td><td class="crd-td">-</td><td class="crd-td">42,6k (1855AD)</td></tr>
<tr><td class="crd-td"><strong>Ségou</strong></td><td class="crd-td">MLI: 13,42, -6,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,1k</td><td class="crd-td">38,9k</td><td class="crd-td">18,4k</td><td class="crd-td">40k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Djenné</strong></td><td class="crd-td">MLI: 13,9, -4,55</td><td class="crd-td">11k</td><td class="crd-td">19k</td><td class="crd-td">14,8k</td><td class="crd-td">8,8k</td><td class="crd-td">8,2k</td><td class="crd-td">32,4k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,48, -13,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">29,2k</td><td class="crd-td">30k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,35, -13,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">29,2k</td><td class="crd-td">30k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Goderich</strong></td><td class="crd-td">SLE: 8,43, -13,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">737</td><td class="crd-td">22k</td><td class="crd-td">22k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Sansanding</strong></td><td class="crd-td">MLI: 13,72, -6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">17,8k</td><td class="crd-td">7,6k</td><td class="crd-td">18,4k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Manéah</strong></td><td class="crd-td">GIN: 9,73, -13,42</td><td class="crd-td">11,3k</td><td class="crd-td">14k</td><td class="crd-td">14,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala</strong></td><td class="crd-td">GNB: 12,57, -14,08</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">12,1k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">13,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala</strong></td><td class="crd-td">GNB: 12,32, -14,17</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">12,1k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">13,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dakajalan</strong></td><td class="crd-td">MLI: 11,96, -8,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Kankan</strong></td><td class="crd-td">GIN: 10,4, -9,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">7,6k</td><td class="crd-td">6k</td><td class="crd-td">10,4k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Timbo</strong></td><td class="crd-td">GIN: 10,63, -11,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">7,8k</td><td class="crd-td">4,8k</td><td class="crd-td">9,1k (1818AD)</td></tr>
<tr><td class="crd-td"><strong>Bissandougou</strong></td><td class="crd-td">GIN: 10,17, -9,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">8,1k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Falaba</strong></td><td class="crd-td">SLE: 9,86, -11,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">2,3k</td><td class="crd-td">8k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>Labé</strong></td><td class="crd-td">GIN: 11,33, -12,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">6,5k</td><td class="crd-td">7,7k</td><td class="crd-td">7,8k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Dinguiraye</strong></td><td class="crd-td">GIN: 11,29, -10,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">6,2k</td><td class="crd-td">7,6k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Moussadougou</strong></td><td class="crd-td">GIN: 8,77, -8,62</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,7k</td><td class="crd-td">7,2k</td><td class="crd-td">4,5k</td><td class="crd-td">7,4k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Nyamina</strong></td><td class="crd-td">MLI: 13,32, -6,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Koumbi Saleh</strong></td><td class="crd-td">MRT: 15,77, -7,97</td><td class="crd-td">6,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bissau</strong></td><td class="crd-td">GNB: 11,9, -15,59</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">804</td><td class="crd-td">2,2k</td><td class="crd-td">6,1k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Kolaboui</strong></td><td class="crd-td">GIN: 10,8, -14,4</td><td class="crd-td">4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kayes</strong></td><td class="crd-td">MLI: 14,44, -11,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,8k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Fugumba</strong></td><td class="crd-td">GIN: 11,12, -12,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Mopti</strong></td><td class="crd-td">MLI: 14,48, -4,18</td><td class="crd-td">2,1k</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">5,4k</td><td class="crd-td">5,5k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Kambia Old</strong></td><td class="crd-td">SLE: 9,12, -12,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">4,6k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Port Loko</strong></td><td class="crd-td">SLE: 8,77, -12,78</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Bamako</strong></td><td class="crd-td">MLI: 12,64, -8</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3k</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td><td class="crd-td">4,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kangaba</strong></td><td class="crd-td">MLI: 11,93, -8,42</td><td class="crd-td">4,8k</td><td class="crd-td">3,6k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Hamdallahi</strong></td><td class="crd-td">SEN: 13,08, -14,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Koumbia</strong></td><td class="crd-td">GIN: 11,8, -13,5</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Beyla</strong></td><td class="crd-td">GIN: 8,69, -8,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Odienné</strong></td><td class="crd-td">CIV: 9,5, -7,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Sofara</strong></td><td class="crd-td">MLI: 14,02, -4,23</td><td class="crd-td">1,1k</td><td class="crd-td">3,5k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Néma</strong></td><td class="crd-td">MRT: 16,62, -7,27</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Waterloo</strong></td><td class="crd-td">SLE: 8,34, -13,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 535 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Futa Toro, Segou Bamana and Toucouleur from 1500AD to 1890AD with peak populations (top 40 of 575 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Pashalik of Timbuktu, Massina and Niger Bend

Table \ref{tab:zone3-sites} records 154 settlements across the Niger Bend, Dogon plateau, Adrar des Ifoghas and eastern Mauritania, led by Gao (68,6k in 1585AD), Bandiagara (6,42k in 1893AD), Dia (6,42k in 1650AD), Ténenkou (4,64k in 1850AD), Goundam (4,62k in 1894AD) and Oualata (4,19k in 1600AD) [@Caillie1830TravelsThrough; @Dijk2000DroughtAnd].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gao</strong></td><td class="crd-td">MLI: 16,26, -0,04</td><td class="crd-td">54,6k</td><td class="crd-td">15,5k</td><td class="crd-td">9,7k</td><td class="crd-td">5,3k</td><td class="crd-td">4,8k</td><td class="crd-td">68,6k (1585AD)</td></tr>
<tr><td class="crd-td"><strong>Bandiagara</strong></td><td class="crd-td">MLI: 14,36, -3,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k (1893AD)</td></tr>
<tr><td class="crd-td"><strong>Dia</strong></td><td class="crd-td">MLI: 14,38, -4,9</td><td class="crd-td">4,3k</td><td class="crd-td">6k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Ténenkou</strong></td><td class="crd-td">MLI: 14,46, -4,92</td><td class="crd-td">1,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Goundam</strong></td><td class="crd-td">MLI: 16,41, -3,66</td><td class="crd-td">1,3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Kukiya</strong></td><td class="crd-td">MLI: 15,35, 0,75</td><td class="crd-td">2,5k</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Oualata</strong></td><td class="crd-td">MRT: 17,3, -7,02</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">2,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td><td class="crd-td">4,2k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Hombori</strong></td><td class="crd-td">MLI: 15,29, -1,7</td><td class="crd-td">973</td><td class="crd-td">3,5k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Magnadoue</strong></td><td class="crd-td">MLI: 16,39, -0,05</td><td class="crd-td">834</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">3,4k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Douentza</strong></td><td class="crd-td">MLI: 15,01, -2,95</td><td class="crd-td">864</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Ounjougou</strong></td><td class="crd-td">MLI: 14,41, -3,52</td><td class="crd-td">165</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Tonka Mali</strong></td><td class="crd-td">MLI: 16,37, -3,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Dourou-boro</strong></td><td class="crd-td">MLI: 14,29, -3,44</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1839AD)</td></tr>
<tr><td class="crd-td"><strong>Dia Mara</strong></td><td class="crd-td">MLI: 14,41, -4,85</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fiko</strong></td><td class="crd-td">MLI: 14,44, -3,92</td><td class="crd-td">1k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1807AD)</td></tr>
<tr><td class="crd-td"><strong>Bamba</strong></td><td class="crd-td">MLI: 17,03, -1,4</td><td class="crd-td">2,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Niafunke</strong></td><td class="crd-td">MLI: 15,93, -3,99</td><td class="crd-td">1,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Gumbessugo</strong></td><td class="crd-td">MLI: 14,41, -3,83</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Ounjougou Complex</strong></td><td class="crd-td">MLI: 14,4, -3,45</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1607AD)</td></tr>
<tr><td class="crd-td"><strong>Grottes de Sanga</strong></td><td class="crd-td">MLI: 14,42, -3,29</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1748AD)</td></tr>
<tr><td class="crd-td"><strong>Bourem</strong></td><td class="crd-td">MLI: 16,95, -0,34</td><td class="crd-td">746</td><td class="crd-td">2,5k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Ansongo</strong></td><td class="crd-td">MLI: 15,66, 0,5</td><td class="crd-td">946</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Sadia</strong></td><td class="crd-td">MLI: 14,07, -3,6</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kowa</strong></td><td class="crd-td">MLI: 14,49, -4,02</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Gadei</strong></td><td class="crd-td">MLI: 16,3, -0,03</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gatié Loumo</strong></td><td class="crd-td">MLI: 15,47, -4,61</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kabara</strong></td><td class="crd-td">MLI: 16,7, -2,98</td><td class="crd-td">2,5k</td><td class="crd-td">1,9k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gourma-Rharous</strong></td><td class="crd-td">MLI: 16,88, -1,92</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Ngomi</strong></td><td class="crd-td">MLI: 14,5, -4,33</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tyi-Jo</strong></td><td class="crd-td">MLI: 13,93, -3,78</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Togueré Doupwil</strong></td><td class="crd-td">MLI: 13,85, -4,32</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Essouk</strong></td><td class="crd-td">MLI: 18,77, 1,18</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gao Saney</strong></td><td class="crd-td">MLI: 16,3, 0,01</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dialoubé</strong></td><td class="crd-td">MLI: 15,02, -4,23</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ama balaginna</strong></td><td class="crd-td">MLI: 14,1, -3,73</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1817AD)</td></tr>
<tr><td class="crd-td"><strong>Orosogou</strong></td><td class="crd-td">MLI: 14,39, -3,49</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Youwarou</strong></td><td class="crd-td">MLI: 15,37, -4,26</td><td class="crd-td">-</td><td class="crd-td">964</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Winde Koroji Complex</strong></td><td class="crd-td">MLI: 15,13, -2,93</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sindel</strong></td><td class="crd-td">MLI: 14,35, -4,9</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Araouane</strong></td><td class="crd-td">MLI: 18,91, -3,53</td><td class="crd-td">-</td><td class="crd-td">927</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 114 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Pashalik of Timbuktu, Massina and Niger Bend from 1500AD to 1890AD with peak populations (top 40 of 154 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Mossi Kingdoms, Kong and Wassoulou

Table \ref{tab:zone4-sites} documents 405 settlements across Burkina Faso, northern Ghana, northern Togo, northern Benin, south-eastern Mali and western Niger, topped by Sikasso (16,8k in 1898AD), Ouagadougou (14,8k in 1888AD), Tillabéri (8,64k in 1854AD), Bobo-Dioulasso (8,42k in 1888AD), Yendi (8,42k in 1850AD) and Ouahigouya (8,24k in 1895AD) [@Azarya1980TradersAnd].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sikasso</strong></td><td class="crd-td">MLI: 11,31, -5,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,7k</td><td class="crd-td">16,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Ouagadougou</strong></td><td class="crd-td">BFA: 12,36, -1,5</td><td class="crd-td">7,8k</td><td class="crd-td">11,4k</td><td class="crd-td">13,2k</td><td class="crd-td">14,4k</td><td class="crd-td">14,2k</td><td class="crd-td">14,8k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Tillabéri</strong></td><td class="crd-td">NER: 14,21, 1,46</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>Bobo-Dioulasso</strong></td><td class="crd-td">BFA: 11,2, -4,29</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,2k</td><td class="crd-td">8,1k</td><td class="crd-td">8,2k</td><td class="crd-td">8,4k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi</strong></td><td class="crd-td">GHA: 9,46, -0,01</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">7,7k</td><td class="crd-td">7,8k</td><td class="crd-td">5,3k</td><td class="crd-td">8,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ouahigouya</strong></td><td class="crd-td">BFA: 13,56, -2,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">8,2k</td><td class="crd-td">8,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Say</strong></td><td class="crd-td">NER: 13,1, 2,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">6,5k</td><td class="crd-td">8k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi Dabari</strong></td><td class="crd-td">GHA: 9,75, -0,83</td><td class="crd-td">4,8k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pusiga</strong></td><td class="crd-td">GHA: 11,08, -0,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Tenkodogo</strong></td><td class="crd-td">BFA: 11,8, -0,38</td><td class="crd-td">4,9k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>San</strong></td><td class="crd-td">MLI: 13,29, -4,9</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">4,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6k</td><td class="crd-td">6k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Dédougou</strong></td><td class="crd-td">BFA: 12,47, -3,46</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">5,9k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Sansanné-Mango</strong></td><td class="crd-td">TGO: 10,35, 0,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Djougou</strong></td><td class="crd-td">BEN: 9,7, 1,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Wa</strong></td><td class="crd-td">GHA: 10,04, -2,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">5,1k</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ouro Guéladio</strong></td><td class="crd-td">NER: 13,1, 2,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Yako</strong></td><td class="crd-td">BFA: 12,96, -2,26</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Fada N'Gourma</strong></td><td class="crd-td">BFA: 12,06, 0,37</td><td class="crd-td">2,7k</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td><td class="crd-td">4,5k</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Gambaga</strong></td><td class="crd-td">GHA: 10,53, -0,44</td><td class="crd-td">1,9k</td><td class="crd-td">3,3k</td><td class="crd-td">4,5k</td><td class="crd-td">4,3k</td><td class="crd-td">4,1k</td><td class="crd-td">4,6k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kérou</strong></td><td class="crd-td">BEN: 10,83, 2,11</td><td class="crd-td">1,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Parakou</strong></td><td class="crd-td">BEN: 9,36, 2,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td><td class="crd-td">4,4k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Daboya</strong></td><td class="crd-td">GHA: 9,53, -1,39</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">3,7k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kaya</strong></td><td class="crd-td">BFA: 13,08, -1,09</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Gourcy</strong></td><td class="crd-td">BFA: 13,2, -2,35</td><td class="crd-td">1,7k</td><td class="crd-td">4k</td><td class="crd-td">3,7k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">4,1k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Koudougou</strong></td><td class="crd-td">BFA: 12,24, -2,35</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Saboba</strong></td><td class="crd-td">GHA: 9,71, 0,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Dori</strong></td><td class="crd-td">BFA: 14,03, -0,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">3,8k</td><td class="crd-td">4k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Zebilla Old</strong></td><td class="crd-td">GHA: 10,92, -0,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Manga</strong></td><td class="crd-td">BFA: 11,68, -1,08</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Nalerigu</strong></td><td class="crd-td">GHA: 10,53, -0,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,7k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Djibo</strong></td><td class="crd-td">BFA: 14,1, -1,63</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Chereponi</strong></td><td class="crd-td">GHA: 10,14, 0,29</td><td class="crd-td">959</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Téra</strong></td><td class="crd-td">NER: 14, 0,75</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Boromo</strong></td><td class="crd-td">BFA: 11,76, -2,94</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Savelugu</strong></td><td class="crd-td">GHA: 9,61, -0,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1896AD)</td></tr>
<tr><td class="crd-td"><strong>Kante Togo</strong></td><td class="crd-td">TGO: 9,96, 1,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Koupéla</strong></td><td class="crd-td">BFA: 12,17, -0,36</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Kareygorou</strong></td><td class="crd-td">NER: 13,66, 1,73</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Léo</strong></td><td class="crd-td">BFA: 11,1, -2,09</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">3,1k</td><td class="crd-td">3,2k (1896AD)</td></tr>
<tr><td class="crd-td"><strong>Bafilo</strong></td><td class="crd-td">TGO: 9,37, 1,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 365 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Mossi Kingdoms, Kong and Wassoulou from 1500AD to 1890AD with peak populations (top 40 of 405 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Sokoto Caliphate and Adamawa Emirates

Table \ref{tab:zone5-sites} catalogues 721 settlements across northern Nigeria, central Niger, northern Benin and southern Adamawa in Cameroon, led by Kano (58,4k in 1885AD), Katsina (46,2k in 1780AD), Zaria (42k in 1826AD), Sokoto (34,2k in 1824AD), Bauchi (30k in 1866AD), Alkalawa (24,8k in 1795AD) and Yola (20k in 1879AD) [@Last1967SokotoCaliphate; @Smaldone1962WarfareThe; @Hamza2004DorayiKano; @Suleiman2007BirninZaria; @Baikie1862NotesJourney].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Katsina</strong></td><td class="crd-td">NGA: 12,98, 7,61</td><td class="crd-td">17,8k</td><td class="crd-td">48,7k</td><td class="crd-td">46,2k</td><td class="crd-td">8,7k</td><td class="crd-td">12,8k</td><td class="crd-td">65k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kano</strong></td><td class="crd-td">NGA: 11,98, 8,53</td><td class="crd-td">48k</td><td class="crd-td">52k</td><td class="crd-td">39,6k</td><td class="crd-td">30k</td><td class="crd-td">-</td><td class="crd-td">58,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bauchi</strong></td><td class="crd-td">NGA: 10,31, 9,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,4k</td><td class="crd-td">18,4k</td><td class="crd-td">50k (1867AD)</td></tr>
<tr><td class="crd-td"><strong>Zaria</strong></td><td class="crd-td">NGA: 11,11, 7,72</td><td class="crd-td">-</td><td class="crd-td">32,2k</td><td class="crd-td">36,2k</td><td class="crd-td">36,7k</td><td class="crd-td">-</td><td class="crd-td">42k (1826AD)</td></tr>
<tr><td class="crd-td"><strong>Sokoto</strong></td><td class="crd-td">NGA: 13,03, 5,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,8k</td><td class="crd-td">26,4k</td><td class="crd-td">34,2k (1824AD)</td></tr>
<tr><td class="crd-td"><strong>Kaiama</strong></td><td class="crd-td">NGA: 9,6, 3,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,9k</td><td class="crd-td">9,1k</td><td class="crd-td">30k (1826AD)</td></tr>
<tr><td class="crd-td"><strong>Alkalawa</strong></td><td class="crd-td">NGA: 13,57, 6,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k (1795AD)</td></tr>
<tr><td class="crd-td"><strong>Surame</strong></td><td class="crd-td">NGA: 13,08, 4,9</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Yauri</strong></td><td class="crd-td">NGA: 10,84, 4,75</td><td class="crd-td">5,8k</td><td class="crd-td">11,1k</td><td class="crd-td">14,1k</td><td class="crd-td">12,5k</td><td class="crd-td">12,9k</td><td class="crd-td">24k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Argungu</strong></td><td class="crd-td">NGA: 12,74, 4,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">12,4k</td><td class="crd-td">20k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Yola</strong></td><td class="crd-td">NGA: 9,21, 12,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">18,7k</td><td class="crd-td">20k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Zamfara</strong></td><td class="crd-td">NGA: 12,72, 6,53</td><td class="crd-td">12,8k</td><td class="crd-td">18,6k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Zinder</strong></td><td class="crd-td">NER: 13,81, 8,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">12,3k</td><td class="crd-td">18,1k</td><td class="crd-td">18,4k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Kebbi</strong></td><td class="crd-td">NGA: 12,44, 4,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Garki</strong></td><td class="crd-td">NGA: 12,43, 9,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Gwandu</strong></td><td class="crd-td">NGA: 12,5, 4,64</td><td class="crd-td">3,4k</td><td class="crd-td">8,7k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Lalle</strong></td><td class="crd-td">NER: 13,95, 6,65</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k (1730AD)</td></tr>
<tr><td class="crd-td"><strong>Agadez</strong></td><td class="crd-td">NER: 16,97, 7,99</td><td class="crd-td">4,5k</td><td class="crd-td">10,3k</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Daura</strong></td><td class="crd-td">NGA: 13,04, 8,32</td><td class="crd-td">14k</td><td class="crd-td">11,2k</td><td class="crd-td">11,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kontagora</strong></td><td class="crd-td">NGA: 10,4, 5,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14k</td><td class="crd-td">14k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Deba</strong></td><td class="crd-td">NGA: 10,21, 11,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Jega</strong></td><td class="crd-td">NGA: 12,23, 4,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,7k</td><td class="crd-td">13,4k</td><td class="crd-td">13,4k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Wurno</strong></td><td class="crd-td">NGA: 13,28, 5,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">11,2k</td><td class="crd-td">12,7k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Pindiga Old</strong></td><td class="crd-td">NGA: 9,98, 10,95</td><td class="crd-td">7,8k</td><td class="crd-td">11,3k</td><td class="crd-td">12k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Hadejia</strong></td><td class="crd-td">NGA: 12,46, 10,04</td><td class="crd-td">6,2k</td><td class="crd-td">8k</td><td class="crd-td">9,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,2k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Bussa</strong></td><td class="crd-td">NGA: 10,23, 4,55</td><td class="crd-td">2,2k</td><td class="crd-td">8,6k</td><td class="crd-td">11,2k</td><td class="crd-td">7,9k</td><td class="crd-td">5,2k</td><td class="crd-td">12k (1806AD)</td></tr>
<tr><td class="crd-td"><strong>Tessaoua</strong></td><td class="crd-td">NER: 13,75, 7,99</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">8,9k</td><td class="crd-td">11,2k</td><td class="crd-td">8,4k</td><td class="crd-td">12k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Daura</strong></td><td class="crd-td">NGA: 11,55, 11,41</td><td class="crd-td">8,9k</td><td class="crd-td">10,9k</td><td class="crd-td">10,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Suleja</strong></td><td class="crd-td">NGA: 9,18, 7,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">-</td><td class="crd-td">11,5k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Maradi</strong></td><td class="crd-td">NER: 13,51, 7,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Rano</strong></td><td class="crd-td">NGA: 11,56, 8,58</td><td class="crd-td">11k</td><td class="crd-td">6,8k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gombe</strong></td><td class="crd-td">NGA: 10,29, 11,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">10,6k</td><td class="crd-td">10,6k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Gumel</strong></td><td class="crd-td">NGA: 12,63, 9,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Azare</strong></td><td class="crd-td">NGA: 11,67, 10,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Nikki</strong></td><td class="crd-td">BEN: 9,94, 3,21</td><td class="crd-td">3,2k</td><td class="crd-td">6,5k</td><td class="crd-td">7,8k</td><td class="crd-td">8,1k</td><td class="crd-td">6,6k</td><td class="crd-td">8,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Karaye</strong></td><td class="crd-td">NGA: 11,78, 8,02</td><td class="crd-td">8,5k</td><td class="crd-td">7,2k</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ningi</strong></td><td class="crd-td">NGA: 11,08, 9,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,5k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Nguru</strong></td><td class="crd-td">NGA: 12,88, 10,45</td><td class="crd-td">3k</td><td class="crd-td">6,1k</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Katagum</strong></td><td class="crd-td">NGA: 12,29, 10,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8k (1824AD)</td></tr>
<tr><td class="crd-td"><strong>Muri</strong></td><td class="crd-td">NGA: 9,19, 10,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">6,6k</td><td class="crd-td">8k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 681 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Sokoto Caliphate and Adamawa Emirates from 1500AD to 1890AD with peak populations (top 40 of 721 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Kanem-Bornu Empire and Bagirmi Sultanate

Table \ref{tab:zone6-sites} compiles 322 settlements across north-eastern Nigeria, western Chad, northern Cameroon and eastern Niger, led by Birnin Gazargamu (62,4k in 1700AD), Kukawa (60k in 1870AD), Dikwa (34,2k in 1894AD), Massenya (24,6k in 1852AD), Maroua (16,8k in 1895AD) and Logone-Birni (15k in 1824AD) [@Aouatef2026PoliticalStructures; @Magnavita2025NewLuminescence; @Lyon1821NarrativeTravels].

<figure class="crd-table-figure" id="tab:zone6-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Birnin Gazargamu</strong></td><td class="crd-td">NGA: 13,01, 12,32</td><td class="crd-td">34,2k</td><td class="crd-td">62,4k</td><td class="crd-td">48k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">62,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kukawa</strong></td><td class="crd-td">NGA: 12,93, 13,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56k</td><td class="crd-td">35,1k</td><td class="crd-td">60k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Maroua</strong></td><td class="crd-td">CMR: 10,59, 14,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,5k</td><td class="crd-td">60k</td><td class="crd-td">60k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Dikwa</strong></td><td class="crd-td">NGA: 12,04, 13,91</td><td class="crd-td">2,4k</td><td class="crd-td">6,4k</td><td class="crd-td">12,8k</td><td class="crd-td">21,7k</td><td class="crd-td">32,7k</td><td class="crd-td">34,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Massenya</strong></td><td class="crd-td">TCD: 11,4, 16,17</td><td class="crd-td">-</td><td class="crd-td">15,7k</td><td class="crd-td">20,4k</td><td class="crd-td">21,1k</td><td class="crd-td">8,1k</td><td class="crd-td">24,6k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Logone-Birni</strong></td><td class="crd-td">CMR: 11,72, 15,09</td><td class="crd-td">2,4k</td><td class="crd-td">9,6k</td><td class="crd-td">13,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (1824AD)</td></tr>
<tr><td class="crd-td"><strong>Ngaoundéré</strong></td><td class="crd-td">CMR: 7,36, 13,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">14,1k</td><td class="crd-td">15k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Mora</strong></td><td class="crd-td">CMR: 11,05, 14,14</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">8,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1823AD)</td></tr>
<tr><td class="crd-td"><strong>Rey-Bouba</strong></td><td class="crd-td">CMR: 8,67, 14,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">8,8k</td><td class="crd-td">8,8k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Misau</strong></td><td class="crd-td">NGA: 11,31, 10,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">8,3k</td><td class="crd-td">8,3k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Goulfeil</strong></td><td class="crd-td">CMR: 12,39, 14,9</td><td class="crd-td">2,6k</td><td class="crd-td">7k</td><td class="crd-td">7,5k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Garoua</strong></td><td class="crd-td">CMR: 9,34, 13,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">7,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ngala</strong></td><td class="crd-td">NGA: 12,35, 14,17</td><td class="crd-td">2k</td><td class="crd-td">6,7k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1823AD)</td></tr>
<tr><td class="crd-td"><strong>Mubi</strong></td><td class="crd-td">NGA: 10,27, 13,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Yao</strong></td><td class="crd-td">TCD: 12,85, 17,56</td><td class="crd-td">5,2k</td><td class="crd-td">5,5k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Mindif</strong></td><td class="crd-td">CMR: 10,4, 14,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Makari</strong></td><td class="crd-td">CMR: 12,58, 14,45</td><td class="crd-td">2,6k</td><td class="crd-td">5,4k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Bogo</strong></td><td class="crd-td">CMR: 10,73, 14,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Mao</strong></td><td class="crd-td">TCD: 14,12, 15,31</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Oudjilla</strong></td><td class="crd-td">CMR: 11,02, 14,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Monguno</strong></td><td class="crd-td">NGA: 12,68, 13,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Doba Old</strong></td><td class="crd-td">TCD: 8,65, 16,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Bibemi</strong></td><td class="crd-td">CMR: 9,31, 13,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Afadé</strong></td><td class="crd-td">CMR: 12,23, 14,63</td><td class="crd-td">2,7k</td><td class="crd-td">3,8k</td><td class="crd-td">4k</td><td class="crd-td">3,9k</td><td class="crd-td">3k</td><td class="crd-td">4,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tignere</strong></td><td class="crd-td">CMR: 7,36, 12,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Yau</strong></td><td class="crd-td">NGA: 13,56, 13,25</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Guider</strong></td><td class="crd-td">CMR: 9,92, 13,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Maïné-Soroa</strong></td><td class="crd-td">NER: 13,22, 12,03</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Kontcha</strong></td><td class="crd-td">CMR: 7,97, 12,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Bousso</strong></td><td class="crd-td">TCD: 10,49, 16,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Mafa-Kilda</strong></td><td class="crd-td">CMR: 10,81, 13,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Gambaru</strong></td><td class="crd-td">NGA: 13,06, 12,43</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kousséri</strong></td><td class="crd-td">CMR: 12,08, 15,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Gombi</strong></td><td class="crd-td">NGA: 10,16, 12,75</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Manaouatchi-Grea</strong></td><td class="crd-td">CMR: 11,21, 14,03</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1798AD)</td></tr>
<tr><td class="crd-td"><strong>Mdaga</strong></td><td class="crd-td">TCD: 12,22, 15,06</td><td class="crd-td">2,7k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Bol</strong></td><td class="crd-td">TCD: 13,48, 14,7</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Léré</strong></td><td class="crd-td">TCD: 9,66, 14,22</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Houlouf</strong></td><td class="crd-td">CMR: 12,02, 14,92</td><td class="crd-td">1,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1864AD)</td></tr>
<tr><td class="crd-td"><strong>Sou Blame Radjil</strong></td><td class="crd-td">CMR: 12,2, 14,68</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1798AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 282 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Kanem-Bornu Empire and Bagirmi Sultanate from 1500AD to 1890AD with peak populations (top 40 of 322 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Sultanate of Wadai, Tibesti and Dar al-Kuti

Table \ref{tab:zone7-sites} lists 81 settlements across eastern and northern Chad, northern Central African Republic and westernmost Sudan, led by Abéché (28k in 1873AD), Wara (22,4k in 1840AD), Ndélé (16,8k in 1898AD) and Al-Junaynah (5,47k in 1885AD) [@Ofahey1980StateDarFur].

<figure class="crd-table-figure" id="tab:zone7-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Abéché</strong></td><td class="crd-td">TCD: 13,83, 20,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28k</td><td class="crd-td">28k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Wara</strong></td><td class="crd-td">TCD: 14,19, 20,7</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">18k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,4k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Ndélé</strong></td><td class="crd-td">CAF: 8,41, 20,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Junaynah</strong></td><td class="crd-td">SDN: 13,44, 22,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ain Farah Settlement</strong></td><td class="crd-td">SDN: 14,35, 24,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Mongo</strong></td><td class="crd-td">TCD: 12,18, 18,69</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Adré</strong></td><td class="crd-td">TCD: 13,46, 22,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Biltine</strong></td><td class="crd-td">TCD: 14,52, 20,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Ati</strong></td><td class="crd-td">TCD: 13,22, 18,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1872AD)</td></tr>
<tr><td class="crd-td"><strong>Farchana</strong></td><td class="crd-td">TCD: 13,59, 21,83</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Goz Beïda</strong></td><td class="crd-td">TCD: 12,23, 21,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Faya-Largeau</strong></td><td class="crd-td">TCD: 17,93, 19,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Am Timan</strong></td><td class="crd-td">TCD: 11,03, 20,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Magrane</strong></td><td class="crd-td">TCD: 12,83, 20,25</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tine Djangarba</strong></td><td class="crd-td">TCD: 15,03, 22,79</td><td class="crd-td">888</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dagésa</strong></td><td class="crd-td">TCD: 12,03, 22,42</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bardaï</strong></td><td class="crd-td">TCD: 21,35, 17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Kerfi</strong></td><td class="crd-td">TCD: 11,89, 21,3</td><td class="crd-td">841</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kendégué</strong></td><td class="crd-td">TCD: 10,02, 18,62</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fada</strong></td><td class="crd-td">TCD: 17,19, 21,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Ouassi</strong></td><td class="crd-td">CAF: 7,13, 18,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1657AD)</td></tr>
<tr><td class="crd-td"><strong>Vafio</strong></td><td class="crd-td">CAF: 7,41, 18,41</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1696AD)</td></tr>
<tr><td class="crd-td"><strong>Daguéla</strong></td><td class="crd-td">TCD: 10,65, 18,45</td><td class="crd-td">-</td><td class="crd-td">924</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Guéréda</strong></td><td class="crd-td">TCD: 14,52, 22,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">882</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Asnet</strong></td><td class="crd-td">TCD: 13,22, 19,2</td><td class="crd-td">678</td><td class="crd-td">878</td><td class="crd-td">989</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ab Malay</strong></td><td class="crd-td">TCD: 13,26, 18,38</td><td class="crd-td">671</td><td class="crd-td">897</td><td class="crd-td">975</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Haraz-Djombo</strong></td><td class="crd-td">TCD: 13,95, 19,43</td><td class="crd-td">655</td><td class="crd-td">834</td><td class="crd-td">939</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Am Djélat</strong></td><td class="crd-td">TCD: 10,93, 20,24</td><td class="crd-td">-</td><td class="crd-td">810</td><td class="crd-td">895</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Koundjourou</strong></td><td class="crd-td">TCD: 13,09, 18,6</td><td class="crd-td">622</td><td class="crd-td">837</td><td class="crd-td">931</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tilégey</strong></td><td class="crd-td">TCD: 12,38, 19,98</td><td class="crd-td">591</td><td class="crd-td">785</td><td class="crd-td">875</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Béréguit</strong></td><td class="crd-td">TCD: 11,59, 19,16</td><td class="crd-td">-</td><td class="crd-td">784</td><td class="crd-td">887</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Birao</strong></td><td class="crd-td">CAF: 10,28, 22,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">965 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Alaroro</strong></td><td class="crd-td">TCD: 9,7, 19,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">816</td><td class="crd-td">-</td><td class="crd-td">885 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Iriba</strong></td><td class="crd-td">TCD: 15,13, 22,25</td><td class="crd-td">-</td><td class="crd-td">477</td><td class="crd-td">660</td><td class="crd-td">843</td><td class="crd-td">-</td><td class="crd-td">873 (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Bahay</strong></td><td class="crd-td">TCD: 15,54, 22,92</td><td class="crd-td">425</td><td class="crd-td">551</td><td class="crd-td">644</td><td class="crd-td">777</td><td class="crd-td">-</td><td class="crd-td">843 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bochianga</strong></td><td class="crd-td">TCD: 16,22, 18,58</td><td class="crd-td">810</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">810 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fokfogé</strong></td><td class="crd-td">TCD: 11,68, 22,46</td><td class="crd-td">588</td><td class="crd-td">775</td><td class="crd-td">801</td><td class="crd-td">725</td><td class="crd-td">-</td><td class="crd-td">807 (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kyabé</strong></td><td class="crd-td">TCD: 9,45, 18,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">644</td><td class="crd-td">755</td><td class="crd-td">784 (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kebir Rosa</strong></td><td class="crd-td">TCD: 16,12, 18,7</td><td class="crd-td">737</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">737 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Koro Toro 9km sw</strong></td><td class="crd-td">TCD: 16,02, 18,45</td><td class="crd-td">722</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">722 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 41 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Sultanate of Wadai, Tibesti and Dar al-Kuti from 1500AD to 1890AD with peak populations (top 40 of 81 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Darfur Sultanate and Kordofan

Table \ref{tab:zone8-sites} records 74 settlements across Darfur and western Kordofan, topped by Al-Fāshir (14,8k in 1874AD), Kobbei (8,42k in 1803AD), An-Nuhūd (7,9k in 1885AD), Nyālā (5,9k in 1898AD) and Shoba (5,28k in 1780AD) [@Ofahey1980StateDarFur; @Totten2006GenocideDarfur].

<figure class="crd-table-figure" id="tab:zone8-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Fāshir</strong></td><td class="crd-td">SDN: 13,63, 25,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">10k</td><td class="crd-td">14,8k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>An-Nuhūd</strong></td><td class="crd-td">SDN: 12,7, 28,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">10k</td><td class="crd-td">10k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Uri</strong></td><td class="crd-td">SDN: 14,59, 24,59</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Kobbei</strong></td><td class="crd-td">SDN: 13,92, 25,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1803AD)</td></tr>
<tr><td class="crd-td"><strong>Nyālā</strong></td><td class="crd-td">SDN: 12,06, 24,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">5,6k</td><td class="crd-td">5,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Shoba</strong></td><td class="crd-td">SDN: 13,85, 24,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Uri Settlement</strong></td><td class="crd-td">SDN: 14,23, 24,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>al-Dalanj</strong></td><td class="crd-td">SDN: 12,04, 29,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Tebeldina</strong></td><td class="crd-td">SDN: 12,66, 25,71</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Turra</strong></td><td class="crd-td">SDN: 13,28, 24,33</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>Turra Jebel Marra</strong></td><td class="crd-td">SDN: 13,3, 24,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Kotum</strong></td><td class="crd-td">SDN: 14,21, 24,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Ril</strong></td><td class="crd-td">SDN: 12,72, 25,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1795AD)</td></tr>
<tr><td class="crd-td"><strong>Dulayq</strong></td><td class="crd-td">SDN: 12,47, 23,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mawarny</strong></td><td class="crd-td">SDN: 12,96, 22,87</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Umm Buru</strong></td><td class="crd-td">SDN: 15,02, 23,7</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kalokiting</strong></td><td class="crd-td">SDN: 12,73, 24,22</td><td class="crd-td">2,5k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Madinat Kabkabiyya</strong></td><td class="crd-td">SDN: 13,65, 24,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Amla Samki</strong></td><td class="crd-td">SDN: 12,72, 24,9</td><td class="crd-td">934</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mellit</strong></td><td class="crd-td">SDN: 14,14, 25,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Ain Farah</strong></td><td class="crd-td">SDN: 14,28, 24,62</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ring Structures</strong></td><td class="crd-td">SDN: 14,56, 25,75</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dar al-Salam Janub</strong></td><td class="crd-td">SDN: 13,06, 25,54</td><td class="crd-td">690</td><td class="crd-td">930</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Zālingay</strong></td><td class="crd-td">SDN: 12,91, 23,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Kulbus</strong></td><td class="crd-td">SDN: 14,36, 22,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>al-Kuraynik</strong></td><td class="crd-td">SDN: 13,37, 22,89</td><td class="crd-td">576</td><td class="crd-td">771</td><td class="crd-td">883</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>'Ārdamatā</strong></td><td class="crd-td">SDN: 13,49, 22,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Bongbong</strong></td><td class="crd-td">SDN: 14,54, 25,79</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bora</strong></td><td class="crd-td">SDN: 13,72, 24,14</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sweini</strong></td><td class="crd-td">SDN: 14,48, 25,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1795AD)</td></tr>
<tr><td class="crd-td"><strong>Bridik</strong></td><td class="crd-td">SDN: 14,72, 24,73</td><td class="crd-td">-</td><td class="crd-td">583</td><td class="crd-td">669</td><td class="crd-td">898</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Shingli Tubaya</strong></td><td class="crd-td">SDN: 13,02, 25,21</td><td class="crd-td">404</td><td class="crd-td">562</td><td class="crd-td">657</td><td class="crd-td">914</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Structures</strong></td><td class="crd-td">SDN: 13,83, 24,22</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sigring</strong></td><td class="crd-td">SDN: 13,75, 24,1</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sh'īarīah</strong></td><td class="crd-td">SDN: 12,44, 25,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">991</td><td class="crd-td">-</td><td class="crd-td">1,1k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>al-Tawila</strong></td><td class="crd-td">SDN: 13,52, 24,86</td><td class="crd-td">-</td><td class="crd-td">545</td><td class="crd-td">770</td><td class="crd-td">995</td><td class="crd-td">-</td><td class="crd-td">1k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Dense Ring Clusters</strong></td><td class="crd-td">SDN: 13,76, 24,24</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kiling</strong></td><td class="crd-td">SDN: 13,13, 24,29</td><td class="crd-td">-</td><td class="crd-td">565</td><td class="crd-td">649</td><td class="crd-td">835</td><td class="crd-td">-</td><td class="crd-td">995 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nertiti</strong></td><td class="crd-td">SDN: 12,96, 24,05</td><td class="crd-td">-</td><td class="crd-td">531</td><td class="crd-td">723</td><td class="crd-td">914</td><td class="crd-td">-</td><td class="crd-td">948 (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Tuninga</strong></td><td class="crd-td">SDN: 12,1, 23,23</td><td class="crd-td">654</td><td class="crd-td">862</td><td class="crd-td">852</td><td class="crd-td">783</td><td class="crd-td">-</td><td class="crd-td">862 (1700AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 34 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Darfur Sultanate and Kordofan from 1500AD to 1890AD with peak populations (top 40 of 74 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Funj, Turco-Egyptian and Mahdist Nile

Table \ref{tab:zone9-sites} documents 983 settlements across the Nile valley, Red Sea coast, Eritrea and the northern Ethiopian highlands, led by Umm Durmān (148k in 1895AD), Gonder (62k in 1700AD), Al-Kharṭūm (60k in 1847AD), Sannār (28,6k in 1701AD), Al-Ubayyiḍ (28,5k in 1882AD), Adis Abeba (20k in 1890AD) and Kassalā (15,2k in 1880AD) [@Crawford1951FungSennar; @Spaulding1985HeroicAge].

<figure class="crd-table-figure" id="tab:zone9-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">SDN: 15,64, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">106,5k</td><td class="crd-td">148k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Gonder</strong></td><td class="crd-td">ETH: 12,57, 37,46</td><td class="crd-td">-</td><td class="crd-td">62k</td><td class="crd-td">39,5k</td><td class="crd-td">8,3k</td><td class="crd-td">6,5k</td><td class="crd-td">62k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,3k</td><td class="crd-td">33k</td><td class="crd-td">60k (1847AD)</td></tr>
<tr><td class="crd-td"><strong>Sannār</strong></td><td class="crd-td">SDN: 13,55, 33,6</td><td class="crd-td">6,9k</td><td class="crd-td">28,5k</td><td class="crd-td">21k</td><td class="crd-td">10k</td><td class="crd-td">-</td><td class="crd-td">28,6k (1701AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">SDN: 13,18, 30,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k</td><td class="crd-td">5k</td><td class="crd-td">28,5k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Adis Abeba</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k</td><td class="crd-td">20k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Entoto</strong></td><td class="crd-td">ETH: 9,08, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Magdala</strong></td><td class="crd-td">ETH: 11,38, 39,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">16,6k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Kassalā</strong></td><td class="crd-td">SDN: 15,45, 36,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">12k</td><td class="crd-td">15,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Aksum</strong></td><td class="crd-td">ETH: 14,12, 38,73</td><td class="crd-td">15k</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Debretabor</strong></td><td class="crd-td">ETH: 11,86, 38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">-</td><td class="crd-td">14,6k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Medani</strong></td><td class="crd-td">SDN: 14,39, 33,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">12,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Sawākin</strong></td><td class="crd-td">SDN: 19,09, 37,33</td><td class="crd-td">5,9k</td><td class="crd-td">6,2k</td><td class="crd-td">7,6k</td><td class="crd-td">5,6k</td><td class="crd-td">10,8k</td><td class="crd-td">12k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Barbar</strong></td><td class="crd-td">SDN: 18,03, 33,99</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">11,5k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Barara</strong></td><td class="crd-td">ETH: 8,98, 38,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaḍārif</strong></td><td class="crd-td">SDN: 14,04, 35,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Arbaji</strong></td><td class="crd-td">SDN: 14,7, 33,37</td><td class="crd-td">2,1k</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Madanī</strong></td><td class="crd-td">SDN: 14,37, 33,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dunqulā</strong></td><td class="crd-td">SDN: 19,15, 30,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">10k</td><td class="crd-td">10k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Debere Markos</strong></td><td class="crd-td">ETH: 10,33, 37,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Gorgora</strong></td><td class="crd-td">ETH: 12,24, 37,3</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,4k (1625AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Sharifay</strong></td><td class="crd-td">SDN: 15,35, 36,46</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,5k</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">9,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Old Dongola</strong></td><td class="crd-td">SDN: 18,22, 30,74</td><td class="crd-td">8,8k</td><td class="crd-td">2,8k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Adwa</strong></td><td class="crd-td">ETH: 14,18, 38,89</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,7k</td><td class="crd-td">5k</td><td class="crd-td">4,6k</td><td class="crd-td">8k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>Lalibela</strong></td><td class="crd-td">ETH: 12,03, 39,05</td><td class="crd-td">7,9k</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Danqaz</strong></td><td class="crd-td">ETH: 12,4, 37,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1628AD)</td></tr>
<tr><td class="crd-td"><strong>Bara</strong></td><td class="crd-td">SDN: 13,69, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Metemma</strong></td><td class="crd-td">SDN: 16,71, 33,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gallabat</strong></td><td class="crd-td">SDN: 12,97, 36,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1889AD)</td></tr>
<tr><td class="crd-td"><strong>Saka</strong></td><td class="crd-td">ETH: 8,12, 36,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1843AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭawkar</strong></td><td class="crd-td">SDN: 18,42, 37,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Shandī</strong></td><td class="crd-td">SDN: 16,69, 33,44</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">4,4k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Sekota</strong></td><td class="crd-td">ETH: 12,63, 39,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Emfraz</strong></td><td class="crd-td">ETH: 12,27, 37,63</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Azezo</strong></td><td class="crd-td">ETH: 12,5, 37,43</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Barsi</strong></td><td class="crd-td">SDN: 14,44, 33,53</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">4,5k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>El-Mesellemiya</strong></td><td class="crd-td">SDN: 14,57, 33,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Āsmera</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1893AD)</td></tr>
<tr><td class="crd-td"><strong>Wad al-Hilayu</strong></td><td class="crd-td">SDN: 14,24, 35,87</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rufa</strong></td><td class="crd-td">SDN: 14,77, 33,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 943 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Funj, Turco-Egyptian and Mahdist Nile from 1500AD to 1890AD with peak populations (top 40 of 983 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Bahr el Ghazal, Azande and Equatoria

Table \ref{tab:zone10-sites} compiles 293 settlements across South Sudan, southern Ethiopia, eastern Central African Republic and southern Kordofan, led by Jima (12,4k in 1895AD), Deim Zubeir (12,2k in 1879AD), Yambio (8,42k in 1895AD), Bonga (7,88k in 1843AD) and Bangassou (7,84k in 1890AD) [@Lovejoy2012Transformations].

<figure class="crd-table-figure" id="tab:zone10-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jima</strong></td><td class="crd-td">ETH: 7,68, 36,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">12,2k</td><td class="crd-td">12,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Deim Zubeir</strong></td><td class="crd-td">SSD: 7,72, 26,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">12,2k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">8,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Bonga</strong></td><td class="crd-td">ETH: 7,28, 36,23</td><td class="crd-td">3,9k</td><td class="crd-td">6,3k</td><td class="crd-td">7,2k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,9k (1843AD)</td></tr>
<tr><td class="crd-td"><strong>Bangassou</strong></td><td class="crd-td">CAF: 4,75, 22,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Kap</strong></td><td class="crd-td">SSD: 6,64, 30,44</td><td class="crd-td">2,4k</td><td class="crd-td">3,3k</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mudula</strong></td><td class="crd-td">ETH: 7,27, 37,46</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,2k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fonko</strong></td><td class="crd-td">ETH: 7,64, 37,96</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">4,7k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ad-Dillinj</strong></td><td class="crd-td">SDN: 11,95, 29,46</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">4,4k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rafai</strong></td><td class="crd-td">CAF: 4,95, 23,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,6k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Kodok</strong></td><td class="crd-td">SSD: 9,89, 32,11</td><td class="crd-td">2,8k</td><td class="crd-td">4,3k</td><td class="crd-td">4,4k</td><td class="crd-td">5,4k</td><td class="crd-td">4,3k</td><td class="crd-td">5,4k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Dalbo</strong></td><td class="crd-td">ETH: 6,88, 37,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td><td class="crd-td">5,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Lera</strong></td><td class="crd-td">ETH: 7,75, 37,89</td><td class="crd-td">2,7k</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gondokoro</strong></td><td class="crd-td">SSD: 4,9, 31,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">4,9k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Anderacha</strong></td><td class="crd-td">ETH: 7,18, 36,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">4,2k</td><td class="crd-td">4,8k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Wau</strong></td><td class="crd-td">SSD: 7,7, 27,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Zémio</strong></td><td class="crd-td">CAF: 5,03, 25,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Aluakaluak</strong></td><td class="crd-td">SSD: 6,45, 30,1</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>al-La'ayt</strong></td><td class="crd-td">SDN: 11,96, 27,05</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Jinkuata</strong></td><td class="crd-td">SSD: 9,98, 33,62</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nekemte</strong></td><td class="crd-td">ETH: 9,09, 36,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Gok Machar</strong></td><td class="crd-td">SSD: 9,23, 26,87</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Aduel</strong></td><td class="crd-td">SSD: 6,57, 29,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Agok</strong></td><td class="crd-td">SSD: 9,35, 28,59</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kāduqlī</strong></td><td class="crd-td">SDN: 11, 29,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">3,4k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Asendabo</strong></td><td class="crd-td">ETH: 7,75, 37,22</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Seka</strong></td><td class="crd-td">ETH: 7,6, 36,72</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Lokurubang</strong></td><td class="crd-td">SSD: 4,35, 31,07</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kindi</strong></td><td class="crd-td">SSD: 3,69, 30,77</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kaka</strong></td><td class="crd-td">SSD: 10,63, 32,18</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Zarafah</strong></td><td class="crd-td">SDN: 11,68, 25,71</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Hashaba</strong></td><td class="crd-td">SDN: 11,95, 24,96</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Alok</strong></td><td class="crd-td">SSD: 8,37, 27,62</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Betume Site</strong></td><td class="crd-td">CAF: 6,17, 15,23</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1758AD)</td></tr>
<tr><td class="crd-td"><strong>Gununo</strong></td><td class="crd-td">ETH: 6,92, 37,65</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Meti</strong></td><td class="crd-td">ETH: 7,26, 35,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gore</strong></td><td class="crd-td">ETH: 8,15, 35,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Toala</strong></td><td class="crd-td">CAF: 6,35, 16</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kumbabe</strong></td><td class="crd-td">ETH: 8,36, 36,12</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Alem Gebeya</strong></td><td class="crd-td">ETH: 7,56, 38,18</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 253 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in Bahr el Ghazal, Azande and Equatoria from 1500AD to 1890AD with peak populations (top 40 of 293 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three caveats govern this settlement ledger. First, documentary coverage is thickest in Senegambia, Sokoto Hausaland and the Nile corridor, whereas 65 of the 4.038 entries rest on single-date historical records and display hyphens outside their attested date [@Ofahey1980StateDarFur; @Dijk2000DroughtAnd]. Second, linear interpolation smooths sudden wartime evacuations or refugee peaks between recorded observations, as seen at Nioro du Sahel in 1892AD and Omdurman in 1895AD [@Houdoy1881SoudanFrancais]. Third, combined urban totals in Tables 1 to 10 exclude dispersed agrarian villages and pastoral groups, which are reconstructed in the companion regional study [@Meek1934BlackByzantium].

# Conclusion

Together, the 4.038 individually assessed settlements document four centuries of Sahelian and Sudanic urban transformation from Songhai Gao and Funj Sennar through Hausa walled manufacturing capitals and nineteenth-century Islamic reform seats to Mahdist Omdurman, providing the urban anchor for NICETHI across 23 modern jurisdictions.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} aggregates the individually assessed settlement counts and combined interpolated urban populations across all ten sub-regions at the six chapter benchmarks from 1500AD to 1890AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1810AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trarza, Brakna and Adrar Emirates (430)</strong></td><td class="crd-td">160,9k</td><td class="crd-td">197,2k</td><td class="crd-td">241,2k</td><td class="crd-td">264,4k</td><td class="crd-td">259k</td><td class="crd-td">162,9k</td></tr>
<tr><td class="crd-td"><strong>Futa Toro, Segou Bamana and Toucouleur (575)</strong></td><td class="crd-td">256,2k</td><td class="crd-td">316,8k</td><td class="crd-td">420,4k</td><td class="crd-td">482,2k</td><td class="crd-td">501,4k</td><td class="crd-td">299,5k</td></tr>
<tr><td class="crd-td"><strong>Pashalik of Timbuktu, Massina and Niger Bend (154)</strong></td><td class="crd-td">151,6k</td><td class="crd-td">101,7k</td><td class="crd-td">101,3k</td><td class="crd-td">95,9k</td><td class="crd-td">51,3k</td><td class="crd-td">30,4k</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms, Kong and Wassoulou (405)</strong></td><td class="crd-td">180,8k</td><td class="crd-td">254,1k</td><td class="crd-td">308,4k</td><td class="crd-td">348,5k</td><td class="crd-td">294,4k</td><td class="crd-td">159,8k</td></tr>
<tr><td class="crd-td"><strong>Sokoto Caliphate and Adamawa Emirates (721)</strong></td><td class="crd-td">470,7k</td><td class="crd-td">717,9k</td><td class="crd-td">799,2k</td><td class="crd-td">829,2k</td><td class="crd-td">440,6k</td><td class="crd-td">257,4k</td></tr>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Bagirmi Sultanate (322)</strong></td><td class="crd-td">221,7k</td><td class="crd-td">265,2k</td><td class="crd-td">290,8k</td><td class="crd-td">253,2k</td><td class="crd-td">251,7k</td><td class="crd-td">192,6k</td></tr>
<tr><td class="crd-td"><strong>Sultanate of Wadai, Tibesti and Dar al-Kuti (81)</strong></td><td class="crd-td">19,9k</td><td class="crd-td">36,6k</td><td class="crd-td">51,5k</td><td class="crd-td">63,3k</td><td class="crd-td">50,4k</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Darfur Sultanate and Kordofan (74)</strong></td><td class="crd-td">30,5k</td><td class="crd-td">25,9k</td><td class="crd-td">51,9k</td><td class="crd-td">60,7k</td><td class="crd-td">74,6k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Funj, Turco-Egyptian and Mahdist Nile (983)</strong></td><td class="crd-td">681,6k</td><td class="crd-td">430,2k</td><td class="crd-td">483,4k</td><td class="crd-td">532,2k</td><td class="crd-td">582,7k</td><td class="crd-td">234,8k</td></tr>
<tr><td class="crd-td"><strong>Bahr el Ghazal, Azande and Equatoria (293)</strong></td><td class="crd-td">128,5k</td><td class="crd-td">147,5k</td><td class="crd-td">171,7k</td><td class="crd-td">205,3k</td><td class="crd-td">251,1k</td><td class="crd-td">77,4k</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions (4.038)</strong></td><td class="crd-td">2,3M</td><td class="crd-td">2,49M</td><td class="crd-td">2,92M</td><td class="crd-td">3,13M</td><td class="crd-td">2,76M</td><td class="crd-td">1,47M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlement counts and combined interpolated urban populations across ten historical sub-regions from 1500AD to 1890AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Settlement coordinates follow decimal degrees (latitude, longitude) formatted with European decimal commas. Co-located historical series for Freetown (30.033 at peak vs 1.190 early entry) remain separate in the 4.038-entry ledger and are deduplicated to 397 distinct urban peaks in rank-size diagnostics.

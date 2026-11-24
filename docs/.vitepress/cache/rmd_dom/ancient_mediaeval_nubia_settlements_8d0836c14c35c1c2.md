---
title: "Ancient and Mediaeval Sudan and Nubia"
subtitle: "Settlement Gazetteer: 132 Assessed Centres and Towns (2500BC-1821AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: ancient_mediaeval_nubia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 132 individually assessed settlements across Sudan, South Sudan and adjoining Eritrean and Ethiopian borderlands from 2500BC to 1821AD."
hero_label: "fig:hero-settlements-nubia"

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

This gazetteer compiles spatial coordinates and multi-period population series for 132 individually assessed settlements across ancient and mediaeval Sudan and Nubia between 2500BC and 1821AD (115 in Sudan, 13 in South Sudan, 2 in Ethiopia and 2 in Eritrea). Screened from 140 candidate towns, archaeological tells, royal cemeteries, river forts and caravan depots (8 duplicate aliases merged), the retained sites span eight ecological and political sub-regions from Lower Nubia and the Dongola Reach through Butana, the Beja Red Sea coast, the Funj Gezira, Darfur, Kordofan and the Shilluk-Upper Nile wetlands. Active assessed centres expand from 7 at 2000BC to 24 at year 0, 16 at 500AD, 23 at 1000AD, 21 at 1500AD and 32 at 1820AD, tracing urban leadership from Kerma (14,7k) and Napata (16,4k) to Meroe (29,4k), Old Dongola (23,8k), Soba (32,4k) and Sennar (28,6k).



# Background

Reconstructing urban settlement across ancient and mediaeval Sudan requires integrating rescue archaeology from the Nile cataracts with mediaeval Arabic chronicles, early modern travel narratives and regional historical syntheses [@Adams1977Nubia; @Edwards2004NubianPast; @Pleiades2024Africa]. Unlike densely surveyed river plains in Egypt or Mesopotamia, Sudanese settlements divide sharply between fortified mudbrick river towns along the Nile cataracts, rain-fed *hafir* complexes across the Butana steppe, Red Sea coral ports and dispersed upland or caravan towns in Darfur and Kordofan [@Bobrowski2023Ltd1Kerma; @Costanzo2021CreatingThe; @Spaulding1985HeroicAge]. Uniting these trajectories in one coordinate-anchored ledger tracks the four-millennium southward migration of Sudan's urban core.

# Methodology

## Screening, Sub-Regional Assignment and Benchmarks

Candidate settlements were compiled from excavation reports, surface surveys, Pleiades coordinates [@Pleiades2024Africa] and historical monographs [@Adams1977Nubia; @Edwards2004NubianPast; @Spaulding1985HeroicAge]. Eight duplicate spelling aliases were merged into canonical records, leaving 132 unique settlements (364 dated observations), all recorded on a city-proper basis. Each settlement is assigned to one of the eight vector sub-regions defined for the chapter domain (with the four sites sitting immediately outside the five-arcminute interior mask grouped into their nearest contiguous hydrological corridor). Tables 1 to 8 present linearly interpolated resident populations at six benchmarks (2000BC, year 0, 500AD, 1000AD, 1500AD and 1820AD) alongside each site's peak population and peak date, marking pre-foundation or post-abandonment intervals with a hyphen (-).

# Testing and Validation

Across the 131 spatially deduplicated centres (merging overlapping Wad Medani coordinates), peak populations follow a sub-unitary Pareto rank-size slope of $q = 0,74$ ($R^2 = 0,98$) over the leading 66 settlements and $q = 1,03$ ($R^2 = 0,79$) across the full ledger (Figure \ref{fig:settlements-rank}). All 132 sites match modern national boundaries [@Runfola2020GeoBoundaries] and align chronologically with their documented foundation and abandonment horizons [@Budka2023DayThe; @Nasreldein2026ContinuityChange].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-ancient-mediaeval-nubia-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 131 deduplicated Sudanese and Nubian settlements (Panel A) and 1820AD sub-regional densities (Panel B).</figcaption>
</figure>

# Results

## Lower Nubia and Nobatia

Table \ref{tab:zone-nobatia} lists 17 assessed settlements between the First and Third Cataracts, led by Faras (7,42k at 800AD), Buhen (3,85k), Sai Island (3,47k) and Amara West (2,84k) [@Budka2023DayThe; @Adams1977Nubia].

<figure class="crd-table-figure" id="tab:zone-nobatia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Faras</strong></td><td class="crd-td">SDN: 22,18, 31,48</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">6,5k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (800AD)</td></tr>
<tr><td class="crd-td"><strong>Buhen Settlement</strong></td><td class="crd-td">SDN: 21,91, 31,29</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1400BC)</td></tr>
<tr><td class="crd-td"><strong>Sai Island Settlement</strong></td><td class="crd-td">SDN: 20,71, 30,33</td><td class="crd-td">2k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1400BC)</td></tr>
<tr><td class="crd-td"><strong>Amara West</strong></td><td class="crd-td">SDN: 20,82, 30,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1150BC)</td></tr>
<tr><td class="crd-td"><strong>Mirgissa Settlement</strong></td><td class="crd-td">SDN: 21,82, 31,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Sedeinga</strong></td><td class="crd-td">SDN: 20,55, 30,29</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (150AD)</td></tr>
<tr><td class="crd-td"><strong>Sesebi</strong></td><td class="crd-td">SDN: 20,11, 30,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1340BC)</td></tr>
<tr><td class="crd-td"><strong>Soleb</strong></td><td class="crd-td">SDN: 20,44, 30,33</td><td class="crd-td">-</td><td class="crd-td">675</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1350BC)</td></tr>
<tr><td class="crd-td"><strong>Semna Settlement</strong></td><td class="crd-td">SDN: 21,5, 30,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Abri</strong></td><td class="crd-td">SDN: 20,78, 30,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Aksha Settlement</strong></td><td class="crd-td">SDN: 22,1, 31,4</td><td class="crd-td">-</td><td class="crd-td">455</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1250BC)</td></tr>
<tr><td class="crd-td"><strong>Nauri Settlement</strong></td><td class="crd-td">SDN: 19,93, 30,57</td><td class="crd-td">-</td><td class="crd-td">702</td><td class="crd-td">748</td><td class="crd-td">708</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">775 (800AD)</td></tr>
<tr><td class="crd-td"><strong>Meinarti</strong></td><td class="crd-td">SDN: 21,88, 31,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">462</td><td class="crd-td">699</td><td class="crd-td">240</td><td class="crd-td">-</td><td class="crd-td">725 (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Askut Settlement</strong></td><td class="crd-td">SDN: 21,63, 31,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">710 (1600BC)</td></tr>
<tr><td class="crd-td"><strong>Uronarti Settlement</strong></td><td class="crd-td">SDN: 21,53, 30,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">695 (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Kulubnarti</strong></td><td class="crd-td">SDN: 21,05, 30,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">468</td><td class="crd-td">400</td><td class="crd-td">-</td><td class="crd-td">515 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Selima Oasis Camp</strong></td><td class="crd-td">SDN: 21,37, 29,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">68 (2200BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Assessed settlements in Lower Nubia and Nobatia from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

## Makuria, Napata and the Dongola Reach

Table \ref{tab:zone-makuria} compiles 25 sites along the Dongola Reach and adjacent Wadi Howar margins, anchored by Old Dongola (23,8k), Napata (16,4k), Kerma (14,68k), Kawa (8,95k) and Sanam (8,17k) [@Osypinski2023NewAdvances; @Bobrowski2023Ltd1Kerma; @Nasreldein2026ContinuityChange].

<figure class="crd-table-figure" id="tab:zone-makuria">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Old Dongola</strong></td><td class="crd-td">SDN: 18,22, 30,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,8k</td><td class="crd-td">10,6k</td><td class="crd-td">-</td><td class="crd-td">23,8k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Napata</strong></td><td class="crd-td">SDN: 18,54, 31,83</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,4k (680BC)</td></tr>
<tr><td class="crd-td"><strong>Kerma</strong></td><td class="crd-td">SDN: 19,63, 30,41</td><td class="crd-td">6,9k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,7k (1650BC)</td></tr>
<tr><td class="crd-td"><strong>Kawa</strong></td><td class="crd-td">SDN: 19,12, 30,5</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (680BC)</td></tr>
<tr><td class="crd-td"><strong>Sanam</strong></td><td class="crd-td">SDN: 18,49, 31,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k (650BC)</td></tr>
<tr><td class="crd-td"><strong>Dunqulā</strong></td><td class="crd-td">SDN: 19,15, 30,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Argo</strong></td><td class="crd-td">SDN: 19,52, 30,42</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k (200BC)</td></tr>
<tr><td class="crd-td"><strong>Ed-Debba</strong></td><td class="crd-td">SDN: 18,05, 30,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>El-Khandaq</strong></td><td class="crd-td">SDN: 18,6, 30,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Hambukol</strong></td><td class="crd-td">SDN: 18,28, 30,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">2,7k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>El-Kurru Settlement</strong></td><td class="crd-td">SDN: 18,41, 31,77</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (700BC)</td></tr>
<tr><td class="crd-td"><strong>Merowe</strong></td><td class="crd-td">SDN: 18,51, 31,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Korti</strong></td><td class="crd-td">SDN: 18,1, 31,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Banganarti</strong></td><td class="crd-td">SDN: 18,17, 30,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Tergis</strong></td><td class="crd-td">SDN: 18,85, 30,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>El-Kab Settlement</strong></td><td class="crd-td">SDN: 19,25, 32,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">920</td><td class="crd-td">-</td><td class="crd-td">1,7k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Tombos</strong></td><td class="crd-td">SDN: 19,7, 30,4</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">805</td><td class="crd-td">655</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1450BC)</td></tr>
<tr><td class="crd-td"><strong>al-Zuma</strong></td><td class="crd-td">SDN: 18,35, 31,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (450AD)</td></tr>
<tr><td class="crd-td"><strong>Haraza Settlement</strong></td><td class="crd-td">SDN: 15,05, 30,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">970</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Usli</strong></td><td class="crd-td">SDN: 18,18, 31,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (800AD)</td></tr>
<tr><td class="crd-td"><strong>Nuri Settlement</strong></td><td class="crd-td">SDN: 18,56, 31,91</td><td class="crd-td">-</td><td class="crd-td">625</td><td class="crd-td">575</td><td class="crd-td">525</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (400BC)</td></tr>
<tr><td class="crd-td"><strong>Ghazali Settlement</strong></td><td class="crd-td">SDN: 18,44, 31,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">895</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">895 (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Us Island Settlement</strong></td><td class="crd-td">SDN: 18,88, 32,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">575</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">685 (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Djabarona Settlement</strong></td><td class="crd-td">SDN: 17,35, 26,78</td><td class="crd-td">146</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">146 (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Abu Tabari Site</strong></td><td class="crd-td">SDN: 17,42, 28,29</td><td class="crd-td">137</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">137 (2000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Assessed settlements in Makuria, Napata and the Dongola Reach from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

## Island of Meroe, Alodia and Atbara-Butana

Table \ref{tab:zone-meroe} records 26 settlements across the Butana steppe and Atbara corridor, led by Soba (32,4k), Meroe (29,4k), Arbaji (11,2k), Shandi (5,45k) and Naqa (5,24k) [@Humphris2018IronSmelting; @Yvanez2018ClothingThe].

<figure class="crd-table-figure" id="tab:zone-meroe">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Soba</strong></td><td class="crd-td">SDN: 15,53, 32,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,4k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">32,4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Meroe</strong></td><td class="crd-td">SDN: 16,94, 33,71</td><td class="crd-td">-</td><td class="crd-td">27,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,4k (100AD)</td></tr>
<tr><td class="crd-td"><strong>Arbaji</strong></td><td class="crd-td">SDN: 14,7, 33,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Shandī</strong></td><td class="crd-td">SDN: 16,69, 33,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Naqa</strong></td><td class="crd-td">SDN: 16,27, 33,27</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (50AD)</td></tr>
<tr><td class="crd-td"><strong>Barbar</strong></td><td class="crd-td">SDN: 18,03, 33,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Kaboshyah</strong></td><td class="crd-td">SDN: 16,9, 33,7</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (50AD)</td></tr>
<tr><td class="crd-td"><strong>Qarri</strong></td><td class="crd-td">SDN: 16,22, 32,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Halfaya</strong></td><td class="crd-td">SDN: 15,73, 32,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,2k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Wad ban Naqa</strong></td><td class="crd-td">SDN: 16,52, 33,13</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (50AD)</td></tr>
<tr><td class="crd-td"><strong>Metemma</strong></td><td class="crd-td">SDN: 16,71, 33,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>El-Mesellemiya</strong></td><td class="crd-td">SDN: 14,57, 33,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1821AD)</td></tr>
<tr><td class="crd-td"><strong>Dangeil</strong></td><td class="crd-td">SDN: 18,13, 33,96</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (100AD)</td></tr>
<tr><td class="crd-td"><strong>al-Damir</strong></td><td class="crd-td">SDN: 17,59, 33,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>El-Kamlin</strong></td><td class="crd-td">SDN: 15,07, 33,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1821AD)</td></tr>
<tr><td class="crd-td"><strong>Rufa</strong></td><td class="crd-td">SDN: 14,77, 33,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>El-Hassa</strong></td><td class="crd-td">SDN: 16,82, 33,63</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (100AD)</td></tr>
<tr><td class="crd-td"><strong>El-Hobagi Settlement</strong></td><td class="crd-td">SDN: 16,47, 32,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (380AD)</td></tr>
<tr><td class="crd-td"><strong>Mahal Teglinos Site</strong></td><td class="crd-td">SDN: 15,44, 36,44</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Musawwarat es-Sufra Complex</strong></td><td class="crd-td">SDN: 16,42, 33,32</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (50AD)</td></tr>
<tr><td class="crd-td"><strong>Goz Regeb</strong></td><td class="crd-td">SDN: 16,05, 35,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>al-Qatayna</strong></td><td class="crd-td">SDN: 14,87, 32,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Sabderat</strong></td><td class="crd-td">SDN: 15,47, 36,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Basa Settlement</strong></td><td class="crd-td">SDN: 16,7, 33,87</td><td class="crd-td">-</td><td class="crd-td">876</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (150AD)</td></tr>
<tr><td class="crd-td"><strong>Jebel Qeili Settlement</strong></td><td class="crd-td">SDN: 15,52, 33,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">885 (250AD)</td></tr>
<tr><td class="crd-td"><strong>Shaqadud Cave and Midden</strong></td><td class="crd-td">SDN: 16,27, 33,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">115 (2200BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Assessed settlements on the Island of Meroe, Alodia and Atbara-Butana from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

## Beja Highlands, Blemmyes and Suakin Littoral

Table \ref{tab:zone-beja} presents 14 coastal ports and eastern highland sites, led by Suakin (8,15k), Debarwa (4,2k), Aqiq (3,45k) and Deraheib (3,24k) [@Costanzo2021CreatingThe; @GonzalezRuibal2017SudansEastern].

<figure class="crd-table-figure" id="tab:zone-beja">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sawākin</strong></td><td class="crd-td">SDN: 19,09, 37,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">8,2k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Debarwa</strong></td><td class="crd-td">ERI: 15,09, 38,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1570AD)</td></tr>
<tr><td class="crd-td"><strong>Aqiq Settlement</strong></td><td class="crd-td">SDN: 18,23, 38,19</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Deraheib Settlement</strong></td><td class="crd-td">SDN: 21,95, 35,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭawkar</strong></td><td class="crd-td">SDN: 18,42, 37,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Hamad</strong></td><td class="crd-td">SDN: 19,54, 33,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Sembel Ona Settlement</strong></td><td class="crd-td">ERI: 15,31, 38,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (800BC)</td></tr>
<tr><td class="crd-td"><strong>Sinkāt</strong></td><td class="crd-td">SDN: 18,84, 36,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Kurgus Settlement</strong></td><td class="crd-td">SDN: 19,2, 33,48</td><td class="crd-td">-</td><td class="crd-td">770</td><td class="crd-td">806</td><td class="crd-td">890</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Derudeb</strong></td><td class="crd-td">SDN: 17,53, 36,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">820</td><td class="crd-td">820 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Trinkitat</strong></td><td class="crd-td">SDN: 18,68, 37,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">568</td><td class="crd-td">-</td><td class="crd-td">655 (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Erkowit</strong></td><td class="crd-td">SDN: 18,77, 37,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">465 (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Mohamed Qol</strong></td><td class="crd-td">SDN: 20,9, 37,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">425 (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Dungunab</strong></td><td class="crd-td">SDN: 21,11, 37,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">395 (1700AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Assessed settlements in the Beja Highlands, Red Sea littoral and Eritrean margins from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

## Funj Sultanate of Sennar and Blue Nile Gezira

Table \ref{tab:zone-funj} catalogues 14 settlements across the Blue Nile and Gezira plains, headed by Sennar (28,6k), Wad Medani (6,4k), Tegali (3,6k) and El-Kamlin [@Spaulding1985HeroicAge; @AbuManga2017OldFulani].

<figure class="crd-table-figure" id="tab:zone-funj">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sannār</strong></td><td class="crd-td">SDN: 13,55, 33,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">28,6k (1701AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Medani</strong></td><td class="crd-td">SDN: 14,39, 33,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k (1821AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Madanī</strong></td><td class="crd-td">SDN: 14,37, 33,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Tegali</strong></td><td class="crd-td">SDN: 12,17, 31,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Alays</strong></td><td class="crd-td">SDN: 13,45, 32,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>Fazogli</strong></td><td class="crd-td">SDN: 11,28, 34,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Jebel Moya Settlement</strong></td><td class="crd-td">SDN: 13,48, 33,32</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (100AD)</td></tr>
<tr><td class="crd-td"><strong>Kaka</strong></td><td class="crd-td">SSD: 10,63, 32,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaḍārif</strong></td><td class="crd-td">SDN: 14,04, 35,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duwaym</strong></td><td class="crd-td">SDN: 14, 32,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Karkoj</strong></td><td class="crd-td">SDN: 12,92, 34,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>al-Roseires</strong></td><td class="crd-td">SDN: 11,86, 34,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Geili Settlement</strong></td><td class="crd-td">SDN: 13,6, 33,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">653</td><td class="crd-td">730</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Saqadi Settlement</strong></td><td class="crd-td">SDN: 13,57, 33,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">745</td><td class="crd-td">-</td><td class="crd-td">845 (1600AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Assessed settlements in the Funj Sultanate of Sennar and Blue Nile Gezira from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

## Daju, Tunjur and Keira Sultanate of Darfur

Table \ref{tab:zone-darfur} lists 12 centres across Jebel Marra and Darfur, led by Uri (8,64k), El Fasher (8,6k), Kobbei (8,42k), Shoba (5,28k) and Ain Farah (4,15k) [@Arkell1937FasherDarfur; @Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:zone-darfur">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uri Settlement</strong></td><td class="crd-td">SDN: 14,23, 24,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">8,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fāshir</strong></td><td class="crd-td">SDN: 13,63, 25,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>Kobbei</strong></td><td class="crd-td">SDN: 13,92, 25,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1803AD)</td></tr>
<tr><td class="crd-td"><strong>Shoba</strong></td><td class="crd-td">SDN: 13,85, 24,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Ain Farah Settlement</strong></td><td class="crd-td">SDN: 14,35, 24,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Turra</strong></td><td class="crd-td">SDN: 13,28, 24,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>Ril</strong></td><td class="crd-td">SDN: 12,72, 25,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1795AD)</td></tr>
<tr><td class="crd-td"><strong>Kotum</strong></td><td class="crd-td">SDN: 14,21, 24,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kalokiting</strong></td><td class="crd-td">SDN: 12,73, 24,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Madinat Kabkabiyya</strong></td><td class="crd-td">SDN: 13,65, 24,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Sweini</strong></td><td class="crd-td">SDN: 14,48, 25,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1795AD)</td></tr>
<tr><td class="crd-td"><strong>Zālingay</strong></td><td class="crd-td">SDN: 12,91, 23,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1780AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Assessed settlements in Daju, Tunjur and Keira Darfur from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

## Kordofan Savanna and Nuba Mountains

Table \ref{tab:zone-kordofan} records 11 towns and upland sites across Kordofan and the Nuba Hills, headed by El Obeid (8,5k), Bara (3,2k) and An-Nuhud (2,95k) [@Gregory2025CapturingEmpire; @AbuManga2017OldFulani].

<figure class="crd-table-figure" id="tab:zone-kordofan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">SDN: 13,18, 30,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">8,5k (1821AD)</td></tr>
<tr><td class="crd-td"><strong>Bara</strong></td><td class="crd-td">SDN: 13,69, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1821AD)</td></tr>
<tr><td class="crd-td"><strong>An-Nuhūd</strong></td><td class="crd-td">SDN: 12,7, 28,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Mellit</strong></td><td class="crd-td">SDN: 14,14, 25,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>al-Dalanj</strong></td><td class="crd-td">SDN: 12,04, 29,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Kāduqlī</strong></td><td class="crd-td">SDN: 11, 29,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Taludy</strong></td><td class="crd-td">SDN: 10,63, 30,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Rashad</strong></td><td class="crd-td">SDN: 11,86, 31,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Haraz</strong></td><td class="crd-td">SDN: 13,02, 29,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">965</td><td class="crd-td">965 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Detwok</strong></td><td class="crd-td">SSD: 10,17, 32,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">765</td><td class="crd-td">765 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Kajmar</strong></td><td class="crd-td">SDN: 14,42, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">675 (1750AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Assessed settlements in Kordofan Savanna and the Nuba Mountains from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

## Shilluk Kingdom, Sudd and Southern Nilotes

Table \ref{tab:zone-shilluk} compiles 13 White Nile, Sudd and upper Sobat-Kaffa borderland settlements, led by Bonga (6,27k), Kodok (5,16k), Anderacha (3,24k), Gondokoro (2,85k) and Tonga (2,42k) [@Dercole2021SeventyYears].

<figure class="crd-table-figure" id="tab:zone-shilluk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bonga</strong></td><td class="crd-td">ETH: 7,28, 36,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">6,3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kodok</strong></td><td class="crd-td">SSD: 9,89, 32,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Anderacha</strong></td><td class="crd-td">ETH: 7,18, 36,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Gondokoro</strong></td><td class="crd-td">SSD: 4,9, 31,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">925</td><td class="crd-td">1,3k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Tonga</strong></td><td class="crd-td">SSD: 9,47, 31,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Nasir</strong></td><td class="crd-td">SSD: 8,61, 33,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Panyikang</strong></td><td class="crd-td">SSD: 9,52, 31,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">995</td><td class="crd-td">995 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Rumbek</strong></td><td class="crd-td">SSD: 6,76, 29,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">980</td><td class="crd-td">980 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Tonj</strong></td><td class="crd-td">SSD: 7,28, 28,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">920</td><td class="crd-td">920 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Bor</strong></td><td class="crd-td">SSD: 6,2, 31,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">825 (1810AD)</td></tr>
<tr><td class="crd-td"><strong>Meshra er-Req</strong></td><td class="crd-td">SSD: 8,42, 29,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">555</td><td class="crd-td">555 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Shambe</strong></td><td class="crd-td">SSD: 7,1, 30,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">495</td><td class="crd-td">495 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Lokabulo Rock Shelter</strong></td><td class="crd-td">SSD: 4,75, 32,17</td><td class="crd-td">23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Assessed settlements in the Shilluk Kingdom, Sudd and Southern Nilotes from 2000BC to 1820AD with peak populations.</figcaption>
</figure>

# Limitations

Three caveats govern use of this settlement ledger. First, northern cataract towns salvaged prior to reservoir inundation benefit from far denser excavation coverage than western or southern Sudanese savanna towns [@Naser2019DialoguesThe; @Bashir2026ArchaeologyAnd]. Second, urban estimates derived from walled footprints or eighteenth-century traveller house counts carry roughly 15% to 25% uncertainty [@Budka2023DayThe]. Third, the 132 retained centres represent the nucleated urban and royal tier and should be read alongside the kriged rural population totals in the companion review.

# Conclusion

Together, the 132 settlements trace four millennia of urban transformation from Kerma and Napata to Meroe, Old Dongola, Soba, Suakin, Sennar, El Fasher and Kodok, documenting Sudan's long shift from northern riverine cataracts to the rain-fed savanna interior by 1821AD.

# Appendix

## Sub-Regional Gazetteer Totals

Table \ref{tab:gazetteer-summary} sums the assessed site counts and combined interpolated urban populations across all eight sub-regions at the six primary benchmark years.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region (Sites)</th><th class="crd-th">2000BC</th><th class="crd-th">0</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1820AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Nubia and Nobatia (17)</strong></td><td class="crd-td">4,4k</td><td class="crd-td">9,5k</td><td class="crd-td">10,4k</td><td class="crd-td">10,1k</td><td class="crd-td">2,2k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>2. Makuria, Napata and Dongola (25)</strong></td><td class="crd-td">7,2k</td><td class="crd-td">24,1k</td><td class="crd-td">10,8k</td><td class="crd-td">38,7k</td><td class="crd-td">19,7k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>3. Meroe, Alodia and Butana (26)</strong></td><td class="crd-td">1,9k</td><td class="crd-td">47,3k</td><td class="crd-td">1,6k</td><td class="crd-td">32,4k</td><td class="crd-td">6,2k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>4. Beja Highlands and Suakin (14)</strong></td><td class="crd-td">0</td><td class="crd-td">2,3k</td><td class="crd-td">3,3k</td><td class="crd-td">10,8k</td><td class="crd-td">7,2k</td><td class="crd-td">820</td></tr>
<tr><td class="crd-td"><strong>5. Funj Sennar and Gezira (14)</strong></td><td class="crd-td">0</td><td class="crd-td">2,7k</td><td class="crd-td">653</td><td class="crd-td">730</td><td class="crd-td">1,7k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>6. Darfur Keira Sultanate (12)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">14,5k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>7. Kordofan and Nuba Hills (11)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>8. Shilluk and Upper Nile (13)</strong></td><td class="crd-td">23</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">3,9k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions (132)</strong></td><td class="crd-td">13,5k</td><td class="crd-td">85,8k</td><td class="crd-td">26,8k</td><td class="crd-td">92,7k</td><td class="crd-td">55,3k</td><td class="crd-td">86,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Assessed settlement counts and combined interpolated urban populations across eight Sudanese and Nubian sub-regions from 2000BC to 1820AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

All coordinates are decimal degrees (WGS 84) formatted with European decimal commas. Pre-1821 dates use attached astronomical suffixes (2000BC, 0, 1820AD), and hyphens (-) mark intervals prior to site foundation or after abandonment.

---
title: "Colonial Equatoria, Belgian Congo and Angola"
subtitle: "Settlement Gazetteer: 361 Individually Assessed Sites (1880AD-1975AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_equatoria_congo_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 361 individually assessed settlements across 18 countries spanning twelve colonial sub-regions from 1880AD to 1975AD."
hero_label: "fig:hero-settlements-equatoria"

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

This gazetteer compiles coordinates and colonial-era population series for 361 individually assessed urban settlements and metropolitan agglomerations across 18 countries between 1880AD and 1975AD. Screened from 396 candidate colonial stations, mining centres, river ports and provincial capitals (35 excluded), the retained entries span 12 colonial sub-regions across French Equatorial Africa, German and Mandate Cameroon, Spanish Guinea, the Belgian Congo and Portuguese Angola. Active interpolated entries rise from 11 settlements at 1880AD to 90 at 1900AD, 212 at 1930AD, 269 at 1950AD, 162 at 1960AD and 205 at 1970AD, tracing urban expansion from small concession posts to Kinshasa (1,29M), Luanda (475,3k), Lubumbashi (318k), Brazzaville (290k), Douala (289,1k agglomeration) and Bangui (279,8k).



# Background

Documenting urban growth across colonial Equatorial and West-Central Africa requires harmonising heterogeneous administrative enumerations across five imperial statistical traditions [@Starr1911TheCongo; @AEFAnnuaire1950; @Angola1940Censo]. Belgian annual reports (*Rapports Annuels sur l'Administration de la Colonie du Congo Belge*) and the 1955-1957AD demographic sample survey tracked *centres extra-coutumiers* and copperbelt labour towns in detail [@CongoBelge1958Enquete; @Depaepe2017ColonialEducation], whereas French Equatorial Africa's statistical yearbooks and Mandate Cameroon censuses separated European and African *commune* rolls [@AEFAnnuaire1950; @Gouellain1975Douala]. Portuguese Angolan censuses beginning in 1940AD and early post-independence national censuses provide late-colonial municipal totals alongside Africapolis metropolitan boundaries from 1950AD onward [@Angola1940Censo; @Rodrigues2022WhenModern; @Oula2024CrossPerspective].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate urban sites were screened from official territorial census tables, missionary and colonial expedition accounts and Africapolis urban-extent inventories [@AEFAnnuaire1950; @CongoBelge1958Enquete; @Angola1940Censo; @Gouellain1975Douala]. Within the 6.558.214 km² domain bounded by geoBoundaries national polygons [@Runfola2020GeoBoundaries], 35 duplicate alias records were removed, retaining 361 entries across 1.443 chronological observations. Each entry is assigned to one of 12 colonial sub-regions, grouping 37 immediate cross-border catchment towns in Nigeria, Zambia, Uganda, Burundi, Rwanda, South Sudan, Sudan, Niger and Tanzania into their adjoining sub-region [@Tsafack2022CameroonEquatorial; @Silva2020TheFormal].

## Site-Specific Population Estimation and Spatial Scope

Of the 361 entries, 347 record municipal city-proper populations and 14 trace continuous urban agglomerations labelled explicitly as "(Agglomeration)" in the tables below. Tables 1 to 12 report linearly interpolated populations at six colonial benchmarks (1885AD, 1900AD, 1930AD, 1950AD, 1960AD and 1970AD) together with each site's observed peak population and peak date, marking years outside an entry's attested span with a hyphen (-).

# Testing and Validation

Rank-size regression on peak populations over the upper half (n=180) of the 361 settlements yields $q = 1,02$ ($R^2 = 0,99$), closely matching the 343 spatially deduplicated entries plotted in Figure \ref{fig:settlements-rank} ($q = 0,93$, $R^2 = 0,99$). Separate municipal and agglomeration rows preserve consistency between pre-1950AD colonial township counts and post-1950AD metropolitan growth [@Rodrigues2022WhenModern; @Gouellain1975Douala].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-equatoria-congo-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 343 spatially deduplicated settlements (q = 0,93, R² = 0,99) and top ten sub-regional densities in 1975AD.</figcaption>
</figure>

# Results

## French Equatorial Africa: Colony of Chad

Table \ref{tab:sub-chad} compiles 31 settlements across Chad and the bordering Lake Chad and Darfur fringes, led by Fort-Lamy/Ndjamena (148,9k agglomeration), Sarh (43,7k), Moundou (39,6k) and Abéché (27,3k), reflecting the early decline of Wadai's capital followed by mid-century cotton-zone urbanisation [@AEFAnnuaire1950].

<figure class="crd-table-figure" id="tab:sub-chad">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ndjamena (Agglomeration)</strong></td><td class="crd-td">TCD: 12,13, 15,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,5k</td><td class="crd-td">65,6k</td><td class="crd-td">148,9k</td><td class="crd-td">148,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Sarh</strong></td><td class="crd-td">TCD: 9,14, 18,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">15k</td><td class="crd-td">26,3k</td><td class="crd-td">36,9k</td><td class="crd-td">36,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Moundou</strong></td><td class="crd-td">TCD: 8,57, 16,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">18k</td><td class="crd-td">25,6k</td><td class="crd-td">36,2k</td><td class="crd-td">36,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Junaynah</strong></td><td class="crd-td">SDN: 13,44, 22,43</td><td class="crd-td">5,5k</td><td class="crd-td">6k</td><td class="crd-td">6,6k</td><td class="crd-td">10,6k</td><td class="crd-td">15,6k</td><td class="crd-td">29,1k</td><td class="crd-td">35,4k (1973AD)</td></tr>
<tr><td class="crd-td"><strong>Kukawa</strong></td><td class="crd-td">NGA: 12,93, 13,57</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Abéché</strong></td><td class="crd-td">TCD: 13,83, 20,83</td><td class="crd-td">-</td><td class="crd-td">22,4k</td><td class="crd-td">12k</td><td class="crd-td">16,8k</td><td class="crd-td">18,8k</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ndjamena</strong></td><td class="crd-td">TCD: 12,13, 15,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,4k (1947AD)</td></tr>
<tr><td class="crd-td"><strong>Kélo</strong></td><td class="crd-td">TCD: 9,32, 15,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">10,7k</td><td class="crd-td">15k</td><td class="crd-td">15k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Koumra</strong></td><td class="crd-td">TCD: 8,92, 17,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">10,7k</td><td class="crd-td">14,6k</td><td class="crd-td">14,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bongor</strong></td><td class="crd-td">TCD: 10,29, 15,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">7,2k</td><td class="crd-td">9,8k</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Pala</strong></td><td class="crd-td">TCD: 9,36, 14,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">8,7k</td><td class="crd-td">11,9k</td><td class="crd-td">11,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Doba</strong></td><td class="crd-td">TCD: 8,68, 16,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">8,5k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ngala</strong></td><td class="crd-td">NGA: 12,35, 14,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Massenya</strong></td><td class="crd-td">TCD: 11,4, 16,17</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">4,5k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1893AD)</td></tr>
<tr><td class="crd-td"><strong>Ati</strong></td><td class="crd-td">TCD: 13,22, 18,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mongo</strong></td><td class="crd-td">TCD: 12,18, 18,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mao</strong></td><td class="crd-td">TCD: 14,12, 15,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Laï</strong></td><td class="crd-td">TCD: 9,4, 16,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Bousso</strong></td><td class="crd-td">TCD: 10,49, 16,71</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Faya-Largeau</strong></td><td class="crd-td">TCD: 17,93, 19,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Am Timan</strong></td><td class="crd-td">TCD: 11,03, 20,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Adré</strong></td><td class="crd-td">TCD: 13,46, 22,2</td><td class="crd-td">3,5k</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Biltine</strong></td><td class="crd-td">TCD: 14,52, 20,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Bol</strong></td><td class="crd-td">TCD: 13,48, 14,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Oum Hadjer</strong></td><td class="crd-td">TCD: 13,29, 19,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>N'Guigmi</strong></td><td class="crd-td">NER: 14,25, 13,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Yao</strong></td><td class="crd-td">TCD: 12,85, 17,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Moussoro</strong></td><td class="crd-td">TCD: 13,65, 16,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Fada</strong></td><td class="crd-td">TCD: 17,19, 21,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Bardaï</strong></td><td class="crd-td">TCD: 21,35, 17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Zouar</strong></td><td class="crd-td">TCD: 20,46, 16,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the AEF Colony of Chad and Lake Chad borderlands (1885AD to 1970AD).</figcaption>
</figure>

## French Equatorial Africa: Ubangi-Shari

Table \ref{tab:sub-ubangi} lists 36 settlements across Oubangui-Chari and adjacent south-western South Sudan, anchored by Bangui (279,8k city-proper by 1975AD and 199,1k agglomeration in 1970AD), Berbérati, Bambari and Bouar [@AEFAnnuaire1950].

<figure class="crd-table-figure" id="tab:sub-ubangi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bangui</strong></td><td class="crd-td">CAF: 4,42, 18,55</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">20k</td><td class="crd-td">41k</td><td class="crd-td">127k</td><td class="crd-td">187k</td><td class="crd-td">279,8k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Bangui (Agglomeration)</strong></td><td class="crd-td">CAF: 4,42, 18,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,6k</td><td class="crd-td">84k</td><td class="crd-td">199,1k</td><td class="crd-td">199,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bambari</strong></td><td class="crd-td">CAF: 5,77, 20,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">10,9k</td><td class="crd-td">14,8k</td><td class="crd-td">28k</td><td class="crd-td">31,3k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Bouar</strong></td><td class="crd-td">CAF: 5,94, 15,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">10k</td><td class="crd-td">16,7k</td><td class="crd-td">26,7k</td><td class="crd-td">29,5k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Berbérati</strong></td><td class="crd-td">CAF: 4,26, 15,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">8,9k</td><td class="crd-td">12k</td><td class="crd-td">23,7k</td><td class="crd-td">27,3k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Bossangoa</strong></td><td class="crd-td">CAF: 6,49, 17,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">8,1k</td><td class="crd-td">12,8k</td><td class="crd-td">22,4k</td><td class="crd-td">25,1k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Ndélé</strong></td><td class="crd-td">CAF: 8,41, 20,64</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">5,9k</td><td class="crd-td">4,6k</td><td class="crd-td">5,1k</td><td class="crd-td">5,6k</td><td class="crd-td">24,6k (1903AD)</td></tr>
<tr><td class="crd-td"><strong>Bangassou</strong></td><td class="crd-td">CAF: 4,75, 22,83</td><td class="crd-td">4,8k</td><td class="crd-td">6,9k</td><td class="crd-td">7k</td><td class="crd-td">9,2k</td><td class="crd-td">14,6k</td><td class="crd-td">19,9k</td><td class="crd-td">21,8k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Carnot</strong></td><td class="crd-td">CAF: 4,94, 15,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">6,1k</td><td class="crd-td">8,4k</td><td class="crd-td">10,7k</td><td class="crd-td">17,9k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Bria</strong></td><td class="crd-td">CAF: 6,54, 21,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">8,7k</td><td class="crd-td">12,8k</td><td class="crd-td">14,8k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Bozoum</strong></td><td class="crd-td">CAF: 6,32, 16,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Batangafo</strong></td><td class="crd-td">CAF: 7,3, 18,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,2k</td><td class="crd-td">13,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mbaïki</strong></td><td class="crd-td">CAF: 3,87, 17,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8,6k</td><td class="crd-td">12,3k</td><td class="crd-td">12,3k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Alindao</strong></td><td class="crd-td">CAF: 5,04, 21,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">7,8k</td><td class="crd-td">10,7k</td><td class="crd-td">12,3k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Yei</strong></td><td class="crd-td">SSD: 4,09, 30,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">4,6k</td><td class="crd-td">10,2k</td><td class="crd-td">11,9k (1973AD)</td></tr>
<tr><td class="crd-td"><strong>Kaga-Bandoro</strong></td><td class="crd-td">CAF: 6,99, 19,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">5,6k</td><td class="crd-td">8,5k</td><td class="crd-td">11,4k</td><td class="crd-td">11,9k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Ippy</strong></td><td class="crd-td">CAF: 6,24, 21,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,8k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Maridi</strong></td><td class="crd-td">SSD: 4,89, 29,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">4,2k</td><td class="crd-td">8,4k</td><td class="crd-td">9,6k (1973AD)</td></tr>
<tr><td class="crd-td"><strong>Bouca</strong></td><td class="crd-td">CAF: 6,51, 18,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Tambura</strong></td><td class="crd-td">SSD: 5,6, 27,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k (1973AD)</td></tr>
<tr><td class="crd-td"><strong>Boda</strong></td><td class="crd-td">CAF: 4,32, 17,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">6,2k</td><td class="crd-td">8,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Dékoa</strong></td><td class="crd-td">CAF: 6,33, 19,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Grimari</strong></td><td class="crd-td">CAF: 5,74, 20,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Paoua</strong></td><td class="crd-td">CAF: 7,25, 16,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,9k</td><td class="crd-td">6,7k</td><td class="crd-td">7,1k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Nola</strong></td><td class="crd-td">CAF: 3,52, 16,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,2k</td><td class="crd-td">5,2k</td><td class="crd-td">6,2k</td><td class="crd-td">6,7k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Bocaranga</strong></td><td class="crd-td">CAF: 6,99, 15,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Rafai</strong></td><td class="crd-td">CAF: 4,95, 23,92</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">3,6k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Bossembélé</strong></td><td class="crd-td">CAF: 5,27, 17,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Kembé</strong></td><td class="crd-td">CAF: 4,62, 21,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Sibut</strong></td><td class="crd-td">CAF: 5,74, 19,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mobaye</strong></td><td class="crd-td">CAF: 4,32, 21,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Baboua</strong></td><td class="crd-td">CAF: 5,8, 14,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Obo</strong></td><td class="crd-td">CAF: 5,39, 26,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Birao</strong></td><td class="crd-td">CAF: 10,28, 22,79</td><td class="crd-td">965</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">3,3k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Zémio</strong></td><td class="crd-td">CAF: 5,03, 25,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1975AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in AEF Ubangi-Shari (Oubangui-Chari) and adjacent borderlands (1885AD to 1970AD).</figcaption>
</figure>

## French Equatorial Africa: Middle Congo

Table \ref{tab:sub-middle-congo} records 16 settlements across Moyen-Congo, dominated by the federal and Free French capital of Brazzaville (290k city-proper, 216,6k agglomeration) and the Congo-Océan rail terminus at Pointe-Noire (115k agglomeration) [@Oula2024CrossPerspective; @AEFAnnuaire1950].

<figure class="crd-table-figure" id="tab:sub-middle-congo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Brazzaville</strong></td><td class="crd-td">COG: -4,22, 15,25</td><td class="crd-td">1,8k</td><td class="crd-td">5k</td><td class="crd-td">17k</td><td class="crd-td">83k</td><td class="crd-td">136k</td><td class="crd-td">290k</td><td class="crd-td">290k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Brazzaville (Agglomeration)</strong></td><td class="crd-td">COG: -4,22, 15,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">81,4k</td><td class="crd-td">94k</td><td class="crd-td">216,6k</td><td class="crd-td">216,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Pointe Noire (Agglomeration)</strong></td><td class="crd-td">COG: -4,82, 11,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">68k</td><td class="crd-td">114,1k</td><td class="crd-td">114,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Dolisie</strong></td><td class="crd-td">COG: -4,19, 12,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">11,5k</td><td class="crd-td">22k</td><td class="crd-td">22k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Nkayi</strong></td><td class="crd-td">COG: -4,18, 13,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,1k</td><td class="crd-td">20,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Pointe-Noire</strong></td><td class="crd-td">COG: -4,82, 11,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mbe</strong></td><td class="crd-td">COG: -3,19, 15,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mossendjo</strong></td><td class="crd-td">COG: -2,95, 12,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Owando</strong></td><td class="crd-td">COG: -0,5, 15,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ouesso</strong></td><td class="crd-td">COG: 1,62, 16,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Buali</strong></td><td class="crd-td">COG: -4,63, 11,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Madingou</strong></td><td class="crd-td">COG: -4,18, 13,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Gamboma</strong></td><td class="crd-td">COG: -1,87, 15,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Impfondo</strong></td><td class="crd-td">COG: 1,6, 18,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Sibiti</strong></td><td class="crd-td">COG: -3,68, 13,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Djambala</strong></td><td class="crd-td">COG: -2,54, 14,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in AEF Middle Congo (Moyen-Congo) from 1885AD to 1970AD.</figcaption>
</figure>

## French Equatorial Africa: Colony of Gabon

Table \ref{tab:sub-gabon} documents 14 coastal and riverine towns across Gabon, led by Libreville (71,4k agglomeration) and the timber and petroleum port of Port-Gentil (30,9k) alongside Lambaréné and Franceville [@AEFAnnuaire1950].

<figure class="crd-table-figure" id="tab:sub-gabon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Libreville (Agglomeration)</strong></td><td class="crd-td">GAB: 0,43, 9,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">27,4k</td><td class="crd-td">71,4k</td><td class="crd-td">71,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Port-Gentil</strong></td><td class="crd-td">GAB: -0,76, 8,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k</td><td class="crd-td">30,9k</td><td class="crd-td">30,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Libreville</strong></td><td class="crd-td">GAB: 0,43, 9,47</td><td class="crd-td">3,4k</td><td class="crd-td">4,2k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k (1947AD)</td></tr>
<tr><td class="crd-td"><strong>Mandji</strong></td><td class="crd-td">GAB: -0,72, 8,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaréné</strong></td><td class="crd-td">GAB: -0,69, 10,22</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Oyem</strong></td><td class="crd-td">GAB: 1,59, 11,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Franceville</strong></td><td class="crd-td">GAB: -1,62, 13,6</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mouila</strong></td><td class="crd-td">GAB: -1,87, 11,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Bitam</strong></td><td class="crd-td">GAB: 2,08, 11,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Tchibanga</strong></td><td class="crd-td">GAB: -2,93, 11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Koulamoutou</strong></td><td class="crd-td">GAB: -1,15, 12,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ndjolé</strong></td><td class="crd-td">GAB: -0,18, 10,76</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Makokou</strong></td><td class="crd-td">GAB: 0,56, 12,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mayumba</strong></td><td class="crd-td">GAB: -3,43, 10,66</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the AEF Colony of Gabon from 1885AD to 1970AD.</figcaption>
</figure>

## German Kamerun and Mandate Cameroons

Table \ref{tab:sub-kamerun} catalogues 73 settlements across Cameroon and the adjacent Nigerian trust borderlands, headed by Douala (289,1k agglomeration, 250k city-proper), Yaoundé (192,9k agglomeration), Calabar, Nkongsamba, Bafoussam and Bamenda [@Gouellain1975Douala; @Fru2021TheEmergence].

<figure class="crd-table-figure" id="tab:sub-kamerun">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Douala (Agglomeration)</strong></td><td class="crd-td">CMR: 4,06, 9,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">113,7k</td><td class="crd-td">127,1k</td><td class="crd-td">289,1k</td><td class="crd-td">289,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Douala</strong></td><td class="crd-td">CMR: 4,06, 9,75</td><td class="crd-td">18,9k</td><td class="crd-td">23k</td><td class="crd-td">28k</td><td class="crd-td">124k</td><td class="crd-td">187k</td><td class="crd-td">250k</td><td class="crd-td">250k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Yaounde (Agglomeration)</strong></td><td class="crd-td">CMR: 3,92, 11,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37k</td><td class="crd-td">69,8k</td><td class="crd-td">192,9k</td><td class="crd-td">192,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Calabar</strong></td><td class="crd-td">NGA: 5,01, 8,35</td><td class="crd-td">18,2k</td><td class="crd-td">15,1k</td><td class="crd-td">16,8k</td><td class="crd-td">44,4k</td><td class="crd-td">71,3k</td><td class="crd-td">93k</td><td class="crd-td">93k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Nkongsamba</strong></td><td class="crd-td">CMR: 4,96, 9,93</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k</td><td class="crd-td">6,2k</td><td class="crd-td">15,3k</td><td class="crd-td">29k</td><td class="crd-td">53,4k</td><td class="crd-td">53,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bafoussam</strong></td><td class="crd-td">CMR: 5,41, 10,36</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td><td class="crd-td">13,4k</td><td class="crd-td">18,2k</td><td class="crd-td">42,6k</td><td class="crd-td">42,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kumba</strong></td><td class="crd-td">CMR: 4,63, 9,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">13,4k</td><td class="crd-td">24,4k</td><td class="crd-td">42,2k</td><td class="crd-td">42,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Maroua</strong></td><td class="crd-td">CMR: 10,59, 14,3</td><td class="crd-td">16,5k</td><td class="crd-td">17,2k</td><td class="crd-td">15,4k</td><td class="crd-td">18,9k</td><td class="crd-td">19,4k</td><td class="crd-td">41,3k</td><td class="crd-td">41,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Garoua</strong></td><td class="crd-td">CMR: 9,34, 13,4</td><td class="crd-td">7,8k</td><td class="crd-td">7,9k</td><td class="crd-td">9,1k</td><td class="crd-td">12,6k</td><td class="crd-td">13,8k</td><td class="crd-td">37,9k</td><td class="crd-td">37,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Jimeta</strong></td><td class="crd-td">NGA: 9,24, 12,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,5k</td><td class="crd-td">35k</td><td class="crd-td">35k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Dikwa</strong></td><td class="crd-td">NGA: 12,04, 13,91</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">9,1k</td><td class="crd-td">10,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Yaoundé</strong></td><td class="crd-td">CMR: 3,92, 11,55</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">6k</td><td class="crd-td">31,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Oron</strong></td><td class="crd-td">NGA: 4,79, 8,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">31k</td><td class="crd-td">26k</td><td class="crd-td">31k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bamenda</strong></td><td class="crd-td">CMR: 5,99, 10,19</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">9,3k</td><td class="crd-td">14k</td><td class="crd-td">12,1k</td><td class="crd-td">30,6k</td><td class="crd-td">30,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mubi</strong></td><td class="crd-td">NGA: 10,27, 13,27</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,8k</td><td class="crd-td">11,2k</td><td class="crd-td">15,5k</td><td class="crd-td">27k</td><td class="crd-td">27k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Foumban</strong></td><td class="crd-td">CMR: 5,72, 10,9</td><td class="crd-td">22k</td><td class="crd-td">18,6k</td><td class="crd-td">16,8k</td><td class="crd-td">20k</td><td class="crd-td">24,1k</td><td class="crd-td">26,8k</td><td class="crd-td">26,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Limbé</strong></td><td class="crd-td">CMR: 4,04, 9,21</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td><td class="crd-td">4,8k</td><td class="crd-td">21,3k</td><td class="crd-td">22k</td><td class="crd-td">26,2k</td><td class="crd-td">26,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Loum</strong></td><td class="crd-td">CMR: 4,71, 9,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">25k</td><td class="crd-td">25k</td><td class="crd-td">25,3k</td><td class="crd-td">25,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ngaoundéré</strong></td><td class="crd-td">CMR: 7,36, 13,58</td><td class="crd-td">13,1k</td><td class="crd-td">11,7k</td><td class="crd-td">10,6k</td><td class="crd-td">14,4k</td><td class="crd-td">17,6k</td><td class="crd-td">25,3k</td><td class="crd-td">25,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bafang</strong></td><td class="crd-td">CMR: 5,19, 10,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">15,3k</td><td class="crd-td">21,6k</td><td class="crd-td">21,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bama</strong></td><td class="crd-td">NGA: 11,52, 13,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,5k</td><td class="crd-td">21k</td><td class="crd-td">21k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ikom</strong></td><td class="crd-td">NGA: 5,97, 8,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,4k</td><td class="crd-td">21k</td><td class="crd-td">21k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Édéa</strong></td><td class="crd-td">CMR: 3,79, 10,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">13,2k</td><td class="crd-td">16,1k</td><td class="crd-td">20,5k</td><td class="crd-td">20,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ebolowa I</strong></td><td class="crd-td">CMR: 2,92, 11,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">20,3k</td><td class="crd-td">20,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanga</strong></td><td class="crd-td">CMR: 4,49, 9,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k</td><td class="crd-td">18,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Buéa</strong></td><td class="crd-td">CMR: 4,14, 9,31</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,8k</td><td class="crd-td">7,2k</td><td class="crd-td">12,3k</td><td class="crd-td">18,4k</td><td class="crd-td">18,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Yola</strong></td><td class="crd-td">NGA: 9,21, 12,48</td><td class="crd-td">-</td><td class="crd-td">16,2k</td><td class="crd-td">9k</td><td class="crd-td">14,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,4k (1893AD)</td></tr>
<tr><td class="crd-td"><strong>Mbalmayo</strong></td><td class="crd-td">CMR: 3,53, 11,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">7,1k</td><td class="crd-td">11,1k</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bafia</strong></td><td class="crd-td">CMR: 4,74, 11,22</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,5k</td><td class="crd-td">7,6k</td><td class="crd-td">11,3k</td><td class="crd-td">16,1k</td><td class="crd-td">16,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Tiko</strong></td><td class="crd-td">CMR: 4,08, 9,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">11,3k</td><td class="crd-td">15,2k</td><td class="crd-td">15,6k</td><td class="crd-td">15,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bafut</strong></td><td class="crd-td">CMR: 6,08, 10,1</td><td class="crd-td">-</td><td class="crd-td">8,3k</td><td class="crd-td">9,4k</td><td class="crd-td">14,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Takum</strong></td><td class="crd-td">NGA: 7,24, 9,98</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,7k</td><td class="crd-td">8,2k</td><td class="crd-td">10,9k</td><td class="crd-td">14k</td><td class="crd-td">14k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Manjo</strong></td><td class="crd-td">CMR: 4,85, 9,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,4k</td><td class="crd-td">13,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Yagoua</strong></td><td class="crd-td">CMR: 10,34, 15,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">9k</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Meiganga</strong></td><td class="crd-td">CMR: 6,52, 14,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,9k</td><td class="crd-td">8,4k</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Wum</strong></td><td class="crd-td">CMR: 6,39, 10,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ganye</strong></td><td class="crd-td">NGA: 8,45, 12,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kumbo</strong></td><td class="crd-td">CMR: 6,16, 10,63</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">9,7k</td><td class="crd-td">12,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Michika</strong></td><td class="crd-td">NGA: 10,6, 13,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,1k</td><td class="crd-td">12,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Jada</strong></td><td class="crd-td">NGA: 8,75, 12,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">12k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kaélé</strong></td><td class="crd-td">CMR: 10,09, 14,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">-</td><td class="crd-td">12k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Ebolowa</strong></td><td class="crd-td">CMR: 2,9, 11,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">10,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Njombé</strong></td><td class="crd-td">CMR: 4,59, 9,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">11,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Guider</strong></td><td class="crd-td">CMR: 9,92, 13,94</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td><td class="crd-td">8k</td><td class="crd-td">9,7k</td><td class="crd-td">11,3k</td><td class="crd-td">11,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bali</strong></td><td class="crd-td">CMR: 5,89, 10,01</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Foumbot</strong></td><td class="crd-td">CMR: 5,52, 10,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mayo Bani/Uba</strong></td><td class="crd-td">NGA: 10,47, 13,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Penja</strong></td><td class="crd-td">CMR: 4,64, 9,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Vande Ikya</strong></td><td class="crd-td">NGA: 6,8, 9,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mamfé</strong></td><td class="crd-td">CMR: 5,75, 9,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,8k</td><td class="crd-td">7,5k</td><td class="crd-td">10,8k</td><td class="crd-td">10,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Batouri</strong></td><td class="crd-td">CMR: 4,44, 14,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">6k</td><td class="crd-td">8,2k</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Damare</strong></td><td class="crd-td">NGA: 9,31, 12,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">10,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Tombel</strong></td><td class="crd-td">CMR: 4,75, 9,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">-</td><td class="crd-td">10k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Dschang</strong></td><td class="crd-td">CMR: 5,44, 10,05</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,4k</td><td class="crd-td">9,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Tibati</strong></td><td class="crd-td">CMR: 6,47, 12,62</td><td class="crd-td">9,8k</td><td class="crd-td">6,4k</td><td class="crd-td">5,1k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rey-Bouba</strong></td><td class="crd-td">CMR: 8,67, 14,18</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">6,1k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Bangangté</strong></td><td class="crd-td">CMR: 5,14, 10,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mbouda</strong></td><td class="crd-td">CMR: 5,63, 10,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Banyo</strong></td><td class="crd-td">CMR: 6,75, 11,8</td><td class="crd-td">7,1k</td><td class="crd-td">6,2k</td><td class="crd-td">5k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kousséri</strong></td><td class="crd-td">CMR: 12,08, 15,03</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">3,8k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Eséka</strong></td><td class="crd-td">CMR: 3,65, 10,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mora</strong></td><td class="crd-td">CMR: 11,05, 14,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Sangmélima</strong></td><td class="crd-td">CMR: 2,94, 11,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Kribi</strong></td><td class="crd-td">CMR: 2,96, 9,93</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,9k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Bertoua</strong></td><td class="crd-td">CMR: 4,58, 13,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Akonolinga</strong></td><td class="crd-td">CMR: 3,79, 12,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mokolo</strong></td><td class="crd-td">CMR: 10,73, 13,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Abong-Mbang</strong></td><td class="crd-td">CMR: 3,98, 13,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Goulfeil</strong></td><td class="crd-td">CMR: 12,39, 14,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Nanga-Eboko</strong></td><td class="crd-td">CMR: 4,67, 12,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Logone-Birni</strong></td><td class="crd-td">CMR: 11,72, 15,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Makari</strong></td><td class="crd-td">CMR: 12,58, 14,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Babungo</strong></td><td class="crd-td">CMR: 6,06, 10,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1953AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in German Kamerun, the Mandate Cameroons and Cross-Adamawa borderlands (1885AD to 1970AD).</figcaption>
</figure>

## Spanish Guinea

Table \ref{tab:sub-spanish-guinea} details 7 settlements across Fernando Po (Bioko) and Río Muni, centred on Santa Isabel/Malabo (37,2k agglomeration) and Bata (27,2k agglomeration) [@Tsafack2022CameroonEquatorial].

<figure class="crd-table-figure" id="tab:sub-spanish-guinea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Malabo (Agglomeration)</strong></td><td class="crd-td">GNQ: 3,73, 8,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,9k</td><td class="crd-td">37,2k</td><td class="crd-td">37,2k</td><td class="crd-td">37,2k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bata (Agglomeration)</strong></td><td class="crd-td">GNQ: 1,85, 9,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,4k</td><td class="crd-td">21,1k</td><td class="crd-td">27,2k</td><td class="crd-td">27,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Malabo</strong></td><td class="crd-td">GNQ: 3,73, 8,77</td><td class="crd-td">2,4k</td><td class="crd-td">3,9k</td><td class="crd-td">8k</td><td class="crd-td">19,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Bata</strong></td><td class="crd-td">GNQ: 1,85, 9,79</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">4,5k</td><td class="crd-td">14,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Luba</strong></td><td class="crd-td">GNQ: 3,46, 8,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ebebiyín</strong></td><td class="crd-td">GNQ: 2,15, 11,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Evinayong</strong></td><td class="crd-td">GNQ: 1,44, 10,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in Spanish Guinea (Fernando Po and Rio Muni) from 1885AD to 1970AD.</figcaption>
</figure>

## Belgian Congo: Léopoldville and Équateur

Table \ref{tab:sub-leopoldville} presents 38 western Congolese river ports, rail centres and provincial seats, headed by Kinshasa (1,29M city-proper, 1,25M agglomeration), Kikwit, Matadi (110,4k), Mbandaka and Boma [@CongoBelge1958Enquete; @Depaepe2017ColonialEducation].

<figure class="crd-table-figure" id="tab:sub-leopoldville">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kinshasa</strong></td><td class="crd-td">COD: -4,41, 15,3</td><td class="crd-td">1,4k</td><td class="crd-td">5k</td><td class="crd-td">41,8k</td><td class="crd-td">209k</td><td class="crd-td">402k</td><td class="crd-td">1,29M</td><td class="crd-td">1,29M (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kinshasa (Agglomeration)</strong></td><td class="crd-td">COD: -4,41, 15,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">155,4k</td><td class="crd-td">451,1k</td><td class="crd-td">1,25M</td><td class="crd-td">1,25M (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kikwit</strong></td><td class="crd-td">COD: -5,05, 18,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">11,2k</td><td class="crd-td">20,5k</td><td class="crd-td">112k</td><td class="crd-td">112k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Matadi</strong></td><td class="crd-td">COD: -5,84, 13,47</td><td class="crd-td">1,2k</td><td class="crd-td">3,7k</td><td class="crd-td">11,5k</td><td class="crd-td">30,4k</td><td class="crd-td">64k</td><td class="crd-td">110,4k</td><td class="crd-td">110,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mbandaka</strong></td><td class="crd-td">COD: 0,03, 18,25</td><td class="crd-td">1,1k</td><td class="crd-td">2,4k</td><td class="crd-td">7,8k</td><td class="crd-td">13,8k</td><td class="crd-td">52,9k</td><td class="crd-td">107,9k</td><td class="crd-td">107,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bandundu</strong></td><td class="crd-td">COD: -3,32, 17,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">6,6k</td><td class="crd-td">15,1k</td><td class="crd-td">74,7k</td><td class="crd-td">74,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Boma</strong></td><td class="crd-td">COD: -5,82, 13,06</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">12,2k</td><td class="crd-td">14,1k</td><td class="crd-td">34,1k</td><td class="crd-td">61,1k</td><td class="crd-td">61,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza-Ngungu</strong></td><td class="crd-td">COD: -5,25, 14,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">10,3k</td><td class="crd-td">18,3k</td><td class="crd-td">55,8k</td><td class="crd-td">55,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Gemena</strong></td><td class="crd-td">COD: 3,23, 19,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">6,4k</td><td class="crd-td">15,7k</td><td class="crd-td">37,3k</td><td class="crd-td">37,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ilebo</strong></td><td class="crd-td">COD: -4,33, 20,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">11,3k</td><td class="crd-td">13,5k</td><td class="crd-td">32,2k</td><td class="crd-td">32,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Tshikapa</strong></td><td class="crd-td">COD: -6,42, 20,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">13k</td><td class="crd-td">11k</td><td class="crd-td">30k</td><td class="crd-td">30k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Lisala</strong></td><td class="crd-td">COD: 2,18, 21,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">6,8k</td><td class="crd-td">10,8k</td><td class="crd-td">28,7k</td><td class="crd-td">28,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mweka</strong></td><td class="crd-td">COD: -4,85, 21,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">18,6k</td><td class="crd-td">24,9k</td><td class="crd-td">24,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bolobo</strong></td><td class="crd-td">COD: -2,16, 16,23</td><td class="crd-td">21,9k</td><td class="crd-td">10,4k</td><td class="crd-td">7k</td><td class="crd-td">9,1k</td><td class="crd-td">9,7k</td><td class="crd-td">10,3k</td><td class="crd-td">24k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Binga</strong></td><td class="crd-td">COD: 2,35, 20,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,3k</td><td class="crd-td">22,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Luebo</strong></td><td class="crd-td">COD: -5,35, 21,42</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">5,2k</td><td class="crd-td">7,3k</td><td class="crd-td">13,6k</td><td class="crd-td">21,8k</td><td class="crd-td">21,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Idiofa</strong></td><td class="crd-td">COD: -4,96, 19,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">13k</td><td class="crd-td">20,4k</td><td class="crd-td">20,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Moanda</strong></td><td class="crd-td">COD: -5,92, 12,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,7k</td><td class="crd-td">18,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Inkisi</strong></td><td class="crd-td">COD: -5,14, 15,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,6k</td><td class="crd-td">11,1k</td><td class="crd-td">16k</td><td class="crd-td">16k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mangai</strong></td><td class="crd-td">COD: -4,07, 19,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,2k</td><td class="crd-td">15,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Inongo</strong></td><td class="crd-td">COD: -1,93, 18,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4,7k</td><td class="crd-td">9,3k</td><td class="crd-td">14,8k</td><td class="crd-td">14,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kenge</strong></td><td class="crd-td">COD: -4,82, 17,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">10k</td><td class="crd-td">14,4k</td><td class="crd-td">14,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mushie</strong></td><td class="crd-td">COD: -3,01, 16,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Gbadolite</strong></td><td class="crd-td">COD: 4,28, 21,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13k</td><td class="crd-td">13k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Boende</strong></td><td class="crd-td">COD: -0,29, 20,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">5,3k</td><td class="crd-td">8,9k</td><td class="crd-td">12,8k</td><td class="crd-td">12,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kimpese</strong></td><td class="crd-td">COD: -5,56, 14,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">12k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Libenge</strong></td><td class="crd-td">COD: 3,64, 18,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,5k</td><td class="crd-td">8k</td><td class="crd-td">12k</td><td class="crd-td">12k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Masi-Manimba</strong></td><td class="crd-td">COD: -4,77, 17,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">12k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Nioki</strong></td><td class="crd-td">COD: -2,72, 17,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Nsheng</strong></td><td class="crd-td">COD: -4,78, 21,39</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,5k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Kasangulu</strong></td><td class="crd-td">COD: -4,59, 15,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Businga</strong></td><td class="crd-td">COD: 3,34, 20,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Basankusu</strong></td><td class="crd-td">COD: 1,22, 19,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">7k</td><td class="crd-td">9,4k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Tshela</strong></td><td class="crd-td">COD: -5,01, 12,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kutu</strong></td><td class="crd-td">COD: -2,72, 18,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">10k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Yumbi 1</strong></td><td class="crd-td">COD: -1,9, 16,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">10k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Zongo</strong></td><td class="crd-td">COD: 4,34, 18,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Muanda</strong></td><td class="crd-td">COD: -5,93, 12,35</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1953AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Belgian Congo provinces of Leopoldville and Equateur (1885AD to 1970AD).</figcaption>
</figure>

## Belgian Congo: Orientale and Kivu

Table \ref{tab:sub-orientale} records 45 north-eastern Congolese and Great Lakes borderland towns, anchored by Stanleyville/Kisangani (158,5k), Bukavu, Bujumbura, Isiro, Goma and Kindu [@CongoBelge1958Enquete; @Turke2026ContemporaryHistory].

<figure class="crd-table-figure" id="tab:sub-orientale">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kisangani</strong></td><td class="crd-td">COD: 0,55, 25,16</td><td class="crd-td">1,8k</td><td class="crd-td">3,8k</td><td class="crd-td">18,4k</td><td class="crd-td">65k</td><td class="crd-td">116,6k</td><td class="crd-td">158,5k</td><td class="crd-td">158,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bukavu</strong></td><td class="crd-td">COD: -2,56, 28,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">22,8k</td><td class="crd-td">57,3k</td><td class="crd-td">134,9k</td><td class="crd-td">134,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bujumbura (Agglomeration)</strong></td><td class="crd-td">BDI: -3,53, 29,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19k</td><td class="crd-td">49,2k</td><td class="crd-td">95,6k</td><td class="crd-td">95,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Isiro</strong></td><td class="crd-td">COD: 2,78, 27,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,7k</td><td class="crd-td">18,1k</td><td class="crd-td">49,3k</td><td class="crd-td">49,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Goma</strong></td><td class="crd-td">COD: -1,65, 29,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">7,6k</td><td class="crd-td">12k</td><td class="crd-td">48,6k</td><td class="crd-td">48,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kindu</strong></td><td class="crd-td">COD: -2,95, 25,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">11,7k</td><td class="crd-td">22,7k</td><td class="crd-td">42,8k</td><td class="crd-td">42,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bumba</strong></td><td class="crd-td">COD: 2,19, 22,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">8k</td><td class="crd-td">12,8k</td><td class="crd-td">34,7k</td><td class="crd-td">34,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bunia</strong></td><td class="crd-td">COD: 1,6, 30,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">9,3k</td><td class="crd-td">13,3k</td><td class="crd-td">28,8k</td><td class="crd-td">28,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Butembo</strong></td><td class="crd-td">COD: 0,14, 29,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">13k</td><td class="crd-td">27,8k</td><td class="crd-td">27,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Dungu</strong></td><td class="crd-td">COD: 3,61, 28,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">6,3k</td><td class="crd-td">15,4k</td><td class="crd-td">27,1k</td><td class="crd-td">27,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kalima</strong></td><td class="crd-td">COD: -2,56, 26,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Watsa/Kalimva (gold mines)</strong></td><td class="crd-td">COD: 3,09, 29,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,3k</td><td class="crd-td">21,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Beni</strong></td><td class="crd-td">COD: 0,5, 29,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">6,4k</td><td class="crd-td">12,8k</td><td class="crd-td">20k</td><td class="crd-td">20k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Buta</strong></td><td class="crd-td">COD: 2,81, 24,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8,7k</td><td class="crd-td">11,6k</td><td class="crd-td">19,8k</td><td class="crd-td">19,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Basoko</strong></td><td class="crd-td">COD: 1,24, 23,61</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">12,5k</td><td class="crd-td">18,7k</td><td class="crd-td">18,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Rutshuru/Kiwanja</strong></td><td class="crd-td">COD: -1,17, 29,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,1k</td><td class="crd-td">18,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Aketi</strong></td><td class="crd-td">COD: 2,74, 23,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">9k</td><td class="crd-td">14,8k</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bujumbura</strong></td><td class="crd-td">BDI: -3,53, 29,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bondo</strong></td><td class="crd-td">COD: 3,82, 23,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">7,3k</td><td class="crd-td">11,9k</td><td class="crd-td">16,4k</td><td class="crd-td">16,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Uvira</strong></td><td class="crd-td">COD: -3,38, 29,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">7,3k</td><td class="crd-td">11,4k</td><td class="crd-td">15k</td><td class="crd-td">15k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Yangambi</strong></td><td class="crd-td">COD: 0,77, 24,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Lodja</strong></td><td class="crd-td">COD: -3,53, 23,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">7,6k</td><td class="crd-td">11,5k</td><td class="crd-td">14,5k</td><td class="crd-td">14,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Oicha</strong></td><td class="crd-td">COD: 0,7, 29,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,5k</td><td class="crd-td">13,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kingombe</strong></td><td class="crd-td">COD: -2,59, 26,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">12k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Watsa</strong></td><td class="crd-td">COD: 3,04, 29,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">9,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Arua</strong></td><td class="crd-td">UGA: 3,06, 30,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k</td><td class="crd-td">7,4k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kabale</strong></td><td class="crd-td">UGA: -1,26, 29,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">4,2k</td><td class="crd-td">10,7k</td><td class="crd-td">-</td><td class="crd-td">10,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Rutshuru</strong></td><td class="crd-td">COD: -1,19, 29,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Mangina</strong></td><td class="crd-td">COD: 0,57, 29,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyabayonga</strong></td><td class="crd-td">COD: -0,68, 29,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">10,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Hoima</strong></td><td class="crd-td">UGA: 1,48, 31,34</td><td class="crd-td">9,6k</td><td class="crd-td">3,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mahagi</strong></td><td class="crd-td">COD: 2,31, 30,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Niangara</strong></td><td class="crd-td">COD: 3,7, 27,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Shabunda</strong></td><td class="crd-td">COD: -2,7, 27,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Ubundu</strong></td><td class="crd-td">COD: -0,36, 25,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Muramvya</strong></td><td class="crd-td">BDI: -3,27, 29,62</td><td class="crd-td">6,2k</td><td class="crd-td">5,4k</td><td class="crd-td">4,3k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kasese</strong></td><td class="crd-td">UGA: 0,21, 30,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Rubavu</strong></td><td class="crd-td">RWA: -1,69, 29,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Rumonge</strong></td><td class="crd-td">BDI: -3,97, 29,45</td><td class="crd-td">2,8k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ruhengeri</strong></td><td class="crd-td">RWA: -1,5, 29,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Fort Portal</strong></td><td class="crd-td">UGA: 0,49, 30,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Rusizi</strong></td><td class="crd-td">RWA: -2,48, 28,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bururi</strong></td><td class="crd-td">BDI: -3,95, 29,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kibuye</strong></td><td class="crd-td">RWA: -2,06, 29,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kibiro</strong></td><td class="crd-td">UGA: 1,68, 31,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1880AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Belgian Congo provinces of Orientale and Kivu plus Great Lakes borderlands (1885AD to 1970AD).</figcaption>
</figure>

## Belgian Congo: Kasaï and Katanga

Table \ref{tab:sub-kasai-katanga} compiles 51 mining and agricultural centres across southern Congo and the adjoining Zambian Copperbelt, led by Lubumbashi (318k), Mbuji-Mayi (256,2k), Kananga (203,4k), Kitwe (186k), Ndola (159,7k) and Likasi (146,4k) [@CongoBelge1958Enquete; @Turke2026ContemporaryHistory].

<figure class="crd-table-figure" id="tab:sub-kasai-katanga">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lubumbashi</strong></td><td class="crd-td">COD: -11,66, 27,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17k</td><td class="crd-td">103k</td><td class="crd-td">184k</td><td class="crd-td">318k</td><td class="crd-td">318k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Lubumbashi (Agglomeration)</strong></td><td class="crd-td">COD: -11,66, 27,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">101,8k</td><td class="crd-td">182,3k</td><td class="crd-td">267,6k</td><td class="crd-td">267,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mbuji-Mayi</strong></td><td class="crd-td">COD: -6,12, 23,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">14,3k</td><td class="crd-td">54,4k</td><td class="crd-td">256,2k</td><td class="crd-td">256,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kananga</strong></td><td class="crd-td">COD: -5,89, 22,39</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">8,4k</td><td class="crd-td">43,9k</td><td class="crd-td">135,3k</td><td class="crd-td">203,4k</td><td class="crd-td">203,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kitwe</strong></td><td class="crd-td">ZMB: -12,81, 28,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">63,6k</td><td class="crd-td">107,8k</td><td class="crd-td">186k</td><td class="crd-td">186k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ndola</strong></td><td class="crd-td">ZMB: -12,99, 28,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">38,3k</td><td class="crd-td">88,2k</td><td class="crd-td">159,7k</td><td class="crd-td">159,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Likasi</strong></td><td class="crd-td">COD: -10,99, 26,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,6k</td><td class="crd-td">41,9k</td><td class="crd-td">79,1k</td><td class="crd-td">146,4k</td><td class="crd-td">146,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mufulira</strong></td><td class="crd-td">ZMB: -12,56, 28,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40k</td><td class="crd-td">74,1k</td><td class="crd-td">104k</td><td class="crd-td">104k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Chingola</strong></td><td class="crd-td">ZMB: -12,56, 27,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,9k</td><td class="crd-td">50,2k</td><td class="crd-td">95,8k</td><td class="crd-td">95,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Luanshya</strong></td><td class="crd-td">ZMB: -13,15, 28,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">54,7k</td><td class="crd-td">71,2k</td><td class="crd-td">92,2k</td><td class="crd-td">92,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kolwezi</strong></td><td class="crd-td">COD: -10,73, 25,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,9k</td><td class="crd-td">56,5k</td><td class="crd-td">83,4k</td><td class="crd-td">83,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kabinda</strong></td><td class="crd-td">COD: -6,13, 24,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">9k</td><td class="crd-td">18k</td><td class="crd-td">63k</td><td class="crd-td">63k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kalemie</strong></td><td class="crd-td">COD: -5,91, 29,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">13,3k</td><td class="crd-td">36,8k</td><td class="crd-td">62,4k</td><td class="crd-td">62,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kamina</strong></td><td class="crd-td">COD: -8,74, 25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">14,7k</td><td class="crd-td">21,5k</td><td class="crd-td">56,6k</td><td class="crd-td">56,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Mwene-Ditu</strong></td><td class="crd-td">COD: -7, 23,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">7,3k</td><td class="crd-td">26,7k</td><td class="crd-td">45k</td><td class="crd-td">45k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Manono (Agglomeration)</strong></td><td class="crd-td">COD: -7,29, 27,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,2k</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Chililabombwe</strong></td><td class="crd-td">ZMB: -12,37, 27,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,6k</td><td class="crd-td">41,1k</td><td class="crd-td">41,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Lusanga/Luka</strong></td><td class="crd-td">COD: -6,11, 23,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,8k</td><td class="crd-td">37,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kasongo</strong></td><td class="crd-td">COD: -4,43, 26,66</td><td class="crd-td">28k</td><td class="crd-td">8,1k</td><td class="crd-td">6,2k</td><td class="crd-td">11,6k</td><td class="crd-td">12,4k</td><td class="crd-td">37,8k</td><td class="crd-td">37,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kipushi</strong></td><td class="crd-td">COD: -11,76, 27,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">17,3k</td><td class="crd-td">21,5k</td><td class="crd-td">32,9k</td><td class="crd-td">32,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Ngandajika</strong></td><td class="crd-td">COD: -6,74, 23,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,1k</td><td class="crd-td">30k</td><td class="crd-td">30k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Chibuluma</strong></td><td class="crd-td">ZMB: -12,85, 28,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,1k</td><td class="crd-td">26,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kabeya-Kamwanga</strong></td><td class="crd-td">COD: -6, 23,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24k</td><td class="crd-td">24k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bunkeya</strong></td><td class="crd-td">COD: -10,39, 26,97</td><td class="crd-td">18,5k</td><td class="crd-td">4,4k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Manono</strong></td><td class="crd-td">COD: -7,29, 27,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">17,3k</td><td class="crd-td">19,7k</td><td class="crd-td">17,4k</td><td class="crd-td">21,3k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Lupatapata</strong></td><td class="crd-td">COD: -6,21, 23,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,2k</td><td class="crd-td">19,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kambove</strong></td><td class="crd-td">COD: -10,87, 26,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">14,7k</td><td class="crd-td">17,7k</td><td class="crd-td">18,9k</td><td class="crd-td">18,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Tshimbulu</strong></td><td class="crd-td">COD: -6,48, 22,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,1k</td><td class="crd-td">16,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Balamba/Kasumbalela [ZAR]</strong></td><td class="crd-td">COD: -12,22, 27,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,3k</td><td class="crd-td">15,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Nyangwe</strong></td><td class="crd-td">COD: -4,22, 26,18</td><td class="crd-td">15,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kongolo</strong></td><td class="crd-td">COD: -5,38, 27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">8,4k</td><td class="crd-td">13,7k</td><td class="crd-td">14,8k</td><td class="crd-td">14,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Dilolo</strong></td><td class="crd-td">COD: -10,69, 22,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">10k</td><td class="crd-td">14,1k</td><td class="crd-td">14,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Musumba</strong></td><td class="crd-td">COD: -8,4, 23,17</td><td class="crd-td">11,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mulongo</strong></td><td class="crd-td">COD: -7,83, 26,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k</td><td class="crd-td">13,8k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Demba</strong></td><td class="crd-td">COD: -5,49, 22,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,3k</td><td class="crd-td">13,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Lusambo</strong></td><td class="crd-td">COD: -4,97, 23,44</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">6,2k</td><td class="crd-td">8,7k</td><td class="crd-td">10,8k</td><td class="crd-td">13,1k</td><td class="crd-td">13,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Luputa</strong></td><td class="crd-td">COD: -7,17, 23,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kipamba</strong></td><td class="crd-td">COD: -8,2, 26,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Kabalo</strong></td><td class="crd-td">COD: -6,05, 26,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">10,2k</td><td class="crd-td">11,4k</td><td class="crd-td">10k</td><td class="crd-td">12,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Kaniama</strong></td><td class="crd-td">COD: -7,51, 24,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Shinkolobwe</strong></td><td class="crd-td">COD: -11,04, 26,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">9,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,3k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Lubao</strong></td><td class="crd-td">COD: -5,38, 25,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Nyunzu</strong></td><td class="crd-td">COD: -5,95, 28,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">10,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Moba</strong></td><td class="crd-td">COD: -7,04, 29,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8,4k</td><td class="crd-td">9,9k</td><td class="crd-td">10k</td><td class="crd-td">10k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Sakania</strong></td><td class="crd-td">COD: -12,75, 28,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Bukama</strong></td><td class="crd-td">COD: -9,2, 25,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Mwansabombwe</strong></td><td class="crd-td">ZMB: -9,82, 28,76</td><td class="crd-td">7,8k</td><td class="crd-td">5,7k</td><td class="crd-td">4,8k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mwibele</strong></td><td class="crd-td">COD: -7,32, 25,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mansa</strong></td><td class="crd-td">ZMB: -11,21, 28,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Karema</strong></td><td class="crd-td">TZA: -6,82, 30,44</td><td class="crd-td">1,2k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1913AD)</td></tr>
<tr><td class="crd-td"><strong>Solwezi</strong></td><td class="crd-td">ZMB: -12,17, 26,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1951AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in the Belgian Congo provinces of Kasai and Katanga plus Copperbelt borderlands (1885AD to 1970AD).</figcaption>
</figure>

## Portuguese Angola: Cabinda, Congo and Luanda

Table \ref{tab:sub-angola-north} lists 19 settlements across northern Angola and the Cabinda enclave, dominated by the colonial capital Luanda (475,3k in 1970AD) alongside Uíge, Malanje and Cabinda [@Angola1940Censo; @Rodrigues2022WhenModern; @GreatBritain1920PeaceHandbooks].

<figure class="crd-table-figure" id="tab:sub-angola-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Luanda</strong></td><td class="crd-td">AGO: -8,92, 13,38</td><td class="crd-td">17,8k</td><td class="crd-td">20k</td><td class="crd-td">50,6k</td><td class="crd-td">142k</td><td class="crd-td">225k</td><td class="crd-td">475,3k</td><td class="crd-td">475,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Luanda (Agglomeration)</strong></td><td class="crd-td">AGO: -8,92, 13,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">141,7k</td><td class="crd-td">224,6k</td><td class="crd-td">475,3k</td><td class="crd-td">475,3k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Malanje</strong></td><td class="crd-td">AGO: -9,54, 16,37</td><td class="crd-td">3,4k</td><td class="crd-td">4,5k</td><td class="crd-td">7,8k</td><td class="crd-td">14,8k</td><td class="crd-td">19,3k</td><td class="crd-td">31,6k</td><td class="crd-td">31,6k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Cabinda</strong></td><td class="crd-td">AGO: -5,58, 12,2</td><td class="crd-td">4,8k</td><td class="crd-td">4,4k</td><td class="crd-td">4,3k</td><td class="crd-td">6,4k</td><td class="crd-td">13,8k</td><td class="crd-td">21,1k</td><td class="crd-td">21,1k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Uíge</strong></td><td class="crd-td">AGO: -7,61, 15,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">5,5k</td><td class="crd-td">8,7k</td><td class="crd-td">12k</td><td class="crd-td">12k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>N'dalatando</strong></td><td class="crd-td">AGO: -9,3, 14,91</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">4,8k</td><td class="crd-td">7,5k</td><td class="crd-td">7,4k</td><td class="crd-td">7,3k</td><td class="crd-td">7,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Calandula</strong></td><td class="crd-td">AGO: -9,08, 15,96</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Maquela do Zombo</strong></td><td class="crd-td">AGO: -6,06, 15,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Dondo</strong></td><td class="crd-td">AGO: -9,68, 14,42</td><td class="crd-td">4,7k</td><td class="crd-td">4,2k</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Negage</strong></td><td class="crd-td">AGO: -7,76, 15,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Golungo Alto</strong></td><td class="crd-td">AGO: -9,14, 14,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Congo</strong></td><td class="crd-td">AGO: -6,25, 14,23</td><td class="crd-td">3,6k</td><td class="crd-td">3,1k</td><td class="crd-td">2,8k</td><td class="crd-td">4,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4k</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Camabatela</strong></td><td class="crd-td">AGO: -8,19, 15,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Soyo</strong></td><td class="crd-td">AGO: -6,19, 12,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>N'Zeto</strong></td><td class="crd-td">AGO: -7,23, 12,87</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Muxima</strong></td><td class="crd-td">AGO: -9,52, 13,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ambriz</strong></td><td class="crd-td">AGO: -7,85, 13,11</td><td class="crd-td">3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Pungo Andongo</strong></td><td class="crd-td">AGO: -9,67, 15,59</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Massangano</strong></td><td class="crd-td">AGO: -9,63, 14,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1880AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in Portuguese Angola: Cabinda, Congo and Luanda (1885AD to 1970AD).</figcaption>
</figure>

## Portuguese Angola: Benguela, Malanje and Bié

Table \ref{tab:sub-angola-central} documents 18 towns along the central plateau and Benguela Railway corridor, led by Nova Lisboa/Huambo (61,9k), Lobito (59,5k), Benguela (41k) and Silva Porto/Cuito [@Angola1940Censo; @Coates2017PreliminaryConsiderations; @Neto2017EscravosServicais].

<figure class="crd-table-figure" id="tab:sub-angola-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Huambo</strong></td><td class="crd-td">AGO: -12,78, 15,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">28,3k</td><td class="crd-td">38,8k</td><td class="crd-td">61,9k</td><td class="crd-td">61,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Lobito</strong></td><td class="crd-td">AGO: -12,4, 13,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">23,9k</td><td class="crd-td">50,2k</td><td class="crd-td">59,5k</td><td class="crd-td">59,5k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Benguela</strong></td><td class="crd-td">AGO: -12,61, 13,4</td><td class="crd-td">4,6k</td><td class="crd-td">5,4k</td><td class="crd-td">11,2k</td><td class="crd-td">14,7k</td><td class="crd-td">23,3k</td><td class="crd-td">41k</td><td class="crd-td">41k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Cuito</strong></td><td class="crd-td">AGO: -12,38, 16,93</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">6,4k</td><td class="crd-td">9,8k</td><td class="crd-td">14,4k</td><td class="crd-td">18,9k</td><td class="crd-td">18,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Silva Porto</strong></td><td class="crd-td">AGO: -12,39, 16,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,2k</td><td class="crd-td">18,9k</td><td class="crd-td">18,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Bailundo</strong></td><td class="crd-td">AGO: -12,19, 15,86</td><td class="crd-td">13,5k</td><td class="crd-td">9,7k</td><td class="crd-td">6,4k</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Saurimo</strong></td><td class="crd-td">AGO: -9,67, 20,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,8k</td><td class="crd-td">8,9k</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Catumbela</strong></td><td class="crd-td">AGO: -12,43, 13,55</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,2k</td><td class="crd-td">10,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Dundo</strong></td><td class="crd-td">AGO: -7,39, 20,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">9,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Caála</strong></td><td class="crd-td">AGO: -12,85, 15,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">5,6k</td><td class="crd-td">7,3k</td><td class="crd-td">8,9k</td><td class="crd-td">8,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Sumbe</strong></td><td class="crd-td">AGO: -11,2, 13,84</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">3,7k</td><td class="crd-td">5,9k</td><td class="crd-td">6,9k</td><td class="crd-td">7,9k</td><td class="crd-td">7,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Lucapa</strong></td><td class="crd-td">AGO: -8,44, 20,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Gabela</strong></td><td class="crd-td">AGO: -10,85, 14,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">5,2k</td><td class="crd-td">6,1k</td><td class="crd-td">6,9k</td><td class="crd-td">6,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Camacupa</strong></td><td class="crd-td">AGO: -12,02, 17,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Andulo</strong></td><td class="crd-td">AGO: -11,49, 16,69</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">4,1k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Kasanje</strong></td><td class="crd-td">AGO: -9,35, 17,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Cubal</strong></td><td class="crd-td">AGO: -13,03, 14,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Amboim</strong></td><td class="crd-td">AGO: -10,73, 13,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlements in Portuguese Angola: Benguela, Malanje and Bie (1885AD to 1970AD).</figcaption>
</figure>

## Portuguese Angola: Huíla, Moçâmedes and Moxico

Table \ref{tab:sub-angola-south} records 13 southern and eastern Angolan towns and Cunene border crossings, led by Sá da Bandeira/Lubango, Moçâmedes/Namibe, Oshikango and Luena [@Silva2020TheFormal; @Santos2026EntreConquista].

<figure class="crd-table-figure" id="tab:sub-angola-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1885AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lubango</strong></td><td class="crd-td">AGO: -14,9, 13,49</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">5,6k</td><td class="crd-td">11,7k</td><td class="crd-td">15,1k</td><td class="crd-td">31,7k</td><td class="crd-td">31,7k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Moçâmedes</strong></td><td class="crd-td">AGO: -15,21, 12,18</td><td class="crd-td">3,4k</td><td class="crd-td">4,3k</td><td class="crd-td">6,9k</td><td class="crd-td">13,6k</td><td class="crd-td">12,8k</td><td class="crd-td">12,1k</td><td class="crd-td">13,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Oshikango</strong></td><td class="crd-td">NAM: -17,42, 15,89</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Tômbua</strong></td><td class="crd-td">AGO: -15,8, 11,84</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">6,6k</td><td class="crd-td">8,2k</td><td class="crd-td">8,2k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Luena</strong></td><td class="crd-td">AGO: -11,78, 19,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">6,2k</td><td class="crd-td">4,4k</td><td class="crd-td">2,5k</td><td class="crd-td">6,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Quilengues</strong></td><td class="crd-td">AGO: -14,08, 14,08</td><td class="crd-td">3,4k</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Caconda</strong></td><td class="crd-td">AGO: -13,72, 15,07</td><td class="crd-td">4,1k</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Humpata</strong></td><td class="crd-td">AGO: -15,02, 13,37</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Chibia</strong></td><td class="crd-td">AGO: -15,18, 13,69</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,6k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Matala</strong></td><td class="crd-td">AGO: -14,74, 15,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Menongue</strong></td><td class="crd-td">AGO: -14,65, 17,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,9k</td><td class="crd-td">3,5k</td><td class="crd-td">3k</td><td class="crd-td">3,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Rundu</strong></td><td class="crd-td">NAM: -17,93, 19,79</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Ondjiva</strong></td><td class="crd-td">AGO: -17,07, 15,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Individually assessed settlements in Portuguese Angola: Huila, Mocamedes and Moxico (1885AD to 1970AD).</figcaption>
</figure>

# Limitations

Three caveats govern this urban gazetteer. First, 67 of the 361 settlements hold a single dated population observation, so benchmark columns outside their observed date display a hyphen (-). Second, early colonial urban enumerations before 1930AD frequently covered only European residents and taxed male workers, understating African suburban compounds around Libreville, Bangui, Luanda and Léopoldville [@Starr1911TheCongo; @AEFAnnuaire1950; @Angola1940Censo]. Third, both city-proper and post-1950AD agglomeration rows appear for 14 major capitals and ports; users aggregating regional urban totals must select one spatial scope per city rather than summing both rows.

# Conclusion

Taken together, the 361 individually assessed settlements document the rise of colonial port capitals, riverine administrative seats, copperbelt mining cities and late-colonial metropolitan agglomerations across 18 countries in Equatorial and West-Central Africa between 1880AD and 1975AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the assessed site counts and combined interpolated site populations across all 12 sub-regions from 1880AD to 1970AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1880AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>AEF: Colony of Chad (31)</strong></td><td class="crd-td">0</td><td class="crd-td">59,7k</td><td class="crd-td">77,2k</td><td class="crd-td">187,2k</td><td class="crd-td">200,4k</td><td class="crd-td">344,2k</td></tr>
<tr><td class="crd-td"><strong>AEF: Ubangi-Shari (Oubangui-Chari) (36)</strong></td><td class="crd-td">0</td><td class="crd-td">33,1k</td><td class="crd-td">69,5k</td><td class="crd-td">186,4k</td><td class="crd-td">360,1k</td><td class="crd-td">628,5k</td></tr>
<tr><td class="crd-td"><strong>AEF: Middle Congo (Moyen-Congo) (16)</strong></td><td class="crd-td">5,5k</td><td class="crd-td">5k</td><td class="crd-td">27,4k</td><td class="crd-td">217,9k</td><td class="crd-td">309,5k</td><td class="crd-td">662,9k</td></tr>
<tr><td class="crd-td"><strong>AEF: Colony of Gabon (14)</strong></td><td class="crd-td">0</td><td class="crd-td">10,4k</td><td class="crd-td">22,3k</td><td class="crd-td">45,7k</td><td class="crd-td">45,9k</td><td class="crd-td">102,3k</td></tr>
<tr><td class="crd-td"><strong>German Kamerun and Mandate Cameroons (73)</strong></td><td class="crd-td">2,4k</td><td class="crd-td">224,8k</td><td class="crd-td">288k</td><td class="crd-td">822,9k</td><td class="crd-td">927,2k</td><td class="crd-td">1,65M</td></tr>
<tr><td class="crd-td"><strong>Spanish Guinea (Rio Muni and Fernando Po) (7)</strong></td><td class="crd-td">0</td><td class="crd-td">6,2k</td><td class="crd-td">14,6k</td><td class="crd-td">94k</td><td class="crd-td">58,3k</td><td class="crd-td">64,4k</td></tr>
<tr><td class="crd-td"><strong>Belgian Congo: Leopoldville and Equateur (38)</strong></td><td class="crd-td">0</td><td class="crd-td">44,8k</td><td class="crd-td">140,2k</td><td class="crd-td">561,2k</td><td class="crd-td">1,22M</td><td class="crd-td">3,52M</td></tr>
<tr><td class="crd-td"><strong>Belgian Congo: Orientale and Kivu (45)</strong></td><td class="crd-td">4,4k</td><td class="crd-td">18,5k</td><td class="crd-td">112,7k</td><td class="crd-td">334,3k</td><td class="crd-td">435,3k</td><td class="crd-td">865,7k</td></tr>
<tr><td class="crd-td"><strong>Belgian Congo: Kasai and Katanga (51)</strong></td><td class="crd-td">14k</td><td class="crd-td">26,2k</td><td class="crd-td">144,9k</td><td class="crd-td">731k</td><td class="crd-td">1,39M</td><td class="crd-td">2,65M</td></tr>
<tr><td class="crd-td"><strong>Portuguese Angola: Cabinda, Congo and Luanda (19)</strong></td><td class="crd-td">9,6k</td><td class="crd-td">47,9k</td><td class="crd-td">90,4k</td><td class="crd-td">364,6k</td><td class="crd-td">502,9k</td><td class="crd-td">1,03M</td></tr>
<tr><td class="crd-td"><strong>Portuguese Angola: Benguela, Malanje and Bie (18)</strong></td><td class="crd-td">20,2k</td><td class="crd-td">35,8k</td><td class="crd-td">75,1k</td><td class="crd-td">155k</td><td class="crd-td">173,8k</td><td class="crd-td">242,7k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Angola: Huila, Mocamedes and Moxico (13)</strong></td><td class="crd-td">4,2k</td><td class="crd-td">28,8k</td><td class="crd-td">47,6k</td><td class="crd-td">66,7k</td><td class="crd-td">42,4k</td><td class="crd-td">57,5k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (361)</strong></td><td class="crd-td">60,3k</td><td class="crd-td">541,2k</td><td class="crd-td">1,11M</td><td class="crd-td">3,77M</td><td class="crd-td">5,66M</td><td class="crd-td">11,82M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 13.</span> Individually assessed site counts and combined interpolated populations across twelve colonial sub-regions from 1880AD to 1970AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-observation and post-observation benchmarks are marked with a hyphen (-). Dual municipal and agglomeration entries exist for 14 major urban centres and should not be summed simultaneously when calculating city-proper urban totals.

---
title: "Ancient Mesopotamia to 539 BC"
subtitle: "Settlement Gazetteer: 1.200 Catalogued Tells and River Towns (3500BC-539BC)"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: ancient_mesopotamia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_ancient_mesopotamia_spatial.png"
hero_caption: "Spatial distribution of 1.200 catalogued ancient Mesopotamian settlements across five ecological zones in modern Iraq and Syria from 3500BC to 539BC."
hero_label: "fig:hero-settlements-mesopotamia"

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

This gazetteer compiles spatial coordinates and multi-period population series for 1.200 catalogued ancient settlements across Mesopotamia between 3500BC and 539BC (752 in modern Iraq and 448 in eastern Syria). Screened from 1.450 candidate archaeological tells, classical toponyms and radiocarbon loci, the retained settlements span five ecological zones: Lower Mesopotamia (Sumer and Southern Babylonia), Akkad and Central Babylonia, Assyria and the Upper Tigris, the Middle Euphrates and Khabur Jezirah, and the Diyala and East Tigris piedmont. Active catalogued entries expand from 101 early urban sites at 3500BC to 1.068 at 3000BC, 1.085 at 2000BC, 1.099 at 1000BC and 1.130 at 539BC, tracing the shift from southern deltaic canal cities such as Uruk, Ur, Eridu and Lagash toward central Babylonian capitals, northern dry-farming tells along the Khabur and Neo-Assyrian imperial centres on the Upper Tigris.



# Background

Reconstructing the urban network of ancient Mesopotamia requires uniting archaeological tell surveys with historical cuneiform geography. Unlike Graeco-Roman towns recorded in surviving civic charters, Mesopotamian settlements appear across disparate repositories: mounded ceramic surveys across the southern alluvium, declassified satellite hollow-way inventories in the Syrian Jazira, Neo-Assyrian royal itineraries and excavated stratigraphic sequences [@Marchetti2019Rise; @Ur2010Cycles; @Gordin2022Mapa; @Deadman2026Comparativ].

In the southern floodplains of Sumer and Akkad, settlement clustered tightly along raised alluvial levees and engineered feeder canals, leaving tells spaced 10 to 30 km apart across otherwise arid mudflats [@Giosan2025Morphodyna; @Mantellini2024Developmen]. Further north across the Upper Tigris, Khabur and Balikh triangles, settlements sat on limestone ridges and wadi terraces spaced every 2 to 5 km within rain-fed barley corridors [@McMahon2019Early; @Ur2013Ancient]. Bringing both ecological zones into a single bilingual gazetteer exposes long-run shifts between polycentric Sumerian city-states, northern Bronze Age tell kingdoms and first-millennium imperial capitals [@Chelazzi2026Emergence; @Marchetti2024Long].

# Methodology

## Candidate Screening and Spatial Partition

Candidate entries were drawn from the Pleiades Ancient World Gazetteer, the Near East Radiocarbon Database (NERD), published excavation atlases and Mesopotamian linked open data registers [@Gordin2022Mapa; @Deadman2026Comparativ]. Of 1.450 initial candidates located within the 505.275 km² Mesopotamian territorial mask defined over geoBoundaries national outlines [@Runfola2020GeoBoundaries], 250 duplicates, undated sherd scatters or off-period classical loci were excluded, leaving 1.200 catalogued entries.

Every retained settlement is mapped to one of five ecological zones using its decimal coordinates and modern country territory: Lower Mesopotamia (Sumer and Southern Babylonia), Akkad and Central Babylonia, Assyria and the Upper Tigris, the Middle Euphrates and Khabur Jezirah, and the Diyala and East Tigris Piedmont. Combining diacritics on historical transliterations such as Mari and Shuruppak are normalised prior to typesetting so tables render cleanly without glyph substitution.

## Tiered Population Assignment and Benchmarks

Because individual floor-area excavations exist for only a fraction of Mesopotamia's tells [@Ur2014Households; @Marchetti2024Long], the site ledger records harmonised tier values at key horizon slices (3500BC, 3000BC, 2500BC, 2000BC, 1500BC, 1000BC, 630BC and 539BC). Major primary centres carry upper-tier values up to 18k (17.991 at Ur and Uruk; 18k across monumental Nineveh and Babylonian gate loci; 13.748 at Ctesiphon; 6.500 across regional capitals including Ashur, Lagash, Larsa, Isin, Eridu, Umma, Adab, Eshnunna, Mari, Tell Brak, Tell Leilan and Arbela), while mid-sized towns and rural tells carry scaled entries of 1,8k and 654 inhabitants. Dates prior to foundation or following abandonment are marked with a hyphen (-). For readability across portrait pages, Tables 1 to 5 present four evenly spaced chronological benchmarks: 3000BC, 2000BC, 1000BC and 539BC.

# Testing and Validation

Across all 1.200 catalogued sites, rank-size regression on peak recorded populations yields a Zipf slope of $\alpha = 0,477$ ($R^2 = 0,793$), shown in Figure \ref{fig:settlements-rank}. The shallow exponent reflects both the flat polycentric urban hierarchy of Early Dynastic and Old Babylonian Mesopotamia and the upper-tier gazetteer cap of 18k applied to unmeasured metropolitan cores [@Chelazzi2026Emergence; @Marchetti2024Long].

Spatial verification confirms zero stranded coordinates outside the Iraq-Syria Mesopotamian basin and smooth continuity across the northern Khabur and Upper Tigris borderlands. Upstream Pleiades feature imports occasionally list monumental urban gates (such as Handuru Gate at Nineveh and Shalmaneser Gate at Kalhu), named ramparts and survey blocks alongside discrete tells; these are retained verbatim in the tables for provenance traceability while sub-regional totals in the companion review reconcile full urban populations [@Ur2013Ancient; @Schneider2022Nippur].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-mesopotamia-settlements/fig4_ancient_mesopotamia_settlements.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size distribution across 1.200 catalogued Mesopotamian settlements and leading recorded urban loci between 3500BC and 539BC.</figcaption>
</figure>

# Results

## Lower Mesopotamia: Sumer and Southern Babylonia

Table \ref{tab:zone1-sites} catalogues 128 settlements across the Lower Euphrates-Tigris delta south of 32,05° N. Here stand the earliest urban hubs of antiquity - Uruk, Ur, Eridu, Lagash, Tello (Girsu), Umma, Larsa, Adab, Zabala, Shuruppak and Isin - anchored to deltaic marshes and gravity-fed levee canals [@Giosan2025Morphodyna; @Goodman2024Flooding; @Mantellini2024Developmen].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ur</strong></td><td class="crd-td">IRQ: 30,96, 46,11</td><td class="crd-td">17,7k</td><td class="crd-td">18k</td><td class="crd-td">17,5k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Uruk</strong></td><td class="crd-td">IRQ: 31,32, 45,64</td><td class="crd-td">17,7k</td><td class="crd-td">18k</td><td class="crd-td">17,5k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Isin</strong></td><td class="crd-td">IRQ: 31,89, 45,27</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Lagash</strong></td><td class="crd-td">IRQ: 31,42, 46,41</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Lahm</strong></td><td class="crd-td">IRQ: 30,77, 46,37</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Zabala</strong></td><td class="crd-td">IRQ: 31,74, 45,88</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Adab</strong></td><td class="crd-td">IRQ: 31,95, 45,62</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Ubaid</strong></td><td class="crd-td">IRQ: 30,97, 46,03</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Larsa</strong></td><td class="crd-td">IRQ: 31,28, 45,85</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Eridu</strong></td><td class="crd-td">IRQ: 30,82, 46</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Tall Marjab</strong></td><td class="crd-td">IRQ: 30,86, 46,16</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Tell el-'Oueili</strong></td><td class="crd-td">IRQ: 31,24, 45,89</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Tello</strong></td><td class="crd-td">IRQ: 31,56, 46,18</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Umma</strong></td><td class="crd-td">IRQ: 31,67, 45,89</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Šuruppak</strong></td><td class="crd-td">IRQ: 31,78, 45,51</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Patibīri</strong></td><td class="crd-td">IRQ: 31,38, 46</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Ābādān</strong></td><td class="crd-td">IRQ: 30,36, 48,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Abu Fatas</strong></td><td class="crd-td">IRQ: 31,97, 45,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Nina</strong></td><td class="crd-td">IRQ: 31,38, 46,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Jidr</strong></td><td class="crd-td">IRQ: 31,83, 45,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Garšana</strong></td><td class="crd-td">IRQ: 31,44, 46,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Eridu Ur Survey</strong></td><td class="crd-td">IRQ: 30,5, 46,5</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mound at Banāt al-Hassan</strong></td><td class="crd-td">IRQ: 31,55, 45,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Rahi-ilu</strong></td><td class="crd-td">IRQ: 31,5, 44,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Warka Survey</strong></td><td class="crd-td">IRQ: 31,5, 45,5</td><td class="crd-td">1,4k</td><td class="crd-td">5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu al-Majarish</strong></td><td class="crd-td">IRQ: 32,04, 47,54</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Abu Fujairah</strong></td><td class="crd-td">IRQ: 32,02, 47,61</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Qusair</strong></td><td class="crd-td">IRQ: 30,65, 45,79</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Ancient Basra</strong></td><td class="crd-td">IRQ: 30,44, 47,75</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Dar al-Imara</strong></td><td class="crd-td">IRQ: 32,03, 44,4</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Luqait</strong></td><td class="crd-td">IRQ: 30,67, 46,86</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Magloub</strong></td><td class="crd-td">IRQ: 30,79, 47,7</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Mujaibrah</strong></td><td class="crd-td">IRQ: 31,99, 47,66</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Nahr Umar</strong></td><td class="crd-td">IRQ: 30,77, 47,62</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Naisan</strong></td><td class="crd-td">IRQ: 30,89, 47,58</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Nukhaila</strong></td><td class="crd-td">IRQ: 30,5, 47,49</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Salabikh</strong></td><td class="crd-td">IRQ: 30,76, 47,17</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Sha'ib</strong></td><td class="crd-td">IRQ: 30,74, 47,1</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. al-Jabara</strong></td><td class="crd-td">IRQ: 30,78, 46,49</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Aqram</strong></td><td class="crd-td">IRQ: 30,77, 46,84</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Arafiya</strong></td><td class="crd-td">IRQ: 30,65, 46,59</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Jedeidah</strong></td><td class="crd-td">IRQ: 30,77, 46,61</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Shaush</strong></td><td class="crd-td">IRQ: 30,75, 46,74</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Simar</strong></td><td class="crd-td">IRQ: 31,06, 47,43</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Tuwayyil</strong></td><td class="crd-td">IRQ: 30,84, 46,31</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Abu Hail</strong></td><td class="crd-td">IRQ: 31,14, 46,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Khawa</strong></td><td class="crd-td">IRQ: 31,47, 45,73</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Khumbara</strong></td><td class="crd-td">IRQ: 31,09, 46,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Adab</strong></td><td class="crd-td">IRQ: 31,95, 45,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Tine</strong></td><td class="crd-td">IRQ: 31,4, 45,61</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Haush Umm al-Shah'ir</strong></td><td class="crd-td">IRQ: 31,46, 45,49</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hnefisane</strong></td><td class="crd-td">IRQ: 31,33, 45,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imam 'Abbas al-Kurdi</strong></td><td class="crd-td">IRQ: 31,31, 45,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imam Idris</strong></td><td class="crd-td">IRQ: 31,69, 45,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imam Mizhir</strong></td><td class="crd-td">IRQ: 31,5, 45,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imshawwal</strong></td><td class="crd-td">IRQ: 31,19, 45,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan al-Jarna</strong></td><td class="crd-td">IRQ: 32,04, 45,15</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan al-Jerin</strong></td><td class="crd-td">IRQ: 31,56, 45,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan al-Kharita</strong></td><td class="crd-td">IRQ: 31,11, 45,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan al-Turrma</strong></td><td class="crd-td">IRQ: 31,63, 45,29</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan Burhayniyah</strong></td><td class="crd-td">IRQ: 31,84, 45,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan Sbayj</strong></td><td class="crd-td">IRQ: 32,03, 45,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan Tammah</strong></td><td class="crd-td">IRQ: 31,57, 45,3</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishin al-M'ammar</strong></td><td class="crd-td">IRQ: 31,63, 45,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishk al-Basri</strong></td><td class="crd-td">IRQ: 30,89, 47,99</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jezaziyat</strong></td><td class="crd-td">IRQ: 31,66, 45,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kutallu</strong></td><td class="crd-td">IRQ: 31,29, 45,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Medain</strong></td><td class="crd-td">IRQ: 31,44, 45,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mellaha</strong></td><td class="crd-td">IRQ: 31,98, 45,15</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Op. 3</strong></td><td class="crd-td">IRQ: 31,62, 45,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Dulu'</strong></td><td class="crd-td">IRQ: 31,6, 45,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Falhiya</strong></td><td class="crd-td">IRQ: 31,38, 45,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Huwaysh al-Pasha</strong></td><td class="crd-td">IRQ: 31,76, 45,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Kharkhara</strong></td><td class="crd-td">IRQ: 31,7, 45,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Majnuna</strong></td><td class="crd-td">IRQ: 31,69, 45,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Maltus</strong></td><td class="crd-td">IRQ: 31,53, 45,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Mohammed</strong></td><td class="crd-td">IRQ: 31,63, 45,15</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Sussa</strong></td><td class="crd-td">IRQ: 31,46, 45,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qasr Shaqra</strong></td><td class="crd-td">IRQ: 30,3, 46,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Rejibah Shamal</strong></td><td class="crd-td">IRQ: 30,91, 45,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Rough Site Boundary</strong></td><td class="crd-td">IRQ: 30,98, 46,27</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sikne</strong></td><td class="crd-td">IRQ: 31,4, 45,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Suheri</strong></td><td class="crd-td">IRQ: 31,48, 45,59</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Suq al-Fawwar</strong></td><td class="crd-td">IRQ: 31,86, 45,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Suq Lemlum</strong></td><td class="crd-td">IRQ: 31,65, 45,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abla</strong></td><td class="crd-td">IRQ: 31,33, 45,94</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Dukhan</strong></td><td class="crd-td">IRQ: 31,97, 45,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Khumoyis</strong></td><td class="crd-td">IRQ: 31,1, 45,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Qubur</strong></td><td class="crd-td">IRQ: 31,86, 45,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Salabikh</strong></td><td class="crd-td">IRQ: 30,85, 46,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Wadiya</strong></td><td class="crd-td">IRQ: 31,96, 45,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Zumal</strong></td><td class="crd-td">IRQ: 31,49, 45,85</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Dahaila</strong></td><td class="crd-td">IRQ: 30,92, 45,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Dhubay'ah</strong></td><td class="crd-td">IRQ: 31,93, 45,45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Hayyad</strong></td><td class="crd-td">IRQ: 32,05, 45,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Hiz</strong></td><td class="crd-td">IRQ: 31,93, 45,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Zelaga</strong></td><td class="crd-td">IRQ: 31,66, 45,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Baydha</strong></td><td class="crd-td">IRQ: 31,43, 45,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Daima</strong></td><td class="crd-td">IRQ: 31,04, 45,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Dlehim</strong></td><td class="crd-td">IRQ: 32, 45,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Fakhar</strong></td><td class="crd-td">IRQ: 32,02, 45,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hadadiyah</strong></td><td class="crd-td">IRQ: 31,53, 45,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hammam</strong></td><td class="crd-td">IRQ: 31,64, 45,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hib</strong></td><td class="crd-td">IRQ: 31,58, 45,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hnayta</strong></td><td class="crd-td">IRQ: 31,71, 45,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hsayn</strong></td><td class="crd-td">IRQ: 31,61, 45,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Igdayr</strong></td><td class="crd-td">IRQ: 31,46, 45,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Jid</strong></td><td class="crd-td">IRQ: 31,52, 45,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Khorsadah</strong></td><td class="crd-td">IRQ: 31,02, 45,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Libbe</strong></td><td class="crd-td">IRQ: 31,23, 46</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mansuriya</strong></td><td class="crd-td">IRQ: 31,44, 45,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mizan</strong></td><td class="crd-td">IRQ: 31,24, 45,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mrowa'</strong></td><td class="crd-td">IRQ: 31,89, 45,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mugnas</strong></td><td class="crd-td">IRQ: 31,89, 45,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Qal'a Badyar</strong></td><td class="crd-td">IRQ: 31,86, 45,47</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Shaush</strong></td><td class="crd-td">IRQ: 31,16, 46,04</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tabiya</strong></td><td class="crd-td">IRQ: 31,85, 45,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Umm al-Dhab</strong></td><td class="crd-td">IRQ: 31,05, 45,98</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Umqtaif'</strong></td><td class="crd-td">IRQ: 31,49, 45,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Zachariya</strong></td><td class="crd-td">IRQ: 31,57, 45,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Madain</strong></td><td class="crd-td">IRQ: 31,76, 45,98</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khwarnaq</strong></td><td class="crd-td">IRQ: 31,93, 44,44</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Taarizat A</strong></td><td class="crd-td">IRQ: 31,96, 44,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Brayj</strong></td><td class="crd-td">IRQ: 31,65, 45,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Jezzaz</strong></td><td class="crd-td">IRQ: 31,66, 45,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Khezi</strong></td><td class="crd-td">IRQ: 31,76, 45,38</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Wawiya</strong></td><td class="crd-td">IRQ: 31,26, 45,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm es-Siba'</strong></td><td class="crd-td">IRQ: 31,09, 46,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued settlements in Lower Mesopotamia (Sumer and Southern Babylonia) from 3000BC to 539BC.</figcaption>
</figure>

## Akkad and Central Babylonia

Table \ref{tab:zone2-sites} lists 172 settlements across the narrow Euphrates-Tigris neck between Nippur, Kish, Babylon, Sippar, Opis and Ctesiphon. As salinisation curtailed productivity in southernmost Sumer during the second millennium BC, central Babylonia became the demographic heartland of Old and Neo-Babylonian statehood [@Schneider2022Nippur; @Gordin2022Mapa; @Marchetti2024Long].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Melem-kurukurra-dulla</strong></td><td class="crd-td">IRQ: 32,55, 44,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Ugal-amaru</strong></td><td class="crd-td">IRQ: 32,76, 44,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Imgur-Marduk</strong></td><td class="crd-td">IRQ: 32,13, 45,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Nēmed-Enlil</strong></td><td class="crd-td">IRQ: 32,54, 44,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Baduldua</strong></td><td class="crd-td">IRQ: 33,06, 44,26</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">17,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Untitled</strong></td><td class="crd-td">IRQ: 32,5, 44,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,9k</td></tr>
<tr><td class="crd-td"><strong>Veh Ardashir</strong></td><td class="crd-td">IRQ: 33,1, 44,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Ctesiphon</strong></td><td class="crd-td">IRQ: 33,09, 44,58</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Tell Ischali</strong></td><td class="crd-td">IRQ: 33,32, 44,54</td><td class="crd-td">1,4k</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Jemdet Nasr</strong></td><td class="crd-td">IRQ: 32,72, 44,78</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Mashkan-Shapir</strong></td><td class="crd-td">IRQ: 32,41, 45,22</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell Uqair</strong></td><td class="crd-td">IRQ: 32,78, 44,66</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>‘Sumere’</strong></td><td class="crd-td">IRQ: 34,2, 43,88</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Salabikh</strong></td><td class="crd-td">IRQ: 32,25, 45,05</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Pašime</strong></td><td class="crd-td">IRQ: 32,39, 47,15</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Iri-sagrig</strong></td><td class="crd-td">IRQ: 32,15, 45,37</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tell Yassir</strong></td><td class="crd-td">IRQ: 32,56, 45,1</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,9k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Borsippa</strong></td><td class="crd-td">IRQ: 32,39, 44,34</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Nērebtum</strong></td><td class="crd-td">IRQ: 33,3, 44,58</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Puzriš-Dagan</strong></td><td class="crd-td">IRQ: 32,06, 45,29</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Shaduppum</strong></td><td class="crd-td">IRQ: 33,31, 44,47</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Dur-galzu</strong></td><td class="crd-td">IRQ: 33,36, 44,2</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Idu</strong></td><td class="crd-td">IRQ: 33,64, 42,82</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Sippar-Amnanum</strong></td><td class="crd-td">IRQ: 33,1, 44,3</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Bagdata</strong></td><td class="crd-td">IRQ: 33,32, 44,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Hargawi</strong></td><td class="crd-td">IRQ: 33,06, 44,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Mahmudiya</strong></td><td class="crd-td">IRQ: 33,05, 44,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Karbalā'</strong></td><td class="crd-td">IRQ: 32,5, 43,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Umfuggar</strong></td><td class="crd-td">IRQ: 32,91, 44,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Khay</strong></td><td class="crd-td">IRQ: 32,31, 45,61</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Dilbat</strong></td><td class="crd-td">IRQ: 32,3, 44,47</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Ishan al-Khara</strong></td><td class="crd-td">IRQ: 32,54, 44,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Marad</strong></td><td class="crd-td">IRQ: 32,08, 44,79</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Qubur</strong></td><td class="crd-td">IRQ: 33,15, 44,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Itwayba</strong></td><td class="crd-td">IRQ: 32,8, 44,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Laham</strong></td><td class="crd-td">IRQ: 32,05, 45,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tulul Abu Adhem</strong></td><td class="crd-td">IRQ: 32,31, 45,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tulul Khattab</strong></td><td class="crd-td">IRQ: 33,48, 44,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Nippur Survey</strong></td><td class="crd-td">IRQ: 32,5, 45,5</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sittace</strong></td><td class="crd-td">IRQ: 34,09, 44,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Daym</strong></td><td class="crd-td">IRQ: 32,65, 44,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tell Aswad</strong></td><td class="crd-td">IRQ: 33,23, 44,32</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tell Suraysur</strong></td><td class="crd-td">IRQ: 32,67, 44,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>'Abū Ma'lāk</strong></td><td class="crd-td">IRQ: 33,14, 44,33</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Abu Rejaib</strong></td><td class="crd-td">IRQ: 32,94, 44,5</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Akrel Ajedeh</strong></td><td class="crd-td">IRQ: 33,21, 44,01</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>al-Antariyah</strong></td><td class="crd-td">IRQ: 32,07, 47,5</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Tar Caves</strong></td><td class="crd-td">IRQ: 32,48, 43,78</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Chagha Sefid</strong></td><td class="crd-td">IRQ: 32,67, 47,25</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Chogha Duzd</strong></td><td class="crd-td">IRQ: 32,63, 47,18</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Duwair</strong></td><td class="crd-td">IRQ: 33,19, 44,07</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>El Fet'hha</strong></td><td class="crd-td">IRQ: 33,63, 44,61</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Jarjaraiyeh</strong></td><td class="crd-td">IRQ: 32,75, 45,29</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Sved Derwed</strong></td><td class="crd-td">IRQ: 33,21, 44,14</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. al-Wilaya</strong></td><td class="crd-td">IRQ: 32,31, 45,66</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Aswad</strong></td><td class="crd-td">IRQ: 33,52, 43,04</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Patak</strong></td><td class="crd-td">IRQ: 32,5, 47,49</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tafuleh</strong></td><td class="crd-td">IRQ: 32,59, 47,3</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tel Dthehheb</strong></td><td class="crd-td">IRQ: 33,03, 44,48</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tel Kidri</strong></td><td class="crd-td">IRQ: 33,53, 44,57</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tel Nihar</strong></td><td class="crd-td">IRQ: 33,1, 44,1</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tel Sukniyeh</strong></td><td class="crd-td">IRQ: 33,25, 44,09</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tel Suwr</strong></td><td class="crd-td">IRQ: 32,99, 44,5</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tepe Farukhabad</strong></td><td class="crd-td">IRQ: 32,59, 47,22</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tepe Mohr</strong></td><td class="crd-td">IRQ: 32,54, 47,32</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tulul Al-Ukhaidir</strong></td><td class="crd-td">IRQ: 32,45, 43,58</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Abū Biyāriq</strong></td><td class="crd-td">IRQ: 32,62, 44,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abū Suraydib</strong></td><td class="crd-td">IRQ: 32,57, 44,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Musarrahat</strong></td><td class="crd-td">IRQ: 34,11, 43,98</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Argūb 'Abbar</strong></td><td class="crd-td">IRQ: 32,43, 44,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ashnas</strong></td><td class="crd-td">IRQ: 34,29, 43,85</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Balkuwara Palace</strong></td><td class="crd-td">IRQ: 34,14, 43,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bwaydhat al-Rubaydha</strong></td><td class="crd-td">IRQ: 32,44, 45,65</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ghergouz</strong></td><td class="crd-td">IRQ: 32,59, 44,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hilala</strong></td><td class="crd-td">IRQ: 32,58, 44,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hutlaifa</strong></td><td class="crd-td">IRQ: 32,62, 44,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imām 'Abbās</strong></td><td class="crd-td">IRQ: 32,28, 44,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imam Abu 'Arruj</strong></td><td class="crd-td">IRQ: 33,39, 44,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imam Abu Idris</strong></td><td class="crd-td">IRQ: 33,74, 44,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan Abu Basur al-Gharbi</strong></td><td class="crd-td">IRQ: 32,25, 45,48</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan al-Khor</strong></td><td class="crd-td">IRQ: 32,39, 45,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan al-Wa'y</strong></td><td class="crd-td">IRQ: 32,44, 45,06</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishān Gurtīyah</strong></td><td class="crd-td">IRQ: 32,7, 44,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishan Madhrub</strong></td><td class="crd-td">IRQ: 32,4, 45,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishān Mizya</strong></td><td class="crd-td">IRQ: 32,59, 44,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishān Rubaij</strong></td><td class="crd-td">IRQ: 32,55, 44,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Istablat</strong></td><td class="crd-td">IRQ: 34,08, 43,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jemdet Gumrah</strong></td><td class="crd-td">IRQ: 32,63, 44,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jer'at Hayf</strong></td><td class="crd-td">IRQ: 32,17, 45,66</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Malmooze</strong></td><td class="crd-td">IRQ: 32,63, 44,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Marwid</strong></td><td class="crd-td">IRQ: 34,28, 42,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mudjida</strong></td><td class="crd-td">IRQ: 32,36, 43,79</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Musalla T1042</strong></td><td class="crd-td">IRQ: 34,34, 43,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Niliyah</strong></td><td class="crd-td">IRQ: 32,5, 44,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qasr al-Ja'fari</strong></td><td class="crd-td">IRQ: 34,39, 43,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qasr Khabbaz</strong></td><td class="crd-td">IRQ: 33,55, 42,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qubbat al-Sulaybiyya</strong></td><td class="crd-td">IRQ: 34,23, 43,8</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qusair</strong></td><td class="crd-td">IRQ: 32,5, 43,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Shcutha</strong></td><td class="crd-td">IRQ: 32,59, 44,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Shishin</strong></td><td class="crd-td">IRQ: 33,95, 42,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. 'Amra</strong></td><td class="crd-td">IRQ: 32,53, 45,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu 'Allma</strong></td><td class="crd-td">IRQ: 32,23, 45,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Dhaba'</strong></td><td class="crd-td">IRQ: 32,28, 45,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abū Dhaba'</strong></td><td class="crd-td">IRQ: 33,59, 44,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Dhuwari</strong></td><td class="crd-td">IRQ: 32,23, 45,3</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Ghadara</strong></td><td class="crd-td">IRQ: 32,46, 45,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Ghuraib</strong></td><td class="crd-td">IRQ: 32,75, 45,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abū Jelāmīd</strong></td><td class="crd-td">IRQ: 33,84, 44,32</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Kelb</strong></td><td class="crd-td">IRQ: 32,41, 45,73</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abū Khamīs</strong></td><td class="crd-td">IRQ: 32,45, 44,79</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Rusiyat</strong></td><td class="crd-td">IRQ: 32,56, 45,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abū Sukhīya</strong></td><td class="crd-td">IRQ: 33,22, 44,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Adhem</strong></td><td class="crd-td">IRQ: 32,46, 44,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ain Khosh</strong></td><td class="crd-td">IRQ: 32,41, 47,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Arsan</strong></td><td class="crd-td">IRQ: 32,31, 45,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Baghi</strong></td><td class="crd-td">IRQ: 33,51, 44,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Dhahab</strong></td><td class="crd-td">IRQ: 33,66, 44,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Dubaysiya</strong></td><td class="crd-td">IRQ: 32,4, 45,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Halfayah</strong></td><td class="crd-td">IRQ: 33,59, 44,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Mas'oud</strong></td><td class="crd-td">IRQ: 33,64, 44,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Mujelibah</strong></td><td class="crd-td">IRQ: 33,71, 44,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Muradiyah</strong></td><td class="crd-td">IRQ: 33,47, 44,38</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Muraydiyah</strong></td><td class="crd-td">IRQ: 32,71, 44,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Sa'id</strong></td><td class="crd-td">IRQ: 32,21, 45,01</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Selu'</strong></td><td class="crd-td">IRQ: 32,19, 45,45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al Habbis al-Sharqi</strong></td><td class="crd-td">IRQ: 32,93, 44,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Albu Sahr</strong></td><td class="crd-td">IRQ: 32,63, 43,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ali Nair-e Bala</strong></td><td class="crd-td">IRQ: 32,45, 47,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Anbar</strong></td><td class="crd-td">IRQ: 33,38, 43,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. as-Said</strong></td><td class="crd-td">IRQ: 32,66, 44,38</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Dab'a</strong></td><td class="crd-td">IRQ: 32,27, 43,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Daud</strong></td><td class="crd-td">IRQ: 32,63, 44,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Dhahiya</strong></td><td class="crd-td">IRQ: 32,07, 45,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. es-Sirife</strong></td><td class="crd-td">IRQ: 32,21, 45,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. es-Su'aydan</strong></td><td class="crd-td">IRQ: 32,49, 44,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ghafil</strong></td><td class="crd-td">IRQ: 32,45, 44,99</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hamayma</strong></td><td class="crd-td">IRQ: 32,18, 45,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Harba</strong></td><td class="crd-td">IRQ: 33,99, 44,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Humadi</strong></td><td class="crd-td">IRQ: 32,83, 44,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. i-Blal</strong></td><td class="crd-td">IRQ: 33,67, 44,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Isheiri</strong></td><td class="crd-td">IRQ: 33,43, 44,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ishnayt</strong></td><td class="crd-td">IRQ: 33,77, 44,29</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Jeshiyat</strong></td><td class="crd-td">IRQ: 32,84, 44,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Jifaifi</strong></td><td class="crd-td">IRQ: 33,41, 43,79</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Khalfat</strong></td><td class="crd-td">IRQ: 32,67, 44,67</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Khazineh</strong></td><td class="crd-td">IRQ: 32,51, 47,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Khfay</strong></td><td class="crd-td">IRQ: 32,53, 44,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Kurr</strong></td><td class="crd-td">IRQ: 33,58, 44,27</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mahari Ismayan</strong></td><td class="crd-td">IRQ: 32,61, 44,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mirza</strong></td><td class="crd-td">IRQ: 32,11, 45,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Miskīn</strong></td><td class="crd-td">IRQ: 33,82, 44,25</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Nimrud</strong></td><td class="crd-td">IRQ: 32,76, 44,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Nuwaija</strong></td><td class="crd-td">IRQ: 32,4, 45,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Rishad</strong></td><td class="crd-td">IRQ: 33,24, 44,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Sudairah</strong></td><td class="crd-td">IRQ: 33,4, 44,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Suraysur</strong></td><td class="crd-td">IRQ: 32,89, 44,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Twagiyyāt</strong></td><td class="crd-td">IRQ: 32,88, 44,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Umm al-Buni</strong></td><td class="crd-td">IRQ: 32,53, 45,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ta's al-Kuffar</strong></td><td class="crd-td">IRQ: 34,32, 42,28</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-'Aliq</strong></td><td class="crd-td">IRQ: 34,24, 43,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Abu Thailah</strong></td><td class="crd-td">IRQ: 33,22, 44,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulūl al-Hibir</strong></td><td class="crd-td">IRQ: 33,9, 44,25</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul al-Jifjaf</strong></td><td class="crd-td">IRQ: 33,67, 44,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul al-Mijdadi N</strong></td><td class="crd-td">IRQ: 33,12, 44,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Jumali</strong></td><td class="crd-td">IRQ: 32,5, 45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Sutail</strong></td><td class="crd-td">IRQ: 32,27, 45,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tuweirij</strong></td><td class="crd-td">IRQ: 32,47, 44,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Aulad</strong></td><td class="crd-td">IRQ: 32,53, 44,67</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Baidh</strong></td><td class="crd-td">IRQ: 32,58, 44,85</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Urash Ziggurat</strong></td><td class="crd-td">IRQ: 32,16, 44,46</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ziblayat</strong></td><td class="crd-td">IRQ: 32,28, 45,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Hadithah</strong></td><td class="crd-td">IRQ: 34,13, 42,39</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements in Akkad and Central Babylonia from 3000BC to 539BC.</figcaption>
</figure>

## Assyria and the Upper Tigris

Table \ref{tab:zone3-sites} compiles 296 settlements across the Assyrian heartland and Upper Tigris piedmont, encompassing Ashur, Nineveh, Kalhu (Nimrud), Arbela (Erbil), Tell Taya, Singara and Khirbet Qasrij. Royal aqueducts and state-directed village foundations turned this dry-farming belt into an imperial core during the ninth to seventh centuries BC [@Ur2013Ancient; @Dercksen2022Golden; @Sotysiak2015Antemortem].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aššur-mušalbir-palê-šarri-ēpišīšu-nāṣir-ummānīšu</strong></td><td class="crd-td">IRQ: 36,5, 43,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Handuru Gate</strong></td><td class="crd-td">IRQ: 36,34, 43,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Shalmaneser Gate</strong></td><td class="crd-td">IRQ: 36,1, 43,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Arzuhin</strong></td><td class="crd-td">IRQ: 35,54, 44,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Ashur</strong></td><td class="crd-td">IRQ: 35,46, 43,26</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Bash Tapa</strong></td><td class="crd-td">IRQ: 35,88, 44,01</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Gird-i Bazar</strong></td><td class="crd-td">IRQ: 36,14, 45,14</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Jarmo</strong></td><td class="crd-td">IRQ: 35,57, 44,92</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Qasrij</strong></td><td class="crd-td">IRQ: 36,64, 42,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Lair</strong></td><td class="crd-td">IRQ: 34,69, 44,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Qattara</strong></td><td class="crd-td">IRQ: 34,7, 43,33</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Taya</strong></td><td class="crd-td">IRQ: 36,33, 42,49</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Arbela</strong></td><td class="crd-td">IRQ: 36,19, 44,01</td><td class="crd-td">5k</td><td class="crd-td">5,9k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Bazmusian</strong></td><td class="crd-td">IRQ: 36,06, 44,7</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Hassuna</strong></td><td class="crd-td">IRQ: 36,46, 42,96</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Telul eth-Thalathat</strong></td><td class="crd-td">IRQ: 36,41, 42,63</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Tall Šanšī</strong></td><td class="crd-td">IRQ: 36,5, 43,5</td><td class="crd-td">6,5k</td><td class="crd-td">6,1k</td><td class="crd-td">5,3k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Arrapha</strong></td><td class="crd-td">IRQ: 35,47, 44,4</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,9k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Bestansur</strong></td><td class="crd-td">IRQ: 35,38, 45,65</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,9k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Khinis</strong></td><td class="crd-td">IRQ: 36,76, 43,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Larak</strong></td><td class="crd-td">IRQ: 34,96, 43,62</td><td class="crd-td">5k</td><td class="crd-td">6,4k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balāwāt</strong></td><td class="crd-td">IRQ: 36,23, 43,4</td><td class="crd-td">2,2k</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Kār-Tukultī-Ninurta</strong></td><td class="crd-td">IRQ: 35,5, 43,27</td><td class="crd-td">1,4k</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Fakhar</strong></td><td class="crd-td">IRQ: 35,38, 43,98</td><td class="crd-td">2,2k</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Ali</strong></td><td class="crd-td">IRQ: 35,38, 43,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">5,6k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Takrit/Birta</strong></td><td class="crd-td">IRQ: 34,61, 43,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Gaugamela</strong></td><td class="crd-td">IRQ: 36,57, 43,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Dohuk</strong></td><td class="crd-td">IRQ: 36,86, 42,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Dur-Bel-Harran-belu-uṣur</strong></td><td class="crd-td">IRQ: 36,05, 42,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Šibaniba</strong></td><td class="crd-td">IRQ: 36,43, 43,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Tarbiṣu</strong></td><td class="crd-td">IRQ: 36,41, 43,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Zamahu</strong></td><td class="crd-td">IRQ: 36,26, 42,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Wajnam</strong></td><td class="crd-td">IRQ: 36,68, 42,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Kilizu</strong></td><td class="crd-td">IRQ: 36,1, 43,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tel Afar</strong></td><td class="crd-td">IRQ: 36,37, 42,44</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Dhahir</strong></td><td class="crd-td">IRQ: 36,84, 42,49</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Bīt-Adad-erība</strong></td><td class="crd-td">IRQ: 36,69, 42,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Girmua</strong></td><td class="crd-td">IRQ: 36,67, 43,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Kar-Mullissu</strong></td><td class="crd-td">IRQ: 36,31, 43,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Qaryat al-Lak</strong></td><td class="crd-td">IRQ: 36,3, 43,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Mahuz</strong></td><td class="crd-td">IRQ: 35,49, 43,84</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Jarabad tepe</strong></td><td class="crd-td">IRQ: 37,21, 44,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Matarrah</strong></td><td class="crd-td">IRQ: 35,38, 44,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bingird</strong></td><td class="crd-td">IRQ: 35,53, 45,34</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Djaldyan Tepe</strong></td><td class="crd-td">IRQ: 36,88, 45,15</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Ed Dem</strong></td><td class="crd-td">IRQ: 36,07, 44,96</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Gali Ali Beck Cave</strong></td><td class="crd-td">IRQ: 36,63, 44,46</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Gök Tepe</strong></td><td class="crd-td">IRQ: 35,85, 44,83</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Hatra</strong></td><td class="crd-td">IRQ: 35,59, 42,72</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kalespi</strong></td><td class="crd-td">IRQ: 35,55, 45,3</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kaula Kandal</strong></td><td class="crd-td">IRQ: 35,8, 43,65</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Qara Tepe Kun</strong></td><td class="crd-td">IRQ: 36,11, 45,01</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Qarashina</strong></td><td class="crd-td">IRQ: 36,13, 44,94</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Qasr Serij</strong></td><td class="crd-td">IRQ: 36,54, 42,52</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Rowanduz Cave 4</strong></td><td class="crd-td">IRQ: 36,64, 44,66</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Serkhmah</strong></td><td class="crd-td">IRQ: 36,17, 44,76</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Sheetha</strong></td><td class="crd-td">IRQ: 36,08, 43,6</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. al-Shallalat</strong></td><td class="crd-td">IRQ: 36,46, 43,2</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Aqrah</strong></td><td class="crd-td">IRQ: 35,5, 43,42</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Bakr Āwa</strong></td><td class="crd-td">IRQ: 35,22, 45,94</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Bingird</strong></td><td class="crd-td">IRQ: 36,07, 45,04</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Ibrahim Qays</strong></td><td class="crd-td">IRQ: 35,77, 43,55</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Meldah</strong></td><td class="crd-td">IRQ: 36,25, 42,86</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Qala Dizeh</strong></td><td class="crd-td">IRQ: 36,19, 45,11</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Rigm</strong></td><td class="crd-td">IRQ: 36,71, 42,81</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Shimshara</strong></td><td class="crd-td">IRQ: 36,2, 44,94</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Sotto</strong></td><td class="crd-td">IRQ: 36,35, 42,34</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Tlai</strong></td><td class="crd-td">IRQ: 36,56, 44,32</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Uskof</strong></td><td class="crd-td">IRQ: 36,6, 43,1</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Kaif</strong></td><td class="crd-td">IRQ: 36,49, 43,12</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Telul al-Bag</strong></td><td class="crd-td">IRQ: 35,43, 43,11</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Surezha</strong></td><td class="crd-td">IRQ: 36, 43,89</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Abu Kula</strong></td><td class="crd-td">IRQ: 36,67, 42,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bab</strong></td><td class="crd-td">IRQ: 36,17, 44,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Babkhal</strong></td><td class="crd-td">IRQ: 36,71, 44,48</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Barak</strong></td><td class="crd-td">IRQ: 36,74, 43,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Barda Balka</strong></td><td class="crd-td">IRQ: 35,56, 44,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Barghut</strong></td><td class="crd-td">IRQ: 35,35, 44,25</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bassetki</strong></td><td class="crd-td">IRQ: 36,96, 42,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bestansur</strong></td><td class="crd-td">IRQ: 35,38, 45,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bin Gird-i Muan</strong></td><td class="crd-td">IRQ: 35,38, 45,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Canal A - Kawr Gosk</strong></td><td class="crd-td">IRQ: 36,35, 43,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Dabak Tepa</strong></td><td class="crd-td">IRQ: 35,43, 44,27</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Dark Cave in Hazar Merd</strong></td><td class="crd-td">IRQ: 35,49, 45,31</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Eski Mosul</strong></td><td class="crd-td">IRQ: 36,52, 42,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gaikand</strong></td><td class="crd-td">IRQ: 35,63, 45,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gir-e Pan</strong></td><td class="crd-td">IRQ: 36,78, 42,94</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gir Fir</strong></td><td class="crd-td">IRQ: 36,66, 42,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gir Matbakh</strong></td><td class="crd-td">IRQ: 36,87, 42,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gird-i Qulkhurd</strong></td><td class="crd-td">IRQ: 35,36, 45,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gird-i Saraw</strong></td><td class="crd-td">IRQ: 35,37, 45,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gird 'Alī Āghā</strong></td><td class="crd-td">IRQ: 36,45, 43,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gird Banhlik</strong></td><td class="crd-td">IRQ: 36,67, 44,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gird Chay</strong></td><td class="crd-td">IRQ: 36,5, 43,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gird Zikhy Swasnan</strong></td><td class="crd-td">IRQ: 36,53, 44,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Girdi Pyriadi</strong></td><td class="crd-td">IRQ: 35,51, 44,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishkaft Hajiyah</strong></td><td class="crd-td">IRQ: 36,73, 44,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jafrakani Kon</strong></td><td class="crd-td">IRQ: 36,71, 44,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jerrahiyeh</strong></td><td class="crd-td">IRQ: 36,7, 43,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kani Shai</strong></td><td class="crd-td">IRQ: 35,54, 45,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kh. Salih</strong></td><td class="crd-td">IRQ: 36,71, 42,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khan Ahmed Khan Cave</strong></td><td class="crd-td">IRQ: 35,32, 46,06</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kharaba al-Kabir</strong></td><td class="crd-td">IRQ: 36,64, 42,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kharaba Tibn</strong></td><td class="crd-td">IRQ: 36,73, 42,45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Abalah 'Othoman</strong></td><td class="crd-td">IRQ: 36,24, 42,94</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet al-Farisiyah</strong></td><td class="crd-td">IRQ: 35,97, 42,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet al Thair</strong></td><td class="crd-td">IRQ: 36,06, 42,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Bashmanah</strong></td><td class="crd-td">IRQ: 35,92, 43,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Jaddalah</strong></td><td class="crd-td">IRQ: 35,81, 43,06</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Khan al-Zananzil</strong></td><td class="crd-td">IRQ: 36,45, 42,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Msihli</strong></td><td class="crd-td">IRQ: 35,4, 43,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Nofan</strong></td><td class="crd-td">IRQ: 35,19, 43,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Qbr Abu Naif</strong></td><td class="crd-td">IRQ: 35,86, 43,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Sheikh Ibrahim</strong></td><td class="crd-td">IRQ: 36,28, 42,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Za Razil</strong></td><td class="crd-td">IRQ: 36,28, 43,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Zazia</strong></td><td class="crd-td">IRQ: 35,99, 42,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khriba</strong></td><td class="crd-td">IRQ: 35,65, 43,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kisik Kupru</strong></td><td class="crd-td">IRQ: 36,47, 42,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kul Tepe</strong></td><td class="crd-td">IRQ: 36,35, 42,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Lamarkazi</strong></td><td class="crd-td">IRQ: 35,28, 45,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Majub</strong></td><td class="crd-td">IRQ: 35,46, 43,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Maluan</strong></td><td class="crd-td">IRQ: 35,32, 45,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Merquly</strong></td><td class="crd-td">IRQ: 35,75, 45,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Muqable I</strong></td><td class="crd-td">IRQ: 36,92, 42,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Muṣaṣir</strong></td><td class="crd-td">IRQ: 36,8, 44,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Paikuli</strong></td><td class="crd-td">IRQ: 35,1, 45,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Palegawra</strong></td><td class="crd-td">IRQ: 35,6, 45,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Pir Bob I</strong></td><td class="crd-td">IRQ: 36,62, 43,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Pisdeli Tepe</strong></td><td class="crd-td">IRQ: 36, 45,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qadimli</strong></td><td class="crd-td">IRQ: 36,31, 42,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'a Jabbar</strong></td><td class="crd-td">IRQ: 35,17, 43,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qala Shirwana</strong></td><td class="crd-td">IRQ: 34,61, 45,31</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qala Thirthir</strong></td><td class="crd-td">IRQ: 35,84, 42,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qalbaza Tepe</strong></td><td class="crd-td">IRQ: 35,27, 45,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qaqiyah</strong></td><td class="crd-td">IRQ: 35,29, 43,38</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Satu Qala</strong></td><td class="crd-td">IRQ: 35,87, 44,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Shejara</strong></td><td class="crd-td">IRQ: 35,22, 43,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sutik Tepe</strong></td><td class="crd-td">IRQ: 35,24, 45,85</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T.</strong></td><td class="crd-td">IRQ: 36,02, 43,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. 'Aqrah</strong></td><td class="crd-td">IRQ: 35,87, 43,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. A'ail</strong></td><td class="crd-td">IRQ: 35,53, 43,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Winni</strong></td><td class="crd-td">IRQ: 36,63, 42,47</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. ad-Daymah</strong></td><td class="crd-td">IRQ: 35,95, 44,99</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Aswad</strong></td><td class="crd-td">IRQ: 35,42, 43,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Farḥa</strong></td><td class="crd-td">IRQ: 35,27, 43,48</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Ghazzat</strong></td><td class="crd-td">IRQ: 35,43, 43,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Kadīš</strong></td><td class="crd-td">IRQ: 35,39, 43,3</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Khān</strong></td><td class="crd-td">IRQ: 36,31, 43,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Nūl</strong></td><td class="crd-td">IRQ: 35,28, 43,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Amiyan 3</strong></td><td class="crd-td">IRQ: 36,54, 43,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Aqar</strong></td><td class="crd-td">IRQ: 35,53, 43,31</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. as-Seman</strong></td><td class="crd-td">IRQ: 36,43, 42,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Bain Nahrein</strong></td><td class="crd-td">IRQ: 36,79, 44,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Baqrta</strong></td><td class="crd-td">IRQ: 35,95, 43,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Bardiya 4</strong></td><td class="crd-td">IRQ: 36,79, 42,46</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hajji Abdallah</strong></td><td class="crd-td">IRQ: 35,34, 45,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hassuna</strong></td><td class="crd-td">IRQ: 36,07, 43,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Jamma Resh</strong></td><td class="crd-td">IRQ: 36,56, 43,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Kutan</strong></td><td class="crd-td">IRQ: 36,62, 42,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Musifina</strong></td><td class="crd-td">IRQ: 36,79, 42,67</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Nader</strong></td><td class="crd-td">IRQ: 36,17, 44,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Qaraqoz</strong></td><td class="crd-td">IRQ: 36,77, 42,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Shamlu</strong></td><td class="crd-td">IRQ: 35,29, 45,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tanjero</strong></td><td class="crd-td">IRQ: 35,45, 45,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Usaila</strong></td><td class="crd-td">IRQ: 36,83, 42,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Wardhah</strong></td><td class="crd-td">IRQ: 36,37, 42,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T.Haykal Sagir</strong></td><td class="crd-td">IRQ: 35,56, 43,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tall Sa'adiya Sharqi</strong></td><td class="crd-td">IRQ: 35,76, 42,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tel Karshaf</strong></td><td class="crd-td">IRQ: 36, 43,36</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Abta Shamali</strong></td><td class="crd-td">IRQ: 35,98, 42,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Ain Khunazjrat</strong></td><td class="crd-td">IRQ: 35,74, 43,15</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Aliba</strong></td><td class="crd-td">IRQ: 35,67, 42,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Awad</strong></td><td class="crd-td">IRQ: 36,21, 42,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abariya Gharbi</strong></td><td class="crd-td">IRQ: 35,89, 42,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Arabid</strong></td><td class="crd-td">IRQ: 35,21, 42,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Jarathi</strong></td><td class="crd-td">IRQ: 36,14, 42,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Adhamya</strong></td><td class="crd-td">IRQ: 35,5, 42,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ain Shridah</strong></td><td class="crd-td">IRQ: 36,04, 42,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ajri</strong></td><td class="crd-td">IRQ: 35,07, 43,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-'Omryni</strong></td><td class="crd-td">IRQ: 36,16, 42,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Athori</strong></td><td class="crd-td">IRQ: 35,71, 42,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Baye'a</strong></td><td class="crd-td">IRQ: 36,2, 43,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Ghuzlaniyat</strong></td><td class="crd-td">IRQ: 35,03, 42,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Hafel</strong></td><td class="crd-td">IRQ: 36,06, 42,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Harim</strong></td><td class="crd-td">IRQ: 36,08, 43,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Khirab</strong></td><td class="crd-td">IRQ: 35,73, 43,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Khwain</strong></td><td class="crd-td">IRQ: 36,06, 43,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Mowelhi</strong></td><td class="crd-td">IRQ: 35,22, 42,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Rahmaniya</strong></td><td class="crd-td">IRQ: 36,19, 42,8</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Rug'ai</strong></td><td class="crd-td">IRQ: 35,76, 42,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Shair</strong></td><td class="crd-td">IRQ: 36,14, 42,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Al-Swaje</strong></td><td class="crd-td">IRQ: 35,31, 42,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Sybat</strong></td><td class="crd-td">IRQ: 34,82, 43,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Anjor</strong></td><td class="crd-td">IRQ: 36, 42,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Arpachiyah</strong></td><td class="crd-td">IRQ: 36,38, 43,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Aziz</strong></td><td class="crd-td">IRQ: 36,2, 42,45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Belyoz</strong></td><td class="crd-td">IRQ: 36,3, 42,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Buraich</strong></td><td class="crd-td">IRQ: 35,11, 43,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Dam 'Aboosh</strong></td><td class="crd-td">IRQ: 36,2, 42,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Dekhil</strong></td><td class="crd-td">IRQ: 36,22, 42,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Fudhah</strong></td><td class="crd-td">IRQ: 35,64, 43,01</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Gihyfa</strong></td><td class="crd-td">IRQ: 35,36, 42,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Girmish</strong></td><td class="crd-td">IRQ: 35,95, 43,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hachim Junobi</strong></td><td class="crd-td">IRQ: 36,13, 42,3</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hamra</strong></td><td class="crd-td">IRQ: 36,25, 42,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hassein Al-Thud</strong></td><td class="crd-td">IRQ: 35,54, 42,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hilu</strong></td><td class="crd-td">IRQ: 36,17, 42,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jaboqa</strong></td><td class="crd-td">IRQ: 36,12, 42,59</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jedaydah</strong></td><td class="crd-td">IRQ: 35,32, 43,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Kabarli</strong></td><td class="crd-td">IRQ: 36,51, 42,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khalif</strong></td><td class="crd-td">IRQ: 36,07, 42,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khatab</strong></td><td class="crd-td">IRQ: 36,49, 42,82</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khathir</strong></td><td class="crd-td">IRQ: 36,28, 42,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khzamiya</strong></td><td class="crd-td">IRQ: 34,77, 43,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Malha</strong></td><td class="crd-td">IRQ: 35,68, 43,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Marag</strong></td><td class="crd-td">IRQ: 36,6, 42,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mathu Dhabi</strong></td><td class="crd-td">IRQ: 35,02, 43,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mdaraj</strong></td><td class="crd-td">IRQ: 35,93, 42,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mrichaiz</strong></td><td class="crd-td">IRQ: 35,78, 42,59</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mschirfa</strong></td><td class="crd-td">IRQ: 35,94, 42,37</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mshirfa al-Jisir</strong></td><td class="crd-td">IRQ: 35,96, 42,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Qirdishan</strong></td><td class="crd-td">IRQ: 36,58, 42,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ras al-Asir</strong></td><td class="crd-td">IRQ: 35,47, 42,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Rumdhaniyah</strong></td><td class="crd-td">IRQ: 35,67, 42,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Sbiha</strong></td><td class="crd-td">IRQ: 35,16, 43,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Sgalah</strong></td><td class="crd-td">IRQ: 35,61, 42,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Shanan</strong></td><td class="crd-td">IRQ: 36,4, 42,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Shewa</strong></td><td class="crd-td">IRQ: 36,03, 42,28</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Shikhan</strong></td><td class="crd-td">IRQ: 35,54, 42,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Shirea</strong></td><td class="crd-td">IRQ: 35,26, 42,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Sitak</strong></td><td class="crd-td">IRQ: 35,64, 45,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Slubi</strong></td><td class="crd-td">IRQ: 35,86, 42,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Tamri</strong></td><td class="crd-td">IRQ: 35,01, 43,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Tar - al-Rufis</strong></td><td class="crd-td">IRQ: 35,08, 43,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Twaim</strong></td><td class="crd-td">IRQ: 36,38, 42,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umilih</strong></td><td class="crd-td">IRQ: 35,77, 43,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm al-Ma'ajif</strong></td><td class="crd-td">IRQ: 35,98, 42,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm al-Qanatir</strong></td><td class="crd-td">IRQ: 36,15, 42,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm Groon</strong></td><td class="crd-td">IRQ: 35,93, 42,82</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm Tubuq</strong></td><td class="crd-td">IRQ: 35,92, 42,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Wadi al-Khan</strong></td><td class="crd-td">IRQ: 34,99, 43,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Wardan</strong></td><td class="crd-td">IRQ: 36,72, 42,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Yal</strong></td><td class="crd-td">IRQ: 36,22, 42,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tepe</strong></td><td class="crd-td">IRQ: 36,58, 45,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tepe Kal</strong></td><td class="crd-td">IRQ: 35,44, 45,48</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Ahmad Al-Hussein</strong></td><td class="crd-td">IRQ: 35,57, 42,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Ain Nasir</strong></td><td class="crd-td">IRQ: 36,15, 43,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul al-'Arysh</strong></td><td class="crd-td">IRQ: 36,09, 42,94</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul al-Sadr</strong></td><td class="crd-td">IRQ: 35,34, 43,37</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul an Nawwar</strong></td><td class="crd-td">IRQ: 35,37, 43,44</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Dubyshi</strong></td><td class="crd-td">IRQ: 35,59, 42,65</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Kirmash</strong></td><td class="crd-td">IRQ: 35,53, 42,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Umm al-Shinin</strong></td><td class="crd-td">IRQ: 36,15, 42,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Dabaghiye</strong></td><td class="crd-td">IRQ: 35,66, 42,48</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Etlail</strong></td><td class="crd-td">IRQ: 35,31, 42,66</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>West Baneh Square</strong></td><td class="crd-td">IRQ: 35,99, 45,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Zarzi Cave</strong></td><td class="crd-td">IRQ: 35,82, 45,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gird-i Rostam</strong></td><td class="crd-td">IRQ: 35,75, 45,92</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balut Tepe</strong></td><td class="crd-td">IRQ: 36,43, 42,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gird Qalata</strong></td><td class="crd-td">IRQ: 35,89, 44,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Joul Tepe</strong></td><td class="crd-td">IRQ: 34,8, 44,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kh. Ain Kawa</strong></td><td class="crd-td">IRQ: 35,66, 43,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kh. ash-Shahna</strong></td><td class="crd-td">IRQ: 35,97, 43,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kh. Hussain</strong></td><td class="crd-td">IRQ: 35,7, 43,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kh. Janwaiz</strong></td><td class="crd-td">IRQ: 35, 44,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kh. Kazuk</strong></td><td class="crd-td">IRQ: 35,69, 43,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kh. Neddas</strong></td><td class="crd-td">IRQ: 35,57, 43,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qala Jarmal</strong></td><td class="crd-td">IRQ: 34,96, 45,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Shraj Tepe</strong></td><td class="crd-td">IRQ: 34,88, 44,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Abu-Skhaira</strong></td><td class="crd-td">IRQ: 35,16, 44,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Ahmed Agha Kebir</strong></td><td class="crd-td">IRQ: 36,82, 42,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. as-Sair</strong></td><td class="crd-td">IRQ: 34,73, 44,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Barhawi</strong></td><td class="crd-td">IRQ: 36,33, 42,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Bash-Kalani as-Saghir</strong></td><td class="crd-td">IRQ: 34,7, 44,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Batlah</strong></td><td class="crd-td">IRQ: 34,95, 44,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Ben Majed</strong></td><td class="crd-td">IRQ: 34,94, 44,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Dwedan ash-Shamali</strong></td><td class="crd-td">IRQ: 34,69, 44,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Gogjali</strong></td><td class="crd-td">IRQ: 36,36, 43,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Harmush</strong></td><td class="crd-td">IRQ: 35,09, 44,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Kani Skan</strong></td><td class="crd-td">IRQ: 36,59, 43,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Khadra</strong></td><td class="crd-td">IRQ: 34,89, 44,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Khaim as-Saghir</strong></td><td class="crd-td">IRQ: 35,97, 43,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Khalaf</strong></td><td class="crd-td">IRQ: 34,79, 44,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Lutfi Agha</strong></td><td class="crd-td">IRQ: 34,88, 44,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Manzil</strong></td><td class="crd-td">IRQ: 34,72, 44,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Mashrah</strong></td><td class="crd-td">IRQ: 35,02, 44,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Mjaibra</strong></td><td class="crd-td">IRQ: 34,65, 44,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Sargun Garan</strong></td><td class="crd-td">IRQ: 35,9, 44,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Srat</strong></td><td class="crd-td">IRQ: 34,74, 44,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Surnach as-Saghir</strong></td><td class="crd-td">IRQ: 35,62, 43,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Thaira</strong></td><td class="crd-td">IRQ: 34,91, 44,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Tuwajnah</strong></td><td class="crd-td">IRQ: 36,36, 43,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tellul Akhaban</strong></td><td class="crd-td">IRQ: 36,32, 42,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tellul al-Maghar al-Kabir</strong></td><td class="crd-td">IRQ: 35,99, 43,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tellul al-Mahash</strong></td><td class="crd-td">IRQ: 35,24, 43,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tellul Bash Band</strong></td><td class="crd-td">IRQ: 35,57, 43,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements in Assyria and the Upper Tigris piedmont from 3000BC to 539BC.</figcaption>
</figure>

## Middle Euphrates and Khabur Jezirah

Table \ref{tab:zone4-sites} documents 483 settlements across the Middle Euphrates corridor and the Syrian Khabur and Balikh plains. Extending from Mari and Habuba Kabira on the Euphrates to Tell Brak, Tell Leilan, Tell Chuera, Tell Beydar, Tell Arbid and Guzana in the northern rain-fed triangle, this zone captures both third-millennium tell urbanisation and Aramean Iron Age settlement [@Ur2010Cycles; @McMahon2019Early; @Butterlin2010Uruk].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Block C1</strong></td><td class="crd-td">SYR: 34,75, 40,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Dur-Aššur-ketti-lešir</strong></td><td class="crd-td">SYR: 36,39, 40,81</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Ekalte</strong></td><td class="crd-td">SYR: 36,22, 38,13</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Guzana</strong></td><td class="crd-td">SYR: 36,83, 40,04</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Magdalu</strong></td><td class="crd-td">SYR: 35,64, 40,74</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Mitanni</strong></td><td class="crd-td">SYR: 36,25, 38,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tell Ahmar</strong></td><td class="crd-td">SYR: 37, 41,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Arbid</strong></td><td class="crd-td">SYR: 36,87, 41,02</td><td class="crd-td">2,2k</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Beydar</strong></td><td class="crd-td">SYR: 36,74, 40,59</td><td class="crd-td">1,4k</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Brak</strong></td><td class="crd-td">SYR: 36,67, 41,06</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Tell Chuera</strong></td><td class="crd-td">SYR: 36,65, 39,5</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k</td><td class="crd-td">5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell Mohammad Diyab</strong></td><td class="crd-td">SYR: 36,92, 41,56</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tuttul</strong></td><td class="crd-td">SYR: 35,96, 39,05</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Habuba Kabira</strong></td><td class="crd-td">SYR: 36,15, 38,06</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell Barri</strong></td><td class="crd-td">SYR: 36,74, 41,13</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell Hammam al-Turkmen</strong></td><td class="crd-td">SYR: 36,48, 39,06</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell Leilan</strong></td><td class="crd-td">SYR: 36,96, 41,51</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Singara</strong></td><td class="crd-td">IRQ: 36,32, 41,86</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Asicha</strong></td><td class="crd-td">SYR: 34,92, 40,57</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Māri</strong></td><td class="crd-td">SYR: 34,55, 40,89</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Tall Bāzy</strong></td><td class="crd-td">SYR: 36,43, 38,28</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Thannuris</strong></td><td class="crd-td">SYR: 36,42, 40,87</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Ašnakkum</strong></td><td class="crd-td">SYR: 36,88, 40,9</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,9k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Bouqras</strong></td><td class="crd-td">SYR: 35,09, 40,4</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,9k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Tall Ḥamūkār</strong></td><td class="crd-td">SYR: 36,81, 41,96</td><td class="crd-td">6,5k</td><td class="crd-td">5,8k</td><td class="crd-td">5k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Emar</strong></td><td class="crd-td">SYR: 35,99, 38,11</td><td class="crd-td">2,2k</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>El-Qitar</strong></td><td class="crd-td">SYR: 36,38, 38,18</td><td class="crd-td">2,2k</td><td class="crd-td">5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Haradu</strong></td><td class="crd-td">IRQ: 34,46, 41,59</td><td class="crd-td">2,2k</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tell Taban</strong></td><td class="crd-td">SYR: 36,34, 40,79</td><td class="crd-td">1,4k</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tall Mal'abīya</strong></td><td class="crd-td">SYR: 36,5, 40,5</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tall Mūzān</strong></td><td class="crd-td">SYR: 37,06, 41</td><td class="crd-td">5,7k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ain al-Qerd</strong></td><td class="crd-td">SYR: 37,08, 40,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Bijan</strong></td><td class="crd-td">IRQ: 34,27, 42,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Gabalein</strong></td><td class="crd-td">SYR: 35,13, 40,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Hait</strong></td><td class="crd-td">SYR: 35,25, 40,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Aridi</strong></td><td class="crd-td">SYR: 37, 40,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Judeideh</strong></td><td class="crd-td">IRQ: 34,39, 42,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Nabulu</strong></td><td class="crd-td">SYR: 37,1, 41,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Sur Jureh</strong></td><td class="crd-td">IRQ: 34,31, 42,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Urakka</strong></td><td class="crd-td">SYR: 37,06, 40,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Anatho</strong></td><td class="crd-td">IRQ: 34,47, 41,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Hindanu</strong></td><td class="crd-td">SYR: 34,39, 41,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Ashamsani</strong></td><td class="crd-td">SYR: 35,85, 40,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Bezari</strong></td><td class="crd-td">SYR: 36,62, 40,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Fadjami</strong></td><td class="crd-td">SYR: 35,93, 40,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Hassake</strong></td><td class="crd-td">SYR: 36,53, 40,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Majdal</strong></td><td class="crd-td">SYR: 36,56, 40,61</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Sahlan</strong></td><td class="crd-td">SYR: 36,63, 38,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Suwwar</strong></td><td class="crd-td">SYR: 35,5, 40,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tell Fidain</strong></td><td class="crd-td">SYR: 35,36, 40,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Shadikanni</strong></td><td class="crd-td">SYR: 36,21, 40,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Farfara</strong></td><td class="crd-td">SYR: 36,85, 41,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Hamidi</strong></td><td class="crd-td">SYR: 36,82, 41,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Qarasa</strong></td><td class="crd-td">SYR: 36,85, 41,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Shaddada</strong></td><td class="crd-td">SYR: 36,05, 40,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Halawa</strong></td><td class="crd-td">SYR: 36,11, 38,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Abu Khraiza</strong></td><td class="crd-td">SYR: 36,51, 38,78</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Ain Sinu</strong></td><td class="crd-td">IRQ: 36,37, 42,18</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>at-Tina</strong></td><td class="crd-td">SYR: 36,45, 38,81</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Boz Höyük Tahtani</strong></td><td class="crd-td">SYR: 36,71, 38,54</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Es Susa 3</strong></td><td class="crd-td">SYR: 34,51, 40,96</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Jaḥša</strong></td><td class="crd-td">SYR: 36,53, 38,85</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kasr 'Erzi</strong></td><td class="crd-td">SYR: 34,46, 40,97</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kh. aš Šīḥā</strong></td><td class="crd-td">SYR: 36,48, 40,18</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Khirbat al-Shiha</strong></td><td class="crd-td">SYR: 36,8, 41,91</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kor Dašan</strong></td><td class="crd-td">SYR: 36,36, 38,44</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kubarlik</strong></td><td class="crd-td">SYR: 36,68, 38,75</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Marwaniye</strong></td><td class="crd-td">SYR: 34,87, 40,66</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Masaikh</strong></td><td class="crd-td">SYR: 34,97, 40,56</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Mashtale</strong></td><td class="crd-td">SYR: 34,89, 40,61</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Qrunful taḥtani</strong></td><td class="crd-td">SYR: 36,63, 38,74</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Saiyal 5</strong></td><td class="crd-td">SYR: 34,6, 40,91</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. 'Ain 'Isa</strong></td><td class="crd-td">SYR: 36,38, 38,86</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. 'Asāfīr</strong></td><td class="crd-td">SYR: 36,7, 40,2</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Aalouq Sharqi</strong></td><td class="crd-td">SYR: 36,86, 40,14</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Aatash</strong></td><td class="crd-td">SYR: 36,7, 40,83</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Hasan</strong></td><td class="crd-td">SYR: 34,65, 40,89</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Akhḍar</strong></td><td class="crd-td">SYR: 36,68, 38,85</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. al-Qādiriya</strong></td><td class="crd-td">SYR: 36,36, 38,9</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Ashane Sharqi</strong></td><td class="crd-td">SYR: 36,68, 40,39</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Bandar Khan</strong></td><td class="crd-td">SYR: 36,71, 38,7</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Barābra</strong></td><td class="crd-td">SYR: 36,56, 38,92</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Bir al-Hisan</strong></td><td class="crd-td">SYR: 36,74, 41,21</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Dabaash</strong></td><td class="crd-td">SYR: 36,94, 40,46</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Dabban</strong></td><td class="crd-td">SYR: 36,61, 38,9</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Dibak</strong></td><td class="crd-td">SYR: 36,89, 40,61</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Effendi</strong></td><td class="crd-td">SYR: 36,47, 38,27</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. esh-Shour Gharbi</strong></td><td class="crd-td">SYR: 36,85, 40,46</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Ghanem al-Ali</strong></td><td class="crd-td">SYR: 35,78, 39,42</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Jumailu</strong></td><td class="crd-td">SYR: 36,68, 40,61</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Hammadin</strong></td><td class="crd-td">SYR: 35,79, 39,35</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Hanoua</strong></td><td class="crd-td">SYR: 36,85, 40,63</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Khaṣṣ</strong></td><td class="crd-td">SYR: 36,96, 40,61</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Jamous</strong></td><td class="crd-td">SYR: 36,8, 40,19</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Khatoun</strong></td><td class="crd-td">SYR: 36,78, 40,63</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Malḥat al-Ḍirū</strong></td><td class="crd-td">SYR: 35,93, 40,35</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Mugla as-Saghir</strong></td><td class="crd-td">SYR: 35,77, 39,48</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Nourek</strong></td><td class="crd-td">SYR: 36,68, 40,89</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Qabr Ṣaghīr</strong></td><td class="crd-td">SYR: 36,77, 40,37</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Qasabi</strong></td><td class="crd-td">SYR: 35,74, 39,76</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Qattine</strong></td><td class="crd-td">SYR: 37,02, 40,7</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Šarakrak</strong></td><td class="crd-td">SYR: 36,42, 38,97</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Sheikh Amin</strong></td><td class="crd-td">SYR: 36,76, 40,73</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Tibne</strong></td><td class="crd-td">SYR: 35,62, 39,82</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Zembil</strong></td><td class="crd-td">SYR: 36,64, 40,98</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Amtar</strong></td><td class="crd-td">SYR: 36,84, 42,03</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm Ourhafa</strong></td><td class="crd-td">SYR: 36,67, 40,31</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tell Kuran</strong></td><td class="crd-td">SYR: 36,6, 40,41</td><td class="crd-td">1,8k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Ajilā</strong></td><td class="crd-td">SYR: 36,59, 39,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Aīn Qasība</strong></td><td class="crd-td">SYR: 36,19, 40,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Aīn Ṣafrā</strong></td><td class="crd-td">SYR: 36,52, 39,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Anaiat esh-Sharqi V</strong></td><td class="crd-td">SYR: 35,64, 41,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Anba</strong></td><td class="crd-td">IRQ: 34,39, 42,15</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Arja Sharqiya</strong></td><td class="crd-td">SYR: 36,76, 41,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Aruda</strong></td><td class="crd-td">SYR: 36,2, 38,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Auag I</strong></td><td class="crd-td">SYR: 35,39, 41,04</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abū Ḥamad</strong></td><td class="crd-td">SYR: 35,72, 39,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Kira</strong></td><td class="crd-td">SYR: 36,54, 41,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Kitaha I</strong></td><td class="crd-td">SYR: 35,47, 41,06</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Manasib</strong></td><td class="crd-td">SYR: 36,75, 41,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ain al-Abd</strong></td><td class="crd-td">SYR: 36,72, 40,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ain Rumaylan</strong></td><td class="crd-td">SYR: 37,01, 42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Akça</strong></td><td class="crd-td">SYR: 37,2, 40,45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Akziyaret</strong></td><td class="crd-td">SYR: 37,19, 40,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-'Usiya</strong></td><td class="crd-td">IRQ: 34,32, 42,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Akhwien East</strong></td><td class="crd-td">SYR: 36,65, 42,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Batah</strong></td><td class="crd-td">SYR: 36,14, 40,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Hamaniyat</strong></td><td class="crd-td">SYR: 36,73, 41,28</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Luhabiya</strong></td><td class="crd-td">SYR: 36,79, 41,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Maqranat</strong></td><td class="crd-td">SYR: 36,71, 41,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaim</strong></td><td class="crd-td">SYR: 34,37, 41,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Qasmiya</strong></td><td class="crd-td">SYR: 36,97, 41,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Raya al-Tahtani</strong></td><td class="crd-td">SYR: 36,99, 40,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Siha</strong></td><td class="crd-td">SYR: 36,61, 41,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al Dusha</strong></td><td class="crd-td">SYR: 36,97, 41,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al Khubaza</strong></td><td class="crd-td">SYR: 36,74, 42,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Altıntoprak</strong></td><td class="crd-td">SYR: 37,11, 40,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Aşağıbeğdeş</strong></td><td class="crd-td">SYR: 36,81, 38,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Aşağıderen</strong></td><td class="crd-td">SYR: 36,77, 39,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bakacık</strong></td><td class="crd-td">SYR: 37,14, 41,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Banja</strong></td><td class="crd-td">SYR: 36,6, 41,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Başak</strong></td><td class="crd-td">SYR: 37,14, 40,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bayaza Saghira</strong></td><td class="crd-td">SYR: 36,99, 41,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Behendur</strong></td><td class="crd-td">SYR: 37,03, 41,44</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Besara</strong></td><td class="crd-td">SYR: 36,59, 40,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bīr Birzān</strong></td><td class="crd-td">SYR: 36,3, 40,28</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bir Haidar</strong></td><td class="crd-td">SYR: 36,43, 41,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bir Ibrahim Agha</strong></td><td class="crd-td">SYR: 36,9, 42,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bīr Jīlī Balāgha</strong></td><td class="crd-td">SYR: 36,48, 40,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bir Kneisse</strong></td><td class="crd-td">SYR: 37, 40,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Buwaytih</strong></td><td class="crd-td">SYR: 36,76, 41,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Büyükboğaziye</strong></td><td class="crd-td">SYR: 36,97, 40,3</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Büyüktepe</strong></td><td class="crd-td">SYR: 37,15, 40,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Çağıl</strong></td><td class="crd-td">SYR: 37,12, 40,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Camp</strong></td><td class="crd-td">SYR: 35,4, 39,45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Çatak</strong></td><td class="crd-td">SYR: 37,17, 40,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Chilagha</strong></td><td class="crd-td">SYR: 36,98, 41,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Chilparat</strong></td><td class="crd-td">SYR: 36,83, 42,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Cholma Foqani</strong></td><td class="crd-td">SYR: 36,88, 40,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Dabawiya</strong></td><td class="crd-td">SYR: 35,55, 41,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Dayr Ayyub</strong></td><td class="crd-td">SYR: 37,1, 41,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Demirkapı-Büyükdere</strong></td><td class="crd-td">SYR: 37,06, 40,46</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Dibsi Faraj</strong></td><td class="crd-td">SYR: 35,93, 38,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Dikmen</strong></td><td class="crd-td">SYR: 37,09, 40,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Diyu</strong></td><td class="crd-td">SYR: 37,02, 41,28</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Doughueur</strong></td><td class="crd-td">SYR: 37,02, 40,85</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Durakbaşı</strong></td><td class="crd-td">SYR: 37,11, 41,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Duruca</strong></td><td class="crd-td">SYR: 37,09, 41,31</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>el-Kherem 2</strong></td><td class="crd-td">SYR: 36,65, 39,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>El Burqoliya</strong></td><td class="crd-td">SYR: 35,48, 41,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>El Khabra</strong></td><td class="crd-td">SYR: 35,2, 38,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ertaje</strong></td><td class="crd-td">IRQ: 34,45, 41,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Eski Rubai Koy</strong></td><td class="crd-td">SYR: 37,21, 42,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Faruja</strong></td><td class="crd-td">SYR: 36,79, 41,32</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Fortlet</strong></td><td class="crd-td">SYR: 35,34, 39,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ganndour</strong></td><td class="crd-td">SYR: 37,03, 40,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Garish</strong></td><td class="crd-td">SYR: 36,66, 41,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gasaniya</strong></td><td class="crd-td">SYR: 37,11, 41,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ghafqiya</strong></td><td class="crd-td">SYR: 37,09, 41,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gir Lawand</strong></td><td class="crd-td">SYR: 36,82, 42,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Girgi Khadrog</strong></td><td class="crd-td">IRQ: 36,18, 41,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gohbal</strong></td><td class="crd-td">SYR: 36,52, 41,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gra-i Dera</strong></td><td class="crd-td">SYR: 37,06, 41,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Grai Resh</strong></td><td class="crd-td">IRQ: 36,32, 41,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gre Mira</strong></td><td class="crd-td">SYR: 37,12, 41,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Guerbach</strong></td><td class="crd-td">SYR: 37,04, 40,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Guir Belka</strong></td><td class="crd-td">IRQ: 36,21, 41,82</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Guir Diouane</strong></td><td class="crd-td">SYR: 36,92, 41,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Guir Ech</strong></td><td class="crd-td">SYR: 36,94, 40,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Guir Messine</strong></td><td class="crd-td">SYR: 36,8, 41,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gülharin</strong></td><td class="crd-td">SYR: 37,23, 40,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Haci Sultan Hoyuk</strong></td><td class="crd-td">SYR: 37,28, 42,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hadidi</strong></td><td class="crd-td">SYR: 36,25, 38,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hallul-Cholle</strong></td><td class="crd-td">SYR: 35,46, 38,8</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Haram Rach</strong></td><td class="crd-td">SYR: 37,03, 41,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hasantepe</strong></td><td class="crd-td">SYR: 37,13, 41,49</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khaznah caves</strong></td><td class="crd-td">SYR: 36,44, 40,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Heraqlah</strong></td><td class="crd-td">SYR: 35,96, 38,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jebel Cembeh</strong></td><td class="crd-td">SYR: 36,38, 41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jedeyde</strong></td><td class="crd-td">SYR: 36,58, 40,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jubb Marja</strong></td><td class="crd-td">SYR: 35,36, 37,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kachkachok 1</strong></td><td class="crd-td">SYR: 36,64, 40,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kh. Beitun</strong></td><td class="crd-td">SYR: 36,1, 37,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kh. Hassan Aga</strong></td><td class="crd-td">SYR: 36,33, 41,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kh. Lazaqa</strong></td><td class="crd-td">SYR: 36,88, 41,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khanijdal</strong></td><td class="crd-td">SYR: 36,68, 42,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kharab Aarnane</strong></td><td class="crd-td">SYR: 36,77, 39,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kharab al-'Id 1</strong></td><td class="crd-td">SYR: 36,69, 41,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kharab Rach</strong></td><td class="crd-td">SYR: 37,09, 41,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kharaydijka</strong></td><td class="crd-td">SYR: 36,99, 41,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khatuniyeh</strong></td><td class="crd-td">SYR: 36,42, 41,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khazimuk</strong></td><td class="crd-td">SYR: 37,05, 41,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbat al-Bir Tahtani</strong></td><td class="crd-td">SYR: 36,89, 41,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbat al-Jihash</strong></td><td class="crd-td">SYR: 36,86, 41,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbat al-Sada</strong></td><td class="crd-td">SYR: 36,81, 41,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbat Milah</strong></td><td class="crd-td">SYR: 36,94, 40,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbat Noura</strong></td><td class="crd-td">SYR: 36,68, 41,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbat Tuwayrash</strong></td><td class="crd-td">SYR: 36,72, 41,94</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khirbet Gritoluk</strong></td><td class="crd-td">IRQ: 36,11, 41,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khisham</strong></td><td class="crd-td">SYR: 36,7, 40,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khuwaym al-Daym</strong></td><td class="crd-td">SYR: 36,6, 41,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kourdiss</strong></td><td class="crd-td">SYR: 36,7, 41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Küplüce</strong></td><td class="crd-td">SYR: 37,06, 40,28</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Küplüce</strong></td><td class="crd-td">SYR: 36,81, 39,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>M'cherfa</strong></td><td class="crd-td">SYR: 36,93, 40,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ma'din al-'Atiq</strong></td><td class="crd-td">SYR: 35,75, 39,67</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Maqsar al-Tor</strong></td><td class="crd-td">SYR: 36,63, 41,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Marra</strong></td><td class="crd-td">SYR: 37,06, 40,94</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mashad</strong></td><td class="crd-td">IRQ: 34,47, 41,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Matlawta 'Arida</strong></td><td class="crd-td">SYR: 36,83, 41,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Medinet al-Far</strong></td><td class="crd-td">SYR: 36,54, 39,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mehmetçik</strong></td><td class="crd-td">SYR: 37,32, 42,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Meshadaniya III</strong></td><td class="crd-td">SYR: 35,59, 41,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Meydankapı</strong></td><td class="crd-td">SYR: 36,78, 39,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mohammed Agha Cave</strong></td><td class="crd-td">SYR: 37,06, 42,36</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Moula Sbate</strong></td><td class="crd-td">SYR: 36,98, 41,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mowasha</strong></td><td class="crd-td">SYR: 36,72, 42,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mrekis</strong></td><td class="crd-td">SYR: 36,88, 40,25</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mšerifa West</strong></td><td class="crd-td">SYR: 36,7, 39,6</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mugaddada</strong></td><td class="crd-td">IRQ: 34,42, 42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mutiniya</strong></td><td class="crd-td">SYR: 36,91, 41,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Nadaouiyeh</strong></td><td class="crd-td">SYR: 35,27, 38,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Nisibin</strong></td><td class="crd-td">SYR: 37,06, 41,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Nkheyla</strong></td><td class="crd-td">SYR: 35,81, 39,27</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Odaköy</strong></td><td class="crd-td">SYR: 36,99, 40,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Oghlan Tahtani</strong></td><td class="crd-td">SYR: 36,91, 40,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qabur Harb</strong></td><td class="crd-td">SYR: 36,99, 41,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qadir an-Nashmi</strong></td><td class="crd-td">SYR: 35,6, 41,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'at ar-Rahba</strong></td><td class="crd-td">SYR: 35, 40,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qal'at at Jabar</strong></td><td class="crd-td">SYR: 35,9, 38,48</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qarhu</strong></td><td class="crd-td">SYR: 36,93, 41,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qasr es-Swab</strong></td><td class="crd-td">SYR: 33,82, 39,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Quseir as-Saila</strong></td><td class="crd-td">SYR: 35,75, 38,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Rajim Hassan</strong></td><td class="crd-td">SYR: 36,72, 42,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Rakabiya</strong></td><td class="crd-td">SYR: 36,97, 41,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ravini Harabe</strong></td><td class="crd-td">SYR: 37,26, 42,31</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Rhabdion</strong></td><td class="crd-td">SYR: 37,21, 41,61</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Rijm Faiḍāt</strong></td><td class="crd-td">SYR: 36,37, 40,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sahliya</strong></td><td class="crd-td">IRQ: 34,36, 42,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Samada</strong></td><td class="crd-td">SYR: 36,79, 40,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Semtik Tahtani</strong></td><td class="crd-td">SYR: 37,02, 40,98</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Shheil 1</strong></td><td class="crd-td">SYR: 35,08, 40,49</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Shurak</strong></td><td class="crd-td">SYR: 37,04, 41,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ši'b Ṣabaḥ al-khair</strong></td><td class="crd-td">SYR: 36,29, 40,7</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sınırtepe</strong></td><td class="crd-td">SYR: 37,08, 41,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>South Gate</strong></td><td class="crd-td">SYR: 35,63, 38,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sukarah</strong></td><td class="crd-td">SYR: 36,43, 40,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sūra</strong></td><td class="crd-td">SYR: 35,9, 38,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abou Sa'id</strong></td><td class="crd-td">SYR: 35,84, 39,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Hagar</strong></td><td class="crd-td">SYR: 36,94, 41,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Hajira</strong></td><td class="crd-td">SYR: 36,77, 42,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Hureyra</strong></td><td class="crd-td">SYR: 35,86, 38,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abū Šaikha</strong></td><td class="crd-td">SYR: 36,65, 39,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-'Arbīdī</strong></td><td class="crd-td">SYR: 36,49, 40,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Balasha</strong></td><td class="crd-td">SYR: 36,66, 41,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Ghail</strong></td><td class="crd-td">IRQ: 35,85, 41,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Khalīf</strong></td><td class="crd-td">SYR: 36,48, 40,38</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Sayyid</strong></td><td class="crd-td">SYR: 37,1, 41,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Shaw</strong></td><td class="crd-td">IRQ: 36,5, 42,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ali al-Haj</strong></td><td class="crd-td">SYR: 36,32, 38,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Asfar</strong></td><td class="crd-td">SYR: 37,17, 42,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Aswad</strong></td><td class="crd-td">SYR: 36,68, 40,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Aswad</strong></td><td class="crd-td">SYR: 35,94, 39,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Auta</strong></td><td class="crd-td">SYR: 36, 40,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Bārūd</strong></td><td class="crd-td">SYR: 36,42, 40,67</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Bauga'</strong></td><td class="crd-td">SYR: 36,7, 39,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Bir Bazan</strong></td><td class="crd-td">SYR: 36,81, 40,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Biss Saghir</strong></td><td class="crd-td">SYR: 36,78, 41,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Būrqa</strong></td><td class="crd-td">SYR: 36,19, 40,06</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Buser</strong></td><td class="crd-td">SYR: 35,17, 40,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Debbaghiye</strong></td><td class="crd-td">SYR: 36,38, 41,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Diḥlīz</strong></td><td class="crd-td">SYR: 36,57, 39,44</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Djaida</strong></td><td class="crd-td">SYR: 35,87, 39,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Djenidiye</strong></td><td class="crd-td">SYR: 36,74, 40,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Djerniye</strong></td><td class="crd-td">SYR: 36,16, 38,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. el-Marah</strong></td><td class="crd-td">SYR: 36,9, 41,49</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. el 'Arous</strong></td><td class="crd-td">SYR: 36,34, 41,25</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. er-Rikla</strong></td><td class="crd-td">SYR: 36,59, 40,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ermen</strong></td><td class="crd-td">SYR: 37,19, 40,59</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. es-Seman</strong></td><td class="crd-td">SYR: 36,21, 38,99</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Faqqūs</strong></td><td class="crd-td">SYR: 35,95, 38,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Farfara</strong></td><td class="crd-td">SYR: 36,82, 40,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Fray</strong></td><td class="crd-td">SYR: 35,91, 38,38</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ghazal</strong></td><td class="crd-td">SYR: 36,77, 40,49</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Gir Ghanishan</strong></td><td class="crd-td">SYR: 36,81, 40,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Guftan</strong></td><td class="crd-td">SYR: 35,25, 40,27</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Gulbeghir</strong></td><td class="crd-td">SYR: 37,02, 41,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Guweran</strong></td><td class="crd-td">SYR: 36,49, 40,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hadid</strong></td><td class="crd-td">SYR: 36,87, 41,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hamām Gharbī</strong></td><td class="crd-td">SYR: 36,57, 40,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hanaš</strong></td><td class="crd-td">SYR: 36,69, 39,94</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Khanzīr</strong></td><td class="crd-td">SYR: 36,75, 39,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hayal</strong></td><td class="crd-td">SYR: 36,8, 42,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hrim</strong></td><td class="crd-td">SYR: 35,2, 40,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Hudhail</strong></td><td class="crd-td">IRQ: 36,15, 42,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Juaf</strong></td><td class="crd-td">SYR: 36,26, 38,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Kaferu</strong></td><td class="crd-td">SYR: 36,73, 40,64</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Kanbar</strong></td><td class="crd-td">SYR: 36,22, 40,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Kebour</strong></td><td class="crd-td">SYR: 36,76, 40,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Khariza</strong></td><td class="crd-td">SYR: 35,23, 40,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Kharnub</strong></td><td class="crd-td">SYR: 37,07, 41,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Krah</strong></td><td class="crd-td">SYR: 35,03, 40,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Lāham</strong></td><td class="crd-td">SYR: 36,24, 40,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mabṭū'ā</strong></td><td class="crd-td">SYR: 36,32, 40,59</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Maddānah</strong></td><td class="crd-td">SYR: 36,68, 40</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Madina</strong></td><td class="crd-td">SYR: 35,97, 41,01</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mahlas</strong></td><td class="crd-td">SYR: 36, 39,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Makhrūm</strong></td><td class="crd-td">SYR: 36,36, 40,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mana'a</strong></td><td class="crd-td">SYR: 36,68, 42,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Maqam</strong></td><td class="crd-td">SYR: 35,79, 39,65</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Markada</strong></td><td class="crd-td">SYR: 35,74, 40,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Marmar</strong></td><td class="crd-td">IRQ: 36,18, 42,01</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Marthīya</strong></td><td class="crd-td">SYR: 36,21, 40,53</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mashnaqa</strong></td><td class="crd-td">SYR: 36,29, 40,79</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mityāha</strong></td><td class="crd-td">SYR: 36,19, 40,46</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mohammed Ali</strong></td><td class="crd-td">SYR: 36,66, 41,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Muezzar</strong></td><td class="crd-td">SYR: 36,26, 40,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mugair</strong></td><td class="crd-td">SYR: 36,48, 40,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Namliya</strong></td><td class="crd-td">SYR: 35,44, 40,63</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Nurma</strong></td><td class="crd-td">IRQ: 36,15, 41,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Qaryat Medād</strong></td><td class="crd-td">SYR: 35,16, 40,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Qašghā</strong></td><td class="crd-td">SYR: 36,63, 40,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Qatari</strong></td><td class="crd-td">SYR: 35,77, 40,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Qunayṭirah</strong></td><td class="crd-td">SYR: 37,03, 41,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Rad Seqrah</strong></td><td class="crd-td">SYR: 36,47, 40,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Rawa</strong></td><td class="crd-td">IRQ: 34,47, 41,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Redjeb</strong></td><td class="crd-td">SYR: 36,64, 40,37</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Rouman</strong></td><td class="crd-td">SYR: 36,57, 40,48</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Roumelan</strong></td><td class="crd-td">SYR: 36,95, 41,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Sa'daiya</strong></td><td class="crd-td">SYR: 37,03, 41,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Safra</strong></td><td class="crd-td">SYR: 36,67, 41,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Sahiya</strong></td><td class="crd-td">SYR: 37,11, 42,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ṣālḥah</strong></td><td class="crd-td">SYR: 36,64, 39,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ṣamad</strong></td><td class="crd-td">SYR: 36,26, 40,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Sheikh Hassan</strong></td><td class="crd-td">SYR: 36,33, 39,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tabūs</strong></td><td class="crd-td">SYR: 35,47, 39,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Talfis</strong></td><td class="crd-td">SYR: 35,32, 40,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tash</strong></td><td class="crd-td">SYR: 36,81, 41,85</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tawi</strong></td><td class="crd-td">SYR: 36,16, 38,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Teurbe</strong></td><td class="crd-td">SYR: 36,83, 40,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tūainān</strong></td><td class="crd-td">SYR: 36,29, 40,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tutun</strong></td><td class="crd-td">SYR: 36,16, 37,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Umm Greibe</strong></td><td class="crd-td">SYR: 35,71, 41,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Yahud</strong></td><td class="crd-td">SYR: 37,03, 41,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Youssouf Beg</strong></td><td class="crd-td">SYR: 36,27, 41,46</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Zā'itr</strong></td><td class="crd-td">SYR: 36,49, 40,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Zaīdān</strong></td><td class="crd-td">SYR: 36,53, 39,47</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Talul al-Debah</strong></td><td class="crd-td">SYR: 36,56, 41,36</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tchatal</strong></td><td class="crd-td">SYR: 37,07, 40,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Teell Rhoali</strong></td><td class="crd-td">SYR: 36,52, 41,4</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Algana</strong></td><td class="crd-td">SYR: 36,65, 42,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Aysi</strong></td><td class="crd-td">SYR: 36,6, 41,29</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Azu</strong></td><td class="crd-td">IRQ: 36,1, 42,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Ugla Foqani</strong></td><td class="crd-td">SYR: 36,83, 42,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell 'Ugla Saghir</strong></td><td class="crd-td">SYR: 36,85, 42,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Aaqar</strong></td><td class="crd-td">SYR: 36,76, 41,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Aarade</strong></td><td class="crd-td">SYR: 36,79, 40,24</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abtah</strong></td><td class="crd-td">SYR: 36,52, 42,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Dhuwil</strong></td><td class="crd-td">SYR: 36,95, 41,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Khadhraf</strong></td><td class="crd-td">SYR: 36,62, 41,61</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Abu Rassine</strong></td><td class="crd-td">SYR: 36,85, 40,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ahdesse</strong></td><td class="crd-td">SYR: 37,01, 42,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Akhu Dasha</strong></td><td class="crd-td">SYR: 36,69, 41,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-'Abd</strong></td><td class="crd-td">SYR: 36,62, 41,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Benal</strong></td><td class="crd-td">IRQ: 36,25, 42,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Diyab</strong></td><td class="crd-td">SYR: 36,96, 40,38</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Karkashi</strong></td><td class="crd-td">IRQ: 35,91, 42,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell al-Kashishiya</strong></td><td class="crd-td">SYR: 36,74, 41,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ali Agha</strong></td><td class="crd-td">SYR: 36,9, 41,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Alo</strong></td><td class="crd-td">SYR: 36,75, 40,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Amouda</strong></td><td class="crd-td">SYR: 37,13, 40,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Aoqla</strong></td><td class="crd-td">SYR: 36,69, 41,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell ar Rum</strong></td><td class="crd-td">SYR: 35,44, 40,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Awarid Wastani</strong></td><td class="crd-td">SYR: 36,96, 42,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Baarour</strong></td><td class="crd-td">SYR: 36,91, 41,42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Bessiz</strong></td><td class="crd-td">SYR: 36,89, 40,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Boum</strong></td><td class="crd-td">SYR: 36,98, 40,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Chilparat</strong></td><td class="crd-td">SYR: 36,88, 41,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Dahraya</strong></td><td class="crd-td">SYR: 36,64, 41,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Djedrie</strong></td><td class="crd-td">SYR: 36,93, 42,3</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell es-Sin</strong></td><td class="crd-td">SYR: 35,32, 40,25</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Fair</strong></td><td class="crd-td">SYR: 36,59, 41,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Garta</strong></td><td class="crd-td">SYR: 36,83, 40,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ghani</strong></td><td class="crd-td">SYR: 36,51, 41,87</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Greifate</strong></td><td class="crd-td">SYR: 36,91, 41,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hajar</strong></td><td class="crd-td">SYR: 36,94, 40,73</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hanoua</strong></td><td class="crd-td">SYR: 36,73, 41,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hanu</strong></td><td class="crd-td">IRQ: 36,14, 41,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Harmaz</strong></td><td class="crd-td">SYR: 36,56, 40,56</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hatimya</strong></td><td class="crd-td">IRQ: 36,22, 41,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Helif</strong></td><td class="crd-td">SYR: 37,14, 40,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hemmoud</strong></td><td class="crd-td">SYR: 36,79, 39,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Hiyal</strong></td><td class="crd-td">IRQ: 36,27, 41,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jaddawi</strong></td><td class="crd-td">SYR: 36,85, 41,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jammal</strong></td><td class="crd-td">SYR: 37,05, 42</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jamous</strong></td><td class="crd-td">SYR: 36,7, 41,61</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jassas</strong></td><td class="crd-td">SYR: 36,59, 40,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jihan</strong></td><td class="crd-td">SYR: 37,07, 41,45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Jul Bustan</strong></td><td class="crd-td">SYR: 36,86, 40,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Kabir</strong></td><td class="crd-td">SYR: 36,89, 41,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Keif Tamikiye</strong></td><td class="crd-td">SYR: 36,87, 41,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khabbaz</strong></td><td class="crd-td">SYR: 36,91, 40,66</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khanzir al-Saghir</strong></td><td class="crd-td">SYR: 36,99, 42,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Kharnoub</strong></td><td class="crd-td">SYR: 36,75, 41,32</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Khazna Tahtani</strong></td><td class="crd-td">SYR: 36,62, 40,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Kidkane</strong></td><td class="crd-td">SYR: 36,73, 39,99</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Kirab</strong></td><td class="crd-td">SYR: 36,96, 41,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Kuran</strong></td><td class="crd-td">SYR: 36,77, 42,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Kuwi</strong></td><td class="crd-td">SYR: 36,73, 40,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ma'aruf</strong></td><td class="crd-td">SYR: 36,55, 41,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Manakh Serhir</strong></td><td class="crd-td">SYR: 36,83, 41,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mansur</strong></td><td class="crd-td">SYR: 36,74, 40,82</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mosti</strong></td><td class="crd-td">SYR: 36,63, 41,67</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Motlaq</strong></td><td class="crd-td">SYR: 36,92, 42,22</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mouerik Foqani</strong></td><td class="crd-td">SYR: 36,7, 40,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mqibra</strong></td><td class="crd-td">IRQ: 36,06, 42,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Mutalah</strong></td><td class="crd-td">IRQ: 36,19, 42,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Na'am Jallad</strong></td><td class="crd-td">SYR: 36,77, 41,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Na'if</strong></td><td class="crd-td">SYR: 36,78, 40,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Nasran</strong></td><td class="crd-td">SYR: 37,02, 41,49</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Quliya</strong></td><td class="crd-td">SYR: 36,97, 40,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Raqoub</strong></td><td class="crd-td">SYR: 36,51, 40,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Ras al-Suwayda</strong></td><td class="crd-td">SYR: 36,95, 42,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Salandar</strong></td><td class="crd-td">SYR: 36,86, 40,8</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Samir 5</strong></td><td class="crd-td">SYR: 36,72, 42,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Sarji</strong></td><td class="crd-td">SYR: 36,66, 40,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Surrate</strong></td><td class="crd-td">SYR: 36,76, 41,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Taif</strong></td><td class="crd-td">SYR: 36,77, 41,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Tubail</strong></td><td class="crd-td">IRQ: 36,1, 42,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Udhan</strong></td><td class="crd-td">SYR: 36,61, 42,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm Achaifa</strong></td><td class="crd-td">SYR: 36,57, 42,15</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm al-Shibabit</strong></td><td class="crd-td">IRQ: 36,32, 42,15</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Umm Chalcha</strong></td><td class="crd-td">SYR: 36,58, 42,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Warchek</strong></td><td class="crd-td">SYR: 36,87, 40,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tumuli</strong></td><td class="crd-td">SYR: 35,43, 40,04</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Adham</strong></td><td class="crd-td">SYR: 36,82, 41,65</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Dheyban</strong></td><td class="crd-td">SYR: 36,23, 41,37</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Jafar Foqani</strong></td><td class="crd-td">SYR: 36,92, 41,27</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Ragim</strong></td><td class="crd-td">SYR: 36,98, 41,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Atham</strong></td><td class="crd-td">SYR: 36,76, 41,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Ghadir</strong></td><td class="crd-td">SYR: 36,56, 41,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Grubba South</strong></td><td class="crd-td">SYR: 35,66, 41,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Kayf</strong></td><td class="crd-td">IRQ: 36,56, 42,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Kif</strong></td><td class="crd-td">SYR: 36,78, 41,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Qabir</strong></td><td class="crd-td">SYR: 36,8, 41,39</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Sharifa</strong></td><td class="crd-td">SYR: 36,82, 41,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>VI</strong></td><td class="crd-td">SYR: 35,69, 39,82</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Village</strong></td><td class="crd-td">SYR: 35,38, 39,37</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Western Enclosure</strong></td><td class="crd-td">SYR: 34,77, 40,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>WH 008</strong></td><td class="crd-td">IRQ: 33,54, 41,09</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Wraydah</strong></td><td class="crd-td">SYR: 36,08, 38,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Yankale Höyük</strong></td><td class="crd-td">SYR: 37,14, 42,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Yarabi'</strong></td><td class="crd-td">SYR: 35,81, 39,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Yaşarköy</strong></td><td class="crd-td">SYR: 37,09, 40,54</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Zaki es Serhir</strong></td><td class="crd-td">SYR: 36,64, 41,41</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Zorlu</strong></td><td class="crd-td">SYR: 36,73, 38,96</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>El Kowm 2</strong></td><td class="crd-td">SYR: 35,24, 38,82</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Merj Khalil</strong></td><td class="crd-td">SYR: 36,15, 38,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Ain Alaq</strong></td><td class="crd-td">SYR: 36,93, 42,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. al-Meshrif</strong></td><td class="crd-td">SYR: 36,84, 42,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Eftaim</strong></td><td class="crd-td">SYR: 36,55, 39,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Mureybiṭ</strong></td><td class="crd-td">SYR: 36,06, 38,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Shulakiyah</strong></td><td class="crd-td">SYR: 37,02, 42,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements in the Middle Euphrates and Khabur Jezirah from 3000BC to 539BC.</figcaption>
</figure>

## Diyala and East Tigris Piedmont

Table \ref{tab:zone5-sites} records 121 settlements along the Diyala river valley and Zagros piedmont corridor east of the Tigris, led by Eshnunna, Tell Ischali and Tall Ajrab. Linking Babylonia with Elam and the Iranian plateau, the Diyala basin sustained the highest rural-urban density per square kilometre in late Neo-Babylonian Mesopotamia [@Marchetti2024Long; @Altaweel2015Evaluating].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Opis</strong></td><td class="crd-td">IRQ: 33,18, 44,7</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Tall Ajrab</strong></td><td class="crd-td">IRQ: 33,34, 44,87</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Eshnunna</strong></td><td class="crd-td">IRQ: 33,48, 44,73</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Abū Ṣalābīkh</strong></td><td class="crd-td">IRQ: 33,5, 45,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Deru</strong></td><td class="crd-td">IRQ: 33,12, 45,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Me-Turnat</strong></td><td class="crd-td">IRQ: 34,19, 45,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Abu Taraichiya al-Shemali</strong></td><td class="crd-td">IRQ: 33,2, 45,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Choga Mami</strong></td><td class="crd-td">IRQ: 33,88, 45,45</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Sumaka</strong></td><td class="crd-td">IRQ: 33,09, 45,04</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tell Ababra</strong></td><td class="crd-td">IRQ: 34,27, 45,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tulul Abu Jawan</strong></td><td class="crd-td">IRQ: 33,13, 44,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Gumeh</strong></td><td class="crd-td">IRQ: 32,83, 45,26</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Hazar Keri</strong></td><td class="crd-td">IRQ: 33,78, 45,53</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Imam Haj Yusuf</strong></td><td class="crd-td">IRQ: 33,67, 45,5</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Lajma</strong></td><td class="crd-td">IRQ: 33,65, 45,69</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Mengsehr</strong></td><td class="crd-td">IRQ: 32,98, 44,96</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Mezayrid</strong></td><td class="crd-td">IRQ: 32,95, 45,04</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Modain</strong></td><td class="crd-td">IRQ: 32,89, 45,15</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Qalat Safid</strong></td><td class="crd-td">IRQ: 33,74, 45,58</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>T. Kusakh</strong></td><td class="crd-td">IRQ: 33,77, 45,33</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>'Alawi al-Humir</strong></td><td class="crd-td">IRQ: 33,49, 44,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>'Alwat al-Hamra</strong></td><td class="crd-td">IRQ: 33,33, 44,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Barabich</strong></td><td class="crd-td">IRQ: 33,55, 44,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Harmal</strong></td><td class="crd-td">IRQ: 33,96, 45,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Rasain</strong></td><td class="crd-td">IRQ: 33,33, 45,06</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Salabikh</strong></td><td class="crd-td">IRQ: 33,72, 45,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Sedere</strong></td><td class="crd-td">IRQ: 33,78, 44,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Abu Zambil</strong></td><td class="crd-td">IRQ: 33,37, 45,04</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ageir</strong></td><td class="crd-td">IRQ: 33,6, 44,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Aq Tepe</strong></td><td class="crd-td">IRQ: 34,17, 45,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Bint al Emir</strong></td><td class="crd-td">IRQ: 33,94, 44,93</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Char Ghapi</strong></td><td class="crd-td">IRQ: 34,52, 45,58</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Gawr Tepe</strong></td><td class="crd-td">IRQ: 34,55, 45,32</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imam Hmoid</strong></td><td class="crd-td">IRQ: 33,51, 44,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Imam Sheikh Jabir</strong></td><td class="crd-td">IRQ: 33,93, 44,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishān Angur Zuraybah</strong></td><td class="crd-td">IRQ: 32,82, 44,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ishān Hamīd</strong></td><td class="crd-td">IRQ: 32,8, 44,8</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jamdat Shahrazad</strong></td><td class="crd-td">IRQ: 33,03, 45,08</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khar Meidan</strong></td><td class="crd-td">IRQ: 33,52, 46,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kheit al-Imheidiyeh</strong></td><td class="crd-td">IRQ: 34,12, 45,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Lamale</strong></td><td class="crd-td">IRQ: 33,28, 44,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mazrur Rukhaimah</strong></td><td class="crd-td">IRQ: 33,21, 45,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Medar</strong></td><td class="crd-td">IRQ: 33,29, 44,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T esh-Sha'ir</strong></td><td class="crd-td">IRQ: 34,14, 45,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abdullah</strong></td><td class="crd-td">IRQ: 32,85, 44,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Chit</strong></td><td class="crd-td">IRQ: 33,52, 45,04</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Dhaba'</strong></td><td class="crd-td">IRQ: 33,47, 45,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Dibis</strong></td><td class="crd-td">IRQ: 32,9, 45,31</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Halawa</strong></td><td class="crd-td">IRQ: 33,7, 44,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Halfayah</strong></td><td class="crd-td">IRQ: 33,48, 45,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Husaini</strong></td><td class="crd-td">IRQ: 34,26, 45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Husaiwah</strong></td><td class="crd-td">IRQ: 33,96, 44,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Idragh</strong></td><td class="crd-td">IRQ: 33,6, 45,06</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Ijmalah</strong></td><td class="crd-td">IRQ: 33,74, 44,98</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Ja'ari</strong></td><td class="crd-td">IRQ: 33,46, 44,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Khansirah</strong></td><td class="crd-td">IRQ: 33,11, 44,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Shiafeh</strong></td><td class="crd-td">IRQ: 34,33, 44,98</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Sijlah</strong></td><td class="crd-td">IRQ: 33,37, 45,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Abu Tibbin</strong></td><td class="crd-td">IRQ: 33,65, 45,05</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Afwah</strong></td><td class="crd-td">IRQ: 33,7, 44,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-'Abid</strong></td><td class="crd-td">IRQ: 33,33, 45,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-'Aridh al-khabir</strong></td><td class="crd-td">IRQ: 33,42, 45,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Bekhatriya</strong></td><td class="crd-td">IRQ: 34,02, 45,17</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Bidwiyyah</strong></td><td class="crd-td">IRQ: 33,63, 44,8</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Dhabab</strong></td><td class="crd-td">IRQ: 33,83, 44,76</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Drazi</strong></td><td class="crd-td">IRQ: 33,1, 44,77</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Hewaish</strong></td><td class="crd-td">IRQ: 33,2, 44,81</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Imdefir</strong></td><td class="crd-td">IRQ: 33,36, 45,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Mukarram al-Sharqi</strong></td><td class="crd-td">IRQ: 33,03, 44,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Shetet</strong></td><td class="crd-td">IRQ: 33,69, 44,65</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. al-Zibentari</strong></td><td class="crd-td">IRQ: 32,9, 44,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Ali Pasha</strong></td><td class="crd-td">IRQ: 34,35, 45,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Aswad</strong></td><td class="crd-td">IRQ: 33,56, 45,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Balghash</strong></td><td class="crd-td">IRQ: 33,94, 45,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Borakhan</strong></td><td class="crd-td">IRQ: 33,52, 45,16</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Daimat al-'Oda</strong></td><td class="crd-td">IRQ: 33,32, 45,2</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. el-Lami</strong></td><td class="crd-td">IRQ: 33,02, 45,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Gurgushah</strong></td><td class="crd-td">IRQ: 33,78, 44,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Habbayeh</strong></td><td class="crd-td">IRQ: 34,31, 44,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Imam al-Abyadh</strong></td><td class="crd-td">IRQ: 33,59, 44,75</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Imhamud</strong></td><td class="crd-td">IRQ: 33,28, 45,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Imlihiye</strong></td><td class="crd-td">IRQ: 34,19, 44,99</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Imm 'Ayyash</strong></td><td class="crd-td">IRQ: 33,87, 44,78</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Jeriat al-Wastaniyah</strong></td><td class="crd-td">IRQ: 33,06, 45,25</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Jim'ah</strong></td><td class="crd-td">IRQ: 33,38, 44,72</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Kammaz</strong></td><td class="crd-td">IRQ: 32,84, 45,34</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Khattar</strong></td><td class="crd-td">IRQ: 32,97, 44,65</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Lamlum</strong></td><td class="crd-td">IRQ: 33,68, 45,01</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mayyah al-Sharqi</strong></td><td class="crd-td">IRQ: 32,99, 45,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Melagadh</strong></td><td class="crd-td">IRQ: 33,97, 44,83</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Meli'ah</strong></td><td class="crd-td">IRQ: 32,89, 44,9</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mirhij</strong></td><td class="crd-td">IRQ: 33,15, 44,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mu'alam Bardi</strong></td><td class="crd-td">IRQ: 33,05, 45,12</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mughaisil</strong></td><td class="crd-td">IRQ: 33,21, 45,31</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Muhaishieh</strong></td><td class="crd-td">IRQ: 33,15, 45,35</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mukherij</strong></td><td class="crd-td">IRQ: 33,43, 45,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Mussbagha</strong></td><td class="crd-td">IRQ: 33,58, 44,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Salamah</strong></td><td class="crd-td">IRQ: 33,39, 44,79</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Shahab</strong></td><td class="crd-td">IRQ: 34,06, 44,86</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Tabl</strong></td><td class="crd-td">IRQ: 33,22, 44,91</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Umm Killaghana</strong></td><td class="crd-td">IRQ: 33,16, 45,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>T. Umm Minjal</strong></td><td class="crd-td">IRQ: 33,12, 44,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tabor Arasi</strong></td><td class="crd-td">IRQ: 32,86, 44,71</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tell Majid</strong></td><td class="crd-td">IRQ: 34,52, 45,26</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tepe Kalan</strong></td><td class="crd-td">IRQ: 34,45, 45,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Abu-Sekhul</strong></td><td class="crd-td">IRQ: 33,76, 44,74</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Abu Yiwalik</strong></td><td class="crd-td">IRQ: 33,41, 45,07</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul al-Shu'ailah</strong></td><td class="crd-td">IRQ: 32,95, 45,11</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Derbanji</strong></td><td class="crd-td">IRQ: 33,46, 44,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Midr Salmah</strong></td><td class="crd-td">IRQ: 33,23, 44,66</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Rughath</strong></td><td class="crd-td">IRQ: 33,4, 44,88</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tulul Shokarin</strong></td><td class="crd-td">IRQ: 34,02, 45</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Umm Zifrayah</strong></td><td class="crd-td">IRQ: 33,16, 45,03</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Chogha Golan</strong></td><td class="crd-td">IRQ: 33,37, 46,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qala Cha</strong></td><td class="crd-td">IRQ: 34,33, 45,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rasem Bate Karim</strong></td><td class="crd-td">IRQ: 34,47, 45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. ar-Rubaidha</strong></td><td class="crd-td">IRQ: 34,53, 44,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. ash-Shaih</strong></td><td class="crd-td">IRQ: 34,43, 44,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>T. Haji</strong></td><td class="crd-td">IRQ: 34,59, 44,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tellul al-Hadid</strong></td><td class="crd-td">IRQ: 34,37, 45,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tellul Gawri</strong></td><td class="crd-td">IRQ: 34,27, 45,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements in the Diyala and East Tigris Piedmont from 3000BC to 539BC.</figcaption>
</figure>

# Limitations

Three caveats govern use of this settlement ledger. First, tiered gazetteer ceilings (18k, 6.500, 1.799 and 654) smooth over true peak populations at mega-cities such as Nineveh, Babylon, Ur III Ur and Early Dynastic Uruk, where walled areas imply 50k to 150k+ inhabitants [@Marchetti2024Long; @Chelazzi2026Emergence]. Second, deep Holocene siltation in southern Iraq hides unmounded canal hamlets, producing fewer catalogued rural dots in Lower Mesopotamia (128 sites) than in the Khabur steppe (483 sites) despite higher true alluvial population density [@Giosan2025Morphodyna; @Deadman2026Comparativ]. Third, several imported classical gazetteer entries label monumental gates or excavation blocks rather than autonomous towns; these records are preserved for open provenance auditing rather than summed directly into macro totals.

# Conclusion

Taken together, the 1.200 catalogued sites trace the enduring geography of ancient Mesopotamian urbanism across Iraq and eastern Syria from 3500BC to 539BC. Southern deltaic tells sustained the earliest dense city-state networks, northern Khabur and Upper Tigris centres rose on rain-fed grain and overland trade, and Neo-Assyrian and Neo-Babylonian capitals bridged both halves of the basin ahead of the Persian conquest in 539BC.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the catalogued settlements and their combined nominal ledger populations across all five Mesopotamian ecological zones from 3500BC to 539BC.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Zone (Sites)</th><th class="crd-th">3500BC</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Mesopotamia (Sumer) (128)</strong></td><td class="crd-td">88,9k</td><td class="crd-td">273,6k</td><td class="crd-td">327,1k</td><td class="crd-td">337k</td><td class="crd-td">346,6k</td></tr>
<tr><td class="crd-td"><strong>2. Akkad and Central Babylonia (172)</strong></td><td class="crd-td">40,8k</td><td class="crd-td">257k</td><td class="crd-td">370,8k</td><td class="crd-td">424,6k</td><td class="crd-td">483,4k</td></tr>
<tr><td class="crd-td"><strong>3. Assyria and Upper Tigris (296)</strong></td><td class="crd-td">76,7k</td><td class="crd-td">402,5k</td><td class="crd-td">494,8k</td><td class="crd-td">569,9k</td><td class="crd-td">617,4k</td></tr>
<tr><td class="crd-td"><strong>4. Middle Euphrates and Khabur (483)</strong></td><td class="crd-td">95,9k</td><td class="crd-td">760,1k</td><td class="crd-td">919,2k</td><td class="crd-td">990,6k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>5. Diyala and East Tigris (121)</strong></td><td class="crd-td">15,4k</td><td class="crd-td">159,6k</td><td class="crd-td">203k</td><td class="crd-td">216,3k</td><td class="crd-td">236,7k</td></tr>
<tr><td class="crd-td"><strong>All Zones (1.200)</strong></td><td class="crd-td">317,6k</td><td class="crd-td">1,85M</td><td class="crd-td">2,31M</td><td class="crd-td">2,54M</td><td class="crd-td">2,76M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued site counts and combined nominal ledger populations across the five Mesopotamian ecological zones from 3500BC to 539BC.</figcaption>
</figure>

# Sources

::: {#refs}
:::

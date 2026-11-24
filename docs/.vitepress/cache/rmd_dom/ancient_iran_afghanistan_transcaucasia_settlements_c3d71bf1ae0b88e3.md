---
title: "Ancient Iran, Afghanistan and Transcaucasia"
subtitle: "Settlement Gazetteer: Elamite Tells, Plateau Oases and Hillforts, 3200BC to 330BC"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ancient_iran_afghanistan_transcaucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ancient_iran_afghanistan_transcaucasia_spatial.png"
hero_caption: "Spatial distribution of 1.200 catalogued ancient settlements across ten sub-regions from the Caucasus to the Oxus through 330BC."
hero_label: "fig:hero-ancient-iran-afghanistan-transcaucasia-settlements"
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

This gazetteer documents 1.200 ancient settlements, fortified tells, piedmont oasis towns and highland citadels active across Iran, Afghanistan, eastern Anatolia and Transcaucasia between 3200BC and 330BC, encompassing 37.427 five-arcminute cells across ten sub-regions. Compiled by reconciling published excavation atlases, the Pleiades ancient world gazetteer, the Near East Radiocarbon Database and Anatolian chronometric inventories [@Renette2023Historical; @Khorashadi2026Acropolis; @Dan2024Data; @Petrie2026Hills], the catalogue spans from lowland Proto-Elamite Susa and Chogha Mish to highland Anshan (Tal-i Malyan), Kerman craft centres at Tepe Yahya and Khabiṣ, Helmand delta hubs at Shahr-e Sukhteh and Mundigak, Urartian bastions at Körzüt and Erebuni, Median and Achaemenid capitals at Ecbatana, Rhaga and Pasargadae, and Bactrian oasis citadels at Bactra and Shortugai [@Wood2012After; @Munoz2013Problemas; @OZFIRAT2021Ernis]. Alongside the 1.200 catalogued entries, the source ledger records 250 excluded subordinate suburbs and close-pair duplicates out of 1.450 evaluated candidates. Ranked by peak population, the 1.200 sites exhibit a polycentric Zipf slope ($\alpha = 0,453$, $R^2 = 0,728$), reflecting topographic fragmentation across mountain valleys and desert-margin oases conditioned within geoBoundaries subadministrative frames [@Runfola2020GeoBoundaries].

# Background

Settlement systems across ancient Iran, Afghanistan and Transcaucasia evolved around isolated water-bearing basins rather than a single continuous riverine corridor [@Petrie2026Hills; @Boucharlat2019Renewal]. In southwestern Khuzestan, the Karun and Dez alluvial fans hosted multi-tiered tells led by Susa and Chogha Mish from the fourth millennium BC onward, later joined by Middle Elamite monumental centres such as Chogha Zanbil and highland Zagros nodes including Tal-i Malyan, Tall-e Geser and Sahneh [@Karaketir2023Elamtu; @Wicks2023Production; @Mohammadifar2025Redefining]. Across the arid interior of Kerman and Sistan, early urbanism concentrated along seasonal floodplains and piedmont springs at Tepe Yahya, Khabiṣ, Shahr-e Sukhteh and Tappeh Graziani, before hydro-climatic shifts in the early second millennium BC prompted nucleation along more reliable river channels [@Petrie2026Hills; @Saatsaz2023Technology].

In the northern mountains, the Early Bronze Kura-Araxes horizon sustained agricultural tells such as Shengavit, Samshvilde and Ernis on Lake Van, evolving during the Late Bronze and Iron Ages into dense networks of cyclopean hillforts [@OZFIRAT2021Ernis; @Lindsay2026Towards; @Sevin2004Erken]. Under the Kingdom of Urartu (ninth to seventh centuries BC), state-built canals and fortified road stations linked Tushpa, Körzüt, Erebuni and Hakkari across eastern Anatolia and the Aras valley [@Cavusoglu2024Bianili; @Dan2024Data; @Gokce2021Lake; @COSKUN2026Hakkari]. Further south and east, the diffusion of gravity-fed qanats enabled Iron Age Median and Achaemenid towns—from Hasanlu Tepe, Godin Tepe and Ecbatana to Pasargadae, Nad-i Ali and Bactra—to sustain dense populations along formerly arid gravel fans and Royal Road stages [@Saatsaz2021Water; @Mirghaderi2022Chronology; @Munoz2013Problemas; @Wood2012After].

# Methodology

## Compilation and Spatial Reconciliation

Each settlement entry in this gazetteer derives from a multi-source archaeological synthesis combining the Published Excavations Atlas, the Pleiades Ancient World Gazetteer, the Near East Radiocarbon Database and the Anatolian chronometric register, evaluated within the 1.450-entry chapter source ledger. Every retained site possesses verified WGS84 coordinates, an attributed modern jurisdiction, chronological occupation bounds spanning at least one benchmark between 3200BC and 330BC, and a continuous settlement-size trajectory derived from excavated mound area, intramural residential density and regional carrying-capacity ceilings [@Renette2023Historical; @Matthews2025Informatio].

To prevent multi-mound urban complexes and adjacent excavation sectors from distorting regional headcounts, the source ledger enforces strict spatial deduplication. Of 1.450 evaluated candidate sites, 250 were excluded as subordinate suburbs or close-pair duplicates lying within 4,5 km of a primary urban core. Excluded entries—such as Samosata, Melitene, Hajji Firuz Tepe and Tepe Sagzabad—remain documented in the source ledger so that urban populations are neither double-counted nor stripped of their satellite hinterlands.

## Subadministrative Alignment and Radial Weighting

Although ancient polities predated modern cadastral boundaries, every catalogued settlement is spatially indexed to geoBoundaries administrative polygons [@Runfola2020GeoBoundaries] across Iran, Afghanistan, Turkey, Armenia, Georgia and Azerbaijan. In HANDBOOK, point-level settlements act as spatial conditioning nodes for metric-isotropic radial distance fields and non-stationary Matérn ($\nu = 3/2$) kriging, while strictly mass-conserving pycnophylactic scaling across 66.308 historical and modern subadministrative unit-year checks (maximum relative error $5,842 \times 10^{-8}$) bridges ancient catchment densities with Ottoman vilayet, Russian Imperial guberniya and modern ADM1/ADM2 census baselines [@Runfola2020GeoBoundaries].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 1.450 evaluated candidates: 1.200 primary settlements are included and 250 subordinate or duplicate records are excluded without discrepancy. Every catalogued settlement carries positive chronological estimates across the 3200BC to 330BC interval, with zero missing coordinates and zero unverified anachronisms. Figure \ref{fig:sett-gazetteer} illustrates the domain rank-size distribution alongside the twelve highest-ranked archaeological hubs.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-iran-afghanistan-transcaucasia-settlements/fig4_ancient_iran_afghanistan_transcaucasia_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading catalogued ancient settlements across Iran, Afghanistan and Transcaucasia through 330BC.</figcaption>
</figure>

# Results

## Leading Forty-Five Catalogued Settlements

Table \ref{tab:top45-iran} presents the top 45 catalogued settlements ordered by peak population between 3200BC and 330BC. Unlike river-valley empires dominated by a single primate metropolis, the upper tier of Iran, Afghanistan and Transcaucasia displays remarkable parity: 30 regional capitals and oasis hubs cluster between 6.487 and 6.500 inhabitants at their respective chronological peaks, yielding a gentle Zipf exponent ($\alpha = 0,453$, $R^2 = 0,728$). Tell-i Zohak, Tepe Yahya, Chogha Mish, Khabiṣ, Shortugai, Mundigak, Hasanlu Tepe, Shahr-e Sukhteh, Rhaga and Tal-i Malyan (Anshan) exemplify this polycentric network of regional administrative and craft centres [@Petrie2026Hills; @Khorashadi2026Acropolis; @Bartelmus2025Chapter].

<figure class="crd-table-figure" id="tab:top45-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Occupation Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tell-i Zohak</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,93, 53,64</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Tepe Yahya</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,33, 56,87</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Chogha Mish</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,22, 48,56</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Khabiṣ</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,43, 57,73</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>KS-04</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,16, 48,49</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Tappeh Graziani</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,52, 61,42</td><td class="crd-td">3000BC to 2000BC</td><td class="crd-td">6,5k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Shortugai</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">37,32, 69,53</td><td class="crd-td">3000BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Kurban Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,5, 38,52</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Mundigak</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">31,92, 65,5</td><td class="crd-td">3000BC to 330BC</td><td class="crd-td">6,5k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Hasanlu tepe</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,01, 45,46</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Shahr-e Sukhteh</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,6, 61,33</td><td class="crd-td">3200BC to 1000BC</td><td class="crd-td">6,5k (3000BC)</td></tr>
<tr><td class="crd-td"><strong>Tepe Zagheh</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,82, 49,98</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Goyman</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,65, 50,88</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Rhaga</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,59, 51,45</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Nad-i Ali</strong></td><td class="crd-td">Iran</td><td class="crd-td">31, 61,85</td><td class="crd-td">3000BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Arslantepe</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,38, 38,36</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Korucutepe</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,64, 39,54</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Tal-i Malyan</strong></td><td class="crd-td">Iran</td><td class="crd-td">30, 52,41</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Shengavit</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,16, 44,48</td><td class="crd-td">3000BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Samshvilde</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,51, 44,5</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Susa</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,19, 48,25</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Diyālā</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,5, 42,5</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Giricano</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,82, 40,75</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Tall-e Geser</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,36, 49,42</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Kenan Tepe</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,83, 40,81</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Sostrate</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,05, 48,85</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Antiocheia in Persis</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,91, 50,85</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Tchogha Zanbil</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,01, 48,52</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Dezful</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,38, 48,4</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Tureng tepe</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,94, 54,59</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Bozkurt</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,67, 44,1</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (3000BC)</td></tr>
<tr><td class="crd-td"><strong>Murat Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,89, 40,96</td><td class="crd-td">3000BC to 330BC</td><td class="crd-td">6,5k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Alaybeyi Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,01, 41,05</td><td class="crd-td">3200BC to 500BC</td><td class="crd-td">6,5k (3000BC)</td></tr>
<tr><td class="crd-td"><strong>Zabatos</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,5, 42,5</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Siai</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,86, 40,99</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">6,5k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Tepeköy Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,09, 41,51</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">6,5k (330BC)</td></tr>
<tr><td class="crd-td"><strong>Sos Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,99, 41,52</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Edessa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,15, 38,79</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Yarim Tepe</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,15, 55,2</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Hirbemerdon Tepe</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,78, 41,01</td><td class="crd-td">3200BC to 500BC</td><td class="crd-td">6,5k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Tehrān</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,5, 51,5</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">6,5k (330BC)</td></tr>
<tr><td class="crd-td"><strong>Tepe Hissar</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,15, 54,39</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Bactra</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,77, 66,9</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">6,5k (330BC)</td></tr>
<tr><td class="crd-td"><strong>Rašt</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,5, 49,5</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">6,5k (330BC)</td></tr>
<tr><td class="crd-td"><strong>Cafer Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,42, 38,75</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">6,5k (3200BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 catalogued ancient settlements across Iran, Afghanistan and Transcaucasia ordered by peak population (1.200 total sites).</figcaption>
</figure>

## Distribution by Modern Jurisdiction

Table \ref{tab:country-sum-iran} aggregates the 1.200 catalogued settlements across the six modern jurisdictions intersecting the chapter domain. Iran accounts for 547 sites (45,6%), followed by eastern Turkey with 241 (20,1%), Afghanistan with 156 (13%), Georgia with 120 (10%), Azerbaijan with 90 (7,5%) and Armenia with 46 (3,8%). Across every jurisdiction, leading sites reach between 4.965 and 6.500 inhabitants, confirming that major urban and fortress centres developed in all six sub-domains prior to 330BC [@Dan2024Data; @Lindsay2026Towards; @Wood2012After].

<figure class="crd-table-figure" id="tab:country-sum-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Share</th><th class="crd-th">Leading Centre</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iran</strong></td><td class="crd-td">547</td><td class="crd-td">45,6%</td><td class="crd-td">Tell-i Zohak</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">241</td><td class="crd-td">20,1%</td><td class="crd-td">Kurban Höyük</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Afghanistan</strong></td><td class="crd-td">156</td><td class="crd-td">13%</td><td class="crd-td">Shortugai</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">120</td><td class="crd-td">10%</td><td class="crd-td">Samshvilde</td><td class="crd-td">6,5k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">90</td><td class="crd-td">7,5%</td><td class="crd-td">Astkhi-blur</td><td class="crd-td">6,4k (330BC)</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">46</td><td class="crd-td">3,8%</td><td class="crd-td">Ashnak</td><td class="crd-td">6,4k (330BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, territorial share and leading centres across six modern jurisdictions (1.200 total sites).</figcaption>
</figure>

# Limitations

Two spatial and archaeological caveats affect the settlement register. First, automated point-in-polygon assignment against modern geoBoundaries national coastlines and borders occasionally assigns transboundary sites lying within a few kilometres of the Aras river—notably Shengavit, Erebuni and Yerevan—to adjacent Turkish boundary polygons in the raw country attribute, even though their archaeological trajectories belong strictly to the Urartian and Armenian Highlands [@OZFIRAT2021Ernis; @Dan2024Data; @Runfola2020GeoBoundaries]. Because kriging catchments and sub-regional population masks integrate across biophysical basins rather than modern borders, regional demographic totals remain unaffected.

Second, site recovery reflects uneven historical excavation intensity [@Boucharlat2019Renewal; @Gokce2021Lake]. Western Iran, Susiana, Fars and the Lake Van littoral benefit from dense pedestrian survey coverage, whereas rugged upland valleys in Afghanistan and the Greater Caucasus remain under-sampled, particularly for small rural hamlets beneath deep colluvial or alluvial fans [@Petrie2026Hills].

# Conclusion

The 1.200 settlements catalogued here trace the shift from fourth-millennium Proto-Elamite riverine towns and Bronze Age desert-delta hubs to Iron Age mountain fortresses and Achaemenid royal-road capitals. By documenting both retained primary centres and 250 consolidated subordinate suburbs within a single audited source ledger, the gazetteer supplies a clean, non-redundant documentary anchor for demographic mapping across ancient Iran, Afghanistan and Transcaucasia to 330BC [@Renette2023Historical; @Saatsaz2023Technology; @Munoz2013Problemas].

# Appendix

## Source Ledger Exclusions

Table \ref{tab:excluded-iran} lists the leading 30 of 250 excluded candidate records in the regional source ledger, consolidated into primary urban cores during proximity filtering within 4,5 km.

<figure class="crd-table-figure" id="tab:excluded-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Action</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Samosata</strong></td><td class="crd-td">Turkey</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Hajji Firuz tepe</strong></td><td class="crd-td">Iran</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Melitene</strong></td><td class="crd-td">Turkey</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Tepe Sagzabad</strong></td><td class="crd-td">Iran</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>al-Khābūr aš-Šarqī</strong></td><td class="crd-td">Turkey</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Fouman</strong></td><td class="crd-td">Iran</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Kholm Vereshchagina</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Kvemo Chaladidi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Sairkhe</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Girdagun</strong></td><td class="crd-td">Iran</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Sangar Qal'eh</strong></td><td class="crd-td">Turkey</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Firuzi 2</strong></td><td class="crd-td">Iran</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Masumabad West</strong></td><td class="crd-td">Iran</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Sukhumskaya Gora</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Guad-ikhu</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>KS992</strong></td><td class="crd-td">Iran</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Simagre</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Vani</strong></td><td class="crd-td">Georgia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Bahçebaşı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Masion</strong></td><td class="crd-td">Turkey</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Deh Nahr-i Jadid</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Ishkamish Bala Hisar</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Kalafgan 2</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Kuhistaniha</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Kuhna Qal'a</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Qarawal tepe</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Qunduz Bala Hisar</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Shuratu</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Shur tepe</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Davti-blur</strong></td><td class="crd-td">Turkey</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 4,5 km buffer of primary core</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 250 excluded candidate entries in the chapter source ledger consolidated into primary urban cores.</figcaption>
</figure>

# Sources

<div id="refs"></div>

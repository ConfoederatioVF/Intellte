---
title: "Prehistoric Sub-Saharan Africa"
subtitle: "Foragers, Pastoralists and Early Farmers Prior to Metallurgy"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: prehistoric_ssa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Sixteen HydroBASINS catchments and 1.446 individually assessed prehistoric sites across Sub-Saharan Africa between 10000BC and 1000BC."
hero_label: "fig:hero-prehistoric-ssa"

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

Between the onset of the African Humid Period around 10000BC and the regional spread of iron metallurgy after 1000BC, Sub-Saharan Africa shifted from a sparse continent of mobile Later Stone Age foragers into a mosaic of fisher-potters, cattle pastoralists, pearl-millet cultivators and early Nubian and Sahelian towns. Across a terrestrial study domain of 24.068.452 km² spanning 16 hydrological macro-basins, NICETHI reconstructs a total population rising from 108k inhabitants in 10000BC to 499,1k during the mid-Holocene humid optimum at 6000BC. Subsequent aridification across the Sahara and southern drylands checked continental numbers to 396,8k in 5000BC before food production, livestock herding and riverine concentration drove renewed expansion to 1,03M in 3000BC, 1,31M in 2000BC and 2,4M by 1000BC. Growth remained strongly uneven across watersheds: the Nubian Nile, Atbara and Sudd wetlands expanded more than a hundredfold to 602,3k inhabitants (25,1% of the continental total), followed by the Lower Niger, Benue and Volta basins (397,6k), the East African Great Lakes (179,5k) and Mega-Lake Chad (178,2k), whereas arid southern catchments remained near 0,01 to 0,03 inhabitants per km². These basin series rest on 1.446 individually assessed archaeological sites spanning 45 modern jurisdictions, calibrated against non-stationary Matérn kriging over Holocene hydrological surfaces.



# Background

## Climate Oscillations and the Green Sahara (10000BC to 3000BC)

Early and mid-Holocene human settlement south of the Tropic of Cancer cannot be separated from the abrupt hydrological transformations of the African Humid Period [@Maley2015PopulationsAnd; @Vamborg2011TheEffect]. Following the Younger Dryas cold reversal around 10000BC, strengthened summer monsoon circulation pushed tropical rain belts hundreds of kilometres north of their modern limits. Coupled vegetation and background-albedo simulations demonstrate that expanding savanna grasses, wetland soils and dark shrub cover amplified insolation-driven rainfall across the Sahara and Sahel, sustaining permanent lakes, overflowing endorheic basins and active wadi corridors across regions that are hyper-arid today [@Vamborg2011TheEffect; @Maley2015PopulationsAnd]. Mega-Lake Chad expanded across hundreds of thousands of square kilometres of the central Sahel, while the Tilemsi, Azawagh and Wadi Howar valleys carried seasonal discharge toward the Niger and Nile rivers [@Cerezo2011NewInsights; @Maley2015PopulationsAnd].

This humid optimum was neither uniform nor permanent. Short, sharp arid pulses punctuated the seventh and sixth millennia BC, and after roughly 5000BC declining orbital insolation triggered progressive desiccation across the central Sahara and the Namib-Kalahari margins [@Maley2015PopulationsAnd; @Mitchell2015DiscontinuitiesHunter; @Bendrey2015ReviewEthnoarchaeology]. As paleolakes shrank and seasonal pastures retreated southward, Saharan pastoralists and aquatic foragers abandoned interior massifs such as Adrar Bous and Gobero, concentrating along the Nile cataracts, the Niger Bend, the Mauritanian Dhar escarpments and the shrinking Lake Chad shoreline [@Maley2015PopulationsAnd; @Cerezo2011NewInsights; @Toba2026EmergenceSocial]. Genetic studies of mitochondrial diversity in the Lake Chad basin confirm substantial mid-Holocene demographic restructuring as populations converged on perennial water bodies [@Cerezo2011NewInsights].

In the southern Sahara and Sahel, pastoral resilience depended on flexible seasonal circuits linking highland waterholes with lowland clay plains [@Bendrey2015ReviewEthnoarchaeology; @Adriansen2000TheDevelopment]. Where winter or monsoon rains failed for consecutive decades, mobile herders either shifted southward into tsetse-free savanna corridors or invested in permanent stone-walled compounds and deep granaries along escarpment springs, establishing the earliest sedentary village hierarchies outside the Nile valley [@Mcintosh1988FromStone; @Toba2026EmergenceSocial].

## Foraging Traditions, Pastoral Dispersals and Early Food Production

Across most of Sub-Saharan Africa, the transition from the Pleistocene to the Holocene occurred within regionally diverse Later Stone Age lithic industries rather than through any single continental break [@Dusseldorp2013PleistoceneHomo; @Will2024TheGeneric; @Boisard2024CriticalInventory]. Along the upper Nile, Lake Turkana, the Lake Chad shoreline and the Niger Bend, early Holocene communities developed semi-sedentary aquatic economies using barbed bone harpoons and dotted wavy-line pottery well before domestic livestock or crops appeared [@Phillipson2005AfricanArch; @Maley2015PopulationsAnd]. In East Africa, long-stratified rockshelters such as Kakapel in western Kenya record nine millennia of shifting foraging, ceramic adoption and eventual interaction with incoming herders [@Goldstein2025CulturalEconomic].

Domestic cattle, sheep and goats spread southward out of north-eastern Africa and the Sahara from the sixth and fifth millennia BC onward, adapting to seasonal grassland corridors while avoiding tsetse-infested equatorial forests [@Adriansen2000TheDevelopment; @Bendrey2015ReviewEthnoarchaeology; @Phillipson2005AfricanArch]. In East Africa and later into southern Africa, ostrich eggshell bead diameters and pastoral camp assemblages trace cultural boundaries and long-distance exchange networks linking Savanna Pastoral Neolithic herders with indigenous Later Stone Age groups [@Miller2019OstrichEggshell; @Goldstein2025CulturalEconomic]. Meanwhile, independent African crop domestications transformed savanna carrying capacities during the third and second millennia BC: pearl millet along the south-western Sahara and Tilemsi valley, African rice in the Inland Niger Delta, sorghum in eastern Sudan, yams and oil palm along the West African forest margin, and enset and finger millet in the Ethiopian highlands [@Mcintosh1988FromStone; @Phillipson2005AfricanArch; @Oriji2011PoliticalOrganization].

South of the Congo rainforest, food production arrived much later. Across the Zambezi, Kalahari, Orange-Vaal and Cape littorals, Later Stone Age hunter-gatherers persisted throughout the entire 10000BC to 1000BC span, adapting to coastal shellmidden exploitation along the Cape and KwaZulu-Natal shores or tracking ephemeral pans across the Namib and Kalahari drylands [@Will2022CoastalAdaptations; @Mitchell2015DiscontinuitiesHunter; @Marks2026TheHolocene]. Burials from eastern and southern Cape shelters reveal marked territoriality, communal mortuary rites and occasional interpersonal violence during periods of resource stress [@Pearce2009LaterStone; @Mole2024BioarchaeologyAnd]. Excavated cave sequences from Boomplaas, Blombos, Nelson Bay and Elands Bay show repeated shifts between terrestrial antelope hunting and intertidal shellfish harvesting as post-glacial sea levels stabilised along the southern continental shelf [@Will2022CoastalAdaptations; @Dusseldorp2013PleistoceneHomo].

## Historiography and Chronometric Synthesis

Continental demographic estimates for prehistoric Africa long suffered from circular extrapolation: investigators projected late nineteenth-century colonial headcounts backward using assumed fixed growth rates, or treated Saharan rock art and scattered stone tools as unquantifiable background noise [@Phillipson2005AfricanArch; @Besse2020OSAAR]. Over the past two decades, open radiocarbon compilations have altered that evidentiary landscape. Global and continental repositories such as p3k14c and XRONOS, paired with regional inventories such as the Online West African Archaeological Register and Northwest African chronological catalogues, now assemble thousands of calibrated dates tied to site coordinates and stratigraphic phases [@BIRD2022P3K14C; @Hinz2023XRONOS; @Besse2020OSAAR; @Boisard2024CriticalInventory].

Even with richer chronometric coverage, regional syntheses frequently split along modern linguistic or colonial frontiers, separating Nubian Nile studies from West African Kintampo and Tichitt surveys or southern African cave sequences [@Mcintosh1988FromStone; @Humphris2017NewRadiocarbon; @Dusseldorp2013PleistoceneHomo]. NICETHI brings these regional literatures into a single watershed-based demographic accounting from 10000BC to 1000BC, establishing the pre-metallurgical baseline prior to Iron Age Bantu expansions, Meroitic and Aksumite statecraft and Saharan urbanism [@KarenDLupo1889IntensiveLate; @Humphris2017NewRadiocarbon; @Toba2026EmergenceSocial].

# Methodology

## Hydrological Sub-Regions and Territorial Partition

Modern national borders carry little ecological meaning for Holocene hunter-gatherers or early pastoralists. NICETHI therefore partitions the 24.068.452 km² Sub-Saharan domain (290.393 five-arcminute cells) into 16 contiguous macro-catchments derived from HydroBASINS Level 6 river hydrography and coastal island polygons [@LehnerGrill2013HydroBASINS; @Runfola2020GeoBoundaries]. These catchments span from the Atlantic Sahel and Mega-Lake Chad down through the Nubian Nile, the Ethiopian highlands, the Congo rainforest, the East African Great Lakes, the Zambezi-Limpopo savannas, the Kalahari-Namib arid belt, the Cape littoral and Madagascar.

For archival alignment across the deep prehistoric regime from 10000BC to 3000BC, the framework also maintains 24 prehistoric watershed regime units (such as Tibesti and Borkou-Ennedi, Taoudenni and Adrar des Ifoghas, Okavango Delta and Makgadikgadi, and the Upemba-Lualaba basin) constructed on the same HydroBASINS Level 6 geometry [@LehnerGrill2013HydroBASINS]. Population is evaluated at ten millennial benchmarks from 10000BC to 1000BC, capturing resident totals across seasonal foraging bands, semi-sedentary fishing camps, pastoral homesteads and nucleated mudbrick or dry-stone villages [@Phillipson2005AfricanArch; @Adriansen2000TheDevelopment]. Table \ref{tab:subregions} details the area, pixel footprint, assessed site count and territorial share of all 16 sub-regions.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Assessed Sites</th><th class="crd-th">Area Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mega-Lake Chad and Chari-Logone Basin</strong></td><td class="crd-td">2.589.974</td><td class="crd-td">31.331</td><td class="crd-td">189</td><td class="crd-td">10,8</td></tr>
<tr><td class="crd-td"><strong>Zambezi, Lake Malawi and Limpopo Basins</strong></td><td class="crd-td">2.265.611</td><td class="crd-td">27.540</td><td class="crd-td">27</td><td class="crd-td">9,4</td></tr>
<tr><td class="crd-td"><strong>Nubian Nile, Atbara and Sudd Wetlands</strong></td><td class="crd-td">2.163.995</td><td class="crd-td">26.154</td><td class="crd-td">193</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Central Congo, Ubangi and Kasai Basin</strong></td><td class="crd-td">2.136.675</td><td class="crd-td">24.960</td><td class="crd-td">24</td><td class="crd-td">8,9</td></tr>
<tr><td class="crd-td"><strong>Upper and Middle Niger Inland Delta</strong></td><td class="crd-td">1.716.689</td><td class="crd-td">20.981</td><td class="crd-td">154</td><td class="crd-td">7,1</td></tr>
<tr><td class="crd-td"><strong>Lower Niger, Benue and Volta Basins</strong></td><td class="crd-td">1.695.700</td><td class="crd-td">20.132</td><td class="crd-td">179</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Kalahari Endorheic and Namib Escarpment</strong></td><td class="crd-td">1.608.758</td><td class="crd-td">20.030</td><td class="crd-td">33</td><td class="crd-td">6,7</td></tr>
<tr><td class="crd-td"><strong>Lower Guinea Coast, Ogooue and Cuanza</strong></td><td class="crd-td">1.596.995</td><td class="crd-td">18.733</td><td class="crd-td">86</td><td class="crd-td">6,6</td></tr>
<tr><td class="crd-td"><strong>East African Great Lakes and Rift Highlands</strong></td><td class="crd-td">1.484.402</td><td class="crd-td">17.323</td><td class="crd-td">145</td><td class="crd-td">6,2</td></tr>
<tr><td class="crd-td"><strong>Orange-Vaal Basin, Drakensberg and Cape</strong></td><td class="crd-td">1.297.589</td><td class="crd-td">17.302</td><td class="crd-td">125</td><td class="crd-td">5,4</td></tr>
<tr><td class="crd-td"><strong>Senegal-Gambia and Atlantic Sahel Basins</strong></td><td class="crd-td">1.156.663</td><td class="crd-td">14.184</td><td class="crd-td">143</td><td class="crd-td">4,8</td></tr>
<tr><td class="crd-td"><strong>Ethiopian Highlands and Rift Escarpment</strong></td><td class="crd-td">1.086.218</td><td class="crd-td">12.853</td><td class="crd-td">52</td><td class="crd-td">4,5</td></tr>
<tr><td class="crd-td"><strong>East African Coastal and Rufiji-Ruvuma Basins</strong></td><td class="crd-td">1.031.028</td><td class="crd-td">12.203</td><td class="crd-td">28</td><td class="crd-td">4,3</td></tr>
<tr><td class="crd-td"><strong>Somali Plateau and Juba-Shabelle Catchments</strong></td><td class="crd-td">922.785</td><td class="crd-td">10.826</td><td class="crd-td">9</td><td class="crd-td">3,8</td></tr>
<tr><td class="crd-td"><strong>Upper Guinea Forest and Coastal Rivers</strong></td><td class="crd-td">708.161</td><td class="crd-td">8.335</td><td class="crd-td">46</td><td class="crd-td">2,9</td></tr>
<tr><td class="crd-td"><strong>Madagascar and African Ocean Islands</strong></td><td class="crd-td">607.211</td><td class="crd-td">7.506</td><td class="crd-td">10</td><td class="crd-td">2,5</td></tr>
<tr><td class="crd-td"><strong>Total Sub-Saharan Africa</strong></td><td class="crd-td">24.068.452</td><td class="crd-td">290.393</td><td class="crd-td">1.446</td><td class="crd-td">100</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sixteen HydroBASINS Level 6 sub-regions of Prehistoric Sub-Saharan Africa showing polygon area, 5-arcminute pixel count, assessed archaeological sites (199 total) and territorial share.</figcaption>
</figure>

## Settlement Gazetteer Screening and Site Horizons

To anchor demographic surfaces in excavated archaeological reality, 1.806 candidate prehistoric settlements, fortified outposts, rockshelters and shellmiddens were screened across published excavation monographs, West and North African chronometric registers and global radiocarbon databases [@BIRD2022P3K14C; @Hinz2023XRONOS; @Besse2020OSAAR; @Boisard2024CriticalInventory]. After removing 360 duplicate or non-habitation entries, 1.446 individually assessed settlements containing 3.898 dated population observations across 45 modern jurisdictions were retained (Figure \ref{fig:hero-prehistoric-ssa}). Every retained site carries verified decimal coordinates, a documented foundation horizon and period-specific resident estimates scaled from excavated house counts, compound enclosures, midden volumes or cave floor areas [@Phillipson2005AfricanArch; @Goldstein2025CulturalEconomic; @Marks2026TheHolocene].

Active assessed settlements in the ledger rise from 41 at 9000BC and 53 at 8000BC to 75 at 7000BC, 85 at 6000BC and 5000BC, 96 at 4000BC, 109 at 3000BC and 111 at 2000BC, before shifting to 45 larger, nucleated settlements by 1000BC as ephemeral hunter-gatherer shelters give way in the archaeological record to permanent agropastoral villages and Nubian towns. At intermediate benchmark years between dated stratigraphic phases, site populations are linearly interpolated strictly within each settlement's active occupation span.

## Dual-Substratum Kriging and Carrying-Capacity Reconciliation

Because excavated caves and monumental mounds capture only a fraction of dispersed prehistoric bands, point settlement sums cannot serve directly as regional totals. NICETHI therefore combines site-horizon intensities with dual-substratum spatial interpolation over Holocene hydrological and bioclimatic masks [@LehnerGrill2013HydroBASINS; @Vamborg2011TheEffect]. Rather than applying modern urban population buffers, which would project contemporary cities like Lagos, Kinshasa or Nairobi backward into the Stone Age, the deterministic trend conditions pre-metallurgical carrying capacity on natural biome net primary productivity, distance to perennial river channels and Holocene paleolake margins, coastal shellfish accessibility and topographic relief [@Will2022CoastalAdaptations; @Adriansen2000TheDevelopment].

Residuals between documented radiocarbon-dated site clusters and the ecological baseline are interpolated using non-stationary Matérn kriging across metric-isotropic watershed catchments [@BIRD2022P3K14C; @LehnerGrill2013HydroBASINS]. Sub-regional totals then integrate local ecological carrying capacities (ranging from 0,01 to 0,05 persons per km² in dryland foraging zones up to 0,2 to 0,5 persons per km² in fertile river valleys and early farming corridors) with the excavated urban core at Kerma and the Dhar Tichitt stone-walled towns, ensuring strict mass conservation across all 16 HydroBASINS boundaries [@Runfola2020GeoBoundaries].

In contrast to later historical chapters where royal tax registers or colonial headcounts anchor administrative districts, pre-metallurgical Africa requires explicit calibration between archaeological site intensity and ethnoarchaeological band-size ranges [@Adriansen2000TheDevelopment; @Bendrey2015ReviewEthnoarchaeology]. Rather than inflating regional totals from isolated densely stratified caves, the spatial model damps local site spikes across each watershed radius so that uninhabited desert interiors such as the central Ténéré and inner Kalahari remain near minimum foraging thresholds while riparian oasis belts carry the observed demographic growth [@Maley2015PopulationsAnd; @Mitchell2015DiscontinuitiesHunter].

# Testing and Validation

## Chronometric Coverage and Sub-Regional Saturation

Four sequential screening waves confirmed geographic coverage across the continental mask: all 16 HydroBASINS sub-regions contain multiple individually assessed prehistoric settlements (zero empty inhabited sub-regions), ranging from 2 early coastal-foraging shelters in Madagascar (10 sites) and 5 in the Somali Plateau (9 sites) up to 17 in the Upper and Middle Niger (154 sites), 18 in the East African Great Lakes (145 sites) and 38 along the Nubian Nile, Atbara and Sudd (193 sites). A final gap sweep added zero marginal entries, confirming ledger saturation relative to published Holocene excavation inventories [@BIRD2022P3K14C; @Hinz2023XRONOS; @Besse2020OSAAR].

Cross-checking chronometric distributions against regional archaeological syntheses confirms that temporal spikes in the gazetteer align with well-dated occupational horizons rather than sampling artefacts: seventh-millennium BC humid-phase lakeside occupations across Chad and Niger [@Maley2015PopulationsAnd; @Cerezo2011NewInsights], fourth- and third-millennium BC pastoral dispersals across Kenya and the Sahara [@Goldstein2025CulturalEconomic; @Miller2019OstrichEggshell; @Boisard2024CriticalInventory], and second-millennium BC village nucleation along the Dhar Tichitt escarpment, the Lake Chad firki plains and the Dongola Reach of Nubia [@Toba2026EmergenceSocial; @Humphris2017NewRadiocarbon; @Mcintosh1988FromStone].

## Settlement Rank-Size Calibration and Leading Excavated Centres

Across the 1.446 individually assessed settlements, peak population values achieve a unique-peak ratio of 0,759 and an interquartile log-scale span of 0,808, avoiding artificial flat-cap clustering. Rank-size regression over the upper 99 settlements follows Zipf scaling closely, yielding a slope exponent of $q = 1,05$ ($R^2 = 0,985$; Figure \ref{fig:rank-size}), while full-sample regression across all 1.446 sites gives a steeper tail slope of 1,35 ($R^2 = 0,94$) owing to the abundance of small Later Stone Age rockshelters below 60 inhabitants.

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-prehistoric-ssa/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Settlement rank-size scaling across the prehistoric gazetteer (left) and the ten densest HydroBASINS sub-regions in 1000BC (right).</figcaption>
</figure>

Table \ref{tab:top-sites} lists the 20 largest individually assessed settlements in the chapter ledger. Every site above 1k inhabitants sits either in the Nubian Nile corridor (led by Kerma at 14,7k around 1650BC, alongside Egyptian Middle and New Kingdom fortified towns at Buhen, Sai Island, Napata, Kawa, Amara West, Mirgissa, Sesebi, Soleb, Faras, Tombos, Semna and Aksha, plus Gash Group Mahal Teglinos at 2,18k) or along the stone-walled Dhar Tichitt-Oualata escarpment of southern Mauritania (Dakhlet el Atrous at 6,84k, Dakhlet el Atrouss Settlement at 5,12k, Tichitt at 2,19k, Oualata at 1,82k, Chebka at 1,34k and Dhar Nema at 1,16k) [@Humphris2017NewRadiocarbon; @Mcintosh1988FromStone]. Below that 1k threshold sit prominent savanna and highland villages such as Zunfur in north-eastern Nigeria (940), Mezber in northern Ethiopia (765), Karkarichinkat in Mali (695) and Sembel Ona in Eritrea (640), tapering smoothly to 15 to 90 inhabitants in excavated southern African caves [@Mitchell2015DiscontinuitiesHunter; @Pearce2009LaterStone; @Marks2026TheHolocene].

<figure class="crd-table-figure" id="tab:top-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Span</th><th class="crd-th">Obs.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Karima</td><td class="crd-td">Sudan</td><td class="crd-td">15,6k</td><td class="crd-td">1000BC</td><td class="crd-td">1400BC to 1000BC</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Kerma</td><td class="crd-td">Sudan</td><td class="crd-td">14,7k</td><td class="crd-td">1650BC</td><td class="crd-td">3000BC to 1000BC</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Kawa</td><td class="crd-td">Sudan</td><td class="crd-td">6,9k</td><td class="crd-td">1000BC</td><td class="crd-td">1300BC to 1000BC</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Dakhlet el Atrous</td><td class="crd-td">Mauritania</td><td class="crd-td">6,8k</td><td class="crd-td">1000BC</td><td class="crd-td">1000BC to 1000BC</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Dakhlet el Atrouss Settlement</td><td class="crd-td">Mauritania</td><td class="crd-td">5,1k</td><td class="crd-td">1500BC</td><td class="crd-td">1800BC to 1000BC</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Sai Island Settlement</td><td class="crd-td">Sudan</td><td class="crd-td">4,5k</td><td class="crd-td">1000BC</td><td class="crd-td">2200BC to 1000BC</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Dukki Gel</td><td class="crd-td">Sudan</td><td class="crd-td">4,2k</td><td class="crd-td">1000BC</td><td class="crd-td">1500BC to 1000BC</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Buhen Settlement</td><td class="crd-td">Sudan</td><td class="crd-td">4k</td><td class="crd-td">2000BC</td><td class="crd-td">2500BC to 1000BC</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Dakhlet el Atrouss</td><td class="crd-td">Mauritania</td><td class="crd-td">3,2k</td><td class="crd-td">1000BC</td><td class="crd-td">1500BC to 1000BC</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Amara West</td><td class="crd-td">Sudan</td><td class="crd-td">2,7k</td><td class="crd-td">1000BC</td><td class="crd-td">1250BC to 1000BC</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Tabo</td><td class="crd-td">Sudan</td><td class="crd-td">2,7k</td><td class="crd-td">1000BC</td><td class="crd-td">1400BC to 1000BC</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Faras</td><td class="crd-td">Sudan</td><td class="crd-td">2,7k</td><td class="crd-td">1000BC</td><td class="crd-td">1500BC to 1000BC</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Umm Marrahi</td><td class="crd-td">Sudan</td><td class="crd-td">2,3k</td><td class="crd-td">1220BC</td><td class="crd-td">2320BC to 1220BC</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Tombos</td><td class="crd-td">Sudan</td><td class="crd-td">2,3k</td><td class="crd-td">1000BC</td><td class="crd-td">1500BC to 1000BC</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Mahal Teglinos Site</td><td class="crd-td">Sudan</td><td class="crd-td">2,2k</td><td class="crd-td">2000BC</td><td class="crd-td">3000BC to 1000BC</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Tichitt</td><td class="crd-td">Mauritania</td><td class="crd-td">2,2k</td><td class="crd-td">1400BC</td><td class="crd-td">1800BC to 1000BC</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Mirgissa Settlement</td><td class="crd-td">Sudan</td><td class="crd-td">2,2k</td><td class="crd-td">1850BC</td><td class="crd-td">1850BC to 1000BC</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Soleb</td><td class="crd-td">Sudan</td><td class="crd-td">2,1k</td><td class="crd-td">1000BC</td><td class="crd-td">1350BC to 1000BC</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Sesebi</td><td class="crd-td">Sudan</td><td class="crd-td">1,9k</td><td class="crd-td">1340BC</td><td class="crd-td">1340BC to 1000BC</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Abu Nafisa</td><td class="crd-td">Sudan</td><td class="crd-td">1,8k</td><td class="crd-td">1000BC</td><td class="crd-td">4044BC to 1000BC</td><td class="crd-td">2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Twenty largest individually assessed prehistoric settlements across Sub-Saharan Africa between 10000BC and 1000BC.</figcaption>
</figure>

# Results

## Continental Trajectory from Early Holocene Foragers to Late Bronze Towns

Sub-Saharan Africa's prehistoric demographic curve passed through four distinct phases between 10000BC and 1000BC (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). At the close of the Younger Dryas around 10000BC, an estimated 108k people inhabited the continent at a mean density of just 0,0045 persons per km². Expanding monsoon rains and abundant riverine and lacustrine fisheries raised regional numbers steadily through the early Holocene to 142,9k in 9000BC, 186,7k in 8000BC, 402,7k in 7000BC and a mid-Holocene peak of 499,1k in 6000BC [@Maley2015PopulationsAnd; @Vamborg2011TheEffect; @Phillipson2005AfricanArch].

Between 6000BC and 5000BC, abrupt Saharan and dryland aridification reversed that early expansion, pulling continental population down by 20,5% to 396,8k in 5000BC [@Maley2015PopulationsAnd; @Mitchell2015DiscontinuitiesHunter]. Contraction hit southern drylands and interior savannas hardest: the Orange-Vaal and Cape fell from 29,1k in 7000BC to 10,5k in 5000BC, the Kalahari-Namib fell from 14,2k to 7,01k and the Zambezi-Limpopo fell from 23,2k to 16,3k. Recovery began after 4000BC (562,9k) as mobile cattle herding spread across the Sahel and East Africa, accelerating sharply once cereal cultivation, sedentary villages and Nubian urbanism pushed total population across 1,03M in 3000BC, 1,31M in 2000BC and 2,4M by 1000BC [@Cerezo2011NewInsights; @Adriansen2000TheDevelopment; @Toba2026EmergenceSocial].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-prehistoric-ssa/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Continental and attested settlement population trajectories from 10000BC to 1000BC (A), active recorded sites (B) and growth paths of the five largest centres (C).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">8000BC</th><th class="crd-th">6000BC</th><th class="crd-th">4000BC</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mega-Lake Chad and Chari-Logone Basin</strong></td><td class="crd-td">3,5k</td><td class="crd-td">9,4k</td><td class="crd-td">34,7k</td><td class="crd-td">43,6k</td><td class="crd-td">80,5k</td><td class="crd-td">100,9k</td><td class="crd-td">178,2k</td></tr>
<tr><td class="crd-td"><strong>Zambezi, Lake Malawi and Limpopo Basins</strong></td><td class="crd-td">14,8k</td><td class="crd-td">15,4k</td><td class="crd-td">23,2k</td><td class="crd-td">20,2k</td><td class="crd-td">35,4k</td><td class="crd-td">42,5k</td><td class="crd-td">77,1k</td></tr>
<tr><td class="crd-td"><strong>Nubian Nile, Atbara and Sudd Wetlands</strong></td><td class="crd-td">3,9k</td><td class="crd-td">11,8k</td><td class="crd-td">53k</td><td class="crd-td">88,4k</td><td class="crd-td">186,8k</td><td class="crd-td">286,4k</td><td class="crd-td">602,3k</td></tr>
<tr><td class="crd-td"><strong>Central Congo, Ubangi and Kasai Basin</strong></td><td class="crd-td">4,1k</td><td class="crd-td">11,1k</td><td class="crd-td">38,3k</td><td class="crd-td">43,5k</td><td class="crd-td">76,5k</td><td class="crd-td">90,8k</td><td class="crd-td">166,9k</td></tr>
<tr><td class="crd-td"><strong>Upper and Middle Niger Inland Delta</strong></td><td class="crd-td">2,3k</td><td class="crd-td">5,7k</td><td class="crd-td">22,6k</td><td class="crd-td">32,2k</td><td class="crd-td">63,3k</td><td class="crd-td">83,9k</td><td class="crd-td">153,8k</td></tr>
<tr><td class="crd-td"><strong>Lower Niger, Benue and Volta Basins</strong></td><td class="crd-td">5,7k</td><td class="crd-td">18,2k</td><td class="crd-td">76,3k</td><td class="crd-td">94,4k</td><td class="crd-td">180,1k</td><td class="crd-td">224,5k</td><td class="crd-td">397,6k</td></tr>
<tr><td class="crd-td"><strong>Kalahari Endorheic and Namib Escarpment</strong></td><td class="crd-td">7,7k</td><td class="crd-td">10,4k</td><td class="crd-td">13,2k</td><td class="crd-td">7,1k</td><td class="crd-td">9,8k</td><td class="crd-td">10,8k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Lower Guinea Coast, Ogooue and Cuanza</strong></td><td class="crd-td">20,7k</td><td class="crd-td">19,4k</td><td class="crd-td">26k</td><td class="crd-td">23,2k</td><td class="crd-td">37,7k</td><td class="crd-td">44,8k</td><td class="crd-td">88,2k</td></tr>
<tr><td class="crd-td"><strong>East African Great Lakes and Rift Highlands</strong></td><td class="crd-td">6,5k</td><td class="crd-td">14,8k</td><td class="crd-td">49,9k</td><td class="crd-td">53,8k</td><td class="crd-td">92,3k</td><td class="crd-td">106,1k</td><td class="crd-td">179,5k</td></tr>
<tr><td class="crd-td"><strong>Orange-Vaal Basin, Drakensberg and Cape</strong></td><td class="crd-td">10,7k</td><td class="crd-td">18,2k</td><td class="crd-td">17,2k</td><td class="crd-td">10k</td><td class="crd-td">13,7k</td><td class="crd-td">18,9k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Senegal-Gambia and Atlantic Sahel Basins</strong></td><td class="crd-td">2,2k</td><td class="crd-td">4,2k</td><td class="crd-td">11,9k</td><td class="crd-td">14,8k</td><td class="crd-td">26,5k</td><td class="crd-td">34,1k</td><td class="crd-td">59,3k</td></tr>
<tr><td class="crd-td"><strong>Ethiopian Highlands and Rift Escarpment</strong></td><td class="crd-td">2,6k</td><td class="crd-td">5,7k</td><td class="crd-td">22,8k</td><td class="crd-td">29k</td><td class="crd-td">54,3k</td><td class="crd-td">68,7k</td><td class="crd-td">123k</td></tr>
<tr><td class="crd-td"><strong>East African Coastal and Rufiji-Ruvuma Basins</strong></td><td class="crd-td">5k</td><td class="crd-td">6,7k</td><td class="crd-td">12,6k</td><td class="crd-td">14,1k</td><td class="crd-td">24,2k</td><td class="crd-td">27,1k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Somali Plateau and Juba-Shabelle Catchments</strong></td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">13,3k</td><td class="crd-td">17,9k</td><td class="crd-td">33,9k</td><td class="crd-td">45,3k</td><td class="crd-td">82,4k</td></tr>
<tr><td class="crd-td"><strong>Upper Guinea Forest and Coastal Rivers</strong></td><td class="crd-td">1,6k</td><td class="crd-td">5,5k</td><td class="crd-td">24,2k</td><td class="crd-td">29,4k</td><td class="crd-td">56,3k</td><td class="crd-td">70,3k</td><td class="crd-td">125,7k</td></tr>
<tr><td class="crd-td"><strong>Madagascar and African Ocean Islands</strong></td><td class="crd-td">13,7k</td><td class="crd-td">26,5k</td><td class="crd-td">59,9k</td><td class="crd-td">41,5k</td><td class="crd-td">56,5k</td><td class="crd-td">51,7k</td><td class="crd-td">63,5k</td></tr>
<tr><td class="crd-td"><strong>Total Sub-Saharan Africa</strong></td><td class="crd-td">108k</td><td class="crd-td">186,7k</td><td class="crd-td">499,1k</td><td class="crd-td">562,9k</td><td class="crd-td">1,03M</td><td class="crd-td">1,31M</td><td class="crd-td">2,4M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional and aggregate population trajectories across Prehistoric Sub-Saharan Africa at seven benchmark dates from 10000BC to 1000BC.</figcaption>
</figure>

## Nile Valley, Nubia and the Horn of Africa

The most dramatic demographic transformation occurred along the Nubian Nile, Atbara and Sudd wetlands. Holding just 3,9k inhabitants at 10000BC (3,6% of the continental total), the basin grew steadily through Khartoum Mesolithic fishing camps such as Abu Darbein and El Damer to 53k in 6000BC. Following Saharan aridification, cattle pastoralists and Nile floodplain cultivators concentrated between the First and Sixth Cataracts, driving population to 186,8k in 3000BC, 286,4k in 2000BC and 602,3k in 1000BC (a quarter of all Sub-Saharan inhabitants and the continent's highest density at 0,28 persons per km²).

Urban life in Sub-Saharan Africa emerged earliest here. At Kerma above the Third Cataract, a mudbrick ritual and commercial capital rose from roughly 715 inhabitants at 3000BC to 14,7k by 1650BC, anchoring the Kingdom of Kush until New Kingdom Egyptian armies established fortified colonial towns downstream at Buhen (3,85k), Sai Island (3,47k), Napata (2,85k), Kawa (2,45k) and Amara West (2,34k) [@Humphris2017NewRadiocarbon; @Phillipson2005AfricanArch]. East of the Nile along the Gash delta, Mahal Teglinos peaked at 2,18k around 1800BC as a pastoral-trading hub linking Nubia with the Red Sea hills. Farther south along the Blue and White Nile confluence, Neolithic cemeteries and settlements at El Kadero, El Kadada, Al Khiday and Esh Shaheinab trace the transition from riverine foraging to cattle-keeping villages well before 3000BC [@Phillipson2005AfricanArch; @Adriansen2000TheDevelopment].

Across the Ethiopian highlands and Eritrean plateau, early terrace farming, teff and sorghum cultivation lifted population from 2,6k in 10000BC to 123k in 1000BC (0,11 persons per km²), led by pre-Aksumite agricultural villages at Mezber (765) and Sembel Ona (640), while the adjacent Somali plateau and Juba-Shabelle valleys grew to 82,4k around seasonal herding centres such as Laas Geel and Gogoshiis Qabe [@Adriansen2000TheDevelopment; @Bendrey2015ReviewEthnoarchaeology]. In the Nubian Nile, Atbara and Sudd sub-region as a whole, density reached 0,28 persons per km² by 1000BC, more than twenty times higher than the arid interior south of the Zambezi.

## Sahel, Sahara Margins and West African Forest-Savanna

West Africa and the Chad basin formed the second great demographic engine of the late Holocene. The Lower Niger, Benue and Volta basins expanded from 5,7k in 10000BC to 76,3k in 6000BC and 397,6k in 1000BC (0,23 persons per km², the continent's second-highest density). Kintampo agropastoral settlements in central Ghana such as Birimi (438) and Ntereso (362), alongside pastoral and early farming camps at Chin Tafidet and Afunfun in Niger, combined oil-palm arboriculture, pearl millet and dwarf livestock before giving rise to dense savanna-forest chiefdoms [@Mcintosh1988FromStone; @Oriji2011PoliticalOrganization; @Besse2020OSAAR].

Further west, the Upper Guinea forest and coastal catchments climbed from 1,6k to 125,7k (0,18 persons per km²), anchored by early coastal shellmiddens at Songon-Dagbe (238) and Ehoussou (197) alongside inland rockshelters at Kakimbon and Yengema. Meanwhile, the Upper and Middle Niger basin rose from 2,3k to 153,8k around long-occupied complexes such as Ounjougou (580), Karkarichinkat (695) and Kobadi (540) [@Mcintosh1988FromStone; @Besse2020OSAAR]. Along the southern Saharan rim of Mauritania in the Senegal-Gambia and Atlantic Sahel catchments (59,3k in 1000BC), progressive desiccation after 2000BC spurred a remarkable burst of dry-stone village nucleation along the Dhar Tichitt, Oualata and Nema escarpments: Dakhlet el Atrous reached 6,84k by 1000BC, flanked by Dakhlet el Atrouss Settlement (5,12k), Tichitt (2,19k), Oualata (1,82k) and Chebka (1,34k) [@Maley2015PopulationsAnd; @Mcintosh1988FromStone].

Across the central Sahel, Mega-Lake Chad and the Chari-Logone basin grew from 3,5k in 10000BC to 178,2k in 1000BC. Early Holocene lakeside fishing and cemetery settlements such as Gobero (460 at 6500BC) gradually yielded, as Mega-Lake Chad receded, to tell mounds across the southern clay plains at Kursakata (560), Mege (465) and Zunfur (940), where pearl millet cultivation and cattle herding laid the demographic foundation for first-millennium BC Gajiganna and Sao chiefdoms [@Toba2026EmergenceSocial; @Cerezo2011NewInsights; @Maley2015PopulationsAnd].

## Equatorial Congo, East African Great Lakes and Southern Drylands

Equatorial and eastern Africa followed slower but sustained trajectories of growth. In the Central Congo, Ubangi and Kasai basin, population climbed from 4,1k in 10000BC to 166,9k by 1000BC (0,08 persons per km²), matched by 88,2k along the Lower Guinea coast from Cameroon to Angola. Excavations at Obobogo (345) in southern Cameroon, Imbonga (248) on the Ruki river and Nangara-Komba (235) in the Central African Republic show ceramic-using, oil-palm-tending villages expanding along river corridors during the second millennium BC prior to intensive iron smelting [@KarenDLupo1889IntensiveLate; @Phillipson2005AfricanArch].

Across the East African Great Lakes and Rift highlands, population increased from 6,5k in 10000BC to 179,5k in 1000BC (0,12 persons per km²). Early Holocene lacustrine fishing hubs such as Lothagam (345 at 3500BC) gave way to Savanna Pastoral Neolithic settlements like Luxmanda (485), Gogo Falls (318) and Hyrax Hill (285), alongside multi-millennium rockshelters such as Kakapel [@Goldstein2025CulturalEconomic; @Miller2019OstrichEggshell]. The Indian Ocean coastal basins from Tana to Ruvuma grew more modestly from 5k to 44,9k, sustained by mixed coastal foraging, riverine woodland hunting and early inland exchanges near Kalambo Falls (171) and Panga ya Saidi (73).

Southern Africa remained overwhelmingly a world of mobile foragers throughout the entire period, accounting for the continent's lowest end-epoch densities. The Zambezi, Lake Malawi and Limpopo basins rose from 14,8k to 77,1k (0,034 persons per km²) around sites such as Gwisho Hot Springs (164) and Kamoa (118). The Orange-Vaal, Drakensberg and Cape catchments held 10,7k in 10000BC, peaked briefly at 29,1k during the 7000BC humid interval, dipped to 10k in 4000BC and stood at 36,4k in 1000BC, anchored by coastal shellmidden caves including Elands Bay (87), Nelson Bay (79) and Klasies River Mouth (57) [@Will2022CoastalAdaptations; @Dusseldorp2013PleistoceneHomo; @Pearce2009LaterStone; @Mole2024BioarchaeologyAnd]. The arid Kalahari and Namib escarpment ended at just 21,5k (0,013 persons per km²), exemplified by small seasonal shelters at Apollo 11, Leopard Cave and Charé [@Mitchell2015DiscontinuitiesHunter; @Marks2026TheHolocene]. Finally, Madagascar and African ocean islands register an estimated 63,5k inhabitants by 1000BC, reflecting sparse early foraging presence prior to Austronesian and Bantu maritime settlement [@Phillipson2005AfricanArch].

# Limitations

Three structural uncertainties bound any demographic reconstruction of Sub-Saharan Africa before 1000BC. First, archaeological visibility varies dramatically by climate and substrate: dry Saharan escarpments, Namibian caves and Nubian mudbrick towns preserve walls and stratified hearths across millennia, whereas humid equatorial rainforests and seasonally inundated floodplains accelerate organic decay and bury open-air camps beneath alluvium [@KarenDLupo1889IntensiveLate; @Will2024TheGeneric; @Boisard2024CriticalInventory]. Raw gazetteer site counts therefore over-represent Nubia (38 sites) and South Africa (14 sites) relative to the Congo basin (8 sites), requiring hydrological carrying-capacity weighting rather than naive site summation.

Second, radiocarbon datasets remain unevenly distributed across colonial and post-colonial research traditions. While global and regional archives such as p3k14c, XRONOS and OSAAR aggregate thousands of dates across West, East and Southern Africa, vast stretches of Angola, South Sudan, Mozambique and the Somali interior still lack systematic Holocene survey [@BIRD2022P3K14C; @Hinz2023XRONOS; @Besse2020OSAAR]. Calibration plateaus in the radiocarbon curve during the first millennium BC further compress the chronological resolution of late pre-metallurgical transitions.

Third, mobile pastoralists and shifting forest-margin horticulturalists leave ephemeral architectural footprints that systematically understate their regional headcounts in point-site inventories [@Adriansen2000TheDevelopment; @Bendrey2015ReviewEthnoarchaeology; @Mitchell2015DiscontinuitiesHunter]. Converting shelter floor areas or seasonal camp scatters into resident band sizes carries an uncertainty band of roughly 30% to 50% at individual sites, particularly where seasonal aggregation sites cannot easily be distinguished from year-round villages [@Oriji2011PoliticalOrganization; @Goldstein2025CulturalEconomic].

# Conclusion

Between 10000BC and 1000BC, Sub-Saharan Africa's human population multiplied twenty-two-fold from 108k to 2,4M inhabitants, raising continental density from 0,0045 to 0,1 persons per km². That long ascent was never linear: early Holocene monsoon abundance carried populations to 499,1k by 6000BC, mid-Holocene Saharan desiccation pulled totals back to 396,8k in 5000BC, and the twin innovations of pastoral herding and indigenous cereal and root cultivation propelled sustained growth to 2,4M by 1000BC. By integrating 1.446 individually assessed archaeological sites with 16 HydroBASINS macro-catchments and continuous Holocene kriging surfaces [@LehnerGrill2013HydroBASINS; @Runfola2020GeoBoundaries], NICETHI provides a spatially coherent pre-metallurgical demographic baseline directly preceding the Iron Age expansions of Kush, Aksum, West African savanna polities and Bantu-speaking farmers [@Humphris2017NewRadiocarbon; @Mcintosh1988FromStone; @Phillipson2005AfricanArch].

# Appendix

## Sub-Regional Population Density and Territorial Shares

Table \ref{tab:density-appendix} reports mean population density in inhabitants per km² across all 16 HydroBASINS sub-regions at five benchmark dates from 10000BC to 1000BC, highlighting the widening gap between riverine-savanna food-producing corridors and southern arid foraging basins.

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">6000BC</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mega-Lake Chad and Chari-Logone Basin</strong></td><td class="crd-td">0,001</td><td class="crd-td">0,013</td><td class="crd-td">0,031</td><td class="crd-td">0,039</td><td class="crd-td">0,069</td></tr>
<tr><td class="crd-td"><strong>Zambezi, Lake Malawi and Limpopo Basins</strong></td><td class="crd-td">0,007</td><td class="crd-td">0,01</td><td class="crd-td">0,016</td><td class="crd-td">0,019</td><td class="crd-td">0,034</td></tr>
<tr><td class="crd-td"><strong>Nubian Nile, Atbara and Sudd Wetlands</strong></td><td class="crd-td">0,002</td><td class="crd-td">0,025</td><td class="crd-td">0,086</td><td class="crd-td">0,132</td><td class="crd-td">0,278</td></tr>
<tr><td class="crd-td"><strong>Central Congo, Ubangi and Kasai Basin</strong></td><td class="crd-td">0,002</td><td class="crd-td">0,018</td><td class="crd-td">0,036</td><td class="crd-td">0,042</td><td class="crd-td">0,078</td></tr>
<tr><td class="crd-td"><strong>Upper and Middle Niger Inland Delta</strong></td><td class="crd-td">0,001</td><td class="crd-td">0,013</td><td class="crd-td">0,037</td><td class="crd-td">0,049</td><td class="crd-td">0,09</td></tr>
<tr><td class="crd-td"><strong>Lower Niger, Benue and Volta Basins</strong></td><td class="crd-td">0,003</td><td class="crd-td">0,045</td><td class="crd-td">0,106</td><td class="crd-td">0,132</td><td class="crd-td">0,234</td></tr>
<tr><td class="crd-td"><strong>Kalahari Endorheic and Namib Escarpment</strong></td><td class="crd-td">0,005</td><td class="crd-td">0,008</td><td class="crd-td">0,006</td><td class="crd-td">0,007</td><td class="crd-td">0,013</td></tr>
<tr><td class="crd-td"><strong>Lower Guinea Coast, Ogooue and Cuanza</strong></td><td class="crd-td">0,013</td><td class="crd-td">0,016</td><td class="crd-td">0,024</td><td class="crd-td">0,028</td><td class="crd-td">0,055</td></tr>
<tr><td class="crd-td"><strong>East African Great Lakes and Rift Highlands</strong></td><td class="crd-td">0,004</td><td class="crd-td">0,034</td><td class="crd-td">0,062</td><td class="crd-td">0,071</td><td class="crd-td">0,121</td></tr>
<tr><td class="crd-td"><strong>Orange-Vaal Basin, Drakensberg and Cape</strong></td><td class="crd-td">0,008</td><td class="crd-td">0,013</td><td class="crd-td">0,011</td><td class="crd-td">0,015</td><td class="crd-td">0,028</td></tr>
<tr><td class="crd-td"><strong>Senegal-Gambia and Atlantic Sahel Basins</strong></td><td class="crd-td">0,002</td><td class="crd-td">0,01</td><td class="crd-td">0,023</td><td class="crd-td">0,03</td><td class="crd-td">0,051</td></tr>
<tr><td class="crd-td"><strong>Ethiopian Highlands and Rift Escarpment</strong></td><td class="crd-td">0,002</td><td class="crd-td">0,021</td><td class="crd-td">0,05</td><td class="crd-td">0,063</td><td class="crd-td">0,113</td></tr>
<tr><td class="crd-td"><strong>East African Coastal and Rufiji-Ruvuma Basins</strong></td><td class="crd-td">0,005</td><td class="crd-td">0,012</td><td class="crd-td">0,023</td><td class="crd-td">0,026</td><td class="crd-td">0,044</td></tr>
<tr><td class="crd-td"><strong>Somali Plateau and Juba-Shabelle Catchments</strong></td><td class="crd-td">0,003</td><td class="crd-td">0,014</td><td class="crd-td">0,037</td><td class="crd-td">0,049</td><td class="crd-td">0,089</td></tr>
<tr><td class="crd-td"><strong>Upper Guinea Forest and Coastal Rivers</strong></td><td class="crd-td">0,002</td><td class="crd-td">0,034</td><td class="crd-td">0,08</td><td class="crd-td">0,099</td><td class="crd-td">0,178</td></tr>
<tr><td class="crd-td"><strong>Madagascar and African Ocean Islands</strong></td><td class="crd-td">0,023</td><td class="crd-td">0,099</td><td class="crd-td">0,093</td><td class="crd-td">0,085</td><td class="crd-td">0,105</td></tr>
<tr><td class="crd-td"><strong>Mean Sub-Saharan Africa</strong></td><td class="crd-td">0,004</td><td class="crd-td">0,021</td><td class="crd-td">0,043</td><td class="crd-td">0,054</td><td class="crd-td">0,1</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Mean population density (inhabitants per km²) across the sixteen Sub-Saharan African hydrological sub-regions from 10000BC to 1000BC.</figcaption>
</figure>

Table \ref{tab:shares-appendix} tracks each sub-region's percentage share of the Sub-Saharan total over the same five benchmarks, illustrating the shift from relatively even early Holocene foraging densities in 10000BC toward heavy concentration in the Nubian Nile, Lower Niger-Volta, East African Great Lakes and Mega-Lake Chad by 1000BC.

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC (%)</th><th class="crd-th">6000BC (%)</th><th class="crd-th">3000BC (%)</th><th class="crd-th">2000BC (%)</th><th class="crd-th">1000BC (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mega-Lake Chad and Chari-Logone Basin</strong></td><td class="crd-td">3,2</td><td class="crd-td">6,9</td><td class="crd-td">7,8</td><td class="crd-td">7,7</td><td class="crd-td">7,4</td></tr>
<tr><td class="crd-td"><strong>Zambezi, Lake Malawi and Limpopo Basins</strong></td><td class="crd-td">13,7</td><td class="crd-td">4,6</td><td class="crd-td">3,4</td><td class="crd-td">3,3</td><td class="crd-td">3,2</td></tr>
<tr><td class="crd-td"><strong>Nubian Nile, Atbara and Sudd Wetlands</strong></td><td class="crd-td">3,6</td><td class="crd-td">10,6</td><td class="crd-td">18,2</td><td class="crd-td">21,9</td><td class="crd-td">25,1</td></tr>
<tr><td class="crd-td"><strong>Central Congo, Ubangi and Kasai Basin</strong></td><td class="crd-td">3,8</td><td class="crd-td">7,7</td><td class="crd-td">7,4</td><td class="crd-td">6,9</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Upper and Middle Niger Inland Delta</strong></td><td class="crd-td">2,2</td><td class="crd-td">4,5</td><td class="crd-td">6,2</td><td class="crd-td">6,4</td><td class="crd-td">6,4</td></tr>
<tr><td class="crd-td"><strong>Lower Niger, Benue and Volta Basins</strong></td><td class="crd-td">5,3</td><td class="crd-td">15,3</td><td class="crd-td">17,5</td><td class="crd-td">17,2</td><td class="crd-td">16,6</td></tr>
<tr><td class="crd-td"><strong>Kalahari Endorheic and Namib Escarpment</strong></td><td class="crd-td">7,1</td><td class="crd-td">2,6</td><td class="crd-td">0,9</td><td class="crd-td">0,8</td><td class="crd-td">0,9</td></tr>
<tr><td class="crd-td"><strong>Lower Guinea Coast, Ogooue and Cuanza</strong></td><td class="crd-td">19,2</td><td class="crd-td">5,2</td><td class="crd-td">3,7</td><td class="crd-td">3,4</td><td class="crd-td">3,7</td></tr>
<tr><td class="crd-td"><strong>East African Great Lakes and Rift Highlands</strong></td><td class="crd-td">6,1</td><td class="crd-td">10</td><td class="crd-td">9</td><td class="crd-td">8,1</td><td class="crd-td">7,5</td></tr>
<tr><td class="crd-td"><strong>Orange-Vaal Basin, Drakensberg and Cape</strong></td><td class="crd-td">9,9</td><td class="crd-td">3,4</td><td class="crd-td">1,3</td><td class="crd-td">1,4</td><td class="crd-td">1,5</td></tr>
<tr><td class="crd-td"><strong>Senegal-Gambia and Atlantic Sahel Basins</strong></td><td class="crd-td">2,1</td><td class="crd-td">2,4</td><td class="crd-td">2,6</td><td class="crd-td">2,6</td><td class="crd-td">2,5</td></tr>
<tr><td class="crd-td"><strong>Ethiopian Highlands and Rift Escarpment</strong></td><td class="crd-td">2,4</td><td class="crd-td">4,6</td><td class="crd-td">5,3</td><td class="crd-td">5,3</td><td class="crd-td">5,1</td></tr>
<tr><td class="crd-td"><strong>East African Coastal and Rufiji-Ruvuma Basins</strong></td><td class="crd-td">4,7</td><td class="crd-td">2,5</td><td class="crd-td">2,4</td><td class="crd-td">2,1</td><td class="crd-td">1,9</td></tr>
<tr><td class="crd-td"><strong>Somali Plateau and Juba-Shabelle Catchments</strong></td><td class="crd-td">2,5</td><td class="crd-td">2,7</td><td class="crd-td">3,3</td><td class="crd-td">3,5</td><td class="crd-td">3,4</td></tr>
<tr><td class="crd-td"><strong>Upper Guinea Forest and Coastal Rivers</strong></td><td class="crd-td">1,5</td><td class="crd-td">4,8</td><td class="crd-td">5,5</td><td class="crd-td">5,4</td><td class="crd-td">5,2</td></tr>
<tr><td class="crd-td"><strong>Madagascar and African Ocean Islands</strong></td><td class="crd-td">12,7</td><td class="crd-td">12</td><td class="crd-td">5,5</td><td class="crd-td">4</td><td class="crd-td">2,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Percentage share of total Sub-Saharan African population by hydrological sub-region from 10000BC to 1000BC.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. Chronological benchmarks follow astronomical calendar notation rounded to BC centuries without dot thousands separators (10000BC to 1000BC) to conform with regional archaeological tables; calibrated radiocarbon ranges underlying individual site trajectories follow p3k14c, XRONOS and OSAAR conventions [@BIRD2022P3K14C; @Hinz2023XRONOS; @Besse2020OSAAR].

2. Sub-regional boundaries aggregate HydroBASINS Level 6 watersheds and coastal island outlines clipped to the Sub-Saharan territorial mask [@LehnerGrill2013HydroBASINS; @Runfola2020GeoBoundaries]. Figures for Madagascar and Western Indian Ocean and Atlantic islands reflect early Holocene mainland-island mask allocation prior to late Holocene Austronesian and Bantu maritime settlement.

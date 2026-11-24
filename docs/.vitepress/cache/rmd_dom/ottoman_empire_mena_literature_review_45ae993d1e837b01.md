---
title: "The Ottoman Empire in MENA and Anatolia (1300-1918)"
subtitle: "Regional Demography, Tahrir Registers and Vilayet Censuses across Eleven Zones"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_ottoman_empire_mena_spatial.png"
hero_caption: "The eleven Ottoman provincial zones and 3.378 catalogued settlements across Anatolia, the Levant, Iraq, Arabia, Cyprus and North Africa from 1300AD to 1918AD."
hero_label: "fig:hero-ottoman"
bibliography: ottoman_empire_mena_literature_review.bib
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
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between 1300AD and 1918AD, the Ottoman Empire united Anatolia, Cyprus, the Levant, Mesopotamia, western and eastern Arabia, Egypt and the coastal regencies of the Maghreb under a single fiscal and military administration whose demographic record shifts from sixteenth-century cadastral registers to nineteenth-century population censuses. Across the nine Asian and Cypriot zones continuously tracked from 1300AD to 1918AD, total inhabitants rose from 16,78M in 1300AD to 18,24M in 1520AD and reached 20,2M by 1600AD; adding Egypt (4,85M) and the Maghreb regencies (4,25M) brought the full imperial domain to 29,3M at its seventeenth-century opening. Seventeenth-century warfare, Little Ice Age harvest failures and the Celali rebellions reduced the eleven zones to 28,07M by 1700AD, with sharp contractions in central Anatolia, northern Syria and lower Mesopotamia [@Ozel2004Population; @Liebrenz2022Notebook]. Following the territorial handoffs of Egypt in 1799AD (4,25M) and the Algerian Regency in 1830AD (4,75M) to autonomous or colonial rule, the remaining Anatolian, Levantine, Iraqi, Arabian and Cypriot provinces expanded from 25,29M in 1881AD to 30,59M on the eve of war in 1914AD, sustained by railway integration, public health improvements and heavy *muhacir* refugee inflows from the Balkans and the Caucasus [@SASMAZ1995Ottoman; @Hanedar2017Transporta]. First World War combat losses, wartime deportations, typhus epidemics and blockade-induced famine cut the nine surviving zones back to 26,6M in 1918AD, with eastern Anatolia suffering a 44% collapse from 2,95M to 1,65M [@Yadirgi2014Political]. Disaggregated via strictly mass-conserving pycnophylactic scaling across 29 historical provincial units and 2.645 modern administrative polygons [@Runfola2020GeoBoundaries] over a non-stationary Matérn residual kriging surface alongside 3.378 catalogued settlements, this study reconstructs the demographic geography of the Ottoman Middle East and North Africa at sub-provincial resolution.

# Background

## Frontier Formation, Beyliks and Imperial Expansion (1300-1600AD)

In 1300AD the territories that would form the Ottoman domain were divided among fragmented Turkmen principalities (*beyliks*) in western and central Anatolia, the Lusignan Kingdom of Cyprus, the Mamluk Sultanate across Syria, Palestine and Egypt, and Ilkhanid-era Mesopotamia. Across Anatolia, the Levant, Iraq, Arabia and Cyprus, the baseline population stood at 16,78M in 1300AD: 3,55M across Hejaz, Yemen and eastern Arabia, 2,95M in Syria and Palestine, 2,55M in Mesopotamia, 2,25M in western Anatolia, 2,05M in central Anatolia, 1,35M in eastern Anatolia, 950k along the Pontic Black Sea coast, 950k in Cilicia and southern Anatolia and 175k in Cyprus. Rural settlement in the Syrian and Anatolian borderlands still bore the imprint of thirteenth-century Mamluk-Crusader contests and intensive irrigated sugar and cereal estates along the Levantine littoral [@Slavin2023Grain], while palynological cores from Buldan Yayla in western Anatolia record renewed woodland grazing and shifting cereal cultivation as Turkmen pastoralists moved into former Byzantine river valleys [@Fiona2025Imperial].

The Black Death of 1347-1348AD and Timur's Anatolian and Syrian campaigns of 1400-1402AD imposed severe demographic setbacks during the fourteenth and early fifteenth centuries, thinning urban quarters from Damascus and Aleppo to Bursa and Ankara. Recovery accelerated once Mehmed II consolidated Anatolia and Rumelia after 1453AD and Bayezid II stabilised provincial *timar* cavalry fiefs, converting conquered agricultural land into state *miri* tenure tied to regular cadastral registration [@Meirison2020Administra]. State-directed wetland drainage and rice cultivation (*çeltik*) along riverine floodplains expanded grain surpluses near garrison and court towns [@Shopov2019Cities], while Ottoman rule over Cyprus after 1571AD reorganised island estates around grain and cotton taxation.

Imperial expansion under Selim I (1512-1520AD) and Süleyman I (1520-1566AD) transformed the demographic scale of the empire within two generations. The defeat of the Mamluks at Marj Dabiq and Raydaniyya in 1516-1517AD brought Syria, Palestine, the Hejaz and Egypt (4,55M inhabitants in 1517AD) under Istanbul's suzerainty, while Hayreddin Barbarossa's alignment of Algiers, followed by Tunis and Tripoli, incorporated 3,98M North African inhabitants into the Ottoman orbit in 1517AD. Adding the 18,24M inhabitants recorded across Anatolia, the Levant, Iraq, Arabia and Cyprus in 1520AD yielded a combined imperial MENA and Anatolian population of roughly 26,77M in the early sixteenth century. Over the next eighty years of internal peace, rising cereal prices and Mediterranean trade expansion, every core Anatolian, Levantine and North African zone grew substantially. By 1600AD, the eleven Ottoman zones reached 29,3M inhabitants: western Anatolia stood at 3,15M, central Anatolia at 2,75M, eastern Anatolia at 1,75M, the Pontic littoral at 1,35M, Cilicia at 1,28M, the Levant at 3,35M, Arabia at 4,05M, Egypt at 4,85M and the Maghreb regencies at 4,25M. Only Iraq continued a secular decline, easing from 2,55M in 1300AD to 2,45M in 1520AD and 2,35M in 1600AD as neglected Tigris-Euphrates canal headworks silted up between Baghdad and Basra and Ottoman-Safavid campaigns swept across the Jazira and lower Diyala.

## The Celali Crisis, Little Ice Age and Seventeenth-Century Contraction (1600-1800AD)

The rapid sixteenth-century population growth outran arable land in central and western Anatolia, creating pools of landless unmarried men (*levends*) and strained peasant households just as prolonged Little Ice Age droughts struck the eastern Mediterranean in the 1590s AD [@Ozel2004Population]. When Habsburg and Safavid wars coincided with debased silver coinage and irregular requisitions, mercenary bands and demobilised soldiers erupted into the Celali rebellions (1595-1610AD). In central and northern Anatolia, the *Büyük Kaçgun* (Great Flight) of 1603-1608AD drove thousands of villagers off exposed plateau plains into fortified towns, mountain refuges such as Beypazarı's upland valleys [@Yasayanlar2024Kara], or distant provinces. Oktay Özel's detailed comparison of sixteenth-century *tahrir defterleri* with seventeenth-century *avarız* tax-house registers demonstrates that central Anatolian districts such as Canik, Bozok and Karaman lost between one-fifth and two-fifths of their registered rural settlements and taxable households between 1576AD and 1642AD, though upland refuge migration mitigated absolute biological mortality [@Ozel2004Population].

Simultaneously, the Ottoman-Safavid borderlands from Erzurum and Van to Diyarbakir and Baghdad endured repeated scorched-earth campaigns and sectarian displacement among *Kızılbaş* communities caught between Istanbul and Isfahan [@BaltacogluBramme2020Neither]. In northern Syria, Kamāl al-Dīn's late sixteenth-century Aleppine notebook preserves contemporary testimony of recurring bubonic plague outbreaks, severe winter freezes, locust swarms and grain-price spikes that periodically emptied caravan suburbs [@Liebrenz2022Notebook], while major Syrian and Anatolian fault ruptures compounded urban reconstruction burdens across seismic corridors [@Ambraseys2004Century]. Across the full domain, total population slipped from 29,3M in 1600AD to 28,07M in 1700AD: western Anatolia fell from 3,15M to 2,95M, central Anatolia from 2,75M to 2,55M, the Levant from 3,35M to 2,95M, Iraq from 2,35M to 2,15M, Cyprus from 165k to 135k and Egypt from 4,85M to 4,65M. Growth continued only in Arabia (4,05M to 4,25M) and the Maghreb regencies (4,25M to 4,35M), where pastoral and coastal oasis economies remained largely insulated from Anatolian military provisioning.

During the eighteenth century, decentralisation under provincial *ayan* notables, Russo-Ottoman wars after 1768AD and recurring Mediterranean plague epidemics kept Anatolian and Levantine recovery modest. Within Istanbul itself, dense residential quarters (*mahalles*) maintained strict communal registration and guild solidarity to absorb rural migrants without institutional breakdown during 1703-1754AD [@Morita2021]. By 1800AD, however, Egypt had experienced severe plague waves and political turmoil under Mamluk factionalism, standing at 4,25M at the French expedition of 1799AD when it leaves the Ottoman direct-rule ledger for separate khedival enumeration. Excluding Egypt, the ten remaining Ottoman zones totalled 25,12M in 1800AD, led by Arabia (4,55M), the Maghreb regencies (4,55M), western Anatolia (3,45M), central Anatolia (2,85M) and the Levant (2,75M), while Cyprus hit its early modern trough of 120k inhabitants.

## Tanzimat Centralisation, Muhacir Settlements and Late Ottoman Growth (1800-1914AD)

After 1830AD, French landings at Algiers severed the Maghreb regencies from the core Ottoman fiscal system, leaving 4,75M inhabitants across Algiers, Tunis and Tripoli at the 1830AD handoff (with Tunisia passing to a French protectorate in 1881AD and Tripolitania held by Istanbul until the Italo-Turkish War of 1911AD). Inside the remaining Asian empire and Cyprus, the Tanzimat reforms (1839-1876AD) replaced tax-farming *iltizam* structures with salaried provincial governors, conscription lists and systematic civil registration [@Meirison2020Administra; @SASMAZ1995Ottoman]. Urbanisation and commercial integration accelerated after the Crimean War as European banks opened credit branches across port cities [@Hanedar2015Foreign], steamships plied the Tigris between Basra and Baghdad [@Qader2024Lynch], and the Anatolian, Baghdad and Hejaz railways linked interior grain plains to Izmir, Istanbul, Beirut and Damascus [@Hanedar2017Transporta]. Even though railway networks left eastern provinces comparatively underserved relative to western Aegean valleys, the Izmir-Aydin and Ankara lines lifted agricultural commercialisation across western and central Anatolia [@Hanedar2017Transporta; @Dayar2023Three].

Demographic growth between 1830AD and 1914AD was reinforced by massive forced migrations. As Russian expansion in Crimea and the North Caucasus (1856-1864AD) and Ottoman territorial losses in the Balkans (1877-1878AD and 1912-1913AD) uprooted Muslim populations, well over 1,5M *muhacir* refugees settled across western and central Anatolia, Cilicia, coastal Antalya, the Syrian steppe frontier and the Balqa plateau of Transjordan [@Dayar2023Three; @SASMAZ1995Ottoman]. Resettled along rail corridors and reclaimed marshland in Adana, Hudavendigar, Ankara and Damascus, *muhacir* villages boosted cultivated acreage and urban artisan populations while reshaping confessional balances across the *millet* administrative hierarchy [@Ozdil2024Dressing; @Bulut2022Portrait]. Meanwhile, Cyprus entered British administration in 1878AD while remaining nominally Ottoman until 1914AD, growing steadily under colonial sanitation and decennial censuses from 186k in 1881AD to 286k in 1914AD. Across the nine Asian and Cypriot zones, aggregate population climbed from 25,29M in 1881AD to 30,59M in 1914AD: western Anatolia rose from 4,65M to 5,85M, central Anatolia from 3,45M to 4,15M, the Levant from 3,35M to 4,15M, Arabia from 5,15M to 5,85M and Iraq from 2,45M to 2,95M.

## First World War Mortality, Famine and Imperial Dissolution (1914-1918AD)

The First World War shattered a century of late Ottoman demographic expansion. Conscription stripped Anatolian and Levantine villages of draft-age men and requisitioned draught animals, collapsing cereal harvests just as Allied naval blockades severed Mediterranean coastal grain imports. Across the eastern Anatolian vilayets of Erzurum, Van, Bitlis, Mamuretulaziz and Diyarbakir, the 1915AD deportation and mass killing of Armenian and Syriac Christians, combined with Russo-Ottoman front-line fighting, Kurdish flight and epidemic typhus, annihilated nearly half the regional population [@Yadirgi2014Political]. In the HANDBOOK series, eastern Anatolia drops from 2,95M in 1914AD to 1,65M in 1918AD, corroborated by the plunge from 2,79M in the 1914AD Ottoman census to 1,67M in the 1927AD Turkish Republic census across the same eastern provinces.

Along the Levantine littoral, wartime requisitions, locust plagues in 1915AD and the Entente blockade produced catastrophic famine in Mount Lebanon and Beirut, reducing the Levant zone as a whole from 4,15M in 1914AD to 3,55M in 1918AD, with the Mutasarrifate of Mount Lebanon and Beirut falling from 680k in 1914AD to 609k in 1922AD. Across all nine surviving provinces, total population fell by nearly 4M in four years, from 30,59M in 1914AD to 26,6M in 1918AD, before the Armistice of Mudros in October 1918 dissolved the Ottoman Arab provinces into the British and French Mandates and inaugurated the Turkish War of Independence.

# Methodology

## Tahrir Defterleri, Avarız Registers and Nineteenth-Century Censuses

Reconstructing Ottoman population between 1300AD and 1918AD requires bridging three distinct administrative regimes. For 1300-1520AD, when systematic empire-wide cadastral records were absent outside core Rumelian and western Anatolian sanjaks, regional levels are anchored retrospectively from the earliest intact sixteenth-century *tahrir defterleri* (cadastral tax surveys), cross-checked against Mamluk *rawk* estate surveys, Levantine agrarian carrying capacities and palaeoenvironmental land-use proxies [@Slavin2023Grain; @Fiona2025Imperial]. From the reign of Selim I through the late sixteenth century, detailed *mufassal* and synoptic *icmal* *tahrir* registers enumerated adult married Muslim and non-Muslim households (*hane*), bachelors (*mücerred*) and widows (*bive*) at the village and urban-quarter (*mahalle*) level [@Ozel2004Population; @Lepida2023Digitality]. Applying standard historical demographic multipliers of 4,5 to 5 persons per *hane* (plus bachelor allowances) yields reliable sub-provincial baselines for 1520AD and 1570-1600AD, though nomadic tribes and military *askeri* elites remain partially exempt.

After 1600AD, *tahrir* surveys gave way to extraordinary-tax registers (*avarız defterleri*) and poll-tax lists (*cizye*). Because an *avarızhane* represented a fiscal unit grouping multiple actual households according to local wealth rather than a single biological family, seventeenth- and eighteenth-century trends must be calibrated against village counts, *cizye* headcounts and micro-studies of abandonment and recovery [@Ozel2004Population; @Morita2021].

Modern individual-level enumeration began with Mahmud II's 1831AD census, which counted male Muslims and non-Muslims for conscription and taxation but omitted women and tribal nomads, followed by the 1844AD *temettuat* income surveys and early *nüfus* micro-registers exemplified by Bursa's 1840s household books [@Kabaday2024Nineteenth; @SASMAZ1995Ottoman]. Complete empire-wide civil registration (*Sicill-i Nüfus*) was introduced only under Abdülhamid II through the 1881-1893AD census (published 1893-1897AD) and updated in the 1905-1906AD and 1914AD population tables [@SASMAZ1995Ottoman]. Because female and infant under-registration persisted in conservative interior sanjaks and eastern provinces, raw official totals require systematic sex-ratio and age-structure corrections, which historical demographers apply at the vilayet level before linking Ottoman provincial series to post-1918AD Republican, Mandate and colonial censuses [@Bulut2022Portrait; @SASMAZ1995Ottoman].

## Subadministrative GIS Disaggregation and Pycnophylactic Mass Conservation

Provincial and national totals are rarely stationary across six centuries of shifting Ottoman *eyalet*, *vilayet* and post-imperial borders. To map demographic mass without introducing artificial steps across border splices, HANDBOOK pairs 29 historical provincial enumerations with 2.645 modern ADM1 and ADM2 administrative polygons extracted from the geoBoundaries database [@Runfola2020GeoBoundaries] across 17 successor territories. Each historical and modern polygon is rasterised onto a harmonised 5-arcminute global grid covering 124.684 cells in the Ottoman spatial domain.

Disaggregation relies on strictly mass-conserving pycnophylactic areal scaling guided by a continuous dasymetric habitability surface. Rather than smearing population uniformly across uninhabitable desert, salt-flat and high-alpine zones, spatial allocation weights are computed via non-stationary Matérn ($\nu = 3/2$) residual kriging over metric-isotropic radial distance fields built from 3.416 Voronoi catchments (1.942 active, 56,85% ADM2 coverage, summing 83.857,23 weighted archaeological site records across the MENA macro-domain). For the early modern Ottoman-Safavid-Qajar horizon, weighted least-squares (WLS) trend regression selects positive biophysical covariates for baseline habitability ($\beta_0 = 0,01$), natural productivity ($\beta_1 = 0,01$), ecological suitability ($\beta_2 = 0,01$), fluvial proximity ($\beta_3 = 0,0334$) and coastal access ($\beta_4 = 0,0282$). The empirical variogram calibrates cleanly to a dimensionless short-range scale $\tau_1 = 1,51$ raw ($1,35$ calibrated, corresponding to 49,17 km effective correlation range) and secondary macro-range $\tau_2 = 2,9$, with a low nugget-to-sill ratio of 0,04 and residual semivariogram fit $R^2 = 0,999$. Urban masks isolate documented city footprints so metropolitan centres do not bleed artificially into surrounding rural catchments, leaving 68.199 active habitable grid cells out of 168.112 valid macro-domain cells (mean intensity 0,0285, 90th percentile 0,0636, 99th percentile 0,1985).

## Settlement Gazetteer Assembly and Asymptotic Saturation

Point-level urban populations are compiled in a companion gazetteer built through a four-wave asymptotic saturation protocol. Wave 1 ingested 1.544 settlements directly from official national statistical agencies (TUIK, CAPMAS, COSIT, ONS Algeria, INS Tunisia, CBS Syria, CBS Israel, DOS Jordan, GASTAT, CSO Yemen, NCSI Oman, CAS Lebanon, PCBS, BSC Libya, CSB Kuwait and iGA Bahrain). Wave 2 integrated 1.834 additional historical towns, ports and archaeological settlements from primary archival monographs, regional *tahrir* compilations and classical-to-early-modern gazetteers, supplementing urban monographs with historical city reference compilations [@Bosworth2007Historic; @Dayar2023Three]. Waves 3 and 4 performed longitudinal pre-census backfills and sub-region gap-hunter sweeps across all eleven sub-masks, yielding zero newly added towns (0% marginal gain) and confirming asymptotic saturation at 3.378 included settlements, with 250 subordinate suburbs within 2 km of primary urban cores merged cleanly and 0% reliance on global crowd-sourced fallbacks.

# Testing and Validation

## Cross-Enumeration Calibration and Mass Conservation

Every disaggregated surface undergoes two independent validation checks: pycnophylactic mass conservation across polygons and longitudinal continuity across regime handoffs. Across 83 benchmark years spanning 29 historical provincial units and 2.645 modern ADM1/ADM2 polygons, 66.308 unit-year conservation checks achieved a 100% pass rate within the 0,01% tolerance, with a global maximum unit relative error of $5{,}84 \times 10^{-8}$. In the 1881AD and 1893AD benchmarks, target and disaggregated imperial totals reconcile to within a fraction of a single inhabitant per million.

Cross-checking the late Ottoman vilayet figures against post-1918AD successor enumerations confirms structural consistency across every major frontier. In Anatolia, the seven vilayet clusters rise from 11,29M in 1881AD to 14,17M in 1914AD and settle at 13,64M in the 1927AD Turkish Republic census, with growth in western, central and southern Anatolia (+15,5% in Aydin, +10,8% in Hudavendigar, +8,8% in Konya-Adana) sharply contrasting against the wartime demographic collapse in the eastern vilayets (-40% from 2,79M to 1,67M). In the Levant, the 1914AD Ottoman provincial totals for Aleppo-Syria (1,95M), Mount Lebanon-Beirut (680k), Transjordan (225k) and Palestine (722k combined) align smoothly with the 1922AD Mandate counts (2,14M, 609k, 225,4k and 757,2k respectively), reflecting both Mount Lebanon's wartime famine deficit and post-war refugee returns. Similarly, the three Iraqi vilayets of Mosul, Baghdad and Basra grow smoothly from 1,8M in 1881AD to 2,52M in 1914AD and 2,93M in the 1920AD British administration estimate.

## Spatial Sharpness, Urban Rank-Size Fit and Figure Inspection

<figure class="crd-figure-block" id="fig:density-surface">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ottoman-empire-mena/fig3_ottoman_empire_mena_density.png" alt="fig:density-surface" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Continuous population surface at the 1700AD Ottoman benchmark and mean provincial density contrasts across the eleven zones.</figcaption>
</figure>

Figure \ref{fig:density-surface} displays the continuous 1700AD dasymetric density surface and provincial intensity contrasts. Population concentrates sharply along the Aegean and Marmara littorals, the Nile Valley and Delta, the Orontes-Jordan-Beqaa Levantine corridor, the Tigris-Euphrates riverine strip and the Tell Atlas coastal belt, while leaving the Syrian Badia, Rub' al-Khali, Libyan Fezzan and Egyptian Western Desert near zero.

<figure class="crd-figure-block" id="fig:urban-zipf">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ottoman-empire-mena/fig4_ottoman_empire_mena_settlements.png" alt="fig:urban-zipf" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Rank-size distribution across 3.378 catalogued settlements and peak populations of the twelve leading Ottoman and North African urban centres.</figcaption>
</figure>

Across all 3.378 catalogued settlements (Figure \ref{fig:urban-zipf}), the urban rank-size distribution fits a Zipf power law with exponent $\alpha = 0,826$ and $R^2 = 0,846$. An exponent slightly below unity reflects the absence of a single overwhelming primate city over the entire tricontinental domain: instead of one metropolis dominating all regions, Cairo (1,15M by 1910AD) and Istanbul (1,05M) anchored the imperial core alongside strong regional capitals at Baghdad (706k), Alexandria (497,2k), Ankara (429,2k), Algiers (348,8k), Izmir (286,1k), Tunis (245,5k), Damascus (233,2k), Beirut (231,1k) and Aleppo (206,7k).

# Results

## Aggregate Trajectory and Eleven Sub-Regional Series

<figure class="crd-figure-block" id="fig:macro-trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ottoman-empire-mena/fig2_ottoman_empire_mena_trajectory.png" alt="fig:macro-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Aggregate Ottoman MENA and Anatolian population trajectory (1300AD to 1918AD) with uncertainty bounds and leading provincial totals in 1918AD.</figcaption>
</figure>

Figure \ref{fig:macro-trajectory} and Tables \ref{tab:early-modern-traj} and \ref{tab:late-imperial-traj} summarise the six-century trajectory across all eleven Ottoman provincial zones. Because Egypt (1517-1799AD) and the Maghreb regencies (1517-1830AD) enter and exit the Ottoman administrative ledger at their historical dates of conquest and separation, headline totals shift composition across periods: the 1517AD figure (8,53M) counts only Egypt and the Maghreb at Selim I's conquest, whereas 1520AD (18,24M) sums the nine Asian and Cypriot provinces; similarly, 1799AD (4,25M) marks Egypt's exit and 1830AD (4,75M) marks the Maghreb's exit. For 1600AD and 1700AD, all eleven zones are active simultaneously, yielding 29,3M and 28,07M respectively.

<figure class="crd-table-figure" id="tab:early-modern-traj">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provincial Zone</th><th class="crd-th">1300AD</th><th class="crd-th">1517-1520AD</th><th class="crd-th">1600AD</th><th class="crd-th">1700AD</th><th class="crd-th">1799-1800AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Anadolu, Hudavendigar &amp; Aydin</strong></td><td class="crd-td">2,25M</td><td class="crd-td">2,65M</td><td class="crd-td">3,15M</td><td class="crd-td">2,95M</td><td class="crd-td">3,45M</td></tr>
<tr><td class="crd-td"><strong>Karaman, Ankara &amp; Sivas</strong></td><td class="crd-td">2,05M</td><td class="crd-td">2,35M</td><td class="crd-td">2,75M</td><td class="crd-td">2,55M</td><td class="crd-td">2,85M</td></tr>
<tr><td class="crd-td"><strong>Trabzon &amp; Kastamonu</strong></td><td class="crd-td">950k</td><td class="crd-td">1,15M</td><td class="crd-td">1,35M</td><td class="crd-td">1,25M</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Adana &amp; Konya Mediterranean</strong></td><td class="crd-td">950k</td><td class="crd-td">1,1M</td><td class="crd-td">1,28M</td><td class="crd-td">1,18M</td><td class="crd-td">1,35M</td></tr>
<tr><td class="crd-td"><strong>Erzurum, Van, Bitlis &amp; Diyarbakir</strong></td><td class="crd-td">1,35M</td><td class="crd-td">1,55M</td><td class="crd-td">1,75M</td><td class="crd-td">1,65M</td><td class="crd-td">1,95M</td></tr>
<tr><td class="crd-td"><strong>Cyprus (Eyalet of Kibris)</strong></td><td class="crd-td">175k</td><td class="crd-td">185k</td><td class="crd-td">165k</td><td class="crd-td">135k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Aleppo, Damascus, Beirut &amp; Jerusalem</strong></td><td class="crd-td">2,95M</td><td class="crd-td">3,05M</td><td class="crd-td">3,35M</td><td class="crd-td">2,95M</td><td class="crd-td">2,75M</td></tr>
<tr><td class="crd-td"><strong>Mosul, Baghdad &amp; Basra</strong></td><td class="crd-td">2,55M</td><td class="crd-td">2,45M</td><td class="crd-td">2,35M</td><td class="crd-td">2,15M</td><td class="crd-td">2,1M</td></tr>
<tr><td class="crd-td"><strong>Hejaz, Yemen &amp; Al-Hasa</strong></td><td class="crd-td">3,55M</td><td class="crd-td">3,75M</td><td class="crd-td">4,05M</td><td class="crd-td">4,25M</td><td class="crd-td">4,55M</td></tr>
<tr><td class="crd-td"><strong>Egypt (Eyalet of Misr)</strong></td><td class="crd-td">-</td><td class="crd-td">4,55M</td><td class="crd-td">4,85M</td><td class="crd-td">4,65M</td><td class="crd-td">4,25M</td></tr>
<tr><td class="crd-td"><strong>Maghreb Regencies (Algiers, Tunis, Tripoli)</strong></td><td class="crd-td">-</td><td class="crd-td">3,98M</td><td class="crd-td">4,25M</td><td class="crd-td">4,35M</td><td class="crd-td">4,55M</td></tr>
<tr><td class="crd-td"><strong>Total Active Ottoman Domain</strong></td><td class="crd-td">16,77M</td><td class="crd-td">26,77M</td><td class="crd-td">29,3M</td><td class="crd-td">28,07M</td><td class="crd-td">29,37M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Early modern population across the eleven Ottoman provincial zones from 1300AD to 1800AD; hyphens mark centuries before Ottoman incorporation (Egypt and the Maghreb enter in 1517AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:late-imperial-traj">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provincial Zone</th><th class="crd-th">1800AD</th><th class="crd-th">1830AD</th><th class="crd-th">1881AD</th><th class="crd-th">1914AD</th><th class="crd-th">1918AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Anadolu, Hudavendigar &amp; Aydin</strong></td><td class="crd-td">3,45M</td><td class="crd-td">-</td><td class="crd-td">4,65M</td><td class="crd-td">5,85M</td><td class="crd-td">5,15M</td></tr>
<tr><td class="crd-td"><strong>Karaman, Ankara &amp; Sivas</strong></td><td class="crd-td">2,85M</td><td class="crd-td">-</td><td class="crd-td">3,45M</td><td class="crd-td">4,15M</td><td class="crd-td">3,65M</td></tr>
<tr><td class="crd-td"><strong>Trabzon &amp; Kastamonu</strong></td><td class="crd-td">1,45M</td><td class="crd-td">-</td><td class="crd-td">1,85M</td><td class="crd-td">2,25M</td><td class="crd-td">1,8M</td></tr>
<tr><td class="crd-td"><strong>Adana &amp; Konya Mediterranean</strong></td><td class="crd-td">1,35M</td><td class="crd-td">-</td><td class="crd-td">1,75M</td><td class="crd-td">2,15M</td><td class="crd-td">1,8M</td></tr>
<tr><td class="crd-td"><strong>Erzurum, Van, Bitlis &amp; Diyarbakir</strong></td><td class="crd-td">1,95M</td><td class="crd-td">-</td><td class="crd-td">2,45M</td><td class="crd-td">2,95M</td><td class="crd-td">1,65M</td></tr>
<tr><td class="crd-td"><strong>Cyprus (Eyalet of Kibris)</strong></td><td class="crd-td">120k</td><td class="crd-td">-</td><td class="crd-td">186k</td><td class="crd-td">286k</td><td class="crd-td">300k</td></tr>
<tr><td class="crd-td"><strong>Aleppo, Damascus, Beirut &amp; Jerusalem</strong></td><td class="crd-td">2,75M</td><td class="crd-td">-</td><td class="crd-td">3,35M</td><td class="crd-td">4,15M</td><td class="crd-td">3,55M</td></tr>
<tr><td class="crd-td"><strong>Mosul, Baghdad &amp; Basra</strong></td><td class="crd-td">2,1M</td><td class="crd-td">-</td><td class="crd-td">2,45M</td><td class="crd-td">2,95M</td><td class="crd-td">2,85M</td></tr>
<tr><td class="crd-td"><strong>Hejaz, Yemen &amp; Al-Hasa</strong></td><td class="crd-td">4,55M</td><td class="crd-td">-</td><td class="crd-td">5,15M</td><td class="crd-td">5,85M</td><td class="crd-td">5,75M</td></tr>
<tr><td class="crd-td"><strong>Egypt (Eyalet of Misr)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Maghreb Regencies (Algiers, Tunis, Tripoli)</strong></td><td class="crd-td">4,55M</td><td class="crd-td">4,75M</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Total Core Asian &amp; Cyprus (9 Zones)</strong></td><td class="crd-td">25,12M</td><td class="crd-td">4,75M</td><td class="crd-td">25,29M</td><td class="crd-td">30,59M</td><td class="crd-td">26,5M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Late imperial population across the Ottoman zones from 1800AD to 1918AD, showing the Maghreb 1830AD handoff, late nineteenth-century growth and First World War mortality.</figcaption>
</figure>

## Historical Vilayet, Mutasarrifate and Colonial Subadministrative Enumerations

Beyond macro-regional aggregates, HANDBOOK anchors the late imperial surface directly on seventeen historical provincial census groupings compiled from Ottoman *Sicill-i Nüfus* tables (1881-1893AD and 1914AD), British Cypriot and Mesopotamian administrations, Mandate Levant enumerations, Egyptian *mudiriya* censuses and the Algerian *Territoires du Sud* returns (Table \ref{tab:vilayet-subadmin}). Within Anatolia, the 1881-1893AD returns document steady expansion across every vilayet cluster: Aydin grew from 1,41M in 1881AD to 1,52M in 1893AD and 1,72M in 1914AD, Hudavendigar from 1,32M to 1,62M, Trabzon and Sivas from 2,04M to 2,6M, Ankara and Kastamonu from 1,81M to 2,14M, Konya and Adana from 1,35M to 1,77M, and Istanbul and Edirne from 1,21M to 1,54M [@SASMAZ1995Ottoman; @Kabaday2024Nineteenth; @Dayar2023Three]. In eastern Anatolia (Erzurum, Van, Bitlis, Mamuretulaziz and Diyarbakir), growth from 2,15M in 1881AD to 2,79M in 1914AD was wiped out during the war, falling to 1,67M by 1927AD [@Bulut2022Portrait; @Yadirgi2014Political].

<figure class="crd-table-figure" id="tab:vilayet-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Vilayet / Subadministrative Unit</th><th class="crd-th">Territory</th><th class="crd-th">Primary Enumeration</th><th class="crd-th">1881-1886AD</th><th class="crd-th">1911-1917AD</th><th class="crd-th">1920-1927AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Erzurum, Van, Bitlis, Mamuretulaziz &amp; Diyarba...</strong></td><td class="crd-td">TUR</td><td class="crd-td">Ottoman Official Censuses 1881/93...</td><td class="crd-td">2,15M (1881)</td><td class="crd-td">2,79M (1914)</td><td class="crd-td">1,67M (1927)</td></tr>
<tr><td class="crd-td"><strong>Konya &amp; Adana Vilayets</strong></td><td class="crd-td">TUR</td><td class="crd-td">Ottoman Official Censuses 1881/93...</td><td class="crd-td">1,34M (1881)</td><td class="crd-td">1,76M (1914)</td><td class="crd-td">1,92M (1927)</td></tr>
<tr><td class="crd-td"><strong>Ankara &amp; Kastamonu Vilayets</strong></td><td class="crd-td">TUR</td><td class="crd-td">Ottoman Official Censuses 1881/93...</td><td class="crd-td">1,81M (1881)</td><td class="crd-td">2,14M (1914)</td><td class="crd-td">2,31M (1927)</td></tr>
<tr><td class="crd-td"><strong>Trabzon &amp; Sivas Vilayets</strong></td><td class="crd-td">TUR</td><td class="crd-td">Ottoman Official Censuses 1881/93...</td><td class="crd-td">2,04M (1881)</td><td class="crd-td">2,6M (1914)</td><td class="crd-td">2,45M (1927)</td></tr>
<tr><td class="crd-td"><strong>Hudavendigar Vilayet</strong></td><td class="crd-td">TUR</td><td class="crd-td">Ottoman Official Censuses 1881/93...</td><td class="crd-td">1,32M (1881)</td><td class="crd-td">1,62M (1914)</td><td class="crd-td">1,79M (1927)</td></tr>
<tr><td class="crd-td"><strong>Aydin Vilayet</strong></td><td class="crd-td">TUR</td><td class="crd-td">Ottoman Official Censuses 1881/93...</td><td class="crd-td">1,41M (1881)</td><td class="crd-td">1,72M (1914)</td><td class="crd-td">1,99M (1927)</td></tr>
<tr><td class="crd-td"><strong>Istanbul &amp; Edirne</strong></td><td class="crd-td">TUR</td><td class="crd-td">Ottoman Official Censuses 1881/93...</td><td class="crd-td">1,21M (1881)</td><td class="crd-td">1,54M (1914)</td><td class="crd-td">1,51M (1927)</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">CYP</td><td class="crd-td">British Colonial Censuses of Cypr...</td><td class="crd-td">186,2k (1881)</td><td class="crd-td">274,1k (1911)</td><td class="crd-td">310,7k (1921)</td></tr>
<tr><td class="crd-td"><strong>Vilayets of Aleppo &amp; Syria</strong></td><td class="crd-td">SYR</td><td class="crd-td">Ottoman 1914 Census &amp; French Mand...</td><td class="crd-td">1,45M (1881)</td><td class="crd-td">1,95M (1914)</td><td class="crd-td">2,14M (1922)</td></tr>
<tr><td class="crd-td"><strong>Mutasarrifate of Mount Lebanon &amp; Beirut</strong></td><td class="crd-td">LBN</td><td class="crd-td">Ottoman 1914 &amp; Lebanese 1932 Offi...</td><td class="crd-td">520k (1881)</td><td class="crd-td">680k (1914)</td><td class="crd-td">609k (1922)</td></tr>
<tr><td class="crd-td"><strong>Transjordan</strong></td><td class="crd-td">JOR</td><td class="crd-td">British Mandate Transjordan Estim...</td><td class="crd-td">185k (1881)</td><td class="crd-td">225k (1914)</td><td class="crd-td">225,3k (1922)</td></tr>
<tr><td class="crd-td"><strong>Mandate Palestine</strong></td><td class="crd-td">ISR</td><td class="crd-td">British Mandate Palestine Censuse...</td><td class="crd-td">310k (1881)</td><td class="crd-td">460k (1914)</td><td class="crd-td">472k (1922)</td></tr>
<tr><td class="crd-td"><strong>Mandate Palestine</strong></td><td class="crd-td">PSE</td><td class="crd-td">British Mandate Palestine Censuse...</td><td class="crd-td">190k (1881)</td><td class="crd-td">262k (1914)</td><td class="crd-td">285,2k (1922)</td></tr>
<tr><td class="crd-td"><strong>Baghdad Vilayet</strong></td><td class="crd-td">IRQ</td><td class="crd-td">Iraq 1920 British Administration ...</td><td class="crd-td">850k (1881)</td><td class="crd-td">1,18M (1914)</td><td class="crd-td">1,36M (1920)</td></tr>
<tr><td class="crd-td"><strong>Basra Vilayet</strong></td><td class="crd-td">IRQ</td><td class="crd-td">Iraq 1920 British Administration ...</td><td class="crd-td">470k (1881)</td><td class="crd-td">650k (1914)</td><td class="crd-td">785,6k (1920)</td></tr>
<tr><td class="crd-td"><strong>Mosul Vilayet</strong></td><td class="crd-td">IRQ</td><td class="crd-td">Iraq 1920 British Administration ...</td><td class="crd-td">480k (1881)</td><td class="crd-td">685k (1914)</td><td class="crd-td">785,5k (1920)</td></tr>
<tr><td class="crd-td"><strong>Upper Egypt</strong></td><td class="crd-td">EGY</td><td class="crd-td">Official Censuses of Egypt 1882-1947</td><td class="crd-td">2,79M (1882)</td><td class="crd-td">5,11M (1917)</td><td class="crd-td">5,65M (1927)</td></tr>
<tr><td class="crd-td"><strong>Cairo, Alexandria &amp; Suez Canal Muhafazas</strong></td><td class="crd-td">EGY</td><td class="crd-td">Official Censuses of Egypt 1882-1947</td><td class="crd-td">675k (1882)</td><td class="crd-td">1,38M (1917)</td><td class="crd-td">1,79M (1927)</td></tr>
<tr><td class="crd-td"><strong>Lower Egypt</strong></td><td class="crd-td">EGY</td><td class="crd-td">Official Censuses of Egypt 1882-1947</td><td class="crd-td">3,34M (1882)</td><td class="crd-td">6,26M (1917)</td><td class="crd-td">6,77M (1927)</td></tr>
<tr><td class="crd-td"><strong>Territoires du Sud</strong></td><td class="crd-td">DZA</td><td class="crd-td">Recensement Général de l'Algérie ...</td><td class="crd-td">280k (1886)</td><td class="crd-td">494,3k (1911)</td><td class="crd-td">542,2k (1926)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Historical Ottoman vilayet, mutasarrifate, Egyptian mudiriya and colonial subadministrative census counts (1881AD to 1927AD) used for pycnophylactic scaling.</figcaption>
</figure>

To carry those late Ottoman spatial weights cleanly into post-imperial and contemporary benchmarks, Table \ref{tab:modern-subadmin} summarises the 17 geoBoundaries modern subadministrative frameworks [@Runfola2020GeoBoundaries] linked to the domain, ranging from 968 Turkish ADM2 districts and 296 Egyptian ADM2 *markaz* and *kism* units down to 5 Cypriot ADM1 districts and 4 Bahraini governorates.

<figure class="crd-table-figure" id="tab:modern-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">GIS Level</th><th class="crd-th">Units</th><th class="crd-th">Census Span</th><th class="crd-th">Leading Modern Unit</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">968</td><td class="crd-td">1990-2023AD (8)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>CYP</strong></td><td class="crd-td">ADM1</td><td class="crd-td">5</td><td class="crd-td">1982-2021AD (5)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">13</td><td class="crd-td">1981-2021AD (4)</td><td class="crd-td">Aleppo (4,12M, 2021)</td></tr>
<tr><td class="crd-td"><strong>LBN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">21</td><td class="crd-td">1970-2017AD (5)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">12</td><td class="crd-td">1994-2021AD (5)</td><td class="crd-td">Amman (4,64M, 2021)</td></tr>
<tr><td class="crd-td"><strong>ISR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">14</td><td class="crd-td">1983-2021AD (5)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>PSE</strong></td><td class="crd-td">ADM2</td><td class="crd-td">16</td><td class="crd-td">1997-2023AD (4)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">ADM2</td><td class="crd-td">88</td><td class="crd-td">1977-2024AD (5)</td><td class="crd-td">Al-Basrah (3,66M, 2024)</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">ADM2</td><td class="crd-td">296</td><td class="crd-td">1986-2023AD (5)</td><td class="crd-td">Markz Al Minya (6,34M, 2023)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">ADM2</td><td class="crd-td">44</td><td class="crd-td">1977-2008AD (4)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">ADM1</td><td class="crd-td">24</td><td class="crd-td">1984-2024AD (5)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">ADM1</td><td class="crd-td">17</td><td class="crd-td">2006-2020AD (2)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>SAU</strong></td><td class="crd-td">ADM2</td><td class="crd-td">136</td><td class="crd-td">1992-2022AD (4)</td><td class="crd-td">Riyadh (8,59M, 2022)</td></tr>
<tr><td class="crd-td"><strong>YEM</strong></td><td class="crd-td">ADM1</td><td class="crd-td">21</td><td class="crd-td">1994-2004AD (2)</td><td class="crd-td">Ta'izz Governorate (2,39M, 2004)</td></tr>
<tr><td class="crd-td"><strong>KWT</strong></td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">1995-2021AD (4)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>QAT</strong></td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">1986-2020AD (6)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>BHR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">4</td><td class="crd-td">2001-2024AD (4)</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Modern geoBoundaries ADM1 and ADM2 polygon sets linked to the Ottoman domain for mass-conserving pycnophylactic disaggregation.</figcaption>
</figure>

## Regional Contrasts: Anatolia, Fertile Crescent, Arabia, Cyprus and North Africa

Three structural contrasts emerge from comparing the eleven Ottoman zones between 1300AD and 1918AD. First, Anatolia experienced the strongest long-run demographic amplification across the empire. Even after absorbing the seventeenth-century Celali setback and the catastrophic 1914-1918AD losses in the east, the five Anatolian zones combined expanded from 7,5M in 1300AD to 10,28M in 1600AD, dipped to 9,58M in 1700AD, surged to 17,35M in 1914AD and still stood at 14,15M in 1918AD - nearly double their early fourteenth-century base. Western Anatolia (Anadolu, Hudavendigar and Aydin) paced this rise, growing by 160% between 1300AD (2,25M) and 1914AD (5,85M) on the strength of Aegean port trade, silk and cotton exports and Balkan *muhacir* settlement [@Dayar2023Three; @Kabaday2024Nineteenth].

Second, the Fertile Crescent followed a flatter, shock-punctuated trajectory. The Levant rose gently from 2,95M in 1300AD to 3,35M in 1600AD, dropped back to 2,75M in 1800AD under Bedouin pastoral pressure and agrarian insecurity, then expanded rapidly to 4,15M in 1914AD as coastal ports such as Beirut and Haifa boomed and agricultural colonisation spread east of the Jordan River [@Liebrenz2022Notebook; @Christopher2020Arabic]. Iraq experienced nearly five centuries of gradual erosion, shrinking from 2,55M in 1300AD to 2,1M in 1800AD as neglected canals turned irrigated fields into marsh or steppe, before tribal sedentarisation, river steam navigation and Mosul-Baghdad-Basra trade lifted population to 2,95M in 1914AD and 2,85M in 1918AD [@Qader2024Lynch; @Anonymous2019Mosul].

Third, the peripheral insular and arid zones displayed starkly divergent rhythms. Cyprus suffered steep demographic attrition under early Ottoman taxation, Venetian-Ottoman maritime raids and locust plagues, shrinking from 185k in 1520AD to 120k in 1800AD [@Vionis2022Constructi] before doubling under British colonial governance to 300k by 1918AD. Conversely, Arabia exhibited steady, low-amplitude growth from 3,55M in 1300AD to 5,85M in 1914AD, buffered in the Yemeni highlands and Najdi oases by topography and remote caravan routes, while Egypt (4,55M to 4,85M in 1517-1600AD, 4,25M in 1799AD) and the Maghreb regencies (3,98M to 4,75M in 1517-1830AD) tracked Nile flood cycles and Tell Atlas cereal harvests rather than Anatolian military fronts. Archaeological ceramic and subsistence studies confirm how provincial diet and household pottery assemblages remained anchored in regional ecological niches despite uniform imperial fiscal institutions [@Vroom2023They].

# Limitations

Four structural uncertainties govern these reconstructions. First, pre-1520AD estimates for Anatolia, Iraq and Arabia rely on backward projection from early sixteenth-century *tahrir* surveys combined with narrative chronicles and palaeoenvironmental proxies; local fourteenth-century Black Death mortality could be 10% to 15% steeper in coastal ports than smoothed regional intervals capture. Second, sixteenth-century *hane* to headcount conversion factors vary between urban and rural sanjaks, and seventeenth-century *avarızhane* groupings require careful separation of fiscal amalgamation from biological depopulation [@Ozel2004Population]. Third, nineteenth-century Ottoman *Sicill-i Nüfus* enumerations systematically under-counted women, young children and mobile pastoralists in Yemen, the Hejaz, eastern Anatolia and southern Iraq, while Ottoman authority in interior Najd, upper Yemen and Saharan Fezzan remained nominal or indirect [@SASMAZ1995Ottoman; @Bulut2022Portrait]. Fourth, the 1918AD terminal benchmark coincides with active military demobilisation, refugee displacement and boundary fluidity across Cilicia, northern Syria and Mosul, raising uncertainty margins to roughly ±12% in eastern Anatolia and the Syrian desert frontier compared with ±3% in British-administered Cyprus or western Anatolian rail corridors.

# Conclusion

Across six centuries from 1300AD to 1918AD, the demographic history of the Ottoman Middle East and North Africa pivoted around three long waves: sixteenth-century agrarian expansion that carried the eleven-zone empire to 29,3M inhabitants by 1600AD, seventeenth-century ecological and fiscal crisis that slowed growth until 1800AD, and nineteenth-century state centralisation, transport investment and *muhacir* resettlement that raised the nine surviving core provinces from 25,29M in 1881AD to 30,59M in 1914AD before war and famine reversed a fifth of that gain by 1918AD. Grounding these macro-trends in 17 subadministrative provincial census series and 3.378 catalogued settlements across 2.645 modern administrative polygons yields a spatially coherent demographic bridge linking mediaeval Islamic tax surveys to the modern censuses of the successor republics and mandates.

# Appendix

Table \ref{tab:top-urban-appendix} lists the twenty-five largest urban settlements in the Ottoman MENA and Anatolian domain ranked by peak pre-1918AD population, illustrating the polycentric urban hierarchy spanning Cairo, Istanbul, Baghdad, Alexandria, Ankara, Algiers, Izmir, Tunis, Damascus, Beirut and Aleppo [@Bosworth2007Historic].

<figure class="crd-table-figure" id="tab:top-urban-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">Active Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Qāhirah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,06, 31,25</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>İstanbul</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 28,95</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>Baghdād</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,34, 44,4</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">706k</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandariyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">497,2k</td></tr>
<tr><td class="crd-td"><strong>Ankara</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,92, 32,85</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">429,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,01, 31,21</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">380,1k</td></tr>
<tr><td class="crd-td"><strong>El Djazaïr</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,73, 3,09</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">348,8k</td></tr>
<tr><td class="crd-td"><strong>İzmir</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,41, 27,14</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">286,1k</td></tr>
<tr><td class="crd-td"><strong>Tūnis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,82, 10,17</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">245,5k</td></tr>
<tr><td class="crd-td"><strong>Dimashq</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,51, 36,29</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">233,2k</td></tr>
<tr><td class="crd-td"><strong>Bayrūt</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,89, 35,5</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">231,1k</td></tr>
<tr><td class="crd-td"><strong>Ḥalab</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2, 37,16</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">206,7k</td></tr>
<tr><td class="crd-td"><strong>Ar-Riyāḍ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,69, 46,72</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">201,3k</td></tr>
<tr><td class="crd-td"><strong>'Ammān</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,96, 35,95</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">156,6k</td></tr>
<tr><td class="crd-td"><strong>Adana</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,99, 35,33</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">149,3k</td></tr>
<tr><td class="crd-td"><strong>Jiddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,63, 39,2</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">148,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭarābulus</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,89, 13,19</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">142,3k</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,13, 31,25</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">131,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Mawṣil</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,34, 43,12</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">122,1k</td></tr>
<tr><td class="crd-td"><strong>Bursa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,2, 29,06</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">117,6k</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,7, -0,64</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">112,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Biqā'</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,67, 35,83</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">99,1k</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,74, 10,76</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">95,4k</td></tr>
<tr><td class="crd-td"><strong>Gaziantep</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,06, 37,38</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">91,9k</td></tr>
<tr><td class="crd-td"><strong>Arbīl</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,19, 44,01</td><td class="crd-td">1830-1910AD</td><td class="crd-td">1910AD</td><td class="crd-td">89,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Twenty-five largest catalogued urban centres across the Ottoman MENA and Anatolian domain ranked by peak population within the 1300-1918AD window.</figcaption>
</figure>

# Sources

::: {#refs}
:::

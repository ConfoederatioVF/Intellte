---
title: "DEMOGRAPHIC AND SETTLEMENT IMPACTS OF THE RUSSIAN INVASION OF UKRAINE."
subtitle: "A Regional Literature Review of Population, Displacement, and War Losses (2022AD - 2026AD)."
date: "10 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/russian_invasion_of_ukraine_regional_map.png"
hero_caption: "Oblast, occupation-history, and federal-subject divisions across Ukraine, Belarus, and the Russian Federation during the Russo-Ukrainian War (2021AD - 2026AD)."
hero_label: "fig:hero"
bibliography: russian_invasion_of_ukraine_literature_review.bib
csl: crd-mla-numeric.csl
link-citations: true
nocite: '@*'
output:
  pdf_document:
    template: ../../../../../core/rticles/intellte/resources/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Modern Oblast Architecture & Synthesis

The full-scale military invasion of Ukraine launched by the Russian Federation on 24 February 2022AD triggered the sharpest demographic, settlement, and migratory rupture in Europe since 1945AD [@libanova2023ukraine; @libanova2024demographic; @unhcr2025ukraine; @iom2025returns]. Unlike pre-modern demographic eras shaped by river-basin carrying capacities, every institutional mechanism governing wartime conscription, territorial defence, civilian evacuation, humanitarian registration, fiscal sign-up incentives, and casualty accounting across 2021AD - 2026AD is organised strictly along modern first-level administrative (Admin-1) boundaries - the 27 constitutional Oblasts, Autonomous Republic, and Special-Status Cities of Ukraine, the 7 Oblasts and Capital City of Belarus, and the 83 internationally recognised Federal Subjects (46 Oblasts, 21 Republics, 9 Krais, 4 Autonomous Okrugs, 1 Autonomous Oblast, and 2 Federal Cities) of the Russian Federation.

Ukrainian Regional Military Administrations, Territorial Defence, and Conscription: Under Ukraine's Law *On the Foundations of National Resistance* (Law No. 1702-IX, effective 1 January 2022AD) and Presidential Decree No. 68/2022 of 24 February 2022AD, every Ukrainian Oblast state administration was converted into an Oblast Military Administration (Oblasna viiskova administratsiia) paired with a dedicated Oblast Territorial Defence Brigade (100th to 128th and 241st Territorial Defence Brigades) and Oblast/Raion Territorial Recruitment and Social Support Centres [@ukraine2024strategy; @libanova2023ukraine]. Mandatory frontline evacuations, curfew regimes, civil-defence fortifications, and eVidnovlennia housing-reconstruction compensation are administered strictly by Oblast.

Oblast-Stratified Internal Displacement (IDP) & Conflict Monitoring: Both the Ukrainian Ministry of Social Policy's Unified IDP Information Database (Yedyna informatsiina baza danykh VPO) and the International Organization for Migration (IOM) Displacement Tracking Matrix (DTM General Population Survey Rounds 1 - 18+) record internally displaced persons (3,67M active IDPs and 4,45M returnees in 2026AD) by modern Oblast of origin and current Oblast of residence, while ACLED conflict events  and the DeepState Line of Contact  nest directly within Ukraine's modern Oblast and 2020AD-reformed Raion boundaries [@iom2022gps; @iom2024displacement; @iom2025returns; @acled2025ukraine; @deepstate2025map].

Russian Federal-Subject Mobilisation Quotas, Governor Contract Bonuses & Border Combat Reserve Units: Inside the Russian Federation, Presidential Decree No. 647 of 21 September 2022AD ("partial mobilisation" of 300 000+ reservists) assigned compulsory call-up quotas to each of the 83 Federal Subjects via regional Military Commissariats (Voennye komissariaty sub'ektov RF) chaired by each Governor [@bessudnov2022ethnic; @istories2024mobilisation]. Across 2023AD - 2026AD, volunteer contract recruitment (kontraktniki) operated through intense fiscal competition in governor-set regional one-time sign-up bonuses (400k - 800k roubles in poorer oblasts versus 1,9M - 3,20M roubles in Moscow City, Khanty-Mansi AO, Belgorod Oblast, Tatarstan, Bashkortostan, Sverdlovsk, and Leningrad Oblast), while shelled border oblasts raised oblast-specific territorial defence units (in Belgorod, Kursk, and Bryansk oblasts) and Mediazona / BBC News Russian and Meduza / Kobak track combat mortality strictly by Federal Subject [@mediazona2025casualties; @meduza2024probate; @kobak2023excess].

Accordingly, this synthesis models all 123 exact 10-metre Oblast, Occupation-History, and Federal-Subject polygons (17 959 829 km2, using Ukraine's exact 27 modern Oblasts subdivided strictly where occupation history bifurcated demographic trajectories across Donetsk [government-controlled, post-2022 occupied, and pre-2022 occupied], Luhansk [post-2022 occupied and pre-2022 occupied], Kharkiv [Unoccupied Core, 2022 Liberated & Oskil-Vovchansk East], Zaporizhzhia [Ukrainian North, 2022+ Occupied South], and Kherson [Liberated Right Bank, 2022+ Occupied Left Bank] into 33 Ukrainian divisions alongside 7 Belarusian and 83 Russian Admin-1 units; Figure \ref{fig:hero}). Across all 123 divisions combined, the de facto resident population contracted by -9 520k (-4,8%), falling from 198 080k (198,08M) in 2021AD to 192 050k in 2022AD, 191 130k in 2023AD, 190 080k in 2024AD, 189 235k in 2025AD, and 188 560k (188,56M) in early 2026AD (Table \ref{tab:macro-summary}).

## Error:
## ! lexical error: invalid char in json text.
##                                        ../../_shared/_gis_cache/russia
##                      (right here) ------^
## Error:
## ! Objekt 's_json' nicht gefunden
## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'pops_mat' nicht gefunden
## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'pops_mat' nicht gefunden
## Error:
## ! Objekt 'sv_tot' nicht gefunden


# Proxy, OSINT & Humanitarian Datasets

Because martial law in Ukraine suspended the planned 2023AD All-Ukrainian Census and wartime censorship in the Russian Federation restricted granular Rosstat demographic tables after mid-2022AD [@libanova2023ukraine; @raksha2023fertility; @meduza2024probate; @kobak2023excess], reconstructing Oblast-by-Oblast population and settlement series across 2021AD - 2026AD triangulates seven empirical streams.

ACLED Raion & Oblast Conflict Events : Ingests 138 geo-referenced Ukrainian raion polygons aggregating 5 893 high-intensity baseline shelling and combat event clusters and 16 301 geo-located baseline fatalities alongside >180 000 cumulative conflict events recorded by ACLED through 2025AD - 2026AD [@acled2025ukraine; @attar2024linked]. Fifteen frontline raions in Donetsk, Luhansk, Kherson, Kharkiv, and Kyiv Oblasts account for the overwhelming share of urban kinetic destruction (Table \ref{tab:acled-raions} and Figure \ref{fig:displacement-cascade}B).

DeepState Line of Contact & Occupied Territory Vectors : Delineates the exact frontline and Russian-occupied share inside Luhansk Oblast (~98% occupied), Donetsk Oblast (~70% occupied), Zaporizhzhia Oblast (~73% occupied), Kherson Oblast (~72% occupied left bank), Kharkiv Oblast (~3% border strip), and AR Crimea / Sevastopol (100% occupied since 2014AD), hatched in crimson on top of intact modern Oblast boundaries in Figure \ref{fig:hero} [@deepstate2025map; @winkler2024high].

Sentinel-1 SAR Coherence, UNOSAT Damage Assessments & VIIRS Nighttime Lights: Building-level damage classifications from Copernicus Sentinel-1 Synthetic Aperture Radar (SAR) interferometric coherence (Scher & Van Den Hoek), UNOSAT optical assessments, and World Bank rapid damage and needs assessments ($524B reconstruction need across >2,5M damaged housing units) are paired with NASA/NOAA VIIRS Day-Night Band radiance series tracking urban depopulation and energy-grid blackouts [@scher2023sar; @unosat2023mariupol; @worldbank2023rdna2; @worldbank2024rdna3; @worldbank2025rdna4; @minora2023ukraine; @aimi2023ukraine].

Mobile SIM Geolocation, eHealth & Oblast Administrative Registries: For Kyiv-controlled Oblasts, the Ptoukha Institute for Demography and Social Studies (NASU - Ella Libanova, Oleksandr Gladun, Pavlo Shevchuk, Nataliia Levchuk) triangulates active mobile-operator SIM cards (Kyivstar, Vodafone Ukraine, lifecell), eHealth declarations, Oblast IDP subsistence allowances, school enrolments, and municipal water/bread consumption [@libanova2023ukraine; @libanova2024demographic; @gladun2023war; @gladun2024mortality; @shevchuk2023reconstruction; @ukraine2024strategy; @ukrstat2022chiselnist].

UNHCR, Eurostat & IOM Oblast Displacement Tracking Matrix (DTM): Cross-border refugee stocks (6,40M global in 2026AD, including ~4,3M EU Temporary Protection beneficiaries) are anchored by UNHCR and Eurostat registers [@unhcr2025ukraine; @eurostat2025temporary; @mazzoli2023ukraine; @kim2023ukraine; @scherbov2024eastern], while Oblast-by-Oblast IDP (3,67M) and returnee (4,45M) stocks come from IOM General Population Survey Rounds 1 - 18+ [@iom2022gps; @iom2024displacement; @iom2025returns; @unocha2024ukraine; @leasure2022ukraine; @boy2023ukraine; @gonzalez2022ukraine].

OSINT Probate Registry, Obituary & Excess Mortality Models (Mediazona / BBC / Meduza): Integrates the Mediazona and BBC News Russian named-obituary database (>105 000 individually verified Russian military dead by 2025AD - 2026AD coded by Federal Subject) with Meduza and Dmitry Kobak's Federal Chamber of Notaries (RND) probate-registry excess mortality model (160 000 - 220 000+ total Russian military dead) [@meduza2024probate; @kobak2023excess; @mediazona2025casualties; @bessudnov2022ethnic; @istories2024mobilisation], alongside UALosses (>70 000 named Ukrainian military dead), UN OHCHR civilian casualty monitors (12 600+ verified killed excluding full Mariupol siege tolls of 22 000 - 25 000+), and satellite cemetery measurements [@ohchr2025casualties; @kovalenko2024ukraine; @stojkoski2023ukraine; @shevchenko2023mariupol; @ballinger2024battle; @dietrich2024ukraine; @dietrich2024mapping].

Border-Crossing & Residence-Permit Series on Russian and Belarusian Emigration: Quantifies wartime human-capital outflows (650k - 1,05M peak Russian emigrants, 580k - 680k net retained abroad in 2026AD; 200k - 350k Belarusian outflow) via receiving-state residence permits, tax IDs (IIN), and banking registries across Poland, Lithuania, Germany, Kazakhstan, Armenia, Georgia, Serbia, Turkey, Israel, and the UAE [@rerussia2024outflow; @kuznetsova2024russian; @wachs2022russian; @shcherbakova2024demographic; @dudin2023belarus].

<figure class="crd-table-figure" id="tab:acled-raions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Raion (Parent Oblast)</th><th class="crd-th">Oblast ISO</th><th class="crd-th">Events</th><th class="crd-th">Fatalities</th><th class="crd-th">SAR Damage</th><th class="crd-th">Primary Frontline Urban Centres &amp; Outcome (2021AD -&gt; 2026AD)</th></tr></thead>
<tbody>
<tr><td class="crd-td">Bakhmutskyi (Donetsk Obl.)</td><td class="crd-td">UA-14</td><td class="crd-td">1 025</td><td class="crd-td">829</td><td class="crd-td">88-96%</td><td class="crd-td">Bakhmut (71k -&gt; 0,3k), Toretsk (31k -&gt; 1,2k), Soledar (10k -&gt; 0,1k), Chasiv Yar (12k -&gt; 0,3k)</td></tr>
<tr><td class="crd-td">Pokrovskyi (Donetsk Obl.)</td><td class="crd-td">UA-14</td><td class="crd-td">687</td><td class="crd-td">608</td><td class="crd-td">62-94%</td><td class="crd-td">Avdiivka (31k -&gt; 0,7k), Pokrovsk (60k -&gt; 5,5k), Myrnohrad (46k -&gt; 2,8k), Kurakhove (18k -&gt; 0,9k)</td></tr>
<tr><td class="crd-td">Syevyerodonetskyi (Luhansk Obl.)</td><td class="crd-td">UA-09</td><td class="crd-td">661</td><td class="crd-td">1 493</td><td class="crd-td">72-92%</td><td class="crd-td">Sievierodonetsk (101k -&gt; 18k), Lysychansk (93k -&gt; 18k), Rubizhne (55k -&gt; 12k), Popasna (19k -&gt; 0,25k)</td></tr>
<tr><td class="crd-td">Kramatorskyi (Donetsk Obl.)</td><td class="crd-td">UA-14</td><td class="crd-td">455</td><td class="crd-td">215</td><td class="crd-td">38-85%</td><td class="crd-td">Kramatorsk (147k -&gt; 75k), Sloviansk (105k -&gt; 54k), Lyman (20k -&gt; 5,4k), Kostiantynivka (67k -&gt; 12k)</td></tr>
<tr><td class="crd-td">Beryslavskyi (Kherson Obl.)</td><td class="crd-td">UA-65</td><td class="crd-td">383</td><td class="crd-td">943</td><td class="crd-td">54-75%</td><td class="crd-td">Beryslav (12k -&gt; 1,2k); severe Dnieper right-bank artillery and FPV drone attrition</td></tr>
<tr><td class="crd-td">Izyumskyi (Kharkiv Obl.)</td><td class="crd-td">UA-63</td><td class="crd-td">314</td><td class="crd-td">297</td><td class="crd-td">52-68%</td><td class="crd-td">Izium (45k -&gt; 23,5k), Balakliia (26k -&gt; 19,8k); liberated in Sept 2022AD counteroffensive</td></tr>
<tr><td class="crd-td">Khersonskyi (Kherson Obl.)</td><td class="crd-td">UA-65</td><td class="crd-td">262</td><td class="crd-td">5 884</td><td class="crd-td">41-64%</td><td class="crd-td">Kherson City (279k -&gt; 66k), Oleshky (24k -&gt; 8k); June 2023AD Kakhovka dam flood and daily shelling</td></tr>
<tr><td class="crd-td">Volnovaskyi (Donetsk Obl.)</td><td class="crd-td">UA-14</td><td class="crd-td">238</td><td class="crd-td">322</td><td class="crd-td">76-95%</td><td class="crd-td">Volnovakha (21k -&gt; 10,2k), Vuhledar (14k -&gt; 0,1k); southern Donetsk rail and assault axis</td></tr>
<tr><td class="crd-td">Kharkivskyi (Kharkiv Obl.)</td><td class="crd-td">UA-63</td><td class="crd-td">215</td><td class="crd-td">285</td><td class="crd-td">28-78%</td><td class="crd-td">Kharkiv City (1 421k -&gt; 1 200k, Saltivka damage and IDP rebound), Chuhuiv (31k -&gt; 24,5k)</td></tr>
<tr><td class="crd-td">Mariupolskyi (Donetsk Obl.)</td><td class="crd-td">UA-14</td><td class="crd-td">155</td><td class="crd-td">323</td><td class="crd-td">74-90%</td><td class="crd-td">Mariupol (432k -&gt; 195k incl. Russian garrison); Feb-May 2022AD siege (22k-25k+ civilian dead)</td></tr>
<tr><td class="crd-td">Horlivskyi (Donetsk Obl.)</td><td class="crd-td">UA-14</td><td class="crd-td">135</td><td class="crd-td">11</td><td class="crd-td">35-55%</td><td class="crd-td">Horlivka (240k -&gt; 155k), Yenakiieve (77k -&gt; 55k); coercive DNR conscription depletion</td></tr>
<tr><td class="crd-td">Buchanskyi (Kyiv Obl.)</td><td class="crd-td">UA-32</td><td class="crd-td">120</td><td class="crd-td">191</td><td class="crd-td">26-58%</td><td class="crd-td">Bucha (37k -&gt; 38k), Irpin (62k -&gt; 65k); March 2022AD occupation and rapid post-liberation rebuild</td></tr>
<tr><td class="crd-td">Kupyanskyi (Kharkiv Obl.)</td><td class="crd-td">UA-63</td><td class="crd-td">114</td><td class="crd-td">132</td><td class="crd-td">55-82%</td><td class="crd-td">Kupiansk (27k -&gt; 3,2k), Vovchansk (17k -&gt; 0,15k, May 2024AD razing along northern border)</td></tr>
<tr><td class="crd-td">Donetskyi (Donetsk Obl.)</td><td class="crd-td">UA-14</td><td class="crd-td">111</td><td class="crd-td">627</td><td class="crd-td">24-48%</td><td class="crd-td">Donetsk City (902k -&gt; 660k), Makiivka (339k -&gt; 250k); frontline water crisis and conscription</td></tr>
<tr><td class="crd-td">Svativskyi (Luhansk Obl.)</td><td class="crd-td">UA-09</td><td class="crd-td">85</td><td class="crd-td">78</td><td class="crd-td">42-65%</td><td class="crd-td">Svatove (16k -&gt; 7,4k), Kreminna corridor; northern Luhansk logistics and artillery line</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top fifteen Ukrainian conflict raions by geo-located combat events, fatalities, satellite building damage, and urban population outcomes (2021AD - 2026AD).</figcaption>
</figure>

# Ukraine: Modern Oblasts and Occupation Zones

Within internationally recognised 1991AD borders, Ukraine's resident population fell by -6 210k (-14,2%) across 2021AD - 2026AD, contracting from 43 870k (43,87M) in early 2021AD to 39 100k in 2022AD, 38 740k in 2023AD, 38 220k in 2024AD, 37 870k in 2025AD, and 37 660k (37,66M) in early 2026AD - comprising ~31,4M in Kyiv-controlled Oblasts and ~6,2M across Russian-occupied Crimea, Luhansk, Donetsk, and southern Zaporizhzhia and Kherson Oblasts [@libanova2024demographic; @iom2025returns; @unhcr2025ukraine]. Table \ref{tab:ukraine-oblasts} and Figure \ref{fig:displacement-cascade} present the complete Oblast-by-Oblast demographic, Territorial Defence, and IDP trajectory across all 33 Oblast and Occupation-History divisions spanning Ukraine's 27 constitutional Admin-1 Oblasts and Cities.

<figure class="crd-figure-block" id="fig:displacement-cascade">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-russian-invasion-of-ukraine/russian_invasion_of_ukraine_fig2_population_trajectory.png" alt="fig:displacement-cascade" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Ukrainian oblast population trajectories comparing 2021AD baselines with 2026AD resident and displaced stocks alongside top frontline conflict raions.</figcaption>
</figure>

Five Frontline & Partially Occupied Oblasts (Donetsk UA-14, Luhansk UA-09, Kharkiv UA-63, Zaporizhzhia UA-23, Kherson UA-65; 11 440k -> 6 660k, -41,8%): In Donetsk Oblast (4 060k -> 2 140k, -47,3%; 109th Territorial Defence Brigade), the 2022AD siege of Mariupol (432k -> 195k, 22k - 25k+ civilian dead) [@shevchenko2023mariupol; @ballinger2024battle; @unosat2023mariupol], the razing of Bakhmut (71k -> 0,3k), Avdiivka (31k -> 0,7k), Toretsk (31k -> 1,2k), Vuhledar (14k -> 0,1k), and Kurakhove (18k -> 0,9k), and mandatory Donetsk regional military administration evacuations from Pokrovsk (60k -> 5,5k) and Myrnohrad (46k -> 2,8k) halved the oblast's population while leaving Kramatorsk (147k -> 75k) and Sloviansk (105k -> 54k) as fortified regional administrative hubs [@acled2025ukraine; @deepstate2025map]. Luhansk Oblast (2 100k -> 1 240k, -41,0%; 111th Territorial Defence Brigade) fell almost entirely under Russian occupation after the 2022AD destruction of Popasna (19k -> 0,25k), Sievierodonetsk (101k -> 18k), and Lysychansk (93k -> 18k). Kharkiv Oblast (2 620k -> 1 840k, -29,8%; 113th & 127th Territorial Defence Brigades) defended Kharkiv City (1 421k -> 1 200k, hosting >200k intra-oblast IDPs), liberated Izium (45k -> 23,5k) in September 2022AD, and evacuated Kupiansk (27k -> 3,2k) and razed Vovchansk (17,5k -> 0,15k) during 2024AD - 2025AD border fighting [@holoborodko2024kharkiv; @iom2025returns]. Zaporizhzhia Oblast (1 650k -> 1 060k, -35,8%; 110th Territorial Defence Brigade) remained split along the DeepState front between Ukrainian-held Zaporizhzhia City (710k -> 530k, ~210k IDPs) and Orikhiv (14k -> 1,15k) and Russian-occupied Melitopol (149k -> 110k), Berdiansk (106k -> 74k), and Enerhodar (52k -> 22k). Kherson Oblast (1 010k -> 380k, -62,4%; 124th Territorial Defence Brigade) suffered the steepest relative loss of any Ukrainian Oblast following the November 2022AD right-bank liberation of Kherson City (279k -> 66k), daily cross-Dnieper shelling of Beryslav (12k -> 1,2k), and the 6 June 2023AD Kakhovka dam breach across Oleshky (24k -> 8k) and Nova Kakhovka (45k -> 13k) [@petrenko2024kakhovka; @unep2023kakhovka].

Four De-Occupied Northern & Southern Border Oblasts (Mykolaiv UA-48, Sumy UA-59, Chernihiv UA-74, Kyiv Oblast UA-32; 4 930k -> 4 235k, -14,1%): Rapid Territorial Defence and regular-army resistance in February - April 2022AD repelled Russian advances on Mykolaiv Oblast (1 090k -> 900k, 123rd Territorial Defence Brigade), Chernihiv Oblast (975k -> 755k, 119th Territorial Defence Brigade), Sumy Oblast (1 035k -> 795k, 117th Territorial Defence Brigade), and Kyiv Oblast (1 830k -> 1 785k, 114th Territorial Defence Brigade). Whereas Kyiv Oblast (~245k IDPs, rapid reconstruction in Bucha 37k -> 38k and Irpin 62k -> 65k) nearly recovered its pre-war baseline, Sumy and Chernihiv Oblasts lost over one-fifth of their residents due to mandatory regional evacuations along the 5 - 15 km shelled Russian border strip in 2023AD - 2026AD [@iom2025returns; @acled2025ukraine].

Seven Central & Southern IDP Reception Hub Oblasts & Capital (Kyiv City UA-30, Dnipropetrovsk UA-12, Odesa UA-51, Poltava UA-53, Cherkasy UA-71, Kirovohrad UA-35, Vinnytsia UA-05; 13 420k -> 13 100k, -2,4%): Anchored by Kyiv City (2 960k -> 2 965k; 112th & 241st Territorial Defence Brigades, ~375k IDPs) and Dnipropetrovsk Oblast (3 120k -> 3 090k; 108th & 128th Territorial Defence Brigades, Ukraine's No. 1 IDP-hosting oblast with ~455k IDPs in Dnipro 968k -> 980k and Kryvyi Rih 603k -> 585k despite artillery evacuation from Nikopol 105k -> 54k), these seven units absorbed >1,6M IDPs, keeping net 2021AD - 2026AD population change near parity in Poltava Oblast (1 360k -> 1 370k, +0,7%; ~185k IDPs), Cherkasy Oblast (1 170k -> 1 155k, -1,3%), Vinnytsia Oblast (1 520k -> 1 465k, -3,6%), Kirovohrad Oblast (920k -> 875k, -4,9%), and grain-corridor Odesa Oblast (2 370k -> 2 180k, -8,0%) [@iom2025returns; @worldbank2025rdna4].

Nine Western Rear & EU Sanctuary Oblasts (Lviv UA-46, Zakarpattia UA-21, Chernivtsi UA-77, Ivano-Frankivsk UA-26, Ternopil UA-61, Khmelnytskyi UA-68, Rivne UA-56, Volyn UA-07, Zhytomyr UA-18; 11 640k -> 11 305k, -2,9%) & Crimea (UA-43, UA-40; 2 440k -> 2 360k, -3,3%): Zakarpattia Oblast (1 250k -> 1 290k, +3,2%; 101st Territorial Defence Brigade), Lviv Oblast (2 490k -> 2 520k, +1,2%; 103rd & 125th Territorial Defence Brigades, ~260k IDPs), and Chernivtsi Oblast (890k -> 900k, +1,1%; 107th Territorial Defence Brigade) recorded net wartime demographic expansion via IDP settlement and enterprise relocation, whereas northern forest-belt Volyn (-7,7%), Rivne (-8,6%), and Zhytomyr (-10,9%) experienced cross-border refugee departures alongside northern border fortification duty [@iom2025returns; @unhcr2025ukraine]. Meanwhile, AR Crimea (1 930k -> 1 875k) and Sevastopol City (510k -> 485k) contracted under Black Sea Fleet strikes and Crimean Tatar draft flight.

## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'pops_mat' nicht gefunden
## Error:
## ! Objekt 'df_ua' nicht gefunden
## Error:
## ! Objekt 'df_ua' nicht gefunden


<figure class="crd-table-figure" id="tab:displacement-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Displacement / Demographic Category</th><th class="crd-th">Peak 2022-2023AD</th><th class="crd-th">Early 2026AD Stock</th><th class="crd-th">Primary Empirical Source &amp; Oblast Geographic Distribution</th></tr></thead>
<tbody>
<tr><td class="crd-td">Ukrainian Refugees Abroad (Total Global)</td><td class="crd-td">6 800k</td><td class="crd-td">6 400k</td><td class="crd-td">UNHCR Operational Data Portal (~4,3M EU TPD: Germany 1,20M, Poland 0,98M, Czechia 0,38M; UK/US/Canada 0,9M; Russia/Belarus 1,2M)</td></tr>
<tr><td class="crd-td">Internally Displaced Persons (IDPs by Oblast)</td><td class="crd-td">5 900k</td><td class="crd-td">3 670k</td><td class="crd-td">IOM DTM Oblast Registers (Dnipropetrovsk 455k, Kharkiv 420k, Kyiv City 375k, Lviv 260k, Kyiv Obl. 245k, Odesa 215k, Poltava 185k)</td></tr>
<tr><td class="crd-td">Returned Displaced Ukrainians (IDP + Foreign)</td><td class="crd-td">4 100k</td><td class="crd-td">4 450k</td><td class="crd-td">IOM Returns Report (~78% from internal displacement, ~22% from abroad; concentrated in Kyiv City/Obl. 1,1M, Kharkiv 680k, Mykolaiv, Chernihiv)</td></tr>
<tr><td class="crd-td">Russian Border Oblast Evacuees (RU-BEL / RU-KRS)</td><td class="crd-td">65k</td><td class="crd-td">145k</td><td class="crd-td">Belgorod Oblast (Shebekino, Graivoron 2023-2025AD) and Kursk Oblast (Aug 2024AD Sudzha incursion: 130k-150k civilians evacuated)</td></tr>
<tr><td class="crd-td">Russian Wartime Emigration (Brain Drain)</td><td class="crd-td">820k - 1 050k</td><td class="crd-td">580k - 680k</td><td class="crd-td">Receiving-state registries: EU (240k), Israel (135k), Kazakhstan (130k), Turkey (102k), Serbia (92k), Armenia (85k), UAE (70k), Georgia (68k)</td></tr>
<tr><td class="crd-td">Belarusian Political &amp; Wartime Outflow (7 Units)</td><td class="crd-td">310k</td><td class="crd-td">290k</td><td class="crd-td">Eurostat Polish (165k) and Lithuanian (62k) residence permits and IT sector relocation from Minsk, Brest, and Grodno Oblasts</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Wartime external refugee, internal displacement, returnee, border evacuation, and emigration stocks across Ukraine, Russia, and Belarus (2022AD - 2026AD).</figcaption>
</figure>

# Belarus & Shelled Russian Border Oblasts

Disaggregating Belarus into its seven modern Admin-1 divisions (6 Oblasts plus Minsk City; Table \ref{tab:belarus-oblasts}) and isolating Russia's three shelled western border Oblasts (Belgorod RU-BEL, Kursk RU-KRS, Bryansk RU-BRY) captures sharp frontier asymmetries obscured by national totals.

All Seven Belarusian Oblasts & Minsk City (9 350k -> 8 970k, -4,1%): In February 2022AD, Russian forces launched the northern Kyiv and Chernihiv offensive from staging bases in Gomel Oblast (1 330k -> 1 250k, -6,0%; Gomel, Mozyr, Zyabrovka) and airfields in Brest Oblast (1 340k -> 1 285k, -4,1%; Luninets, Baranovichi) [@deepstate2025map]. Across 2021AD - 2026AD, Belarus lost -380k residents through a combination of deep natural decrease (-55k to -65k annually at TFR 1,16) in Vitebsk Oblast (-6,2%) and Mogilev Oblast (-6,2%) and the outflow of 200k - 350k IT professionals, physicians, and skilled workers from Minsk City (2 010k -> 1 980k) and Grodno Oblast (1 020k -> 965k, -5,4%) to Poland and Lithuania [@belstat2024chislennost; @dudin2023belarus; @eurostat2025temporary].

Russian Shelled Border Oblasts (Belgorod, Kursk, Bryansk; 3 810k -> 3 550k, -6,8%): In 2023AD - 2025AD, artillery and drone bombardment along the Kharkiv-Belgorod frontier forced civilian evacuations from Shebekino (39,6k -> 24,0k) and Graivoron and reduced Belgorod Oblast (1 540k -> 1 445k, -6,2%), where regional authorities raised Belgorod border reserve territorial defence battalions and hiked one-time contract bonuses to 3,0M roubles [@acled2025ukraine; @istories2024mobilisation]. In August 2024AD, the Ukrainian cross-border offensive into Kursk Oblast (1 082k -> 985k, -9,0%) captured Sudzha (5,1k -> 0,6k) and displaced 130 000 - 150 000 residents toward Kursk City (440k -> 425k), Zheleznogorsk, and Oryol, while Bryansk Oblast (1 188k -> 1 120k, -5,7%; Bryansk border reserve) contracted under border shelling and natural decrease [@deepstate2025map; @rosstat2024demografiya].

## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'pops_mat' nicht gefunden
## Error:
## ! Objekt 'df_by' nicht gefunden
## Error:
## ! Objekt 'df_by' nicht gefunden


# Russian Federal Subjects: Mobilisation & Mortality

Across all 83 internationally recognised Federal Subjects of the Russian Federation (1991AD borders, excluding occupied Ukrainian territories), total resident population declined by -2 930k (-2,0%) from 144 860k in 2021AD to 141 930k in 2026AD (Tables \ref{tab:ethnic-casualties} and \ref{tab:russia-subjects}; Figure \ref{fig:ethnic-casualties}). Because mobilisation quotas, governor sign-up bonuses, defence-industrial exemptions, and garrison deployments are organised strictly by Federal Subject, wartime demographic impacts varied starkly across five subject groups.

<figure class="crd-figure-block" id="fig:ethnic-casualties">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-russian-invasion-of-ukraine/russian_invasion_of_ukraine_fig3_subregional_distribution.png" alt="fig:ethnic-casualties" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Confirmed military fatalities per 10 000 working-age males across Russian federal subjects and wartime emigration by destination (2022AD - 2026AD).</figcaption>
</figure>

Federal Capitals vs Brain-Drain Outflow (Moscow City RU-MOS, Moscow Oblast RU-MOW, Saint Petersburg RU-SPE, Leningrad Oblast RU-LEN): To insulate metropolitan populations from political backlash, authorities kept compulsory mobilisation minimal in Moscow City (3,2 confirmed deaths per 10 000 males; 13 010k -> 12 880k in 2022AD before rebounding to 13 120k in 2026AD) and Saint Petersburg (6,8 per 10 000; 5 602k -> 5 565k), substituting 1,9M - 2,5M+ rouble contract bonuses while experiencing >65% of Russia's 650k - 1,05M skilled wartime emigration [@bessudnov2022ethnic; @rerussia2024outflow; @kuznetsova2024russian].

Disproportionate-Loss Ethnic Republics (19 Republics): Econometric analysis of Mediazona / BBC obituaries and Meduza / Kobak probate excess male mortality confirms extreme ethnic and rural socio-economic stratification [@bessudnov2022ethnic; @meduza2024probate; @kobak2023excess; @mediazona2025casualties]. Per-capita confirmed mortality peaked in Tuva (RU-TY, 122,0 per 10 000 males, 38,1x Moscow; 55th Mountain Brigade in Kyzyl), Buryatia (RU-BU, 96,0 per 10 000, 30,0x Moscow; 36th CAA in Ulan-Ude and Kyakhta), and the Altai Republic (RU-AL, 82,0 per 10 000, 25,6x Moscow). In the Volga-Ural and Caucasus belt, Bashkortostan (RU-BA, 4 091k -> 4 015k) suffered the highest absolute military death toll of any Russian Federal Subject (>4 850 named dead; 8 700 - 10 500+ total dead; 44,5 per 10 000), alongside heavy losses in North Ossetia-Alania (RU-SE, 56,0 per 10 000), Kalmykia (RU-KL, 46,0), Mari El (RU-ME, 43,8), Chuvashia (RU-CU, 42,5), Udmurtia (RU-UD, 36,2), Sakha (Yakutia) (RU-SA, 35,0), Dagestan (RU-DA, 29,5, where TFR ~1,95 still drove net population growth 3 180k -> 3 295k), and Tatarstan (RU-TA, 26,5, where 2,0M+ rouble bonuses and Alga/Timer battalion losses coincided with Kazan aviation and Alabuga Shahed drone expansion) [@mediazona2025casualties; @istories2024mobilisation].

High-Loss Airborne, Northern & Pacific Garrison Subjects (11 Subjects): Permanent brigade home stations in Zabaykalsky Krai (RU-ZAB, 74,0 per 10 000; 29th CAA in Chita and Borzya), Sakhalin Oblast (RU-SAK, 62,5; 39th Brigade), Chukotka AO (RU-CHU, 58,0), Magadan Oblast (RU-MAG, 54,0), Pskov Oblast (RU-PSK, 49,5; 76th VDV), Kamchatka Krai (RU-KAM, 48,5; 40th Naval Infantry), Murmansk Oblast (RU-MUR, 46,2; 200th Arctic Brigade), and Primorsky Krai (RU-PRI, 41,5; Vladivostok 155th Naval Infantry and Ussuriysk 5th CAA) suffered severe combat attrition compounded by Far Eastern and Arctic out-migration [@mediazona2025casualties; @rosstat2024demografiya].

Hydrocarbon Fiscal-Bonus Autonomous Okrugs (Khanty-Mansi AO RU-KHM, Yamalo-Nenets AO RU-YAN): Offering record 2,75M - 3,20M rouble regional sign-up bonuses (2024AD - 2025AD) to fulfil federal recruitment quotas via out-of-region volunteers while shielding Surgut, Nizhnevartovsk, and Novy Urengoy oil-and-gas shift crews, both okrugs sustained slight net demographic growth (2 255k -> 2 290k, +1,6%) [@istories2024mobilisation].

Defence-Industrial & Southern Rear Oblasts/Krais (44 Subjects): Round-the-clock three-shift munitions, tank, and aircraft production in Sverdlovsk Oblast (RU-SVE, Nizhny Tagil Uralvagonzavod), Chelyabinsk Oblast (RU-CHE), Perm Krai (RU-PER), Tula Oblast (RU-TUL), Nizhny Novgorod Oblast (RU-NIZ), Samara Oblast (RU-SAM), Novosibirsk Oblast (RU-NVS), Omsk Oblast (RU-OMS), Krasnoyarsk Krai (RU-KYA), Irkutsk Oblast (RU-IRK), and Khabarovsk Krai (RU-KHA) stabilised core industrial cities even as rural districts and penal/contract cohorts absorbed heavy casualties (30 - 43 confirmed dead per 10 000 males), while Southern Military District rear hubs in Krasnodar Krai (RU-KDA, 5 838k -> 5 935k) and Rostov Oblast (RU-ROS, 4 201k -> 4 145k) anchored military logistics [@rosstat2024demografiya; @mediazona2025casualties].

<figure class="crd-table-figure" id="tab:ethnic-casualties">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Russian Federal Subject (ISO)</th><th class="crd-th">Named Dead</th><th class="crd-th">Est. Total Dead</th><th class="crd-th">Deaths / 10k</th><th class="crd-th">vs Moscow</th><th class="crd-th">Federal-Subject Socioeconomic &amp; Garrison Driver</th></tr></thead>
<tbody>
<tr><td class="crd-td">Tuva Republic (RU-TY)</td><td class="crd-td">1 450</td><td class="crd-td">2 600 - 3 200</td><td class="crd-td">122,0</td><td class="crd-td">38,1x</td><td class="crd-td">Acute rural poverty; Kyzyl 55th Mountain Brigade &amp; high contract enlistment</td></tr>
<tr><td class="crd-td">Buryatia Republic (RU-BU)</td><td class="crd-td">3 120</td><td class="crd-td">5 600 - 6 800</td><td class="crd-td">96,0</td><td class="crd-td">30,0x</td><td class="crd-td">Ulan-Ude &amp; Kyakhta 36th CAA / 11th VDV attrition &amp; cross-border flight to Mongolia</td></tr>
<tr><td class="crd-td">Altai Republic (RU-AL)</td><td class="crd-td">920</td><td class="crd-td">1 650 - 2 000</td><td class="crd-td">82,0</td><td class="crd-td">25,6x</td><td class="crd-td">Rural South Siberian indigenous republic; household debt &amp; contract bonuses</td></tr>
<tr><td class="crd-td">Zabaykalsky Krai (RU-ZAB)</td><td class="crd-td">2 640</td><td class="crd-td">4 800 - 5 800</td><td class="crd-td">74,0</td><td class="crd-td">23,1x</td><td class="crd-td">Chita &amp; Borzya 29th CAA (36th Bde) &amp; depressed mono-industrial mining towns</td></tr>
<tr><td class="crd-td">Sakhalin Oblast (RU-SAK)</td><td class="crd-td">1 080</td><td class="crd-td">1 900 - 2 400</td><td class="crd-td">62,5</td><td class="crd-td">19,5x</td><td class="crd-td">Yuzhno-Sakhalinsk 39th Motor Rifle Brigade &amp; Kuril garrison deployments</td></tr>
<tr><td class="crd-td">North Ossetia-Alania (RU-SE)</td><td class="crd-td">1 180</td><td class="crd-td">2 100 - 2 600</td><td class="crd-td">56,0</td><td class="crd-td">17,5x</td><td class="crd-td">Vladikavkaz 19th Motor Rifle Division &amp; North Caucasus volunteer battalions</td></tr>
<tr><td class="crd-td">Pskov Oblast (RU-PSK)</td><td class="crd-td">1 190</td><td class="crd-td">2 100 - 2 600</td><td class="crd-td">49,5</td><td class="crd-td">15,5x</td><td class="crd-td">Pskov 76th Guards Air Assault Division (VDV) &amp; 2nd Spetsnaz Brigade losses</td></tr>
<tr><td class="crd-td">Murmansk Oblast (RU-MUR)</td><td class="crd-td">960</td><td class="crd-td">1 700 - 2 100</td><td class="crd-td">46,2</td><td class="crd-td">14,4x</td><td class="crd-td">Pechenga 200th Arctic Brigade &amp; Northern Fleet 61st Naval Infantry losses</td></tr>
<tr><td class="crd-td">Bashkortostan Republic (RU-BA)</td><td class="crd-td">4 850</td><td class="crd-td">8 700 - 10 500</td><td class="crd-td">44,5</td><td class="crd-td">13,9x</td><td class="crd-td">No. 1 in absolute Russian war dead; heavy rural Bashkir/Tatar recruitment</td></tr>
<tr><td class="crd-td">Chuvashia Republic (RU-CU)</td><td class="crd-td">1 540</td><td class="crd-td">2 800 - 3 400</td><td class="crd-td">42,5</td><td class="crd-td">13,3x</td><td class="crd-td">Atal volunteer battalion &amp; rural Volga Chuvash mobilisation</td></tr>
<tr><td class="crd-td">Primorsky Krai (RU-PRI)</td><td class="crd-td">2 280</td><td class="crd-td">4 100 - 5 000</td><td class="crd-td">41,5</td><td class="crd-td">13,0x</td><td class="crd-td">Vladivostok 155th Naval Infantry Brigade (Vuhledar/Kursk) &amp; Ussuriysk 5th CAA</td></tr>
<tr><td class="crd-td">Perm Krai (RU-PER)</td><td class="crd-td">2 910</td><td class="crd-td">5 200 - 6 300</td><td class="crd-td">39,0</td><td class="crd-td">12,2x</td><td class="crd-td">Depressed Ural forestry/mining districts alongside penal &amp; contract recruitment</td></tr>
<tr><td class="crd-td">Sverdlovsk Oblast (RU-SVE)</td><td class="crd-td">4 120</td><td class="crd-td">7 400 - 9 000</td><td class="crd-td">33,5</td><td class="crd-td">10,5x</td><td class="crd-td">Nizhny Tagil Uralvagonzavod defence exemptions vs heavy penal/contract losses</td></tr>
<tr><td class="crd-td">Dagestan Republic (RU-DA)</td><td class="crd-td">1 850</td><td class="crd-td">3 400 - 4 200</td><td class="crd-td">29,5</td><td class="crd-td">9,2x</td><td class="crd-td">Kaspiysk 177th Naval Infantry &amp; 2022AD contract losses; offset by high TFR</td></tr>
<tr><td class="crd-td">Tatarstan Republic (RU-TA)</td><td class="crd-td">3 450</td><td class="crd-td">6 200 - 7 500</td><td class="crd-td">26,5</td><td class="crd-td">8,3x</td><td class="crd-td">2,0M+ RUB bonus &amp; Alga/Timer battalions vs Kazan/Alabuga defence exemptions</td></tr>
<tr><td class="crd-td">Saint Petersburg City (RU-SPE)</td><td class="crd-td">1 120</td><td class="crd-td">2 000 - 2 500</td><td class="crd-td">6,8</td><td class="crd-td">2,1x</td><td class="crd-td">Metropolitan political protection; &gt;150k IT and academic emigration</td></tr>
<tr><td class="crd-td">Moscow City (RU-MOS)</td><td class="crd-td">890</td><td class="crd-td">1 600 - 2 000</td><td class="crd-td">3,2</td><td class="crd-td">1,0x</td><td class="crd-td">Lowest per-capita mortality in Russia; 1,9M+ RUB bonus &amp; ~400k brain drain</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Confirmed named obituaries and probate-estimated total military fatalities across seventeen representative Russian federal subjects (2022AD - 2026AD).</figcaption>
</figure>

# Fertility, Mortality & Economic Shocks

Beyond territorial displacement, the 2021AD - 2026AD war permanently reshaped vital rates, age-sex pyramids, disability prevalence, and labour markets across all 123 Oblast, Occupation-History, and Federal-Subject divisions (Figure \ref{fig:vital-shock} and Table \ref{tab:vital-rates}).

Collapse of Ukrainian Fertility (TFR 0,77) & 3 : 1 Death-to-Birth Ratio: Ukraine's TFR fell from 1,16 (273,8k births) in 2021AD to 0,92 (206,0k) in 2022AD and ~0,77 - 0,82 (187,4k births in 2023AD, 176,7k in 2024AD, and ~170k in 2025AD - 2026AD), driven by the separation of ~1,0M mobilised Ukrainian men from ~2,8M reproductive-age women abroad [@libanova2024demographic; @gladun2024mortality; @levchuk2023fertility; @eurostat2025temporary]. With annual deaths (~515k) triple annual births, natural decrease reached -345k per year alongside 50 000 - 70 000+ war amputees and >300 000 conflict-disabled citizens [@worldbank2025rdna4; @ohchr2025casualties].

Russian Demographic Trough, Male Disability Surge & Labour Deficit (TFR 1,39): Following ~1,05M excess COVID-19 deaths in 2020AD - 2022AD [@kobak2021regional], Russian live births dropped from 1 398,3k (TFR 1,50) in 2021AD to 1 215k (TFR 1,39) in 2025AD - 2026AD - the smallest birth cohort since 1999AD [@rosstat2024demografiya; @raksha2023fertility; @zakharov2023fertility; @shcherbakova2024demographic]. Combined with 160k - 220k+ military dead, 320k - 450k severely wounded (+290k working-age male disability pensions in Social Fund registers), and 580k+ net brain-drain emigrants, Russia lost 1,8M - 2,2M civilian male workers, pushing official unemployment down to 2,3% - 2,6% amidst acute wage inflation [@meduza2024probate; @rerussia2024outflow].

<figure class="crd-figure-block" id="fig:vital-shock">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-russian-invasion-of-ukraine/russian_invasion_of_ukraine_fig4_urban_hierarchy.png" alt="fig:vital-shock" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Indexed regional population trajectories (2021AD = 100) and total fertility rate shocks across Ukraine, Belarus, and the Russian Federation (2019AD - 2025AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:vital-rates">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Vital &amp; Socio-Demographic Indicator</th><th class="crd-th">Ukraine (27 Units)</th><th class="crd-th">Belarus (7 Units)</th><th class="crd-th">Russian Federation (83 Units)</th></tr></thead>
<tbody>
<tr><td class="crd-td">Live Births (2021AD -&gt; 2025/2026AD, per yr)</td><td class="crd-td">273,8k -&gt; 170,0k (-37,9%)</td><td class="crd-td">82,0k -&gt; 59,0k (-28,0%)</td><td class="crd-td">1 398,3k -&gt; 1 215,0k (-13,1%)</td></tr>
<tr><td class="crd-td">Total Deaths (2021AD -&gt; 2025/2026AD, per yr)</td><td class="crd-td">714,3k -&gt; 515,0k (war excess)</td><td class="crd-td">145,0k -&gt; 118,0k</td><td class="crd-td">2 441,6k (COVID) -&gt; 1 820,0k (war excess)</td></tr>
<tr><td class="crd-td">Annual Natural Balance (2025/2026AD, per yr)</td><td class="crd-td">-345,0k (Deaths/Births 3,0 : 1)</td><td class="crd-td">-59,0k (Deaths/Births 2,0 : 1)</td><td class="crd-td">-605,0k (Deaths/Births 1,5 : 1)</td></tr>
<tr><td class="crd-td">Total Fertility Rate (TFR, 2021AD -&gt; 2026AD)</td><td class="crd-td">1,16 -&gt; 0,77</td><td class="crd-td">1,29 -&gt; 1,16</td><td class="crd-td">1,50 -&gt; 1,39</td></tr>
<tr><td class="crd-td">Male Life Expectancy at Birth (e0, 2025AD)</td><td class="crd-td">57,5 - 60,5 yrs (combat shock)</td><td class="crd-td">68,8 yrs</td><td class="crd-td">64,2 - 66,5 yrs (Tuva/Buryatia &lt; 58 yrs)</td></tr>
<tr><td class="crd-td">Confirmed / Estimated Military Fatalities (2022-2026AD)</td><td class="crd-td">70k - 110k+ (&gt;70k UALosses named)</td><td class="crd-td">&lt; 0,2k (volunteers)</td><td class="crd-td">160k - 220k+ (&gt;105k named obituaries)</td></tr>
<tr><td class="crd-td">Conflict-Disabled &amp; Severely Wounded (2022-2026AD)</td><td class="crd-td">300k - 380k (50k - 70k amputees)</td><td class="crd-td">-</td><td class="crd-td">320k - 450k (+290k male disability pensions)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Wartime vital rates, natural population decrease, male life expectancy, and conflict casualty and disability shocks across Ukraine, Belarus, and Russia.</figcaption>
</figure>

# Complete 83-Subject Russian Directory & Urban Gazetteer

Table \ref{tab:russia-subjects} reports the complete Federal-Subject-by-Federal-Subject resident population trajectory and per-capita confirmed military mortality rate across all 83 internationally recognised Oblasts, Krais, Republics, Autonomous Okrugs, Autonomous Oblast, and Federal Cities of the Russian Federation (2021AD - 2026AD). In parallel, our companion settlement gazetteer  tracks 245 individual cities, frontline towns, regional administrative and defence centres, military garrisons, hydrocarbon boomtowns, and defence-industrial hubs, guaranteeing georeferenced municipal coverage inside every single one of the 123 Oblast, Occupation-History, and Federal-Subject divisions from razed frontline towns (Bakhmut 71k -> 0,3k, Avdiivka 31k -> 0,7k, Vovchansk 17,5k -> 0,15k, Sudzha 5,1k -> 0,6k) to IDP-expanded sanctuary hubs (Lviv 717k -> 805k, Dnipro 968k -> 980k, Uzhhorod 115k -> 136k) and Russian garrison and industrial centres (Moscow, Ufa, Kazan, Pskov, Kostroma, Nizhny Tagil, Surgut, Kyzyl, Ulan-Ude, Chita, Vladivostok).

## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'regs_df' nicht gefunden
## Error:
## ! Objekt 'pops_mat' nicht gefunden
## Error:
## ! Objekt 'df_ru' nicht gefunden
## Error:
## ! Objekt 'df_ru' nicht gefunden


# Sources

::: {#refs}
:::

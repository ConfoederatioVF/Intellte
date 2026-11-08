---
title: "SETTLEMENT GAZETTEER OF KIEV AND PEREYASLAVL (10000BC - 1300AD)."
subtitle: "Archaeological Sites, Fortified Towns and Urban Population Estimates in the Middle Dnieper Core."
date: "8 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/kiev_and_pereyaslavl_fig4_urban_archaeology.png"
hero_caption: "Walled Enclosures, Urban Populations and Post-Mongol Settlement Continuity across the Middle Dnieper Core (1200AD - 1300AD)."
hero_label: "fig:kiev-pereyaslavl-settlements-hero"
bibliography: kiev_and_pereyaslavl_literature_review.bib
csl: crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: template.tex
    latex_engine: xelatex
    keep_tex: false
  md_document:
    variant: gfm
---



# Gazetteer Overview and Methodology (10000BC - 1300AD)

This companion document details the settlement-level gazetteer (`kiev_and_pereyaslavl_settlements.json`, comprising 145 distinct archaeological sites and pre-Mongol and devolved-principality settlements) for Region 1 (Kiev and Pereyaslavl) of the Kievan Rus regional sub-series (10000BC - 1300AD). All benchmark series are book-ended at the Mongol Conquests (1239-1240AD) and the immediate post-conquest Golden Horde *baskak*-administered appanage period (1250AD - 1300AD).

## Archaeological Planimetry and Density Multipliers

Population estimates for individual settlements in `kiev_and_pereyaslavl_settlements.json` are derived from three primary archaeological and documentary methodologies:

1. **Prehistoric and Proto-Urban Planimetry** (10000BC - 500BC):
 - ***Upper Palaeolithic and Neolithic** (10000BC - 6000BC)*: Derived from excavated mammoth-bone dwelling rings at Mezhirich, Dobranichevka, Gontsy and Kirillovskaya (100 - 250 seasonal band and village inhabitants) and Dnieper-Donets cemetery cohorts at Nikolskoye and Vovnigi (300 - 450 inhabitants) [@tolochko1972; @videiko2004].
 - ***Trypillia BII-CI Mega-Sites** (3600BC)*: Derived from high-resolution geomagnetic survey house counts across the Cherkasy-Uman Ros-Southern Bug interfluve (Talianky 450 ha, ~2 700 anomalies, Maidanetske 200 ha, ~2 100 anomalies, Nebelivka 260 ha, ~1 450 anomalies, Dobrovody 250 ha), applying Diachenko and Menotti's synchronous occupation coefficient (75 - 80% simultaneous house occupancy) and 5,5 - 6,5 persons per two-storey *ploshchadka* homestead [@videiko2004; @diachenko2012; @kruts1989].
 - ***Scythian Forest-Steppe Giant Hillforts and Greek Pontic Poleis** (500BC)*: Derived from excavated habitation quarters at Belsk (Gelonus) (4 020 ha perimeter, 152,6 ha across the Western, Eastern and Kuzeminsk citadels, 12,0k), Trakhtemyriv (500 ha, 4,5k), Motronyn (200 ha, 4,0k), Nemirov (110 ha, 4,0k) and the 50 ha stone-walled urban core of Olbia (15,0k) [@shramko1987; @kryzhitsky1999; @daragan2017].
2. **Kievan Rus Fortified Enclosures** (Gorodishcha) and Suburbs (Posady, 800AD - 1240AD):
 - Following the foundational methodologies of P. P. Tolochko [@tolochko1983; @tolochko1989], A. V. Kuza [@kuza1989; @kuza1996] and M. A. Sahaydak [@sahaydak1991], fortified Rus towns are partitioned into the inner citadel (*detinets*), outer walled city (*okolny gorod*) and unfortified riverine craft suburbs (*posady* and *podol*).
 - Within densely built *detinets* and *okolny gorod* ramparts, average homestead (*usadba*) plots measure 300 - 500 m² (20 - 25 homesteads per hectare at 5,5 - 6,0 persons per household, yielding 110 - 150 persons/ha). In suburban *posad* zones and frontier cavalry towns of the Porossia and Posullya lines, lower-density courtyard layouts (600 - 900 m²) yield 70 - 110 persons/ha [@morgunov2003; @motsia2007].
3. **Post-Mongol Stratigraphic and Fiscal Calibration** (1240AD - 1300AD):
 - Calibrated to the 1239-1240AD destruction horizons across Pereyaslavl, Posullya, Porossia and Kiev, John of Plano Carpini's 1246AD eyewitness count of ~200 surviving households in Kievan *Podol* (4,0k total metropolitan population in 1250AD, recovering to 8,5k by 1300AD per H. Yu. Ivakin) and the differential survival of the Drevlian Polesia and Bolokhov Land communities prior to Daniel of Galicia's 1257AD punitive campaign [@ivakin1996; @dawson1955; @tomashevsky2008].

# Prehistoric and Early Iron Age Sites (10000BC - 600AD)

## Upper Palaeolithic, Neolithic, Trypillia Mega-Sites and Bronze Age Centres (10000BC - 2000BC)

Table: Regional Demographic and Archaeological Data Summary (Table 1).

|Site Name           |Coordinates (N, E) |Sub-Region                |10000BC |6000BC |3600BC / 2000BC |
|:-------------------|:------------------|:-------------------------|:-------|:------|:---------------|
|Talianky            |48,80°N, 30,53°E   |Right-Bank Middle Dnieper |-       |-      |15 000 / 600    |
|Maidanetske         |48,82°N, 30,69°E   |Right-Bank Middle Dnieper |-       |-      |10 000 / 500    |
|Nebelivka           |48,64°N, 30,56°E   |Right-Bank Middle Dnieper |-       |-      |9 000 / 450     |
|Dobrovody           |48,77°N, 30,38°E   |Right-Bank Middle Dnieper |-       |-      |8 500 / 450     |
|Vesely Kut          |48,93°N, 30,62°E   |Right-Bank Middle Dnieper |-       |-      |5 000 / 400     |
|Sushkivka           |48,67°N, 30,37°E   |Right-Bank Middle Dnieper |-       |-      |4 500 / 350     |
|Kosenivka           |48,84°N, 30,45°E   |Right-Bank Middle Dnieper |-       |-      |4 000 / 350     |
|Chichirkozovka      |49,00°N, 31,09°E   |Right-Bank Middle Dnieper |-       |-      |3 500 / 300     |
|Tomashevka          |48,61°N, 30,30°E   |Right-Bank Middle Dnieper |-       |-      |3 500 / 300     |
|Yampil-Trypillia    |48,72°N, 30,78°E   |Right-Bank Middle Dnieper |-       |-      |2 800 / 350     |
|Vladyslavchyk       |49,05°N, 29,86°E   |Right-Bank Middle Dnieper |-       |-      |2 500 / 300     |
|Trepol (Trypillia)  |50,12°N, 30,77°E   |Kiev Metropolitan Core    |-       |-      |2 500 / -       |
|Mikhailovka         |47,29°N, 33,95°E   |Lower Dnieper & Steppe    |-       |-      |1 500 / 1 800   |
|Dereivka            |48,91°N, 33,68°E   |Right-Bank Middle Dnieper |-       |380    |1 400 / 1 200   |
|Kolomyishchyna      |50,12°N, 30,90°E   |Right-Bank Middle Dnieper |-       |-      |1 200 / 350     |
|Subotiv             |49,09°N, 32,55°E   |Right-Bank Middle Dnieper |-       |-      |- / 1 200       |
|Chapaievka          |50,34°N, 30,56°E   |Kiev Metropolitan Core    |-       |-      |1 000 / 450     |
|Sofievka            |50,29°N, 30,92°E   |Left-Bank Pereyaslavl     |-       |-      |900 / 700       |
|Pustynka            |51,41°N, 30,65°E   |Right-Bank Middle Dnieper |-       |-      |- / 800         |
|Nosachevo           |49,18°N, 31,69°E   |Right-Bank Middle Dnieper |-       |-      |- / 900         |
|Kirillovskaya       |50,48°N, 30,48°E   |Kiev Metropolitan Core    |160     |250    |-               |
|Mezhirich           |49,62°N, 31,43°E   |Right-Bank Middle Dnieper |150     |200    |-               |
|Gontsy              |50,17°N, 32,82°E   |Left-Bank Posullya        |140     |190    |-               |
|Dobranichevka       |50,15°N, 31,83°E   |Left-Bank Pereyaslavl     |120     |180    |-               |
|Semenovka           |50,23°N, 31,54°E   |Left-Bank Pereyaslavl     |110     |170    |-               |
|Fastov Palaeolithic |50,08°N, 29,92°E   |Right-Bank Middle Dnieper |100     |160    |-               |
|Nikolskoye          |48,21°N, 35,17°E   |Lower Dnieper & Steppe    |90      |450    |600 / -         |
|Vovnigi             |48,12°N, 35,14°E   |Lower Dnieper & Steppe    |80      |420    |550 / -         |
|Buzky               |48,03°N, 31,21°E   |Drevlian & Bolokhov Land  |-       |350    |700 / -         |

## Scythian Hillforts, Greek Poleis, Zarubintsy and Chernyakhov Centres (500BC - 600AD)

Table: Regional Demographic and Archaeological Data Summary (Table 2).

|Site Name             |Coordinates (N, E) |Archaeological Category                 |500BC  |300AD |600AD |
|:---------------------|:------------------|:---------------------------------------|:------|:-----|:-----|
|Olbia (Pontic Olbia)  |46,69°N, 31,90°E   |Milesian Greek Polis (50 ha)            |15 000 |4 000 |-     |
|Belsk (Gelonus)       |50,09°N, 34,63°E   |Scythian Giant Hillfort (4 020 ha)      |12 000 |1 500 |-     |
|Kamenskoye            |47,49°N, 34,42°E   |Scythian Steppe Hillfort (1 200 ha)     |6 000  |1 100 |-     |
|Trakhtemyriv          |49,98°N, 31,36°E   |Scythian Giant Hillfort (500 ha)        |4 500  |1 000 |-     |
|Motronyn              |49,14°N, 32,26°E   |Scythian Giant Hillfort (200 ha)        |4 000  |900   |-     |
|Nemirov Hillfort      |48,97°N, 28,84°E   |Scythian Giant Hillfort (110 ha)        |4 000  |1 100 |-     |
|Basovka Hillfort      |50,85°N, 33,67°E   |Scythian Sula Hillfort (170 ha)         |3 000  |800   |-     |
|Berezan (Borysthenes) |46,60°N, 31,41°E   |Milesian Greek Island Emporium          |2 500  |600   |-     |
|Khotiv Hillfort       |50,33°N, 30,47°E   |Scythian Kievan Hillfort (31 ha)        |2 500  |900   |-     |
|Pastyrskoye           |48,89°N, 31,79°E   |Scythian & Antae Craft Hillfort (25 ha) |2 500  |1 400 |2 500 |
|Sharpivka             |48,90°N, 31,70°E   |Scythian Craft Hillfort                 |2 000  |800   |-     |
|Roden (Knyazha Hora)  |49,69°N, 31,54°E   |Scythian & Rus Hillfort                 |1 800  |-     |-     |
|Makeyevka Scythian    |48,94°N, 31,64°E   |Scythian Hillfort                       |1 500  |700   |-     |
|Glubokaya Pristan     |46,64°N, 32,17°E   |Olbiopolitan Chora Fortress             |1 200  |500   |-     |
|Zolota Balka          |47,38°N, 33,96°E   |Late Scythian Stone Fortress            |900    |1 800 |-     |
|Lyubimovka            |46,82°N, 33,57°E   |Late Scythian Stone Fortress            |850    |1 600 |-     |
|Gavrilovka            |47,23°N, 33,86°E   |Late Scythian Stone Fortress            |800    |1 500 |-     |
|Chernyakhiv           |50,01°N, 30,78°E   |Chernyakhov Culture Type-Site           |-      |1 500 |600   |
|Pilipenkova Hora      |49,73°N, 31,52°E   |Zarubintsy & Chernyakhov Hillfort       |800    |1 400 |700   |
|Kompaniiets           |49,92°N, 31,59°E   |Chernyakhov Left-Bank Centre            |-      |1 400 |600   |
|Velikaya Bugaevka     |50,22°N, 30,42°E   |Zarubintsy & Chernyakhov Village        |-      |1 200 |550   |
|Liutezh               |50,69°N, 30,40°E   |Zarubintsy Iron-Smelting Complex        |-      |900   |600   |
|Monastyrek            |49,97°N, 31,39°E   |Early Slavic Hillfort                   |-      |-     |900   |

# Kievan Rus and Devolved Principalities (800AD - 1300AD)

## Principality of Kiev (IDs 2844, 3368): Metropolitan Core and Right-Bank Ring

Table: Regional Demographic and Archaeological Data Summary (Table 3).

|Settlement              |Coordinates (N, E) |1000AD |1200AD Apogee |1250AD Trough |1300AD |
|:-----------------------|:------------------|:------|:-------------|:-------------|:------|
|Kiev (Metropolis)       |50,45°N, 30,52°E   |28 000 |50 000        |4 000         |8 500  |
|Belgorod (Bilhorodka)   |50,39°N, 30,23°E   |6 000  |9 000         |1 500         |2 200  |
|Vyshhorod               |50,58°N, 30,49°E   |5 000  |7 000         |1 200         |1 800  |
|Kaniv                   |49,75°N, 31,47°E   |2 200  |4 000         |1 500         |2 200  |
|Vasiliev (Vasylkiv)     |50,18°N, 30,32°E   |2 500  |3 500         |1 000         |1 400  |
|Trepol (Trypillia)      |50,12°N, 30,77°E   |2 000  |3 000         |900           |1 200  |
|Berestovo (Pechersk)    |50,44°N, 30,56°E   |1 200  |3 000         |600           |1 100  |
|Roden (Knyazha Hora)    |49,69°N, 31,54°E   |1 600  |2 500         |400           |-      |
|Vitichev                |50,13°N, 30,89°E   |1 800  |2 200         |500           |700    |
|Chuchin                 |49,92°N, 31,43°E   |1 000  |1 800         |450           |600    |
|Zvenyhorod-Kievan       |50,25°N, 30,40°E   |900    |1 600         |450           |600    |
|Zarub                   |49,97°N, 31,40°E   |1 000  |1 500         |400           |500    |
|Kitaigorod (Kitaevo)    |50,37°N, 30,54°E   |1 200  |1 500         |450           |650    |
|Ivan-Gorod (Rzhyshchiv) |49,97°N, 31,05°E   |800    |1 500         |450           |650    |
|Khalep                  |50,10°N, 30,82°E   |800    |1 400         |450           |600    |
|Tumasch                 |50,14°N, 30,64°E   |800    |1 400         |400           |550    |
|Zdvyzhen (Brusyliv)     |50,29°N, 29,53°E   |750    |1 400         |550           |700    |
|Khodosivka              |50,27°N, 30,52°E   |900    |1 350         |450           |600    |
|Krasn                   |50,03°N, 30,67°E   |700    |1 300         |400           |550    |
|Svyatoslavl             |50,16°N, 30,71°E   |700    |1 200         |350           |450    |
|Mutyzhin                |50,44°N, 29,92°E   |600    |1 200         |450           |600    |
|Plesetskoye             |50,22°N, 30,11°E   |650    |1 200         |400           |550    |
|Dymer                   |50,78°N, 30,30°E   |650    |1 200         |500           |650    |
|Olzhychi                |50,19°N, 30,82°E   |750    |1 150         |400           |500    |
|Zhelanya (Zhuliany)     |50,39°N, 30,44°E   |600    |1 100         |350           |500    |
|Byshiv                  |50,27°N, 29,89°E   |600    |1 100         |450           |600    |
|Unava-Fastovets         |50,06°N, 30,02°E   |600    |1 100         |400           |500    |
|Hlibivka                |50,81°N, 30,36°E   |600    |1 100         |450           |600    |
|Yasnohorodka            |50,35°N, 30,03°E   |550    |1 050         |400           |500    |
|Velyka Snitynka         |50,09°N, 29,97°E   |600    |1 050         |350           |450    |
|Boyarka-Budayivka       |50,33°N, 30,30°E   |550    |1 000         |350           |450    |
|Hostomel                |50,57°N, 30,27°E   |600    |1 000         |400           |550    |
|Vorobiev                |50,63°N, 30,23°E   |550    |950           |350           |450    |
|Vorzel-Irpin            |50,54°N, 30,22°E   |550    |950           |350           |450    |

## Porossia Steppe-Frontier Line, Drevlian Land and Bolokhov Land

Table: Regional Demographic and Archaeological Data Summary (Table 4).

|Settlement            |Coordinates (N, E) |Sub-Region        |1000AD |1200AD Apogee |1250AD / 1300AD |
|:---------------------|:------------------|:-----------------|:------|:-------------|:---------------|
|Torchesk (Olshanitsa) |49,68°N, 30,63°E   |Porossia Frontier |2 000  |6 000         |800 / 1 100     |
|Yuriev (Bila Tserkva) |49,79°N, 30,12°E   |Porossia Frontier |1 500  |4 500         |1 200 / 2 000   |
|Korsun                |49,42°N, 31,26°E   |Porossia Frontier |1 200  |2 800         |700 / 1 100     |
|Boguslavl             |49,55°N, 30,88°E   |Porossia Frontier |1 000  |2 500         |650 / 1 000     |
|Volodarev             |49,52°N, 29,92°E   |Porossia Frontier |800    |1 800         |500 / 750       |
|Rostovets             |49,70°N, 29,44°E   |Porossia Frontier |850    |1 800         |550 / 800       |
|Dveren                |49,59°N, 30,73°E   |Porossia Frontier |-      |1 500         |400 / 550       |
|Polksten              |49,72°N, 31,22°E   |Porossia Frontier |700    |1 500         |400 / 550       |
|Moshny                |49,53°N, 31,75°E   |Porossia Frontier |700    |1 300         |450 / 650       |
|Neyatin               |49,75°N, 29,79°E   |Porossia Frontier |650    |1 250         |350 / 500       |
|Bakhmutov             |49,63°N, 30,49°E   |Porossia Frontier |-      |1 200         |350 / 450       |
|Chernyi Klobuk        |49,64°N, 30,82°E   |Porossia Frontier |-      |1 150         |350 / 450       |
|Sakkov                |49,74°N, 30,32°E   |Porossia Frontier |-      |1 100         |300 / 400       |
|Churilovo             |49,78°N, 29,59°E   |Porossia Frontier |600    |1 100         |350 / 450       |
|Mykhailiv-Porossia    |49,49°N, 31,06°E   |Porossia Frontier |-      |1 050         |300 / 400       |
|Borovyi               |49,66°N, 30,22°E   |Porossia Frontier |-      |1 000         |300 / 400       |
|Ovruch (Vruchiy)      |51,33°N, 28,81°E   |Drevlian Polesia  |2 800  |4 500         |2 200 / 3 000   |
|Iskorosten (Korosten) |50,95°N, 28,65°E   |Drevlian Polesia  |2 600  |4 000         |2 000 / 2 600   |
|Vozvyagl (Zviahel)    |50,59°N, 27,62°E   |Drevlian Polesia  |1 500  |2 800         |1 400 / 1 500   |
|Bolokhov (Lyubar)     |49,92°N, 27,76°E   |Bolokhov Land     |1 200  |2 500         |2 200 / 1 400   |
|Mezhibozhye           |49,44°N, 27,41°E   |Bolokhov Land     |1 000  |2 200         |1 700 / 1 500   |
|Kotelnich             |50,11°N, 28,97°E   |Drevlian Polesia  |1 000  |2 000         |1 000 / 1 300   |
|Horodsk               |50,37°N, 29,19°E   |Drevlian Polesia  |1 400  |2 000         |950 / 1 200     |
|Gubin                 |49,79°N, 27,45°E   |Bolokhov Land     |900    |2 000         |1 700 / 1 000   |
|Bozhsky               |49,47°N, 27,50°E   |Bolokhov Land     |1 100  |2 000         |1 600 / 1 100   |
|Malyn                 |50,77°N, 29,24°E   |Drevlian Polesia  |1 300  |1 800         |950 / 1 200     |
|Zhytomyr              |50,25°N, 28,66°E   |Drevlian Polesia  |1 200  |1 800         |1 000 / 1 500   |
|Raiky                 |49,92°N, 28,50°E   |Drevlian Polesia  |1 300  |1 800         |300 / -         |
|Kudin                 |49,52°N, 27,29°E   |Bolokhov Land     |800    |1 800         |1 500 / 950     |
|Michesk (Radomyshl)   |50,50°N, 29,24°E   |Drevlian Polesia  |1 000  |1 600         |800 / 1 050     |
|Kobud                 |49,75°N, 27,22°E   |Bolokhov Land     |750    |1 600         |1 350 / 850     |
|Derevich              |49,77°N, 27,59°E   |Bolokhov Land     |750    |1 600         |1 350 / 850     |
|Ushchesk (Ushomyr)    |50,86°N, 28,47°E   |Drevlian Polesia  |950    |1 500         |800 / 1 000     |
|Chornobyl             |51,28°N, 30,22°E   |Drevlian Polesia  |700    |1 500         |900 / 1 200     |
|Olevsk                |51,23°N, 27,65°E   |Drevlian Polesia  |950    |1 400         |850 / 1 100     |
|Chudnov               |50,06°N, 28,12°E   |Drevlian Polesia  |750    |1 350         |750 / 950       |
|Norinsk               |51,27°N, 28,62°E   |Drevlian Polesia  |800    |1 250         |700 / 850       |

## Principality of Pereyaslavl (IDs 2848, 3350), Posullya and Lower Dnieper (Oleshye)

Table: Regional Demographic and Archaeological Data Summary (Table 5).

|Settlement             |Coordinates (N, E) |Sub-Region        |1000AD |1200AD Apogee |1250AD / 1300AD |
|:----------------------|:------------------|:-----------------|:------|:-------------|:---------------|
|Pereyaslavl-Russky     |50,07°N, 31,46°E   |Pereyaslavl Core  |8 000  |15 000        |3 500 / 4 500   |
|Oleshye                |46,62°N, 32,62°E   |Lower Dnieper     |2 400  |3 500         |1 200 / 1 500   |
|Lubno (Lubny)          |50,02°N, 33,00°E   |Posullya Line     |1 500  |3 000         |900 / 1 200     |
|Priluk (Pryluky)       |50,59°N, 32,39°E   |Pereyaslavl Core  |1 400  |2 800         |850 / 1 150     |
|Voin                   |49,57°N, 32,73°E   |Posullya Line     |1 500  |2 500         |500 / 600       |
|Romen (Romny)          |50,75°N, 33,48°E   |Posullya Line     |1 800  |2 500         |800 / 1 100     |
|Oster (Gorodets)       |50,95°N, 30,88°E   |Pereyaslavl Core  |1 200  |2 500         |800 / 1 100     |
|Rimiv                  |50,63°N, 33,49°E   |Posullya Line     |1 200  |2 200         |450 / 550       |
|Nosivka                |50,93°N, 31,58°E   |Pereyaslavl Core  |1 100  |2 200         |700 / 950       |
|Ltava (Poltava)        |49,59°N, 34,55°E   |Left-Bank Vorskla |1 300  |2 200         |700 / 950       |
|Lukoml                 |49,85°N, 32,97°E   |Posullya Line     |1 000  |2 000         |550 / 750       |
|Khorol                 |49,78°N, 33,27°E   |Posullya Line     |1 000  |2 000         |600 / 800       |
|Ksniatin               |50,20°N, 33,17°E   |Posullya Line     |1 100  |2 000         |500 / 650       |
|Donets (Khorosheve)    |49,85°N, 36,22°E   |Seversky Donets   |1 400  |2 000         |550 / 700       |
|Sneporod               |49,93°N, 32,99°E   |Posullya Line     |950    |1 800         |400 / 500       |
|Baruch                 |50,29°N, 31,70°E   |Pereyaslavl Core  |950    |1 800         |550 / 750       |
|Khortytsia (Protolche) |47,82°N, 35,07°E   |Lower Dnieper     |1 200  |1 800         |600 / 800       |
|Bronnitsa              |50,72°N, 31,37°E   |Pereyaslavl Core  |850    |1 600         |500 / 650       |
|Sinets                 |50,35°N, 33,33°E   |Posullya Line     |800    |1 500         |450 / 600       |
|Glinsk                 |50,61°N, 33,33°E   |Posullya Line     |1 000  |1 500         |550 / 800       |
|Pesochen (Gorodok)     |50,40°N, 30,66°E   |Pereyaslavl Core  |800    |1 500         |450 / 600       |
|Goltav                 |49,42°N, 33,77°E   |Left-Bank Psyol   |750    |1 500         |450 / 600       |
|Zheldi                 |49,69°N, 32,85°E   |Posullya Line     |-      |1 400         |350 / 450       |
|Bititsa                |51,02°N, 34,94°E   |Severian Border   |1 200  |1 400         |-               |

# References

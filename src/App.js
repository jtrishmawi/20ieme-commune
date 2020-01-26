import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { List, ListItem } from "./components/List";
import Link from "./components/Link";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header>La 20ième Commune</Header>
      <Nav>
        <List>
          <ListItem>
            <Link href="#">Menu 1</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Menu 2</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Menu 3</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Menu 4</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Menu 5</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Menu 6</Link>
          </ListItem>
        </List>
      </Nav>
      <Container>
        <Hero>
          C’est l’histoire d’un monde, <br />
          d’un pays, <br />
          d’une ville, <br />
          d’un quartier,<br />
          d’une rue. <br />
          C’est l’histoire de ta rue.
        </Hero>
        <p>
          Celle que tu traverses chaque jour, que tu crées à chaque pas, que tu
          marques à chaque empreinte. C’est l’histoire de ton identité, de tes
          racines, de tes rêves, de ta réalité. C’est TON histoire, et c’est
          aussi la NOTRE. Parce que l’histoire collective ne tient debout que si
          toutes les histoires individuelles se donnent la main. Et cette
          histoire, je te propose de l’écrire ensemble. Toi, moi, nous,
          ensemble. Elle est comment cette histoire ? Laisse-moi te la raconter.
          Cette histoire commence avec nous, le Collectif de la Vingtième
          Commune, liste électorale indépendante et citoyenne du 20ème
          arrondissement. Nous sommes des femmes, des hommes, des commerçants,
          des éducateurs, des professionnels de la santé, des artistes, des
          entrepreneurs, des sociologues, des comptables, des politiques, des
          dirigeants d’associations ; nous sommes tous des acteurs de terrain et
          des citoyens liés par des valeurs communes et une intention claire :
          vivre ensemble, et le faire bien. Cette histoire est nourrie de désirs
          forts autour d’axes forts : sociaux, éducatifs, économiques,
          politiques, des axes à travers lesquels la priorité est d’ouvrir le
          dialogue, construire des ponts, soutenir des initiatives, créer des
          perspectives. Cette histoire est portée par des êtres pluriels pour
          des êtres pluriels : nous incarnons cette pluralité générationnelle,
          culturelle, professionnelle, dans l’objectif de la maintenir, et
          d’inclure les minorités au cœur d’une majorité soudée, active et
          performante. Cette histoire aspire à grandir et élever les consciences
          : elle est puissante, ambitieuse, courageuse, et humble aussi. Elle
          est la nôtre au service d’une plus grande. C’est une histoire qui
          s’incarne par des gens différents pour des gens différents, au service
          d’une seule et même chose : la responsabilité. La tienne, la mienne,
          la nôtre à tous. LA RESPONSABILITE. Si ton trottoir te semble terne et
          déserté, c’est ta responsabilité d’y mettre de la lumière et de la
          bonne compagnie. Si ton quartier te semble en hibernation, c’est ta
          responsabilité de l’éveiller, avec bienveillance et fermeté. Si ton
          espace te semble étriqué pour tes rêves trop larges, c’est ta
          responsabilité d’y faire la place dont ils ont besoin pour exister. Si
          ta vie te parle tout bas de ses manques, c’est ta responsabilité de
          l’écouter et de lui offrir ce qu’elle réclame, à voix haute. Et nous
          sommes là pour prendre cette responsabilité avec toi, main dans la
          main. Pas à ta place, mais AVEC toi. Et AVEC toi, nous prenons nous
          aussi notre engagement. Notre engagement est de prêter notre voix
          quand la tienne est encore timide. Notre engagement est de prêter
          notre expérience quand tu te sens encore jeune ou en devenir. Notre
          engagement est de mettre des ressources à ta disposition quand les
          tiennes sont encore fragiles. Notre engagement est de t’écouter et te
          soutenir quand l’audace et la force te manquent. Notre engagement est
          d’être ce relai entre ton quotidien et celui auquel tu aspires. C’est
          ça notre engagement. Nous le prenons aujourd’hui en présentant notre
          liste aux prochaines élections. Et c’est cet élan responsable que nous
          t’invitons à rejoindre, pour nous sentir forts, opérationnels, actifs,
          vivants, ensemble. Ce que tu feras de cette opportunité, par tes actes
          et ton énergie, sera la garantie de ce monde meilleur dans lequel nous
          méritons de vivre. Chaque jour, chaque minute. « Quelle trace tu
          laisses de ton passage sur ce coin de terre ? » C’est la question que
          je TE pose, que je ME pose, et à laquelle ON peut commencer à
          répondre, dans le bruit de toutes nos voix additionnées. J’ai besoin
          de toi. Tu as besoin de moi. Et le monde a besoin de nous. Comme un
          enfant a besoin de ses parents pour se tenir droit et s’épanouir.
          Prenons ce monde dans nos bras, et donnons-lui le plus beau des
          visages, un visage qui nous rende fiers.
        </p>
      </Container>
      <Aside>
        <List>
          <ListItem>
            <Link href="#">Partenaire 1</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Partenaire 2</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Partenaire 3</Link>
          </ListItem>
        </List>
      </Aside>
      <Footer>La 20ième commune - 2020</Footer>
    </Layout>
  );
}

export default App;

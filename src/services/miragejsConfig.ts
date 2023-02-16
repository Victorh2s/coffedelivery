import { createServer } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export function Miragejs() {
  const server = createServer();
  server.get('/api/coffes', [
    {
      id: uuidv4(),
      nameCoffe: 'Expresso Tradicional',
      descriptionCoffe:
        'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1677456000&Signature=VKX8Rw84BooOsEr5acehCHeWfGKAkEovAxP45aen3p~7ugowMOk-CMv6f-M-iyqbgi9BkbbvtnYNpihj8BfGkNsTQnsXnaXOOpb9zOpMxpetTuixHJUdlFsRxfrhRaoDSiQzsDO4NPSBIf25Lgh6XURxYHUAFkb1elirN19yO~PgAuoki6PpmdMSuo1xyCTAGvBs9GwNE8g7IZaRuxY~4ohg497MAceKMEjFjws7clmVdvmbHOurMhIs9JLL9uKYmKjUod-XpRId8dfBgSDr54YkyCAPtPV7ZDkuRO94~WXAO4wU9MvEV73QSYouTwTXV~gK~Aguiku0gT0L28bMjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Tradicional',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Latte',
      descriptionCoffe:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1677456000&Signature=b2-kdGNx5iLD~78~6cW5NPorEkIXHospt-Jr-Uv~QcEpAxeTtvJvgbB6yhXQWF3oYkeXrMic0C57XG0WPMgJwhPyaRqGsqjZ7GdRwu5BfF-QJp~iyT4XpOIYg7B5KiNzGy~TlXC95LQkV7UcLMpdSAItd6OrAtEKvKKt5otk13c5SzgbxCFAURhdPZX~QmyDwr-rb1zNu254JILBejq37YiMw97BENwc2YrPFiQYkzRm7vdjhr~QNRhPtrfVqVGKga7p4udKY6lUL3O1ysA9QpBwC4Hbh0GoOOzptP4x~zXMUp3hCu0MHixWCQUx8m6J5M34gxrry28kxHH3t5PhSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Tradicional',
        },
        {
          id: uuidv4(),
          nameTag: 'Com Leite',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Capuccino',
      descriptionCoffe:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/6693/81b7/0a9565b6f322ac8b5229ee4fc4b47825?Expires=1677456000&Signature=FU3I0s1QCpA84M5IVlnJM8beWJFurEqgXY5FYsk8nd4tIMhIHrdB7h4fKxW~NlbaI-OzKr52triMNgstYnA8ySNgyiIfHShc4N2RJcLq8rtvaHuLiI7C9mSYVfNK39TppoLAFyRJNMieJyHub0T0mhV0EwJDG8giEbkriTJpSHVpjJGzP6Hv7AIaUhJH2PI~IzZbWQJf~tgUieL5TcWJJy3M6GCKhXzV2BQEXc~zbDXip0vRtA30-rK5bF5zgEKhBVs2MNDG2Fuibwh5~UWCYhVZTPKUahBEql9uStIaerrGmnJ7e5Z1tguSzJjUqDVt3sbXqZkAohI6Fg0EXnLz1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Tradicional',
        },
        {
          id: uuidv4(),
          nameTag: 'Com Leite',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Macchiato',
      descriptionCoffe:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/890a/8773/a655c4fabfc9a7ecdc389e6ea93587ac?Expires=1677456000&Signature=k3IG5-NtXPJxqK9sETxkW24IaRhn4gLQRVcZ8LQYhXUPgoUvWoLERfULKe5BWwRyo6qPvPRh3qH5XWEIHPIedJS6bDRsCrsSkLaoz4re8te1htPcILsB015yKnZ5Fs59aO5mEygMEwmYF2Bw2lvAoIjeXt-UY33fqL9kgIwVYRE4fYF~pomeMERU6lXxKtcbQXZHAOHsBTfqm8t2~cPZKdU5o-YkyYiTCjBkeyuy5Et4Vf2NbfZhBYFWaoIhE-JjqUIdEvF1O3BTYVelPtAJSzyYsjLyu2XJX4Eayl5WHwhFjF0r0oazl5nyZ-OzH8lVFdmX2HN-2nzJJNajiLODYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Tradicional',
        },
        {
          id: uuidv4(),
          nameTag: 'Com Leite',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Macchiato',
      descriptionCoffe:
        'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/bc3e/4798/837b2a3ba5d0fa098e7e39985025efb7?Expires=1677456000&Signature=cMV~oTwGvgLpXY-cme5waNpZWqYOHr416Rsa7sUUTBR3-MO6eh2-hb0y1dzVcIYWCbCnmTzlPBODQjPP5h~LcDFalmuhSb38EdCjE--GZuLDG40XEdhd5FaUPvGEEI00gjI5tE9unm8nXgQR9XQroHBeO2wj-wIEbcFeqQh6giz0ptg6UgHt9HVhFNjKqf2jLNj6yLpoPA7RBB0tDJhJWhBLSbtQKwZWzMNDhBHmjgwEk-wY2M9QNakG4WohSCYkiCtZv75h7e6KdtGIJAKWcOnyvss1ElG1YdMwPu9Rhf9z71H5D89R0hnK7P0eGUH3EmFbJuAHRNSBGBtxuTaqpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Tradicional',
        },
        {
          id: uuidv4(),
          nameTag: 'Com Leite',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Chocolate Quente',
      descriptionCoffe:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/4462/16dc/20b9de473c3aadc304466df059e1887e?Expires=1677456000&Signature=i2YDamiat~Qwg5BVvyrQ-DqMzlrcg9bSItVh0HBEg7rjks0WwP~ObS-Nbz0zAvz~xkYW3rO10ucAU5Ecj~xYM-7KFceTRlNpdnYAivbY-5tUvk~nm17VreFl6Nj1DtKjd6Tz7zL4434d1XaGHVACmIz08SWs~Hzlbd4RqQNPXSLWzJ5SpDM3b62MB17Q~KP4kNks4Ya0DBdcA7QatwMxJL37TigqFl87pQ0tMyeg6P01gwQ9OACYavGAu4tpZSfTrhhrXc-~hqb5vOLapRM83nngSqlqXicZexCfuyJmbLcfN4U4Rev318cr3jnhgirePT26l2Bqbw9g3dHYV~C28Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Especial',
        },
        {
          id: uuidv4(),
          nameTag: 'Com Leite',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Cubano',
      descriptionCoffe:
        'Drink gelado de café expresso com rum, creme de leite e hortelã ',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/dae3/2866/45ab1873edeac1c90c31203f5bf3ed52?Expires=1677456000&Signature=b-rzoFYKpIlcALXcNi8PeUbQhB37nhOX4mvrOdQvzeowk-shvH4B-yZIW4Yt~K6QO27UvChUzMTZSnBduBnfIRVJdbH3XEv5ZdcwmA2nLX2mepclvG~50bQPynoi8xrryOZ3Y7H6tOYA0dFuGcJDNLumQVSNFbXlww7lSLijF-OFn3N8Ylfo0Qa76d5Cooq-FXGi-dBbP5JK8sJuRRZWwR~pTHlbzAHqjRmCcktoUwRxaIeKNELCSnDxL-Pyovf5hW74n~peQHwgaIl8dcQlJ07WeeCTRl2hozW38GfD6rPQoJG5L0m9Xp-mYVKFw-CN2md~sEw-BDfHTOfIDQZ4Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Especial',
        },
        {
          id: uuidv4(),
          nameTag: 'Alcoólico',
        },
        {
          id: uuidv4(),
          nameTag: 'Gelado',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Havaiano',
      descriptionCoffe: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/64fd/9a26/b6d3187556021c2da9fc80f2da41088f?Expires=1677456000&Signature=OEmQZfGlud00KpUCBtZoicQdGUb-m~kC1bOUMKnsqv~JH~PRMuDz~2GXyj0RYT15KmXm6VbgwI09000AgEdmOQu3caRnEwBxcnZW6YAgRl24gp6ZrBCJ41xZFgO4p8r4D51943CEUllnUextO9MaC1kXZos4qhtInt-arwOC8i0~LBnyXN~qOfUec~8oz6kYE0BTpX1UPVQkVbcldMFtHwtQ2srrtXUHLTjZFD7CM6bXfeQoBZ7Qz4vIeV3IcT4xRcaqi~ekgjZOZkkABw-x7IqMDM7TDOl8zbdoBJYmYaY6mmvni~9ZE21DftqjiTDcrglZtneJVbw3f4b2HOAskw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Especial',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Árabe',
      descriptionCoffe:
        'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/8bcb/3d33/7b04857330d98e72e67bde570cbc8963?Expires=1677456000&Signature=F0qEi~awbodDolue-DtNSHN6v~3TvL0EkKbD22LWlF3MIryaZa4-uL8vwEAjY3dv27qLJ6m1DvFE4s4o44~TKTzMaHClJVOE2JgBvwBRxRJ~a9Yvi1QRByMhfDHPhhHg2DLYiz8DlhWRr-Fp1LBby2u-4omQMp2opHqrdXSrfUOpUoxe7wWzuHirhQfuAHf614NMx2gZ6s2KGj--ldVoo8DB6XLUoW9sSRvl7Yl1t5dwjhY865kQ1y~tXl7Dkg2TLQpwVN5eYrsy69w8JLTcrTcF-LwYZpGrGbmXwSk5ItZKw7WdqmMLy8nG7I635fDuzhdfAJ3MgDnvmaWMhhLWOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Especial',
        },
      ],
    },
    {
      id: uuidv4(),
      nameCoffe: 'Irlandês',
      descriptionCoffe:
        'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      amount: 25,
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/53b9/9cd5/c0cac4ecf7b9bd81c976cdd9fe2ab3a3?Expires=1677456000&Signature=btcr7TuS-tPPby93nwC8ChwdcGYRKBvr0vH6S3~WlTfJCdXWkALTMGj2RenF5GwHLdfTgkyf2Vxq-SOha1xnHnAjk8ozxUxH~WwKiAqDM~1ln4KcSmEXWOF6jEk8~-aAyiEAurE2du-59FtXplJAfOMybH1DG2O~~Z~qaaPVlAiPc7ZDpktBHlhV~ZnBN7yoUvfgumZnftGjAqf6jMmSOTHGBNEEfd2WGus-hPXb92PQemJPNgVqFXN7POyaepx5ejeZpUD5kcc3oOnbtpI4TYXapjWF0YhbVhPoBx8KAUPm1-UYARbh~GAFMGf9tFuYptTiaA1DRvFXUQOD8M3iBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      tags: [
        {
          id: uuidv4(),
          nameTag: 'Especial',
        },
        {
          id: uuidv4(),
          nameTag: 'Alcoólico',
        },
      ],
    },
  ]);
}

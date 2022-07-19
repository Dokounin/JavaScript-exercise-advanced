## Exercice 1: aller chercher une image

⚠ cet exercice ne présente que peu d’intérêt: ce que nous allons faire pourrait être fait sans `fetch`, en modifiant la valeur `src` de la balise image directement. Le but est de vous apprendre `fetch` sans avoir à apprendre `JSON` immédiatement

Nous allons récupérer dynamiquement le logo de Wikipédia (`https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png`)

➡ Créer une page HTML, mettre une image avec un `id` et mettre un bouton
➡ Créer un script JS, ajouter un listener click au bouton et lui donner le code ci-dessous
➡ Ça devrait marcher :)
➡ les images sont des `blobs` c’est à dire un tas de texte hexadécimal. La fonction `URL.createObjectURL` n’est vraiment pas à retenir, ça crée une adresse à l’image qu’on a téléchargée
➡ on vient de récupérer une image par Internet

## Exercice 2 : liste des étudiants

Vous reprenez l’ancien exercice affichant la liste des étudiants (exo 5 de JS1) et vous refaites la même en affichant plus d’formations et en exploitant la donnée JSON fournie ci-dessus.

Amélioration: la même mais en fetchant la liste des étudiants depuis  https://pachyderme.net/students.json

## Exercice 3 : localStorage

Vous allez créer une page web avec un champ d’input pour enregistrer en `localStorage` un nom de promotion.
Vous allez créer un bouton pour charger le nom de promotion et un dernier pour supprimer le nom enregistré.
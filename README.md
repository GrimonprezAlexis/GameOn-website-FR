### A propos
Projet 4 - Créez une landing page avec Javascript
- GameOn, spécialisée dans les conférences et les concours de jeux

### Objectif
Ajouter le code JavaScript manquant pour que le formulaire soit pleinement fonctionnel

### Contraintes techniques
- Travailler sur un repo GitHub forké
- Il n'y a aucune dépendance
- Que du CSS / JavaScript pur, sans jQuery, Bootstrap ou autre librairie.


### Technlogies
HTML, CSS, Javascript, Github

### Hébergement
[#Projet 4 - GameOn](https://grimonprezalexis.github.io/GameOn-website-FR/starterOnly/)

### Maquette
[Maquette](https://www.figma.com/file/prxFGnSUoEhk6PTcMaJQim/UI-Design-GameOn-EN)

[![GameOn](https://user.oc-static.com/upload/2020/08/14/15974189716945_image2.png "GameOn")](https://user.oc-static.com/upload/2020/08/14/15974189716945_image2.png "GameOn")


### Github
[repo GitHub forké](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/)

##### Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.


###  Issues
https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues

#####1 TODO : fermer la modale
- Ajouter la fonctionnalité au bouton (x)

#####2 Implémenter entrées du formulaire
1. Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
2. Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
Les données doivent être saisies correctement :
1. Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
2. Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
3. L'adresse électronique est valide.
4. Pour le nombre de concours, une valeur numérique est saisie.
5. Un bouton radio est sélectionné.
6. La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

#####3 Ajouter validation ou messages d'erreur
- Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :
1. "Veuillez entrer 2 caractères ou plus pour le champ du nom."
2. "Vous devez choisir une option."
3. "Vous devez vérifier que vous acceptez les termes et conditions."
4. "Vous devez entrer votre date de naissance."

#####4 Ajouter confirmation quand envoie réussi 
1. Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")

#####5 Tests manuels
1. Compatibilité avec les dernières versions de Chrome et Firefox, ainsi que dans les versions mobile et desktop. 
2. Corriger les erreurs d'affichage existantes.
3. Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)

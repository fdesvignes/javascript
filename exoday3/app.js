/*****document.addEventListener('DOMContentLoaded', () => {
    
    // bouton pour ajouter un nouvel élément
    const addButton = document.querySelector('#addform1')
    // champ de saisie pour ajouter un nouvel élément
    const addInput = document.querySelector('#addform2')

    // l'utilisateur clique sur le bouton d'ajout
    // s'il y a du texte dans le champ d'élément, ajoutez-le à la liste des tâches

    addButton.addEventListener('click', function () {
        // récupère la valeur de la balise d'entrée
        let newItem = document.getElementById('items').value
        // si la balif (newItem) {
           // cette fonction ajouteise d'entrée n'est pas vide alors exécutez notre fonction pour ajouter un élément
        ra un nouvel élément à la liste de tâches
          addItemTodo(newItem)
          // réinitialise l'entrée après avoir ajouté un nouvel élément
          document.getElementById('item').value = ''
        }
      })

      // l'utilisateur appuie sur Entrée
      addInput.addEventListener('keypress', function (e) {
          // l'utilisateur a-t-il appuyé sur * enter *? si oui, continuez
        if (13 === e.keyCode) {
          // récupère la valeur de la balise d'entrée
          let newItem = document.getElementById('item').value
           // si la balise d'entrée n'est pas vide alors exécutez notre fonction pour ajouter un élément
          if (newItem) {
            // cette fonction ajoutera un nouvel élément à la liste de tâches
            addItemTodo(newItem)
            // réinitialise l'entrée après avoir ajouté un nouvel élément
            document.getElementById('item').value = ''
          }
        }
      })
  })
  ********/

  window.onload = () => {
    const form1 = document.querySelector('#addForm1');
    const form2 = document.querySelector('#addForm2');
  
    let items = document.getElementById('items');
    let submit = document.getElementById('submit');
  
    let editItem = null;
  
    form1.addEventListener('submit', addItem);
    items.addEventListener('click', removeItem);
  };
  
  function addItem(e) {
    e.preventDefault();
          
  }
  
  function removeItem(e) {
    e.preventDefault();
    /**
     *
     * a vous de jouer
     */
  }
  
  function toggleButton(ref, btnID) {
    /**
     *
     * a vous de jouer
     */
  }

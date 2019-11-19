(() => {
    console.log('Connected');

    const seeMoreButtons = document.querySelectorAll(".see-more"),
    popOver = document.querySelector(".popOver");

    const waypoint = new Waypoint({
        element: document.getElementById('section2'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          //this.element.innerHTML += `<p>Added this with Waypoint ${direction}</p>`
        }
      })

      const waypoint2 = new Waypoint({
        element: document.getElementById('section3'),
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!')
          
        },
        offset: 200
      })

      function buildPopover(beerdata, el) {
            popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.Iparating}`;
            popOver.querySelector(".ratings").textContent = `IPA Rating: ${beerdata.ratings}`;
            popOver.querySelector(".beer-description").textContent = beerdata.description;

            popOver.classList.add('.show-popover');
            el.appendChild(popOver);
      }

      function fetchData() {
          let targetEl = this,
          url = `/svgdata/${this.dataset.target}`;

          fetch(url)
          .then(res => res.json())
          .then(data => {
              console.log(data);

              buildPopover(data, targetEl);
          })
          .catch((err) => console.log(err));
      }

    const svgGraphic = document.querySelector(".svg-wrapper");

    // svgGraphic.addEventListener('click', function() {
    //     console.log(this);
    // })

    seeMoreButtons.forEach(button => button.addEventListener('click', fetchData));
    
})();
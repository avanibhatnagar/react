import React, {Component} from 'react';

class Homepage extends Component {
  render(){
    return(
      <div className="container-fluid">

      <div class="content">
        <div class="container">
        <div class="page-wrapper">
        <div class ="sometext">
          <h2>Who are we?</h2>
          <p>Datalyze enables organizations to conceptualize and implement a well-thought-out big data program.</p>
        </div>
        <div class ="sometext">
        <br />
          <h2>Services we provide</h2></div>
          <ul class="flex-container">
            <li class="flex-item1">Understand business strategy</li>
            <li class="flex-item2">Recommend correct platform</li>
            <li class="flex-item3">Development and Implementation</li>
            <li class="flex-item4">Support after deployment</li>
          </ul>

</div>
        <article class="card">
  <div class="card__wrapper">

    <figure class="card__feature">
      <img src="https://www.dropbox.com/s/z7gp2vanse5djxf/waves.jpg?raw=1" class="card__img" alt="waves" width="275" height="240"></img>
    </figure>

    <div class="card__box">

      <header class="card__item card__header">
        <h6 class="card__item card__item--small card__label">Featured</h6>
        <h2 class="card__item card__item--small card__title">Article 1</h2>
      </header>

      <hr class="card__item card__divider"></hr>

      <section class="card__item card__body">
        <p>Dummy text1</p>
      </section>

    </div>

  </div>
</article>

<article class="card">
  <div class="card__wrapper">

    <figure class="card__feature">
      <img src="https://www.dropbox.com/s/r06tebu17sjfcca/bridge.jpg?raw=1" class="card__img" alt="Bridge" width="275" height="240"></img>
    </figure>

    <div class="card__box">

      <header class="card__item card__header">
        <h6 class="card__item card__item--small card__label">Featured</h6>
        <h2 class="card__item card__item--small card__title">Article 2</h2>
      </header>

      <hr class="card__item card__divider"></hr>

      <section class="card__item card__body">
        <p>Dummy text 2</p>
      </section>

    </div>

  </div>
</article>

                  <br /> <br />
        </div>
      </div>
      </div>
    );
  }
}

export default Homepage;

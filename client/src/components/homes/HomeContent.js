import React, { Component } from "react";

class HomeContent extends Component {
  render() {
    return (
      <div className="column">
        <div className="content is-medium">
          <div className="title">
            Fruit Villa{" "}
            <span className=" subtitle is-pulled-right">Neil Chauhan</span>{" "}
          </div>
          <div className="subtitle">New Delhi</div>
          <p className="key-info">
            {/* key info */}
            <h5 className="is-size-6">Entire Apartment</h5>
            <span className="margin-key-info">1 room</span>
            <span className="margin-key-info">2 bed </span>
            <span className="margin-key-info">3 guests</span>
          </p>
          <p>
            {/* key info */}
            <h5 className="is-size-6">Self check-in</h5>
            Check yourself in with the lockbox.
          </p>
          <p className="descriptio">
            <h5 className="is-size-6">About the Space</h5>
            <p className="is-size-6">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              dolorem reiciendis ipsum ipsam non commodi maiores nam? Voluptates
              in itaque non tempora pariatur eveniet dignissimos tenetur debitis
              unde, maiores libero omnis ea cupiditate animi, eaque sint
              voluptatem minus porro. Aliquam iste veritatis asperiores
              repudiandae, assumenda dolores voluptatem! Voluptas nulla a minima
              nostrum! Magnam repudiandae quidem, perspiciatis at veniam dicta
              aut culpa illum iusto eaque ad consequuntur sit, eveniet quod fuga
              eius. Repudiandae molestiae architecto veniam veritatis vitae
              assumenda velit aliquid, cupiditate cumque, doloremque unde in sit
              qui, laborum blanditiis dolorem. Sed placeat quaerat accusantium
              quidem perspiciatis esse laboriosam nihil, numquam deleniti, ullam
              quisquam necessitatibus quos at amet natus adipisci nemo
              consectetur quod aut, dicta ea praesentium omnis magnam? Laborum
              provident commodi, odit voluptates nihil error modi aspernatur
              ipsum autem. Molestiae autem voluptates fugit porro asperiores
              ratione repudiandae ipsum dicta reprehenderit iusto officia
              pariatur voluptatem odio, in tenetur alias quas? Illo at facilis
              laudantium. Soluta officiis tenetur ipsum natus inventore esse
              optio praesentium, provident explicabo asperiores aliquid
              suscipit? Aliquam tempore esse praesentium ipsam eaque! Libero
              esse, sequi nobis dicta obcaecati sit velit? Labore temporibus sed
              dolorum repellendus praesentium aspernatur atque, incidunt veniam
              quisquam delectus sit libero numquam voluptatem consectetur earum?
              Deleniti dolorum aut pariatur distinctio doloribus officiis saepe
              voluptates placeat dolore! Ipsa nemo ipsum, repellat nisi quisquam
              tempora quo dolorem, cumque, aliquam odit alias sequi corrupti?
              Quis voluptatum obcaecati debitis sint facilis eligendi. Quam
              quis, tempora inventore explicabo doloribus natus aliquam placeat
              sequi iure facilis sit repudiandae nobis id quasi eaque voluptates
              eligendi harum, corrupti dolorum? Voluptatem, aliquid! Nihil neque
              modi distinctio unde natus repellendus iure numquam officiis
              dolores, facere eius ut facilis ullam omnis voluptatibus repellat
              nisi placeat error ipsa enim. Corporis dolores, quaerat cum ex
              quibusdam ipsum architecto aspernatur iure provident repudiandae
              facilis et repellendus adipisci mollitia illum. Accusantium enim
              perspiciatis aliquam expedita eveniet quasi in eaque, adipisci
              nisi rerum cumque temporibus. Repellat non doloremque ex explicabo
              veritatis iure, architecto ut magnam dicta, voluptates similique
              consectetur nisi ratione tenetur dignissimos quas, deleniti
              accusamus atque? Iure assumenda provident culpa pariatur harum
              nemo architecto totam dignissimos. Libero neque adipisci, sint
              minus delectus voluptatem quasi nisi hic quia facere quam porro
              eos soluta. Rem recusandae voluptates veritatis vitae commodi?
              Ullam nobis, animi porro velit ab ipsam iste reprehenderit
              architecto voluptas sequi tempora, pariatur maiores quasi totam
              vero maxime incidunt similique explicabo obcaecati, in vitae
              exercitationem commodi error. Ab architecto numquam doloremque
              itaque.{" "}
            </p>
          </p>

          <div className="amenities">
            <h6 className="is-size-6">Amenities</h6>
            <div className="columns is-multiline">
              <div className="column is-6">
                <i class="fas fa-wifi" /> Wifi
              </div>
              <div className="column is-6">
                <i class="fas fa-utensils" /> Kitchen
              </div>
              <div className="column is-6">
                <i class="fas fa-tv" /> TV
              </div>
              <div className="column is-6">
                <i class="fas fa-fan" /> Air Conditioner
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;

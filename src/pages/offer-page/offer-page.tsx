import { Helmet } from 'react-helmet-async';
import { Offer, OfferDetailed } from '../../types/offer';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute, FavoriteBtnClassModifier, FavoriteBtnSize } from '../../const';
import { countRating } from '../../components/card/utils';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import AddToFavoriteButton from '../../components/add-to-favorite-btn/add-to-favorite-btn';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferGoods from '../../components/offer-goods/offer-goods';
import OfferHost from '../../components/offer-host/offer-host';
import Header from '../../components/header/header';
import { Review } from '../../types/review';
import Reviews from '../../components/reviews/reviews';

type OfferPageProps = {
  detailedOffers: OfferDetailed[];
  offers: Offer[];
  reviews: Review[];
}

function OfferPage({detailedOffers, offers, reviews} : OfferPageProps): JSX.Element {

  const idContainer = useParams();
  const offer = detailedOffers.find((elem) => elem.id === idContainer.id);

  if (offer === undefined) {
    return <Navigate to = {AppRoute.Error} />;
  }

  const { bedrooms, city, description, goods, id, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type } = offer;

  return (
    <div className="page">
      <Helmet>
        <title>Offers</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images = {images}/>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <AddToFavoriteButton classModifier = {FavoriteBtnClassModifier.OFFER} isFavorite = {isFavorite} size = {FavoriteBtnSize.OFFER}/>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${countRating(rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>

                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferGoods goods={goods}/>
              </div>
              <OfferHost host={host} description={description}/>
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <section className="offer__map map" />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>

            {/* в компонент OffersList*/}
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/room.jpg"
                      width={260}
                      height={200}
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€80</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width={18}
                        height={19}
                      >
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-02.jpg"
                      width={260}
                      height={200}
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€132</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width={18}
                        height={19}
                      >
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-03.jpg"
                      width={260}
                      height={200}
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€180</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width={18}
                        height={19}
                      >
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '100%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>


          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;

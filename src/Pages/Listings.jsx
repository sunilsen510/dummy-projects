import ListingCard from '../Components/ListingCard.jsx';
import UserImg1 from '../assets/modern-villa.jpg';
import UserImg2 from '../assets/ram-villa.jpg';
import UserImg3 from '../assets/shyam-villa.jpg';

export const Listings = () => {
  const realEstateListings = [
    { id: 1, title: 'Ram Villa', price: '$500,000', image: UserImg1, location: 'Jaipur' },
    { id: 2, title: 'Shyam Villa', price: '$250,000', image: UserImg2, location: 'Ajmer' },
    { id: 3, title: 'Mohan Villa', price: '$1,200,000', image: UserImg3, location: 'Kota' },
    { id: 4, title: 'Ram Villa', price: '$500,000', image: UserImg1, location: 'Jaipur' },
    { id: 5, title: 'Shyam Villa', price: '$250,000', image: UserImg2, location: 'Ajmer' },
    { id: 6, title: 'Mohan Villa', price: '$1,200,000', image: UserImg3, location: 'Kota' },
    { id: 7, title: 'Ram Villa', price: '$500,000', image: UserImg1, location: 'Jaipur' },
    { id: 8, title: 'Shyam Villa', price: '$250,000', image: UserImg2, location: 'Ajmer' },
    { id: 9, title: 'Mohan Villa', price: '$1,200,000', image: UserImg3, location: 'Kota' },
  ];

  return (
    <>
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Property Listings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {realEstateListings.map(listing => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </section>
    </>
  );
};

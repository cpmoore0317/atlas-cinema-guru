import { Card } from './Card';

interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  favorited?: boolean;
  watchLater?: boolean;
}

interface MovieGridProps {
  currentPage: number;
  updateTotalPages: (pages: number) => void;
  movies: Movie[];
  type: "favorites" | "watchLater";
}

export const FavoriteGrid: React.FC<MovieGridProps> = ({ currentPage, updateTotalPages, movies = [], type }) => {

  return (
    <div className="px-10 py-3">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-40 gap-y-2">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
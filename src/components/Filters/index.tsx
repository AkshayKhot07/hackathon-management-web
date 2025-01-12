import { FiltersType } from "../HomeComponent";

interface FiltersTypes {
  setFilters: React.Dispatch<React.SetStateAction<FiltersType[]>>;
}

const Filters = ({ setFilters }: FiltersTypes) => {
    const handleFiltersType = (e: React.FormEvent<HTMLFormElement>) => {
        const { name, checked } = e.target as HTMLInputElement;
      
        setFilters((prevFilters: FiltersType[]) => {
          const filterIndex = prevFilters.findIndex((filter) => filter.name === name);
      
          if (filterIndex >= 0) {
            if (!checked) {
              return prevFilters.filter((filter) => filter.name !== name);
            } else {
              const updatedFilters = [...prevFilters];
              updatedFilters[filterIndex] = { name, checked };
              return updatedFilters;
            }
          } else if (checked) {
            return [...prevFilters, { name, checked }];
          }
          return prevFilters;
        });
      };
      

  return (
    <form onChange={(e) => handleFiltersType(e)}>
      <div className="p-4">
        <p className="pb-2">CHALLENGE TYPE</p>
        <ul className="list-none flex items-center gap-4">
          <li className="flex items-center justify-center gap-1">
            <input type="checkbox" name="hackathons" id="hackathons" />
            <label htmlFor="hackathons">Hackathons</label>
          </li>
          <li className="flex items-center justify-center gap-1">
            <input type="checkbox" name="hiring" id="hiring" />
            <label htmlFor="hiring">Hiring</label>
          </li>
          <li className="flex items-center justify-center gap-1">
            <input type="checkbox" name="university" id="university" />
            <label htmlFor="university">University</label>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Filters;

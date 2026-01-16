import { MapPin, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EventFiltersProps {
  locations: string[];
  years: number[];
  selectedLocation: string;
  selectedYear: string;
  onLocationChange: (location: string) => void;
  onYearChange: (year: string) => void;
}

export function EventFilters({
  locations,
  years,
  selectedLocation,
  selectedYear,
  onLocationChange,
  onYearChange,
}: EventFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {/* Location Filter */}
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary" />
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Year Filter */}
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-primary" />
        <Select value={selectedYear} onValueChange={onYearChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

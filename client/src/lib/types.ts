export type PulseStatus = "chill" | "high" | "critical";
export type PulseTrend = "rising" | "falling" | "stable";
export type PlaceCategory = "bar" | "restaurant" | "cinema" | "club" | "parc";
export type ToastType = "success" | "error" | "warning" | "info";

export interface District {
  id: number;
  name: string;
  category: string;
  adress: string;
  lat: number;
  lng: number;
  places?: Place[];
}

export interface Place {
  id: number;
  name: string;
  category: PlaceCategory;
  adress: string | null;
  lat: number;
  lng: number;
  districtId: number;
  district?: Pick<District, "id" | "name" | "category">;
}

export interface PulseBaseline {
  mean: number;
  stdDev: number;
  samples: number;
}

export interface PulseResult {
  district: Pick<District, "id" | "name" | "category">;
  score: number;
  zScore: number;
  status: PulseStatus;
  trend: PulseTrend;
  occupancy: number;
  baseline: PulseBaseline;
  places: Place[];
  updatedAt: string;
}


export interface AuthUser {
    id: number;
    email: string;
}

export interface Toast {
    id: number;
    message: string;
    type: ToastType;
}
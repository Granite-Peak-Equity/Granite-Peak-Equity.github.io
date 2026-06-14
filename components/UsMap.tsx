// Server component: the target-markets choropleth is computed at build time
// (no client JS, no CDN fetch) and emitted as a static inline SVG.
import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import type {
  Topology,
  GeometryCollection,
} from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";
import usAtlas from "us-atlas/states-10m.json";

const TARGET_FIPS = new Set([
  "04", "08", "16", "19", "20", "27", "30", "31",
  "32", "35", "38", "40", "46", "48", "49", "56",
]);

const FIPS_ABBR: Record<string, string> = {
  "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO",
  "09": "CT", "10": "DE", "12": "FL", "13": "GA", "15": "HI", "16": "ID",
  "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA",
  "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS",
  "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH", "34": "NJ",
  "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK",
  "41": "OR", "42": "PA", "44": "RI", "45": "SC", "46": "SD", "47": "TN",
  "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV",
  "55": "WI", "56": "WY",
};

const W = 720;
const H = 460;

function pad2(id: string | number | undefined): string {
  return String(id ?? "").padStart(2, "0");
}

export default function UsMap() {
  const topology = usAtlas as unknown as Topology;
  const statesObj = topology.objects.states as GeometryCollection;

  const states = feature(topology, statesObj) as FeatureCollection<Geometry>;
  const borders = mesh(topology, statesObj, (a, b) => a !== b);

  const projection = geoAlbersUsa().scale(960).translate([W / 2, H / 2]);
  const path = geoPath(projection);

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full max-w-[720px] h-auto"
        role="img"
        aria-label="Map of the United States with Granite Peak Equity target states highlighted"
      >
        {states.features.map((f) => {
          const fips = pad2(f.id);
          const isTarget = TARGET_FIPS.has(fips);
          const d = path(f);
          if (!d) return null;
          return (
            <path
              key={fips || f.id}
              d={d}
              fill={isTarget ? "#2a6fdb" : "#c8d6e2"}
            />
          );
        })}
        <path
          d={path(borders) ?? undefined}
          fill="none"
          stroke="white"
          strokeWidth={0.8}
        />
        {states.features.map((f) => {
          const fips = pad2(f.id);
          const c = path.centroid(f);
          if (!c || !isFinite(c[0]) || !isFinite(c[1])) return null;
          const abbr = FIPS_ABBR[fips];
          if (!abbr) return null;
          const isTarget = TARGET_FIPS.has(fips);
          return (
            <text
              key={`lbl-${fips}`}
              x={c[0]}
              y={c[1]}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fontWeight={isTarget ? 600 : 400}
              fill={isTarget ? "white" : "#7a90a0"}
              fontFamily="var(--font-sans)"
            >
              {abbr}
            </text>
          );
        })}
      </svg>

      <div className="flex gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-sm" style={{ background: "#2a6fdb" }} />
          <span className="text-xs text-navy-dark/50">Target markets</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-sm" style={{ background: "#c8d6e2" }} />
          <span className="text-xs text-navy-dark/50">Other states</span>
        </div>
      </div>
    </div>
  );
}

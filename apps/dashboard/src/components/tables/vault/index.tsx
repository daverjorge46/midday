import { getUser, getVault } from "@midday/supabase/cached-queries";
import { DataTable } from "./data-table";
import { EmptyTable } from "./empty-table";
import { UploadZone } from "./upload-zone";

export async function Table({ path }) {
  const { data } = await getVault({
    path: path && decodeURIComponent(path),
  });

  const { data: userData } = await getUser();

  return (
    <div className="mt-6 h-[calc(100vh-180px)] border overflow-scroll relative">
      <UploadZone>
        <DataTable data={data} teamId={userData.team_id} />
        {data.length === 0 && <EmptyTable type={path} />}
      </UploadZone>
    </div>
  );
}

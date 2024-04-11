import { useRouter } from "next/router";

import { FiLogOut } from "react-icons/fi";

import useUser from "@hooks/queries/useUser";

import Column from "./Column";
import Divider from "./Divider";
import Row from "./Row";

export default function Header() {
  const router = useRouter();
  const { logout, user } = useUser();

  return (
    <Column>
      <Row></Row>
      <div className="flex w-full flex-row items-center justify-between bg-bg px-4 py-3">
        <div
          className="cursor-pointer text-xl font-medium text-black opacity-80 md:text-2xl"
          onClick={() => router.push("/")}
        >
          glue.
        </div>

        <div className="flex items-center gap-x-2">
          <div className="text-xs font-normal text-black text-opacity-60">
            ver 1.0.0
          </div>

          <div className="flex h-[18px] w-[29px] items-center justify-center gap-2 rounded border border-black border-opacity-60 p-1">
            <div className="text-[8px] font-semibold text-black text-opacity-60">
              BETA
            </div>
          </div>

          {user ? (
            <FiLogOut
              className="ml-2 cursor-pointer"
              onClick={() => logout()}
            />
          ) : null}
        </div>
      </div>

      <Divider />
    </Column>
  );
}

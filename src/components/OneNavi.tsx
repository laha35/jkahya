import Card from "@/components/Card";

export default function OneNavi() {
  return (
    <div className="mt-5 text-center">
      <Card>
        <a href="/one">
          <div className="flex">
            <div className="text-3xl n3 text-rose-400">JKAHYA</div>
            <div className="text-3xl n3 text-black">&nbsp;One</div>
          </div>
        </a>
        <div className="grid grid-cols-3 gap-3 mt-2 text-xl n2">
          <a href="">
            <div className="hover:cursor-pointer text-gray-300">PassPort</div>
          </a>
          <a href="/one/swi24">
            <div className="hover:cursor-pointer">SWI24</div>
          </a>
          <a href="">
            <div className="hover:cursor-pointer text-gray-300">Download</div>
          </a>
        </div>
      </Card>
    </div>
  );
}

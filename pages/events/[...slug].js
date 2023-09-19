import { useRouter } from "next/router";
function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  return (
    <div>
      <h1>Filtered Events Page</h1>
    </div>
  );
}
export default FilteredEventsPage;

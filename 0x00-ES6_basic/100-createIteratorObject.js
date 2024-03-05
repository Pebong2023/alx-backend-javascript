export default function createIteratorObject(report) {
	  return (function* _() {
		      for (const department of Object.values(report.allEmployees)) {
			            yield* department;
		}
	 })();
}

import departments from "@/data/departments";

export const dynamic = "force-static";

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl text-center font-bold mb-8">
        KLU Department Information
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6">
        {departments.map((dept) => (
          <section key={dept.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{dept.name}</h2>

            <p><b>HOD:</b> {dept.hod}</p>
            <p><b>Email:</b> {dept.contactEmail}</p>
            <p><b>Phone:</b> {dept.contactPhone}</p>

            <h3 className="text-md font-bold mt-3">Faculty:</h3>
            <ul className="list-disc pl-4">
              {dept.faculty.map((fac, i) => (
                <li key={i}>
                  {fac.name} – {fac.email}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

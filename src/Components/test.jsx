
//    <div style={{ textAlign: "center", width: "80%", margin: "15% auto", padding: "0% 10px" }}>
//            <Heading as="h2" size="2xl" textAlign="center" mb={12} color={bgColor}>
//            Relevant Tech Stacks
//          </Heading>
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(5, 1fr)",
//         gap: "20px",
//         justifyContent: "center",
//       }}
//     >
//       {techStacks.map(({ name, imageSrc }) => (
//         <div
//           key={name}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             padding: "20px",
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//           }}
//           className="skills-card"
//         >
//           <img
//             src={imageSrc}
//             alt={name}
//             style={{ height: "10rem", width: "10rem" }}
//             className="skills-card-img"
//           />
//           <p
//             style={{
//               fontWeight: "bold",
//               marginTop: "12px",
//               fontSize: "18px",
            
//             }}
//             color={bgColor}
//             className="skills-card-name"
//           >
//             {name}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div> 
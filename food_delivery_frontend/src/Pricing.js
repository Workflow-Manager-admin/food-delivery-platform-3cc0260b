import React from "react";

// PUBLIC_INTERFACE
function Pricing() {
  /** 
   * Pricing page component for food delivery platform with sample tiers. 
   * Uses project colors for modern, light style.
   */
  const tiers = [
    {
      name: "Basic",
      price: "$0/mo",
      features: [
        "Pay-per-delivery fee: $3.99/order",
        "Standard delivery support",
        "Order tracking",
      ],
      color: "#4CAF50", // Primary
      best: false,
    },
    {
      name: "Premium",
      price: "$9.99/mo",
      features: [
        "Unlimited FREE deliveries",
        "Priority customer support",
        "Order tracking & real-time updates",
        "Exclusive restaurant deals",
      ],
      color: "#FF5722", // Accent
      best: true,
    },
    {
      name: "Family",
      price: "$14.99/mo",
      features: [
        "Unlimited deliveries for whole family",
        "Group order management",
        "Priority support",
        "Kids meal discounts",
      ],
      color: "#FFC107", // Secondary
      best: false,
    }
  ];

  return (
    <main className="pricing-page" style={{ background: "var(--bg-primary)", minHeight: "100vh", padding: "40px 0" }}>
      <h2 style={{ color: "#4CAF50", fontWeight: "700", fontSize: "2.5rem", marginBottom: "16px" }}>Our Pricing</h2>
      <p style={{ color: "#555", marginBottom: "36px", fontSize: "1.2rem" }}>
        Simple and flexible plans for every foodie's lifestyle.
      </p>
      <div className="pricing-tiers" style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
        {tiers.map(tier => (
          <section
            key={tier.name}
            style={{
              background: "#fff",
              border: `2.5px solid ${tier.color}`,
              borderRadius: "18px",
              minWidth: "240px",
              maxWidth: "300px",
              boxShadow: tier.best ? "0 8px 32px 0 rgba(76,175,80,0.16),0 1.5px 6px rgba(255,87,34,0.09)" : "0 3px 12px rgba(0,0,0,0.06)",
              padding: "32px 26px 36px 26px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: tier.best ? "3.5px" : "2.5px",
              position: "relative",
              outline: tier.best ? "3.5px solid #FFD70066" : "none",
              zIndex: tier.best ? 1 : 0
            }}
          >
            {tier.best && (
              <span
                style={{
                  position: "absolute",
                  top: "-18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#FF5722",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "0.93rem",
                  padding: "5px 12px",
                  borderRadius: "12px",
                  letterSpacing: "0.5px",
                  boxShadow: "0 3px 8px rgba(255,87,34,0.13)",
                }}
              >
                Most Popular
              </span>
            )}
            <h3 style={{ color: tier.color, fontSize: "1.5rem", marginBottom: "0.9rem" }}>{tier.name}</h3>
            <div style={{
              color: "#1A1A1A",
              fontSize: "2.1rem",
              fontWeight: "bold",
              marginBottom: "19px"
            }}>{tier.price}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "30px", color: "#444", textAlign: "left", lineHeight: "1.7" }}>
              {tier.features.map(f => (
                <li key={f} style={{ marginBottom: "7px" }}>• {f}</li>
              ))}
            </ul>
            <button
              className="pricing-btn"
              style={{
                background: tier.color,
                color: "#fff",
                padding: "12px 38px",
                border: "none",
                borderRadius: "10px",
                fontWeight: 600,
                letterSpacing: "0.3px",
                fontSize: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >Choose</button>
          </section>
        ))}
      </div>
    </main>
  );
}

export default Pricing;

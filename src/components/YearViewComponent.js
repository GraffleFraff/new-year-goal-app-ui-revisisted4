import React from "react";
import { Link } from "react-router-dom";
import { eachWeekOfInterval, format } from "date-fns";
import { Card } from "react-bootstrap";
import Header from "./Header";
import { Calendar, CalendarWeek } from "react-bootstrap-icons";

const YearViewComponent = () => {
  const yearStart = new Date("12/31/2023");
  const yearEnd = new Date("12/28/2024");

  const weeks = eachWeekOfInterval({
    start: yearStart,
    end: yearEnd,
  });

  const columns = [[], [], [], []]; // For 4 columns
  weeks.forEach((week, index) => {
    const columnIndex = Math.floor(index / 13); // Determine the column index
    columns[columnIndex].push(week);
  });

  return (
    <div style={{ paddingTop: "60px" }}>
      <div class="d-flex">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Year View
            </li>
          </ol>
        </nav>
        <Header />
      </div>
      <Card className="mb-3 shadow-sm">
        <Card.Header>
          <Card.Title>
            <h3 style={{ textAlign: "center" }}>
              <Calendar />
              &nbsp;
              <b>Year View</b>
            </h3>
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <h6>Select a week to start setting goals</h6>
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {columns.map((column, index) => (
              <div key={index}>
                {column.map((week, weekIndex) => (
                  <div key={weekIndex}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/week/${weekIndex + 1 + index * 13}`}
                    >
                      <CalendarWeek />
                      &nbsp; Week {weekIndex + 1 + index * 13}
                    </Link>
                    <div>
                      {format(week, "MM/dd/yyyy")} -{" "}
                      {format(
                        new Date(week.getTime() + 6 * 24 * 60 * 60 * 1000),
                        "MM/dd/yyyy"
                      )}
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default YearViewComponent;

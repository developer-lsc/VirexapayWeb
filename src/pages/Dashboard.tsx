import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  AlertTriangle,
  FileSignature,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const metrics = [
  { label: "Total a Receber", value: "R$ 12.450,00", icon: DollarSign, change: "+8%", positive: true, tone: "accent" },
  { label: "Total Recebido", value: "R$ 8.320,00", icon: TrendingUp, change: "+12%", positive: true, tone: "success" },
  { label: "Total Vencido", value: "R$ 2.100,00", icon: AlertTriangle, change: "-3%", positive: false, tone: "destructive" },
  { label: "Contratos Ativos", value: "14", icon: FileSignature, change: "+2", positive: true, tone: "primary" },
  { label: "Receita Mensal", value: "R$ 4.890,00", icon: BarChart3, change: "+15%", positive: true, tone: "accent" },
] as const;

const recentContracts = [
  { client: "Maria Silva", title: "Consultoria de Marketing", value: "R$ 3.500,00", status: "Signed", date: "22/02/2026" },
  { client: "João Oliveira", title: "Desenvolvimento Web", value: "R$ 8.000,00", status: "Sent", date: "20/02/2026" },
  { client: "Ana Costa", title: "Design de Marca", value: "R$ 2.200,00", status: "Draft", date: "18/02/2026" },
  { client: "Pedro Santos", title: "Gestão de Redes Sociais", value: "R$ 1.800,00", status: "Signed", date: "15/02/2026" },
];

const statusLabels: Record<string, string> = {
  Draft: "Rascunho",
  Sent: "Enviado",
  Signed: "Assinado",
  Cancelled: "Cancelado",
};

const Wrapper = styled.div``;

const Header = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Heading = styled.h1`
  font-size: 30px;
`;

const SubHeading = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const MetricsGrid = styled(motion.div)`
  margin-bottom: 32px;
  display: grid;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const MetricCard = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 20px;
`;

const MetricTop = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MetricIconWrap = styled.div<{ $tone: string }>`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, $tone }) =>
    $tone === "success"
      ? "color-mix(in srgb, " + theme.colors.success + " 12%, transparent)"
      : $tone === "destructive"
      ? "color-mix(in srgb, " + theme.colors.destructive + " 12%, transparent)"
      : $tone === "primary"
      ? "color-mix(in srgb, " + theme.colors.primary + " 12%, transparent)"
      : "color-mix(in srgb, " + theme.colors.accent + " 12%, transparent)"};
`;

const Trend = styled.span<{ $positive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme, $positive }) => ($positive ? theme.colors.success : theme.colors.destructive)};
`;

const MetricLabel = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const MetricValue = styled.p`
  font-family: Inter, system-ui, sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

const TableCard = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
`;

const TableHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TableTitle = styled.h2`
  font-size: 20px;
`;

const TableLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    text-decoration: underline;
  }
`;

const Overflow = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeadCell = styled.th`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 24px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const Row = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }
`;

const Cell = styled.td`
  padding: 14px 24px;
  font-size: 14px;
`;

const Badge = styled.span<{ $status: string }>`
  display: inline-flex;
  border-radius: 999px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme, $status }) =>
    $status === "Signed"
      ? theme.colors.success
      : $status === "Sent"
      ? theme.colors.warning
      : $status === "Cancelled"
      ? theme.colors.destructive
      : theme.colors.mutedForeground};
  background: ${({ theme, $status }) =>
    $status === "Signed"
      ? "color-mix(in srgb, " + theme.colors.success + " 12%, transparent)"
      : $status === "Sent"
      ? "color-mix(in srgb, " + theme.colors.warning + " 12%, transparent)"
      : $status === "Cancelled"
      ? "color-mix(in srgb, " + theme.colors.destructive + " 12%, transparent)"
      : theme.colors.muted};
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Header>
        <div>
          <Heading>Dashboard</Heading>
          <SubHeading>Visão geral do seu negócio</SubHeading>
        </div>
        <Link to="/app/contratos">
          <Button variant="accent">
            <Plus size={16} /> Novo contrato
          </Button>
        </Link>
      </Header>

      <MetricsGrid initial="hidden" animate="visible">
        {metrics.map((m, i) => (
          <MetricCard key={m.label} variants={fadeUp} custom={i}>
            <MetricTop>
              <MetricIconWrap $tone={m.tone}>
                <m.icon size={18} />
              </MetricIconWrap>
              <Trend $positive={m.positive}>
                {m.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {m.change}
              </Trend>
            </MetricTop>
            <MetricLabel>{m.label}</MetricLabel>
            <MetricValue>{m.value}</MetricValue>
          </MetricCard>
        ))}
      </MetricsGrid>

      <TableCard initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <TableHeader>
          <TableTitle>Contratos Recentes</TableTitle>
          <TableLink to="/app/contratos">Ver todos</TableLink>
        </TableHeader>
        <Overflow>
          <Table>
            <thead>
              <tr>
                <HeadCell>Cliente</HeadCell>
                <HeadCell>Contrato</HeadCell>
                <HeadCell>Valor</HeadCell>
                <HeadCell>Status</HeadCell>
                <HeadCell>Data</HeadCell>
              </tr>
            </thead>
            <tbody>
              {recentContracts.map((c) => (
                <Row key={`${c.client}-${c.date}`}>
                  <Cell>{c.client}</Cell>
                  <Cell style={{ color: "hsl(215 16% 47%)" }}>{c.title}</Cell>
                  <Cell>{c.value}</Cell>
                  <Cell>
                    <Badge $status={c.status}>{statusLabels[c.status]}</Badge>
                  </Cell>
                  <Cell style={{ color: "hsl(215 16% 47%)" }}>{c.date}</Cell>
                </Row>
              ))}
            </tbody>
          </Table>
        </Overflow>
      </TableCard>
    </Wrapper>
  );
};

export default Dashboard;

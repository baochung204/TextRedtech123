<Card
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    p: { xs: 1, sm: 2 },
    justifyContent: { xs: 'center' },
    alignItems: { xs: 'center' },
  }}
>
  <Box
    sx={{
      position: 'relative',
      display: 'inline-block',
      width: { xs: '100%', sm: '40%' },
      height: { xs: '100%', sm: 'auto' },
      px: { xs: 1, sm: 2 },
      py: { xs: 1, sm: 2 },
      textAlign: 'center',
    }}
  >
    <Box
      component="img"
      src={rank.rankImage}
      alt="Rank Image"
      sx={{
        width: '100%',
        height: 'auto',
        zIndex: 99,
        position: 'relative',
        borderRadius: '8px',
        objectFit: 'contain',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        overflow: 'hidden',
        width: { xs: '50%', sm: '40%' },
        height: { xs: '50%', sm: '40%' },
        border: '3px solid #fff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={avt}
        alt="User Avatar"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  </Box>

  <Box sx={{ width: '100%', px: 2, py: 1, mt: { xs: 12, sm: 0 } }}>
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        mb={0.5}
        sx={{ fontSize: { xs: '20px', sm: '18px', md: '16px', lg: '16px' } }}
      >
        {rank.fullName}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        mb={0.5}
        sx={{
          fontSize: { xs: '14px', sm: '14px', md: '12px', lg: '14px' },
          mt: { xs: 1, sm: 1, md: 0.5, lg: 1 },
        }}
      >
        {rank.model}
      </Typography>
    </Box>

    <Grid
      container
      columnSpacing={{ xs: -1, sm: 2, md: 5, lg: 1 }}
      sx={{
        mt: { xs: 1, sm: 1.7, md: 0.5, lg: 1 },
        mb: { xs: 5 },
        ml: { xs: 1.8, sm: -2, md: -7, lg: 0 },
      }}
    >
      <Grid item xs={4}>
        <Button
          onClick={() => onHandleCheckOnOrOff(rank)}
          sx={{
            backgroundColor: checkedRanks.includes(rank.id) ? '#38D955' : '#FF2023',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            ':hover': {
              backgroundColor: checkedRanks.includes(rank.id) ? '#38D955' : '#FF2023',
              boxShadow: 'none',
            },
            boxShadow: 'none',
            color: 'white',
            padding: '2px 12px',
            fontSize: '12px',
            minWidth: 'auto',
          }}
        >
          <IconPower color="white" />
        </Button>
      </Grid>

      <Grid item xs={4}>
        <Button
          variant="contained"
          style={{
            background: '#2196F3',
            padding: '2px 12px',
            fontSize: '12px',
            minWidth: 'auto',
          }}
        >
          <IconEdit color="white" />
        </Button>
      </Grid>

      <Grid item xs={4}>
        <Button
          variant="contained"
          style={{
            background: '#FFC107',
            padding: '2px 12px',
            fontSize: '12px',
            minWidth: 'auto',
          }}
          component={Link}
          to="/apps/assistant/:id"
        >
          <IconStackBack stroke={2} />
        </Button>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={12}>
        <BlankCard>
          <CardContent sx={{ padding: '18px !important' }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={8}>
                <Typography variant="h6">Tỉ lệ chuyển đổi</Typography>
                <Stack direction="row" spacing={1} mt={1} alignItems="center">
                  <Typography variant="h4" mt={1} fontWeight={600}>
                    50%
                  </Typography>
                  <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                    <IconArrowUpRight width={20} color="#39B69A" />
                  </Avatar>
                </Stack>
              </Grid>
              <Grid item xs={4} container justifyContent="flex-end">
                <img src={Iconchart} width={50} alt="" />
              </Grid>
            </Grid>
          </CardContent>
        </BlankCard>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Tooltip title="Tổng doanh thu" placement="top">
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: '100%', fontSize: { xs: 12, sm: 14 }, px: { md: '10px', lg: '15px' } }}
              >
                GMV: {rank.gmv}
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <Tooltip title="Giá trị trung bình trên một đơn hàng" placement="top">
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: '100%', fontSize: { xs: 12, sm: 14 }, px: { md: '10px', lg: '15px' } }}
              >
                AOV: {rank.aov}
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ overflow: 'hidden', zIndex: 1, position: 'relative' }}>
          <Box sx={{ p: { xs: 2, sm: 2.5, md: 1.7, lg: 2 } }}>
            <Stack spacing={3}>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: { sm: 3, md: 3.5, lg: 2 } }}
                >
                  <Box>
                    <Typography variant="h6">Kinh nghiệm</Typography>
                  </Box>
                  <Chip
                    sx={{
                      backgroundColor: 'primary',
                      color: 'primary',
                      borderRadius: '4px',
                      width: 55,
                      height: 24,
                    }}
                    label={`${rank.sale}%`}
                  />
                </Stack>
                <LinearProgress value={rank.sale} variant="determinate" color="primary" />
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Box>
</Card>;
